#!/usr/bin/env node

// Populates stackql_resource_name, stackql_method_name, stackql_verb and
// stackql_object_key in provider-dev/config/all_services.csv from the split
// service specs in provider-dev/source. Deterministic and re-runnable on
// spec refreshes; review the CSV diff after running. Manual mapping decisions
// are applied as rules here, never as hand-edits to the CSV.
//
// The CSV is the durable record of every operation -> resource / method /
// verb mapping. A refresh that would move an operation to a different
// resource or rename a method shows up as a CSV diff to review; the
// `--check` flag fails when a previously mapped operation changes its
// (resource, method, verb) so that a regeneration cannot silently break the
// SQL surface (append-only for new operations).
//
// Mapping conventions (see CLAUDE.md):
//   GET collection ({<key>: [...]})  -> SELECT  <resource>.list, objectKey $.<key>
//   GET single ({<key>: {...}})      -> SELECT  <resource>.get,  objectKey $.<key>
//   GET single (bare fields)         -> SELECT  <resource>.get   (no object key)
//   POST create                      -> INSERT  <resource>.create
//   PUT / PATCH update               -> UPDATE  <resource>.update
//   DELETE                           -> DELETE  <resource>.delete
//   POST action segments             -> EXEC    <parent>.<action>   (snooze, merge, render,
//     (POST_EXEC_SEGMENTS)                                            preview, enable, ping, ...)
//   PUT command segments             -> EXEC    <parent>.<command>  (merge, cancel, channel)
//   analytics POST reads             -> SELECT  <metric>.list, objectKey $.data
//   bulk PUTs (/incidents, alerts)   -> EXEC    <resource>.update_bulk
//   multipart uploads, no-2xx ops    -> skipped (skip_this_resource, reason-coded in the inventory)
//
// Resource names come from the shared derivation in lib/spec_helpers.mjs
// (scoping pairs stripped, intermediate segments singularized, last segment
// pluralized); RESOURCE_RULES applies explicit overrides where the mechanical
// name is wrong or collides.
//
// Validates before writing: every CSV row mapped or skipped with a reason,
// every spec operation present in the CSV, (resource, method) unique per
// service, and unique required-parameter signatures per (resource, sqlVerb).
// Fails without writing on violations.
//
// Usage: npm run map-operations [-- --check] [-- --out other.csv]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import pluralize from 'pluralize';
import {
  HTTP_VERBS, SOURCE_DIR, CONFIG_DIR, pathParams, makeResolver, classifyResponse, skipReason,
  scopedSegments, allParams, POST_EXEC_SEGMENTS, PUT_EXEC_SEGMENTS, EXEC_METHOD_NAMES,
  deriveResource, camelToSnake, schemaShape
} from './lib/spec_helpers.mjs';

const csvPath = path.join(CONFIG_DIR, 'all_services.csv');
const checkMode = process.argv.includes('--check');

