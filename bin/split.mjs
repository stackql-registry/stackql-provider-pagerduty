#!/usr/bin/env node

// Splits the pinned PagerDuty REST spec into per-service StackQL service
// specs. Services are resolved by provider-dev/config/service_names.json
// (first tag -> service, with path-rule overrides), shared with
// build_inventory.mjs via lib/spec_helpers.mjs. The vendor's 47 tags are
// collapsed where they describe one surface (the three enrichment tags, the
// incident and service custom field definitions). An operation with no
// service fails the run without writing.
//
// provider-utils split() cleans its output dir on every call, so the spec is
// split into a temp dir and the requested service specs are copied into
// --output-dir (all services by default, or a --services subset). Each
// service document gets the description from service_names.json.
//
// Usage:
//   node bin/split.mjs --provider-name pagerduty \
//     [--api-doc provider-dev/downloaded/pagerduty-rest-v2.json] \
//     [--output-dir provider-dev/source] \
//     [--services incidents,services,users] [--overwrite] [--verbose]

import fs from 'fs';
import os from 'os';
import path from 'path';
import yaml from 'js-yaml';
import { providerdev } from '@stackql/provider-utils';
import { makeServiceResolver, loadServiceNames, REPO_ROOT, SPEC_PATH, SOURCE_DIR } from '../provider-dev/scripts/lib/spec_helpers.mjs';

const args = process.argv.slice(2);
const getArg = (flag) => {
  const index = args.indexOf(flag);
  return index !== -1 ? args[index + 1] : null;
};

const providerName = getArg('--provider-name') || 'pagerduty';
const apiDoc = getArg('--api-doc') || SPEC_PATH;
const outputDir = getArg('--output-dir') || SOURCE_DIR;
const servicesFilter = getArg('--services') ? getArg('--services').split(',').map((s) => s.trim()) : null;
const overwrite = args.includes('--overwrite');
const verbose = args.includes('--verbose');

if (!fs.existsSync(apiDoc)) {
  console.error(`Error: spec not found at ${apiDoc} (run npm run fetch-spec first)`);
  process.exit(1);
}
const resolveService = makeServiceResolver();
const serviceNames = loadServiceNames();

fs.mkdirSync(outputDir, { recursive: true });
const existing = fs.readdirSync(outputDir).filter((f) => /\.(yaml|yml|json)$/.test(f));
if (existing.length > 0 && !overwrite) {
  console.error(`Error: output directory ${outputDir} is not empty. Use --overwrite to replace existing service specs.`);
  process.exit(1);
}

const unmapped = new Set();
const svcDiscriminatorFn = (pathKey, operationId, tags, ctx) => {
  const service = resolveService(pathKey, ctx?.operation || { tags });
  if (!service) {
    unmapped.add(`${pathKey} (${operationId}; tags: ${(tags || []).join(', ') || 'none'})`);
    return 'unmapped_service';
  }
  return service;
};

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));
const written = [];
try {
  const result = await providerdev.split({
    apiDoc,
    providerName,
    outputDir: tmpDir,
    svcDiscriminator: 'function',
    svcDiscriminatorFn,
    overwrite: true,
    verbose,
    svcNameOverrides: {}
  });
  if (!result) {
    console.error('Error: split failed');
    process.exit(1);
  }
  if (unmapped.size > 0) {
    console.error('Error: operations with no service in provider-dev/config/service_names.json:');
    for (const t of [...unmapped].sort()) console.error(`  ${t}`);
    process.exit(1);
  }

  // Clear previous service specs only after the split and config validated
  for (const f of existing) fs.rmSync(path.join(outputDir, f));
  for (const outFile of fs.readdirSync(tmpDir).sort()) {
    const service = outFile.replace(/\.(yaml|yml|json)$/, '');
    if (servicesFilter && !servicesFilter.includes(service)) continue;
    const doc = yaml.load(fs.readFileSync(path.join(tmpDir, outFile), 'utf8'));
    doc.info = doc.info || {};
    doc.info.title = `PagerDuty API - ${service.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
    if (serviceNames.descriptions?.[service]) doc.info.description = serviceNames.descriptions[service];
    const opCount = Object.values(doc.paths || {}).reduce((n, item) => n + ['get', 'post', 'put', 'patch', 'delete'].filter((v) => item[v]).length, 0);
    fs.writeFileSync(path.join(outputDir, outFile), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
    written.push(`${outFile} (${Object.keys(doc.paths || {}).length} paths, ${opCount} operations)`);
  }
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

console.log(`Split completed: ${written.length} service specs written to ${path.relative(REPO_ROOT, outputDir)}`);
for (const f of written) console.log(`  ${f}`);
