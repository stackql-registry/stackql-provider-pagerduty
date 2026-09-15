#!/usr/bin/env node

// Builds the endpoint inventory (provider-dev/config/endpoint_inventory.csv)
// from the pinned PagerDuty REST spec: one row per operation with the
// resolved service (provider-dev/config/service_names.json), the response
// envelope classification (payload key for list/get object keys), the
// pagination style (cursor / offset / none), header parameters, the OAuth
// scope the vendor records in x-pd-requires-scope, the deprecation flag, the
// request body media type, a skip reason where the operation is not mapped,
// and a draft resource / StackQL verb.
//
// The draft resource / verb columns are groundwork - map_operations.mjs
// produces the authoritative mapping from the same helpers plus explicit
// override rules. Fails without writing if any operation lacks a service or
// an envelope cannot be classified.
//
// Usage: npm run build-inventory

import fs from 'fs';
import path from 'path';
import pluralize from 'pluralize';
import {
  HTTP_VERBS, SPEC_PATH, CONFIG_DIR, makeResolver, makeServiceResolver, classifyResponse,
  paginationStyle, allParams, requestBodyMediaTypes, skipReason, deriveResource,
  POST_EXEC_SEGMENTS, PUT_EXEC_SEGMENTS, scopedSegments
} from './lib/spec_helpers.mjs';

const outPath = path.join(CONFIG_DIR, 'endpoint_inventory.csv');

if (!fs.existsSync(SPEC_PATH)) {
  console.error(`Error: spec not found at ${SPEC_PATH} - run npm run fetch-spec first`);
  process.exit(1);
}
const spec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf8'));
const resolve = makeResolver(spec);
const resolveService = makeServiceResolver();

function draftVerb(verb, pathKey, response) {
  const { segs } = scopedSegments(pathKey);
  const statics = segs.filter((s) => !s.startsWith('{'));
  const last = statics[statics.length - 1];
  if (verb === 'get') return response.kind === 'none' ? 'exec' : 'select';
  if (verb === 'delete') return 'delete';
  if (verb === 'post') return POST_EXEC_SEGMENTS.has(last) ? 'exec' : 'insert';
  return PUT_EXEC_SEGMENTS.has(last) ? 'exec' : 'update';
}

const rows = [];
const errors = [];
const stats = { byService: {}, byVerb: {}, byKind: {}, byPagination: {}, skipped: {}, deprecated: 0, scopes: new Set() };
const bump = (obj, key) => { obj[key] = (obj[key] || 0) + 1; };

for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
  for (const verb of HTTP_VERBS) {
    const op = pathItem[verb];
    if (!op) continue;
    const service = resolveService(pathKey, op);
    if (!service) {
      errors.push(`no service for ${verb.toUpperCase()} ${pathKey} (tags: ${(op.tags || []).join(', ') || 'none'})`);
      continue;
    }
    const response = classifyResponse(op, resolve);
    const skip = skipReason(pathKey, op, resolve) || (response.code ? '' : 'no_success_response');
    const params = allParams(op, pathItem, resolve);
    const headers = params.filter((p) => p.in === 'header').map((p) => p.name);
    const query = params.filter((p) => p.in === 'query').map((p) => p.name);
    const pagination = verb === 'get' ? paginationStyle(op, pathItem, resolve) : 'none';
    const scope = op['x-pd-requires-scope'] || '';
    const rbTypes = requestBodyMediaTypes(op, resolve);
    let draftResource = '';
    try { draftResource = deriveResource(pathKey, verb, service, pluralize); } catch { draftResource = ''; }

    bump(stats.byService, service);
    bump(stats.byVerb, verb);
    bump(stats.byKind, response.kind);
    if (verb === 'get') bump(stats.byPagination, pagination);
    if (skip) bump(stats.skipped, skip);
    if (op.deprecated) stats.deprecated++;
    if (scope) stats.scopes.add(scope);

    rows.push({
      service,
      verb,
      path: pathKey,
      operationId: op.operationId,
      tag: (op.tags || [])[0] || '',
      summary: op.summary || '',
      response_code: response.code || '',
      response_kind: response.kind,
      response_key: response.key || '',
      pagination,
      header_params: headers.join('|'),
      query_params: query.join('|'),
      request_body_media: rbTypes.join('|'),
      oauth_scope: scope,
      deprecated: op.deprecated ? 'y' : '',
      skip_reason: skip,
      draft_resource: draftResource,
      draft_verb: draftVerb(verb, pathKey, response)
    });
  }
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

rows.sort((a, b) => a.service.localeCompare(b.service) || a.path.localeCompare(b.path) || HTTP_VERBS.indexOf(a.verb) - HTTP_VERBS.indexOf(b.verb));
const columns = Object.keys(rows[0]);
const csvField = (v) => (/[",\n\r]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
fs.writeFileSync(outPath, [columns.join(','), ...rows.map((r) => columns.map((c) => csvField(r[c] ?? '')).join(','))].join('\n') + '\n');

console.log(`Inventory: ${rows.length} operations across ${Object.keys(stats.byService).length} services -> ${path.relative(process.cwd(), outPath)}`);
console.log(`  verbs: ${Object.entries(stats.byVerb).map(([k, v]) => `${k} ${v}`).join(', ')}`);
console.log(`  response kinds: ${Object.entries(stats.byKind).map(([k, v]) => `${k} ${v}`).join(', ')}`);
console.log(`  GET pagination: ${Object.entries(stats.byPagination).map(([k, v]) => `${k} ${v}`).join(', ')}`);
console.log(`  deprecated: ${stats.deprecated}; OAuth scopes: ${stats.scopes.size}; skipped: ${Object.entries(stats.skipped).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}`);
console.log('  operations per service:');
for (const [s, n] of Object.entries(stats.byService).sort()) console.log(`    ${s}: ${n}`);