// Explicit resource-name overrides, matched on (service, normalized path
// with params collapsed to {}). First match wins.
const RESOURCE_RULES = [
  // analytics: every metric family is its own resource - the POST reads share
  // an all-optional body, so they cannot share a SELECT bucket
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/all$/, resource: 'incident_metrics' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/escalation_policies$/, resource: 'incident_metrics_by_escalation_policy' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/escalation_policies\/all$/, resource: 'incident_metrics_all_escalation_policies' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/services$/, resource: 'incident_metrics_by_service' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/services\/all$/, resource: 'incident_metrics_all_services' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/teams$/, resource: 'incident_metrics_by_team' },
  { service: 'analytics', re: /^\/analytics\/metrics\/incidents\/teams\/all$/, resource: 'incident_metrics_all_teams' },
  { service: 'analytics', re: /^\/analytics\/metrics\/pd_advance_usage\/features$/, resource: 'pd_advance_usage_metrics' },
  { service: 'analytics', re: /^\/analytics\/metrics\/responders\/all$/, resource: 'responder_metrics' },
  { service: 'analytics', re: /^\/analytics\/metrics\/responders\/teams$/, resource: 'responder_metrics_by_team' },
  { service: 'analytics', re: /^\/analytics\/metrics\/users\/all$/, resource: 'user_metrics' },
  { service: 'analytics', re: /^\/analytics\/raw\/incidents(\/\{\})?$/, resource: 'raw_incidents' },
  { service: 'analytics', re: /^\/analytics\/raw\/incidents\/\{\}\/responses$/, resource: 'raw_incident_responses' },
  { service: 'analytics', re: /^\/analytics\/raw\/responders\/\{\}\/incidents$/, resource: 'raw_responder_incidents' },
  { service: 'analytics', re: /^\/analytics\/raw\/users$/, resource: 'raw_users' },
  // an invocation is created against an action but listed/read at the top level
  { service: 'automation_actions', re: /^\/automation_actions\/actions\/\{\}\/invocations$/, resource: 'invocations' },
  // the unsubscribe action acts on the subscriber list, not the business service
  { service: 'business_services', re: /^\/business_services\/\{\}\/unsubscribe$/, resource: 'subscribers' },
  // /services/{id}/change_events collides with the top-level change_events list
  { service: 'change_events', re: /^\/services\/\{\}\/change_events$/, resource: 'service_change_events' },
  { service: 'change_events', re: /^\/incidents\/\{\}\/related_change_events$/, resource: 'incident_change_events' },
  // custom field DEFINITIONS for incidents (deprecated) and services
  { service: 'custom_fields', re: /^\/incidents\/custom_fields(\/\{\})?$/, resource: 'incident_fields' },
  { service: 'custom_fields', re: /^\/incidents\/custom_fields\/\{\}\/field_options(\/\{\})?$/, resource: 'incident_field_options' },
  { service: 'custom_fields', re: /^\/services\/custom_fields(\/\{\})?$/, resource: 'service_fields' },
  { service: 'custom_fields', re: /^\/services\/custom_fields\/\{\}\/field_options(\/\{\})?$/, resource: 'service_field_options' },
  // enrichment: the servicenow integration family
  { service: 'enrichment', re: /^\/enrichment\/integrations\/servicenow(\/\{\})?$/, resource: 'servicenow_integrations' },
  { service: 'enrichment', re: /^\/enrichment\/integrations\/servicenow\/\{\}\/tables(\/\{\}(\/enable|\/test)?)?$/, resource: 'servicenow_tables' },
  { service: 'enrichment', re: /^\/enrichment\/integrations\/servicenow\/credentials(\/\{\})?$/, resource: 'servicenow_credentials' },
  { service: 'enrichment', re: /^\/enrichment\/query$/, resource: 'query_results' },
  // event orchestration paths (global / router / unrouted / service) are singletons per orchestration
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/\{\}\/global$/, resource: 'global_paths' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/\{\}\/router$/, resource: 'router_paths' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/\{\}\/unrouted$/, resource: 'unrouted_paths' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/services\/\{\}$/, resource: 'service_paths' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/services\/\{\}\/active$/, resource: 'service_active_statuses' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/\{\}\/integrations\/migration$/, resource: 'integrations' },
  { service: 'event_orchestrations', re: /^\/event_orchestrations\/\{\}\/cache_variables\/\{\}\/data$/, resource: 'cache_variable_data' },
  // enrichment records live under a schema; the schema prefix is implied
  { service: 'enrichment', re: /^\/enrichment\/schemas\/\{\}\/records(\/\{\})?$/, resource: 'records' },
  // webhook OAuth clients
  { service: 'webhooks', re: /^\/webhook_subscriptions\/oauth_clients(\/\{\})?$/, resource: 'oauth_clients' },
  // incident types: the path repeats the incidents prefix
  { service: 'incident_types', re: /^\/incidents\/types(\/\{\})?$/, resource: 'incident_types' },
  { service: 'incident_types', re: /^\/incidents\/types\/\{\}\/custom_fields(\/\{\})?$/, resource: 'custom_fields' },
  { service: 'incident_types', re: /^\/incidents\/types\/\{\}\/custom_fields\/\{\}\/field_options(\/\{\})?$/, resource: 'custom_field_options' },
  // incidents
  { service: 'incidents', re: /^\/incidents\/\{\}\/business_services\/\{\}\/impacts$/, resource: 'business_service_impacts' },
  { service: 'incidents', re: /^\/incidents\/\{\}\/status_updates\/unsubscribe$/, resource: 'status_update_subscribers' },
  { service: 'incidents', re: /^\/incidents\/\{\}\/responder_requests\/cancel$/, resource: 'responder_requests' },
  // names that read better than the mechanical derivation
  { service: 'add_ons', re: /^\/addons/, resource: 'add_ons' },
  { service: 'on_calls', re: /^\/oncalls$/, resource: 'on_calls' },
  { service: 'oauth_delegations', re: /^\/oauth_delegations$/, resource: 'oauth_delegations' },
  { service: 'oauth_delegations', re: /^\/oauth_delegations\/revocation_requests\/status$/, resource: 'revocation_requests' },
  // recommendations: one resource for the recommended rules and their actions
  { service: 'recommendations', re: /^\/recommendations\/event_orchestrations\//, resource: 'event_orchestration_rules' },
  // service dependencies: associate/disassociate act on relationships, not on either service type
  { service: 'service_dependencies', re: /^\/service_dependencies\/(associate|disassociate)$/, resource: 'dependencies' },
  { service: 'services', re: /^\/services\/\{\}\/rules\/convert$/, resource: 'rules' },
  // tags applied to entities, and entities carrying a tag
  { service: 'tags', re: /^\/\{\}\/\{\}\/(tags|change_tags)$/, resource: 'entity_tags' },
  { service: 'tags', re: /^\/tags\/\{\}\/\{\}$/, resource: 'tagged_entities' },
  // team membership
  { service: 'teams', re: /^\/teams\/\{\}\/users\/\{\}$/, resource: 'members' },
  { service: 'users', re: /^\/users\/me$/, resource: 'me' },
  // workflow integrations: the leading /workflows segment is the service
  { service: 'workflow_integrations', re: /^\/workflows\/integrations(\/\{\})?$/, resource: 'integrations' },
  { service: 'workflow_integrations', re: /^\/workflows\/integrations(\/\{\})?\/connections(\/\{\})?$/, resource: 'connections' }
];

