#!/usr/bin/env node

// PagerDuty-specific spec adjustments applied to provider-dev/source before
// the generic provider-utils normalize pass. Deterministic and idempotent;
// fails without writing on any unexpected shape.
//
// 1. Header parameters. The vendor spec declares `Accept` (424 operations)
//    and `Content-Type` (334) as REQUIRED header parameters carrying
//    defaults, plus `X-EARLY-ACCESS` (6) and `From` (14). any-sdk treats a
//    required parameter as a required WHERE / INSERT key, which would make
//    every query demand `Accept = '...'`. `Accept` and `Content-Type` are
//    removed outright: stackql sets both from the operation's media types
//    (the mock-server probe showed a WHERE value for Accept is overridden
//    with application/json, which the API serves as v2), so the parameters
//    carry no information and only clutter SHOW METHODS and the generated
//    examples. The remaining header parameters (`From`, `X-EARLY-ACCESS`)
//    are made optional; `X-EARLY-ACCESS` gets its enum value as the default
//    where the vendor left it out (ip-allow-lists), and is passed explicitly
//    in the WHERE clause when the early-access surface is used.
//
// 2. `From`. The `From` header (the email of the acting user, needed with an
//    account-level REST key for the write operations PagerDuty attributes to
//    a person) is made optional: a User API token needs no `From`. `from` is
//    a reserved word in the stackql grammar, so the parameter is bound by
//    double-quoting it in SQL (`INSERT INTO ... (incident, "From") ...`) -
//    documented on the landing page and rewritten into the generated
//    examples by website/scripts/sanitize-docs.mjs.
//
// 3. Relative documentation links. Descriptions link to
//    `../../api-reference/<id>-api-concepts#...`, relative to the vendor's
//    developer portal; rewritten to the absolute developer.pagerduty.com URL
//    so the generated docs resolve.
//
// 4. Deep JSON-pointer refs. The vendor spec references INTO schemas
//    (`#/components/schemas/Tag/allOf/0`,
//    `#/components/schemas/CustomFieldsFieldValue/properties/value/oneOf/3`,
//    `#/components/responses/Conflict/content/application~1json/schema`).
//    The generic normalize pass renames oneOf/anyOf to allOf and flattens
//    allOf arrays, which orphans every positional pointer ("slice index out
//    of bounds" when stackql loads the document). Every $ref that is not a
//    plain top-level component reference is inlined (deep copy of the
//    target, sibling keys such as description kept) before the generic
//    pass; targets missing from the split service document are taken from
//    the pinned full spec, and any plain component the inlined content
//    references is copied into the service document so no ref dangles.
//
// 5. Cross-kind component refs. Two cache-variable data PUTs reference a
//    `#/components/requestBodies/...` object as their 200 response (a vendor
//    spec error; kin-openapi rejects it as "bad data"). Any response,
//    requestBody or parameter ref that points at the wrong component kind
//    is inlined.
//
// 6. Top-level body unions. Request / response body schemas that are a bare
//    `oneOf` / `anyOf` of object variants (the cache-variable data bodies:
//    string / number / boolean value variants) are merged into one object
//    schema - union of properties, first-seen type kept unless variants
//    disagree (then `string`), required = the intersection - so the
//    request body exposes its attributes through the naive body translate.
//
// 7. `x-pd-*` vendor extensions are left in place (the inventory records
//    the OAuth scope from x-pd-requires-scope); they are inert for stackql.
//
// Usage: node provider-dev/scripts/pre_normalize.mjs [--dry-run]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { SOURCE_DIR, SPEC_PATH, HTTP_VERBS } from './lib/spec_helpers.mjs';

const dryRun = process.argv.includes('--dry-run');
const API_CONCEPTS_URL = 'https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts';
const RELATIVE_LINK_RE = /\]\(\.\.\/\.\.\/api-reference\/[A-Za-z0-9]+-api-concepts(#[^)]*)?\)/g;
const SPEC_INTERNAL_LINK_RE = /\[([^\]]+)\]\(openapiv3\.json[^)]*\)/g;
const EARLY_ACCESS_DEFAULTS = { 'ip-allow-lists': true };
// header parameters stackql derives from the operation media types itself
const DROPPED_HEADERS = new Set(['Accept', 'Content-Type']);

