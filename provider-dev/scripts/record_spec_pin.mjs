#!/usr/bin/env node

// Helper for bin/fetch-spec.sh: validates the freshly downloaded PagerDuty
// REST spec with @apidevtools/swagger-parser, verifies it against
// provider-dev/config/spec_pin.json, and moves it into place.
//
// - Validation failure: fail without writing anything.
// - No pin recorded: record it (first fetch).
// - Pin matches: refresh the fetched date only.
// - Pin mismatch: fail without writing anything, unless UPDATE=true, in
//   which case the new hash is recorded (a reviewed spec refresh).
//
// Reports the spec's stated version, path count and operation count on every
// run. Inputs via environment: UPDATE, TMP_DIR, DOWNLOAD_DIR, PIN_FILE,
// SPEC_URL, SPEC_FILE.

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';

const update = process.env.UPDATE === 'true';
const tmpDir = process.env.TMP_DIR;
const downloadDir = process.env.DOWNLOAD_DIR;
const pinFile = process.env.PIN_FILE;
const specUrl = process.env.SPEC_URL;
const specFile = process.env.SPEC_FILE;

if (!tmpDir || !downloadDir || !pinFile || !specUrl || !specFile) {
  console.error('record_spec_pin.mjs: missing TMP_DIR / DOWNLOAD_DIR / PIN_FILE / SPEC_URL / SPEC_FILE');
  process.exit(1);
}

const tmpPath = path.join(tmpDir, specFile);
const content = fs.readFileSync(tmpPath);
const spec = JSON.parse(content.toString('utf8'));

// Validate before anything else touches disk
try {
  await SwaggerParser.validate(structuredClone(spec));
  console.log('Spec validated OK (@apidevtools/swagger-parser)');
} catch (err) {
  console.error(`Spec validation FAILED, nothing written: ${err.message}`);
  process.exit(1);
}

const pathKeys = Object.keys(spec.paths || {});
const httpVerbs = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
let opCount = 0;
for (const p of pathKeys) {
  for (const v of httpVerbs) {
    if (spec.paths[p][v]) opCount++;
  }
}
console.log(`Spec: ${spec.info?.title} - openapi ${spec.openapi}, stated version ${spec.info?.version}, ${pathKeys.length} paths, ${opCount} operations, ${(spec.tags || []).length} tags`);

const sha256 = crypto.createHash('sha256').update(content).digest('hex');

let pin = { specs: {} };
if (fs.existsSync(pinFile)) {
  pin = JSON.parse(fs.readFileSync(pinFile, 'utf8'));
}
const key = specFile.replace(/\.json$/, '');
const existing = pin.specs[key];

if (existing && existing.sha256 !== sha256 && !update) {
  console.error(
    `Spec pin verification FAILED, nothing written: upstream content changed ` +
    `(pinned ${existing.sha256.slice(0, 12)}..., fetched ${sha256.slice(0, 12)}...). ` +
    `Re-run with --update (make refresh-spec) to accept the refresh.`
  );
  process.exit(1);
}

const status = !existing ? 'pinned' : existing.sha256 === sha256 ? 'unchanged' : 'updated';
fs.writeFileSync(path.join(downloadDir, specFile), content);
pin.specs[key] = {
  url: specUrl,
  filename: specFile,
  spec_version: spec.info?.version,
  openapi: spec.openapi,
  paths: pathKeys.length,
  operations: opCount,
  sha256,
  bytes: content.length,
  fetched: new Date().toISOString().slice(0, 10)
};
fs.mkdirSync(path.dirname(pinFile), { recursive: true });
fs.writeFileSync(pinFile, JSON.stringify(pin, null, 2) + '\n');
console.log(`  ${specFile}: ${status} (sha256 ${sha256.slice(0, 12)}..., ${content.length} bytes)`);