// Method-name / verb / objectKey overrides for cases the generic rules
// cannot express, matched on (verb, normalized path). First match wins.
const METHOD_RULES = [
  // analytics: POST-based reads (all-optional filter bodies) exposed as SELECT over $.data
  { verb: 'post', re: /^\/analytics\/(metrics|raw)\//, method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { verb: 'post', re: /^\/analytics\/raw\/(incidents|users)$/, method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { verb: 'post', re: /^\/enrichment\/query$/, method: 'list', sqlVerb: 'select', objectKey: '$.records' },
  // the ability check returns 204 (has) / 402 (has not): a procedure, not a row
  { verb: 'get', re: /^\/abilities\/\{\}$/, method: 'check', sqlVerb: 'exec', objectKey: '' },
  // the ServiceNow table test is a connectivity probe, not a collection read
  { verb: 'get', re: /^\/enrichment\/integrations\/servicenow\/\{\}\/tables\/\{\}\/test$/, method: 'test', sqlVerb: 'exec', objectKey: '' },
  // the vendor read wraps the vendor object in an array-typed schema - it is a single read
  { verb: 'get', re: /^\/vendors\/\{\}$/, method: 'get', sqlVerb: 'select', objectKey: '$.vendor' },
  // bulk updates are procedures (a list of incidents / alerts in the body)
  { verb: 'put', re: /^\/incidents$/, method: 'update_bulk', sqlVerb: 'exec', objectKey: '' },
  { verb: 'put', re: /^\/incidents\/\{\}\/alerts$/, method: 'update_bulk', sqlVerb: 'exec', objectKey: '' },
  // team membership: PUT adds, DELETE removes (no entity of its own to update)
  { verb: 'put', re: /^\/teams\/\{\}\/users\/\{\}$/, method: 'add', sqlVerb: 'insert', objectKey: '' },
  { verb: 'delete', re: /^\/teams\/\{\}\/users\/\{\}$/, method: 'remove', sqlVerb: 'delete', objectKey: '' },
  { verb: 'put', re: /^\/teams\/\{\}\/escalation_policies\/\{\}$/, method: 'add', sqlVerb: 'insert', objectKey: '' },
  { verb: 'delete', re: /^\/teams\/\{\}\/escalation_policies\/\{\}$/, method: 'remove', sqlVerb: 'delete', objectKey: '' },
  // delete-all vs delete-one on user sessions
  { verb: 'delete', re: /^\/users\/\{\}\/sessions$/, method: 'delete_all', sqlVerb: 'delete', objectKey: '' },
  // revoke every OAuth delegation (body-driven bulk revoke)
  { verb: 'delete', re: /^\/oauth_delegations$/, method: 'revoke', sqlVerb: 'exec', objectKey: '' },
  // recommendations: the accepted-rule delete is an action on the recommended rules
  { verb: 'delete', re: /^\/recommendations\/event_orchestrations\/services\/\{\}\/accepted_rules\/\{\}$/, method: 'delete_accepted_rule', sqlVerb: 'exec', objectKey: '' },
  // the postmortem PUT is create-or-update
  { verb: 'put', re: /^\/status_pages\/\{\}\/posts\/\{\}\/postmortem$/, method: 'update', sqlVerb: 'update', objectKey: '' }
];

function normalizePath(pathKey) {
  return pathKey.replace(/\{[^}]+\}/g, '{}');
}