function adjustHeaderParam(param, stats, where) {
  if (!param || param.in !== 'header') return;
  if (param.required) {
    param.required = false;
    stats.headersMadeOptional = (stats.headersMadeOptional || 0) + 1;
  }
  if (param.name === 'X-EARLY-ACCESS' && param.schema && param.schema.default === undefined) {
    const enumVal = Array.isArray(param.schema.enum) ? param.schema.enum[0] : null;
    if (!enumVal || !EARLY_ACCESS_DEFAULTS[enumVal]) {
      throw new Error(`${where}: X-EARLY-ACCESS header has no default and no known enum value (${JSON.stringify(param.schema)})`);
    }
    param.schema.default = enumVal;
    stats.earlyAccessDefaults = (stats.earlyAccessDefaults || 0) + 1;
  }
}

// ---------------------------------------------------------------------------
// Deep-ref inlining
// ---------------------------------------------------------------------------

const PLAIN_COMPONENT_REF = /^#\/components\/(schemas|parameters|responses|requestBodies|headers|examples|securitySchemes|links|callbacks)\/[^/]+$/;

function resolvePointer(doc, ref) {
  const parts = ref.replace(/^#\//, '').split('/').map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'));
  let node = doc;
  for (const p of parts) {
    if (node === null || node === undefined) return undefined;
    node = Array.isArray(node) ? node[Number(p)] : node[p];
  }
  return node;
}

// Replaces every non-plain $ref in `node` with a deep copy of its target
// (looked up in the service document first, then the full spec). Returns the
// replacement so callers can reassign. Repeats until no deep ref remains
// (inlined content can itself carry deep refs); a bounded pass count guards
// against cycles.
function inlineDeepRefs(root, full, stats, where) {
  let changed = true;
  let passes = 0;
  const visit = (node) => {
    if (Array.isArray(node)) return node.map(visit);
    if (!node || typeof node !== 'object') return node;
    if (typeof node.$ref === 'string' && node.$ref.startsWith('#/') && !PLAIN_COMPONENT_REF.test(node.$ref)) {
      const target = resolvePointer(root, node.$ref) ?? resolvePointer(full, node.$ref);
      if (target === undefined) throw new Error(`${where}: unresolvable deep ref ${node.$ref}`);
      const siblings = Object.fromEntries(Object.entries(node).filter(([k]) => k !== '$ref'));
      changed = true;
      stats.deepRefsInlined = (stats.deepRefsInlined || 0) + 1;
      return { ...structuredClone(target), ...siblings };
    }
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = visit(v);
    return out;
  };
  let current = root;
  while (changed && passes < 12) {
    changed = false;
    passes++;
    current = visit(current);
  }
  if (changed) throw new Error(`${where}: deep refs did not converge after ${passes} passes (cycle?)`);
  return current;
}

// Copies any plain component the document references but does not define
// from the full spec (closure over the copied components' own refs).
function ensureComponents(doc, full, stats, where) {
  const collect = (node, acc) => {
    if (Array.isArray(node)) { node.forEach((v) => collect(v, acc)); return acc; }
    if (!node || typeof node !== 'object') return acc;
    if (typeof node.$ref === 'string') { const m = PLAIN_COMPONENT_REF.exec(node.$ref); if (m) acc.add(node.$ref); }
    for (const v of Object.values(node)) collect(v, acc);
    return acc;
  };
  let added = true;
  let guard = 0;
  while (added && guard < 20) {
    added = false;
    guard++;
    for (const ref of collect(doc, new Set())) {
      const [, kind, rawName] = ref.match(/^#\/components\/([^/]+)\/(.+)$/);
      const name = rawName.replace(/~1/g, '/').replace(/~0/g, '~');
      doc.components = doc.components || {};
      doc.components[kind] = doc.components[kind] || {};
      if (doc.components[kind][name] !== undefined) continue;
      const src = full.components?.[kind]?.[name];
      if (src === undefined) throw new Error(`${where}: ${ref} is defined nowhere`);
      doc.components[kind][name] = structuredClone(src);
      stats.componentsCopied = (stats.componentsCopied || 0) + 1;
      added = true;
    }
  }
}

// Inlines refs whose target lives under a different component kind than the
// position requires (responses -> requestBodies is the vendor's mistake).
function fixCrossKindRefs(doc, full, stats, where) {
  const EXPECT = { responses: '#/components/responses/', requestBody: '#/components/requestBodies/', parameters: '#/components/parameters/' };
  const inlineIfWrong = (holder, key, kind) => {
    const node = holder[key];
    if (!node || typeof node.$ref !== 'string' || node.$ref.startsWith(EXPECT[kind])) return;
    const target = resolvePointer(doc, node.$ref) ?? resolvePointer(full, node.$ref);
    if (target === undefined) throw new Error(`${where}: unresolvable cross-kind ref ${node.$ref}`);
    holder[key] = structuredClone(target);
    stats.crossKindRefsInlined = (stats.crossKindRefsInlined || 0) + 1;
  };
  for (const item of Object.values(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      const op = item[verb];
      if (!op) continue;
      for (const code of Object.keys(op.responses || {})) inlineIfWrong(op.responses, code, 'responses');
      if (op.requestBody) inlineIfWrong(op, 'requestBody', 'requestBody');
      for (let i = 0; i < (op.parameters || []).length; i++) inlineIfWrong(op.parameters, i, 'parameters');
    }
  }
}

// Merges a bare oneOf/anyOf of object variants into one object schema.
function mergeVariants(schema, resolve) {
  const variants = (schema.oneOf || schema.anyOf).map((v) => resolve(v)).filter((v) => v && (v.type === 'object' || v.properties));
  if (variants.length === 0) return null;
  const properties = {};
  const seenTypes = {};
  let required = null;
  for (const v of variants) {
    for (const [k, prop] of Object.entries(v.properties || {})) {
      const t = prop?.type;
      if (!(k in properties)) { properties[k] = structuredClone(prop); seenTypes[k] = t; }
      else if (t && seenTypes[k] && t !== seenTypes[k]) { properties[k] = { type: 'string', description: properties[k].description }; seenTypes[k] = 'string'; }
    }
    const req = new Set(v.required || []);
    required = required === null ? req : new Set([...required].filter((r) => req.has(r)));
  }
  const out = { type: 'object', properties };
  if (schema.description) out.description = schema.description;
  if (schema.title) out.title = schema.title;
  if (required && required.size > 0) out.required = [...required];
  return out;
}

function lowerBodyUnions(doc, stats) {
  const resolve = (node) => (node && node.$ref ? resolvePointer(doc, node.$ref) : node);
  const lower = (content, where) => {
    for (const media of Object.values(content || {})) {
      const sch = media.schema;
      if (!sch || sch.$ref || sch.properties || !(sch.oneOf || sch.anyOf)) continue;
      const merged = mergeVariants(sch, resolve);
      if (!merged) throw new Error(`${where}: top-level union of non-object variants`);
      media.schema = merged;
      stats.bodyUnionsLowered = (stats.bodyUnionsLowered || 0) + 1;
    }
  };
  for (const [n, rb] of Object.entries(doc.components?.requestBodies || {})) lower(rb.content, `requestBodies.${n}`);
  for (const [n, r] of Object.entries(doc.components?.responses || {})) lower(r.content, `responses.${n}`);
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      const op = item[verb];
      if (!op) continue;
      if (op.requestBody && !op.requestBody.$ref) lower(op.requestBody.content, `${verb} ${p} requestBody`);
      for (const [code, r] of Object.entries(op.responses || {})) if (!r.$ref) lower(r.content, `${verb} ${p} ${code}`);
    }
  }
}

