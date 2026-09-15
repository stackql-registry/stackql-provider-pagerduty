#!/usr/bin/env node

// Post-generation fixes for things the generator cannot express. Idempotent;
// re-run after every generate. Validates and fails without writing.
//
// 1. Cursor pagination. Eighteen list operations page with a `cursor` query
//    parameter and return `next_cursor` in the body (audit records, automation
//    actions and runners, incident workflow actions and triggers, workflow
//    integrations and connections, enrichment records, user OAuth
//    delegations, recommended rules, status dashboards, impacted business
//    services). Each such method gets a method-level `config.pagination`
//    block so stackql follows the cursor. The classic offset/limit/more
//    collections (41 operations) get no config: any-sdk has no offset
//    traversal algorithm (see NOTES.md); `limit` and `offset` remain
//    ordinary WHERE parameters.
//
// 2. Query parameter pushdown. Collections that accept `sort_by` in the
//    vendor's `<column>:<asc|desc>` form get an `orderBy` pushdown
//    (syntax `suffix`, columns from the parameter's enum); collections that
//    accept `limit` get a `top` pushdown clamped at the schema maximum (100),
//    so `ORDER BY ... LIMIT n` is served by the API where it can be and
//    stays client-side otherwise.
//
// 3. Object keys on POST-based reads. The generator only writes
//    stackql_object_key onto GET methods; the analytics reads and the
//    enrichment query are POST operations mapped as SELECT, so their object
//    keys ($.data, $.records) are applied here from all_services.csv.
//
// 4. EXEC bodies with non-string scalars. stackql's EXEC analyzer validates
//    each `@param` against the schema type and only recognises string /
//    object / array / int / int32 / int64 - an OpenAPI `integer`, `number`
//    or `boolean` attribute can be neither an IntVal nor a StrVal (any-sdk
//    schema.go providerTypeConditionIsValid). Such an EXEC is called with
//    the raw body instead: `EXEC ... @id = '...' @@json='{"duration": 3600}'`
//    - which the analyzer only accepts when the attribute is not listed as
//    required. The `required` list is therefore lifted from those EXEC
//    request bodies (the incident snooze `duration`), and the operation
//    description records the @@json calling convention.
//
// Usage: node provider-dev/scripts/post_process.mjs

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { SERVICES_OUT_DIR, CONFIG_DIR, HTTP_VERBS, allParams, makeResolver, queryParam } from './lib/spec_helpers.mjs';

const csvPath = path.join(CONFIG_DIR, 'all_services.csv');
const LIMIT_MAX_DEFAULT = 100;

if (!fs.existsSync(SERVICES_OUT_DIR)) {
  console.error(`Error: ${SERVICES_OUT_DIR} not found - run the generate step first`);
  process.exit(1);
}

// all_services.csv -> object keys for POST selects
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else { field += c; }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}
const csvRows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const csvCol = Object.fromEntries(csvRows[0].map((h, i) => [h, i]));
const objectKeys = new Map(); // `${service}::${path}::${verb}` -> objectKey
for (const r of csvRows.slice(1)) {
  if (r[csvCol.stackql_object_key]) objectKeys.set(`${r[csvCol.filename].replace(/\.yaml$/, '')}::${r[csvCol.path]}::${r[csvCol.verb]}`, r[csvCol.stackql_object_key]);
}