// ---------------------------------------------------------------------------
// Index every operation in the split service specs
// ---------------------------------------------------------------------------

const ops = new Map(); // `${filename}::${path}::${verb}` -> { op, pathItem, resolve }
const specFiles = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.yaml')).sort();
if (specFiles.length === 0) {
  console.error(`Error: no service specs in ${SOURCE_DIR} - run npm run split first`);
  process.exit(1);
}
for (const filename of specFiles) {
  const spec = yaml.load(fs.readFileSync(path.join(SOURCE_DIR, filename), 'utf8'));
  const resolve = makeResolver(spec);
  for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
    for (const verb of HTTP_VERBS) {
      if (!pathItem[verb]) continue;
      ops.set(`${filename}::${pathKey}::${verb}`, { op: pathItem[verb], pathItem, resolve });
    }
  }
}

// ---------------------------------------------------------------------------
// Mapping
// ---------------------------------------------------------------------------

function resourceFor(service, pathKey, verb) {
  const norm = normalizePath(pathKey);
  for (const rule of RESOURCE_RULES) {
    if (rule.service && rule.service !== service) continue;
    if (rule.verb && rule.verb !== verb) continue;
    if (rule.re.test(norm)) return rule.resource;
  }
  return deriveResource(pathKey, verb, service, pluralize);
}

function mapOperation(filename, pathKey, verb) {
  const entry = ops.get(`${filename}::${pathKey}::${verb}`);
  if (!entry) return { error: `operation not found in ${SOURCE_DIR}` };
  const { op, resolve } = entry;
  const service = filename.replace(/\.yaml$/, '');

  const response = classifyResponse(op, resolve);
  const skip = skipReason(pathKey, op, resolve) || (response.code ? '' : 'no_success_response');
  if (skip) return { resource: 'skip_this_resource', method: '', sqlVerb: '', objectKey: '', skip };

  const norm = normalizePath(pathKey);
  const resource = resourceFor(service, pathKey, verb);
  const methodRule = METHOD_RULES.find((r) => r.verb === verb && r.re.test(norm));
  if (methodRule) {
    return { resource, method: methodRule.method, sqlVerb: methodRule.sqlVerb, objectKey: methodRule.objectKey || '' };
  }

  const { segs } = scopedSegments(pathKey);
  const statics = segs.filter((s) => !s.startsWith('{'));
  const lastStatic = statics[statics.length - 1];

  if (verb === 'get') {
    if (response.kind === 'array') return { resource, method: 'list', sqlVerb: 'select', objectKey: `$.${response.key}`, listy: true };
    if (response.kind === 'multi-array' || response.kind === 'bare-array') return { resource, method: 'list', sqlVerb: 'select', objectKey: '', listy: true };
    if (response.kind === 'object') return { resource, method: 'get', sqlVerb: 'select', objectKey: `$.${response.key}`, getty: true };
    return { resource, method: 'get', sqlVerb: 'select', objectKey: '', getty: true };
  }
  if (verb === 'delete') return { resource, method: 'delete', sqlVerb: 'delete', objectKey: '' };
  if (verb === 'patch' || verb === 'put') {
    if (PUT_EXEC_SEGMENTS.has(lastStatic)) return { resource, method: EXEC_METHOD_NAMES[lastStatic] || camelToSnake(lastStatic), sqlVerb: 'exec', objectKey: '' };
    return { resource, method: 'update', sqlVerb: 'update', objectKey: '' };
  }
  // post
  if (POST_EXEC_SEGMENTS.has(lastStatic)) return { resource, method: EXEC_METHOD_NAMES[lastStatic] || camelToSnake(lastStatic), sqlVerb: 'exec', objectKey: '' };
  return { resource, method: 'create', sqlVerb: 'insert', objectKey: '' };
}