function rewriteLinks(node, stats) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => { node[i] = rewriteLinks(v, stats); });
    return node;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) node[k] = rewriteLinks(v, stats);
    return node;
  }
  if (typeof node === 'string' && (node.includes('../../api-reference/') || node.includes('](openapiv3.json'))) {
    let out = node.replace(RELATIVE_LINK_RE, (m, anchor) => `](${API_CONCEPTS_URL}${anchor || ''})`);
    // the deprecated custom-field descriptions link to sibling operations
    // by spec-internal path (`openapiv3.json/paths/...`), which no site can
    // serve - keep the link text, drop the target
    out = out.replace(SPEC_INTERNAL_LINK_RE, '$1');
    if (out !== node) stats.linksRewritten = (stats.linksRewritten || 0) + 1;
    return out;
  }
  return node;
}

const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.yaml')).sort();
if (files.length === 0) {
  console.error(`Error: no service specs in ${SOURCE_DIR} - run npm run split first`);
  process.exit(1);
}

const fullSpec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf8'));
const pending = [];
const totals = {};
const errors = [];
for (const f of files) {
  const fp = path.join(SOURCE_DIR, f);
  let doc = yaml.load(fs.readFileSync(fp, 'utf8'));
  const stats = {};
  try {
    // copied components can carry deep refs of their own, and inlined
    // content can reference components the document lacks - iterate to a
    // fixed point
    for (let round = 0; round < 6; round++) {
      const before = `${stats.deepRefsInlined || 0}:${stats.componentsCopied || 0}`;
      doc = inlineDeepRefs(doc, fullSpec, stats, f);
      ensureComponents(doc, fullSpec, stats, f);
      if (before === `${stats.deepRefsInlined || 0}:${stats.componentsCopied || 0}`) break;
    }
    fixCrossKindRefs(doc, fullSpec, stats, f);
    lowerBodyUnions(doc, stats);
    // drop the Accept / Content-Type header parameters (refs and inline)
    const dropped = new Set();
    for (const [name, param] of Object.entries(doc.components?.parameters || {})) {
      if (param?.in === 'header' && DROPPED_HEADERS.has(param.name)) { dropped.add(`#/components/parameters/${name}`); delete doc.components.parameters[name]; }
    }
    const keep = (p) => !(p?.$ref && dropped.has(p.$ref)) && !(p?.in === 'header' && DROPPED_HEADERS.has(p.name));
    const prune = (list) => {
      const before = list.length;
      const kept = list.filter(keep);
      stats.headersDropped = (stats.headersDropped || 0) + (before - kept.length);
      return kept;
    };
    for (const [name, param] of Object.entries(doc.components?.parameters || {})) adjustHeaderParam(param, stats, `${f} components.parameters.${name}`);
    for (const [pathKey, item] of Object.entries(doc.paths || {})) {
      if (item.parameters) item.parameters = prune(item.parameters);
      for (const p of item.parameters || []) adjustHeaderParam(p, stats, `${f} ${pathKey}`);
      for (const verb of HTTP_VERBS) {
        if (item[verb]?.parameters) item[verb].parameters = prune(item[verb].parameters);
        for (const p of item[verb]?.parameters || []) adjustHeaderParam(p, stats, `${f} ${verb} ${pathKey}`);
      }
    }
    rewriteLinks(doc, stats);
  } catch (err) {
    errors.push(err.message);
    continue;
  }
  for (const [k, v] of Object.entries(stats)) totals[k] = (totals[k] || 0) + v;
  pending.push({ fp, doc });
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
if (!dryRun) {
  for (const { fp, doc } of pending) fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
}
console.log(`pre_normalize: adjusted ${files.length} service specs${dryRun ? ' (dry run)' : ''}`);
for (const [k, v] of Object.entries(totals).sort()) console.log(`  ${k}: ${v}`);
