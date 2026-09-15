#!/usr/bin/env node
// Post-docgen sanitizer for the generated pagerduty provider docs.
//
// PagerDuty descriptions carry markdown, HTML fragments (<br />, <!-- theme
// --> blocks), literal angle-bracket placeholders (<token>) and brace
// expressions. MDX v3 parses any raw <token> as JSX and fails the build on
// the first mismatch; braces ({...}) parse as JSX expressions with the same
// failure mode.
//
// The doc generator's own structure is line-shaped: one `<td>...</td>`
// cell per line, and description text ONLY ever appears as td inner
// content. So the deterministic fix: inside every description cell,
// escape ALL angle brackets and braces (protecting the stage-1
// backtick-wrapped `<placeholder>` tokens as <code> spans); leave
// every other line - tables, Tabs/TabItem/CodeBlock, CopyableCode,
// index link lists - byte-for-byte untouched.
//
// pagerduty-specific rewrite: `from` is a reserved word in the stackql
// grammar, so the `From` header parameter must be double-quoted in SQL
// (`INSERT INTO ... (incident, "From") SELECT ...`). docgen renders the bare
// wire name in the INSERT / UPDATE examples; those lines are rewritten to the
// quoted form. Parameter table cells and anchors keep the wire name.
//
// Run after `npm run generate-docs`, before building the website.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

const TD_LINE = /^(\s*<td>)(.*)(<\/td>\s*)$/;
const LINK_TOKEN = '<a href="#[^"]*">(?:<CopyableCode\\b[^<>]*\\/>|<code>[^<>]*<\\/code>)<\\/a>';
const LINK_TOKEN_CELL = new RegExp(`^${LINK_TOKEN}(?:,\\s*${LINK_TOKEN})*$`);
const BACKTICKED = /`<([A-Za-z][A-Za-z0-9_.:-]*)>`/g;
// Control-char sentinels: cannot occur in generated markdown.
const OPEN = '';
const CLOSE = '';

let filesChanged = 0;
let cellsEscaped = 0;
let fromAliased = 0;

// ---------------------------------------------------------------------------
// pagerduty-specific: `From` header -> `from_email` alias
// ---------------------------------------------------------------------------
const FROM_REWRITES = [
  // INSERT column lists render the bare name on its own line
  [/^(\s*)From(,?)\s*$/, '$1"From"$2'],
  // UPDATE SET clauses render `From = '{{ From }}'`
  [/^(\s*)From = '\{\{ From \}\}'(,?)(\s*)$/, '$1"From" = \'{{ From }}\'$2$3']
];

function aliasFrom(line) {
  let out = line;
  for (const [re, rep] of FROM_REWRITES) out = out.replace(re, rep);
  return out;
}

function escapeDescription(inner) {
  let out = inner.replace(BACKTICKED, (m, name) => OPEN + name + CLOSE);
  out = out
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    // Regex fragments in descriptions read as markdown links and crash
    // the link resolver.
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;')
    // GFM autolinks bare "scheme://..." literals on the DECODED text tree
    // (entity escapes cannot evade it). A zero-width space inside "://" is
    // invisible in rendering but breaks the autolink prefix match.
    .replace(/:\/\//g, ':​//');
  out = out.split(OPEN).join('<code>&lt;').split(CLOSE).join('&gt;</code>');
  return out;
}

// Inside a CodeBlock template literal, a lone backslash before u/x is a JS
// string escape, and ${ starts interpolation. Double the backslash / escape
// the $ so the source text renders verbatim.
function escapeTemplateLiteral(line) {
  return line
    .replace(/(?<!\\)\\(?=[ux])/g, '\\\\')
    .replace(/(?<!\\)\$\{/g, '\\${');
}

function sanitize(text) {
  const lines = text.split('\n');
  let changed = false;
  let inFence = false;
  let inTabItemProse = false;
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const aliased = aliasFrom(line);
    if (aliased !== line) { lines[i] = aliased; line = aliased; changed = true; fromAliased++; }
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (inCodeBlock) {
      if (/<\/CodeBlock>/.test(line)) inCodeBlock = false;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/<CodeBlock\b/.test(line)) {
      if (!/<\/CodeBlock>/.test(line)) inCodeBlock = true;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/^<TabItem\b/.test(trimmed)) {
      inTabItemProse = true;
      continue;
    }
    if (/^<\/TabItem>/.test(trimmed)) {
      inTabItemProse = false;
      continue;
    }

    // Description table cells (one <td>...</td> per line).
    const m = TD_LINE.exec(line);
    if (m) {
      const inner = m[2];
      if (/^<CopyableCode\b[^<>]*\/>$/.test(inner)) continue;
      // Structural link cells in the Methods/Parameters tables: generated
      // structure, not description text - must stay verbatim.
      if (LINK_TOKEN_CELL.test(inner)) continue;
      const codeCell = /^<code>([^<>]*)<\/code>$/.exec(inner);
      if (codeCell) {
        const escaped = codeCell[1]
          .replace(/\[/g, '&#91;')
          .replace(/\]/g, '&#93;')
          .replace(/\{/g, '&#123;')
          .replace(/\}/g, '&#125;')
          .replace(/:\/\//g, ':​//');
        if (escaped !== codeCell[1]) {
          lines[i] = m[1] + '<code>' + escaped + '</code>' + m[3];
          cellsEscaped++;
          changed = true;
        }
        continue;
      }
      const escaped = escapeDescription(inner);
      if (escaped !== inner) {
        lines[i] = m[1] + escaped + m[3];
        cellsEscaped++;
        changed = true;
      }
      continue;
    }

    // Method-description prose inside <TabItem> blocks (the paragraphs
    // between the TabItem opener and the ```sql fence). Prose never starts
    // with '<'; anything with raw angle brackets or braces there is hostile
    // description content.
    if (inTabItemProse && trimmed && !trimmed.startsWith('<') && /[<>{}]/.test(line)) {
      const escaped = escapeDescription(line);
      if (escaped !== line) {
        lines[i] = escaped;
        cellsEscaped++;
        changed = true;
      }
    }
  }
  return { text: lines.join('\n'), changed };
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const before = fs.readFileSync(p, 'utf8');
      const { text: after, changed } = sanitize(before);
      if (changed) {
        fs.writeFileSync(p, after);
        filesChanged++;
      }
    }
  }
}

if (!fs.existsSync(docsDir)) {
  console.error(`sanitize-docs: ${docsDir} not found - run generate-docs first`);
  process.exit(1);
}
walk(docsDir);
console.log(`sanitize-docs: escaped ${cellsEscaped} description cell(s) across ${filesChanged} file(s); ${fromAliased} From -> "From" rewrite(s)`);