// Disambiguate list / get names within a resource: the operation with the
// fewest path parameters keeps the plain name, the others are suffixed with
// _by_<last path parameter> (`_id` stripped).
function disambiguate(mapped) {
  const groups = new Map();
  for (const m of mapped) {
    if (!m.listy && !m.getty) continue;
    const key = `${m.service}.${m.resource}.${m.method}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(m);
  }
  for (const [, members] of groups) {
    if (members.length < 2) continue;
    members.sort((a, b) => pathParams(a.pathKey).length - pathParams(b.pathKey).length || a.pathKey.localeCompare(b.pathKey));
    for (const m of members.slice(1)) {
      const params = pathParams(m.pathKey);
      const last = params[params.length - 1];
      if (!last) continue;
      m.method = `${m.method}_by_${camelToSnake(last).replace(/_id$/, '')}`;
    }
  }
}

// ---------------------------------------------------------------------------
// CSV read/transform/write (RFC 4180, preserves column order)
// ---------------------------------------------------------------------------

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

function csvField(v) {
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

const rawCsv = fs.readFileSync(csvPath, 'utf8');
const allRows = parseCsv(rawCsv);
const header = allRows[0];
// provider-utils analyze carries mapped rows forward but re-appends rows it
// considers unmapped (the skip_this_resource rows have no method name), so a
// re-run duplicates them - keep the first row per (filename, path, verb)
const seenRowKeys = new Set();
const rows = [header];
let duplicatesDropped = 0;
for (const row of allRows.slice(1)) {
  const k = `${row[header.indexOf('filename')]}::${row[header.indexOf('path')]}::${row[header.indexOf('verb')]}`;
  if (seenRowKeys.has(k)) { duplicatesDropped++; continue; }
  seenRowKeys.add(k);
  rows.push(row);
}
if (duplicatesDropped > 0) console.log(`Dropped ${duplicatesDropped} duplicate CSV row(s) re-appended by analyze`);
const col = Object.fromEntries(header.map((h, i) => [h, i]));
for (const required of ['filename', 'path', 'verb', 'operationId', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key']) {
  if (!(required in col)) {
    console.error(`Missing expected CSV column: ${required}`);
    process.exit(1);
  }
}

// previous mappings (for --check): key -> {resource, method, verb}
const previous = new Map();
for (const row of rows.slice(1)) {
  if (row[col.stackql_resource_name]) {
    previous.set(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`, {
      resource: row[col.stackql_resource_name], method: row[col.stackql_method_name], sqlVerb: row[col.stackql_verb]
    });
  }
}

const errors = [];
const seenKeys = new Set();
const mapped = [];
for (const row of rows.slice(1)) {
  const filename = row[col.filename], pathKey = row[col.path], verb = row[col.verb];
  seenKeys.add(`${filename}::${pathKey}::${verb}`);
  const m = mapOperation(filename, pathKey, verb);
  if (m.error) {
    errors.push(`${filename} ${verb} ${pathKey}: ${m.error}`);
    continue;
  }
  mapped.push({ ...m, row, filename, pathKey, verb, service: filename.replace(/\.yaml$/, '') });
}
disambiguate(mapped);