function decodeRef(ref) {
  const m = ref.match(/^#\/paths\/(.*)\/(get|post|put|patch|delete)$/);
  if (!m) throw new Error(`unexpected operation ref ${ref}`);
  return { pathKey: m[1].replace(/~1/g, '/').replace(/~0/g, '~'), verb: m[2] };
}

const errors = [];
const stats = { pagination: 0, orderBy: 0, top: 0, postObjectKeys: 0, methods: 0, execBodiesRelaxed: 0 };
const NON_STRING_SCALARS = new Set(['integer', 'number', 'boolean']);
const docs = new Map();
for (const f of fs.readdirSync(SERVICES_OUT_DIR).filter((x) => x.endsWith('.yaml')).sort()) {
  const service = f.replace(/\.yaml$/, '');
  const doc = yaml.load(fs.readFileSync(path.join(SERVICES_OUT_DIR, f), 'utf8'));
  const resolve = makeResolver(doc);
  const resources = doc.components?.['x-stackQL-resources'] || {};
  if (Object.keys(resources).length === 0) { errors.push(`${f}: no x-stackQL-resources`); continue; }
  for (const [resName, res] of Object.entries(resources)) {
    const selectRefs = new Set((res.sqlVerbs?.select || []).map((s) => s.$ref.split('/').pop()));
    for (const [methodName, method] of Object.entries(res.methods || {})) {
      stats.methods++;
      const { pathKey, verb } = decodeRef(method.operation.$ref);
      const pathItem = doc.paths?.[pathKey];
      const op = pathItem?.[verb];
      if (!op) { errors.push(`${f}: ${resName}.${methodName} references missing operation ${verb.toUpperCase()} ${pathKey}`); continue; }
      const isSelect = selectRefs.has(methodName);

      // 1. cursor pagination
      if (isSelect && verb === 'get' && queryParam(op, pathItem, resolve, 'cursor')) {
        method.config = method.config || {};
        method.config.pagination = {
          requestToken: { key: 'cursor', location: 'query' },
          responseToken: { key: 'next_cursor', location: 'body' }
        };
        stats.pagination++;
      }

      // 2. pushdown
      if (isSelect && verb === 'get') {
        const pushdown = {};
        const sortBy = queryParam(op, pathItem, resolve, 'sort_by');
        const sortEnum = sortBy?.schema?.enum || sortBy?.schema?.items?.enum;
        if (sortBy && Array.isArray(sortEnum) && sortEnum.length > 0) {
          const columns = [...new Set(sortEnum.map((v) => String(v).replace(/:(asc|desc)$/, '')))];
          pushdown.orderBy = { paramName: 'sort_by', syntax: 'suffix', supportedColumns: columns };
          stats.orderBy++;
        }
        const limit = queryParam(op, pathItem, resolve, 'limit');
        if (limit) {
          pushdown.top = { paramName: 'limit', maxValue: limit.schema?.maximum || LIMIT_MAX_DEFAULT };
          stats.top++;
        }
        if (Object.keys(pushdown).length > 0) {
          method.config = method.config || {};
          method.config.queryParamPushdown = pushdown;
        }
      }

      // 4. EXEC bodies whose required attributes are non-string scalars
      const isExec = !Object.values(res.sqlVerbs || {}).some((arr) => (arr || []).some((x) => x.$ref.split('/').pop() === methodName));
      if (isExec && op.requestBody) {
        const body = resolve(op.requestBody);
        const schema = resolve(body?.content?.['application/json']?.schema);
        const attrs = (schema?.required || []).filter((k) => NON_STRING_SCALARS.has(resolve(schema.properties?.[k])?.type));
        if (schema && attrs.length > 0) {
          delete schema.required;
          const example = `{${attrs.map((a) => `"${a}": <${resolve(schema.properties[a]).type}>`).join(', ')}}`;
          const plural = attrs.length > 1 ? 'attributes are' : 'attribute is';
          op.description = `${op.description || ''}\n\nStackQL: call this method with the raw JSON body, for example \`EXEC ${service}.${resName}.${methodName} @id = '...' @@json='${example}'\` - the ${attrs.join(', ')} ${plural} ${resolve(schema.properties[attrs[0]]).type}-typed, which the EXEC parameter form does not accept.`;
          stats.execBodiesRelaxed++;
        }
      }

      // 3. POST-based selects: object key from the CSV
      if (isSelect && verb === 'post') {
        const key = objectKeys.get(`${service}::${pathKey}::${verb}`);
        if (key) {
          method.response = method.response || {};
          method.response.objectKey = key;
          stats.postObjectKeys++;
        }
      }
    }
  }
  docs.set(f, doc);
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
for (const [f, doc] of docs) fs.writeFileSync(path.join(SERVICES_OUT_DIR, f), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`post_process: ${docs.size} services, ${stats.methods} methods; cursor pagination on ${stats.pagination} list methods; orderBy pushdown on ${stats.orderBy}, top (limit) pushdown on ${stats.top}; object keys on ${stats.postObjectKeys} POST-based selects; ${stats.execBodiesRelaxed} EXEC body relaxed for @@json`);