const stats = { select: 0, insert: 0, update: 0, delete: 0, exec: 0, skipped: 0 };
const skipsByReason = {};
const changes = [];
for (const m of mapped) {
  const { row } = m;
  row[col.stackql_resource_name] = m.resource;
  if (m.resource === 'skip_this_resource') {
    stats.skipped++;
    skipsByReason[m.skip] = (skipsByReason[m.skip] || 0) + 1;
    row[col.stackql_method_name] = '';
    row[col.stackql_verb] = '';
    row[col.stackql_object_key] = '';
    continue;
  }
  row[col.stackql_method_name] = m.method;
  row[col.stackql_verb] = m.sqlVerb;
  row[col.stackql_object_key] = m.objectKey;
  stats[m.sqlVerb]++;
  const prev = previous.get(`${m.filename}::${m.pathKey}::${m.verb}`);
  if (prev && prev.resource !== 'skip_this_resource' && (prev.resource !== m.resource || prev.method !== m.method || prev.sqlVerb !== m.sqlVerb)) {
    changes.push(`${m.service} ${m.verb.toUpperCase()} ${m.pathKey}: ${prev.resource}.${prev.method} (${prev.sqlVerb}) -> ${m.resource}.${m.method} (${m.sqlVerb})`);
  }
}

// every spec operation must have a CSV row (else generate-provider misses it)
for (const key of ops.keys()) {
  if (!seenKeys.has(key)) errors.push(`in spec but not in CSV: ${key} (re-run generate-mappings)`);
}

// ---------------------------------------------------------------------------
// Consistency checks
// ---------------------------------------------------------------------------

const methodSeen = new Map();
const sigSeen = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  const methodKey = `${service}.${resource}.${row[col.stackql_method_name]}`;
  if (methodSeen.has(methodKey)) {
    errors.push(`duplicate method ${methodKey} (${methodSeen.get(methodKey)} and ${row[col.path]}:${row[col.verb]})`);
  }
  methodSeen.set(methodKey, `${row[col.path]}:${row[col.verb]}`);

  const sqlVerb = row[col.stackql_verb];
  if (sqlVerb === 'exec') continue;
  // signature = required inputs: path params, required query params and
  // required top-level request body properties (naive body translate)
  const entry = ops.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  const requiredQuery = allParams(entry.op, entry.pathItem, entry.resolve)
    .filter((p) => p.in === 'query' && p.required)
    .map((p) => p.name);
  const bodySchema = entry.resolve(entry.op.requestBody)?.content?.['application/json']?.schema;
  const requiredBody = bodySchema ? schemaShape(bodySchema, entry.resolve).required : [];
  const sig = [...pathParams(row[col.path]), ...requiredQuery, ...requiredBody].sort().join(',');
  const sigKey = `${service}.${resource}.${sqlVerb}::${sig}`;
  if (sigSeen.has(sigKey)) {
    errors.push(`signature clash on ${service}.${resource} ${sqlVerb} [${sig}] (${sigSeen.get(sigKey)} and ${row[col.stackql_method_name]})`);
  }
  sigSeen.set(sigKey, row[col.stackql_method_name]);
}

if (checkMode && changes.length > 0) {
  errors.push(...changes.map((c) => `mapping changed for a previously mapped operation (breaking): ${c}`));
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

const outArgIdx = process.argv.indexOf('--out');
const outPath = outArgIdx !== -1 ? path.resolve(process.argv[outArgIdx + 1]) : csvPath;
const out = rows.map((r) => r.map(csvField).join(',')).join('\n') + '\n';
fs.writeFileSync(outPath, out);

// summary
const resourcesByService = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!resourcesByService.has(service)) resourcesByService.set(service, new Set());
  resourcesByService.get(service).add(resource);
}
console.log(`Mapped: select ${stats.select}, insert ${stats.insert}, update ${stats.update}, delete ${stats.delete}, exec ${stats.exec}; skipped ${stats.skipped} (${Object.entries(skipsByReason).map(([k, v]) => `${k}: ${v}`).join(', ') || 'none'})`);
if (changes.length > 0) {
  console.log(`Mapping changes against the previous CSV (${changes.length}) - review before committing:`);
  for (const c of changes) console.log(`  ${c}`);
}
let resourceCount = 0;
console.log('Resources per service:');
for (const [service, resources] of [...resourcesByService.entries()].sort()) {
  resourceCount += resources.size;
  console.log(`  ${service} (${resources.size}): ${[...resources].sort().join(', ')}`);
}
console.log(`${resourcesByService.size} services, ${resourceCount} resources`);
