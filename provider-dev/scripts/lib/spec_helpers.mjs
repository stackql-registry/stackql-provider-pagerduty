// Shared helpers for the PagerDuty spec scripts (bin/split.mjs,
// build_inventory.mjs, map_operations.mjs, post_process.mjs): service
// resolution, $ref resolution (including components/responses refs, which
// the vendor spec uses for ~50 operations), response shape classification,
// pagination style detection, skip rules and the resource-name derivation.
// Single-sourced so the inventory and the authoritative mapping can never
// disagree on classification.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const REPO_ROOT = repoRoot;
export const SPEC_PATH = path.join(repoRoot, 'provider-dev', 'downloaded', 'pagerduty-rest-v2.json');
export const SOURCE_DIR = path.join(repoRoot, 'provider-dev', 'source');
export const CONFIG_DIR = path.join(repoRoot, 'provider-dev', 'config');
export const PROVIDER_VERSION = 'v00.00.00000';
export const PROVIDER_OUT_DIR = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'pagerduty', PROVIDER_VERSION);
export const SERVICES_OUT_DIR = path.join(PROVIDER_OUT_DIR, 'services');
const serviceNamesPath = path.join(CONFIG_DIR, 'service_names.json');

export function camelToSnake(s) {
  return String(s).replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[-. ]/g, '_').toLowerCase();
}

export function pathParams(pathKey) {
  return (pathKey.match(/\{[^}]+\}/g) || []).map((s) => s.slice(1, -1));
}

// Resolves local $refs (schemas, parameters, responses, requestBodies)
// against the containing spec document.
export function makeResolver(spec) {
  return function resolve(node, depth = 0) {
    if (!node || depth > 20) return node;
    if (node.$ref) {
      const parts = node.$ref.replace(/^#\//, '').split('/').map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'));
      let target = spec;
      for (const p of parts) target = target?.[p];
      return resolve(target, depth + 1);
    }
    return node;
  };
}

// Flattened top-level properties of a schema (allOf/oneOf/anyOf merged,
// shallow). Returns { props: {name: schema}, required: [names], type }.
export function schemaShape(schema, resolve, depth = 0) {
  const s = resolve(schema, depth);
  if (!s || depth > 8) return { props: {}, required: [], type: undefined };
  const props = {};
  const required = [...(s.required || [])];
  let type = s.type;
  for (const key of ['allOf', 'oneOf', 'anyOf']) {
    if (Array.isArray(s[key])) {
      for (const sub of s[key]) {
        const inner = schemaShape(sub, resolve, depth + 1);
        Object.assign(props, inner.props);
        required.push(...inner.required);
        if (!type && inner.type) type = inner.type;
      }
    }
  }
  for (const [k, v] of Object.entries(s.properties || {})) props[k] = resolve(v);
  return { props, required: [...new Set(required)], type };
}

// Service resolution: pathRules first (regex on the path), then the first
// tag through the tags map. A miss returns null - callers fail without
// writing.
export function loadServiceNames() {
  return JSON.parse(fs.readFileSync(serviceNamesPath, 'utf8'));
}
export function makeServiceResolver() {
  const config = loadServiceNames();
  const rules = (config.pathRules || []).map((r) => ({ re: new RegExp(r.pathRegex), service: r.service }));
  return function resolveService(pathKey, op) {
    for (const rule of rules) {
      if (rule.re.test(pathKey)) return rule.service;
    }
    const tag = (op?.tags || [])[0];
    if (tag && config.tags[tag]) return config.tags[tag];
    return null;
  };
}

// Lowest 2xx response with its (dereferenced) JSON schema.
export function success2xx(op, resolve) {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const resp = resolve(op.responses[code]);
    const content = resp?.content || {};
    const jsonType = Object.keys(content).find((m) => m.includes('json'));
    if (jsonType && content[jsonType].schema) return { code, schema: content[jsonType].schema, mediaTypes: Object.keys(content) };
    if (Object.keys(content).length > 0) return { code, schema: null, mediaTypes: Object.keys(content) };
    return { code, schema: null, mediaTypes: [] };
  }
  return { code: null, schema: null, mediaTypes: [] };
}

// Pagination and envelope bookkeeping keys that never name the payload.
export const META_KEYS = new Set([
  'offset', 'limit', 'more', 'total', 'next_cursor', 'cursor', 'response_metadata', 'privileges',
  'first', 'last', 'order', 'order_by', 'time_zone', 'filters', 'aggregate_unit', 'additional_fields',
  'account_id', 'migrated_at', 'migrated_by', 'migrated_status', 'migrated_to', 'migrated_via',
  'warnings', 'errors', 'incident_id', 'responder_id'
]);

function isObjectish(v) {
  return v && v.type !== 'array' && (v.type === 'object' || v.properties || v.allOf || v.oneOf || v.anyOf || v.type === undefined);
}

// Response envelope classification for the PagerDuty API:
//   array      - {<key>: [...], offset?, limit?, more?, total?, next_cursor?} (collections)
//   object     - {<key>: {...}}                                                 (single wrapper)
//   fields     - the entity's own fields at the top level (no wrapper)
//   multi-array- several arrays with no single payload key (tags by entity type)
//   bare-array - a top-level JSON array (schedule overrides POST)
//   none       - no JSON body (204 deletes, 202 accepted)
//   non-json   - some other media type
// `key` is the candidate stackql_object_key payload key for array / object.
export function classifyResponse(op, resolve) {
  const { code, schema, mediaTypes } = success2xx(op, resolve);
  if (!schema) {
    if (mediaTypes.length > 0 && !mediaTypes.some((m) => m.includes('json'))) return { kind: 'non-json', code, mediaTypes };
    return { kind: 'none', code, mediaTypes };
  }
  const shape = schemaShape(schema, resolve);
  const names = Object.keys(shape.props);
  if (shape.type === 'array' && names.length === 0) return { kind: 'bare-array', code, mediaTypes, props: [] };
  const arrays = names.filter((k) => shape.props[k] && shape.props[k].type === 'array' && !META_KEYS.has(k));
  const objects = names.filter((k) => !META_KEYS.has(k) && isObjectish(shape.props[k]));
  const scalars = names.filter((k) => !META_KEYS.has(k) && ['string', 'integer', 'number', 'boolean'].includes(shape.props[k]?.type));
  if (arrays.length === 1 && objects.length === 0 && scalars.length === 0) return { kind: 'array', code, mediaTypes, key: arrays[0], props: names };
  // a collection whose only other top-level fields are scoping ids
  // (enrichment records carry schema_id next to records[] and next_cursor)
  if (arrays.length === 1 && objects.length === 0 && scalars.every((k) => /_id$/.test(k))) return { kind: 'array', code, mediaTypes, key: arrays[0], props: names };
  if (arrays.length > 1 && objects.length === 0 && scalars.length === 0) return { kind: 'multi-array', code, mediaTypes, props: names };
  if (objects.length === 1 && arrays.length === 0 && scalars.length === 0) return { kind: 'object', code, mediaTypes, key: objects[0], props: names };
  if (names.length === 0) return { kind: 'none', code, mediaTypes, props: names };
  return { kind: 'fields', code, mediaTypes, props: names };
}

export function allParams(op, pathItem, resolve) {
  return [...(pathItem?.parameters || []), ...(op.parameters || [])].map((p) => resolve(p)).filter(Boolean);
}

export function queryParamNames(op, pathItem, resolve) {
  return allParams(op, pathItem, resolve).filter((p) => p.in === 'query').map((p) => p.name);
}

export function queryParam(op, pathItem, resolve, name) {
  return allParams(op, pathItem, resolve).find((p) => p.in === 'query' && p.name === name) || null;
}

// cursor - `cursor` query param and `next_cursor` in the body (token pagination, configured)
// offset - `offset`/`limit` query params with `more`/`total` in the body (classic; not traversable by stackql)
// none   - complete collection
export function paginationStyle(op, pathItem, resolve) {
  const names = queryParamNames(op, pathItem, resolve);
  if (names.includes('cursor')) return 'cursor';
  if (names.includes('offset')) return 'offset';
  return 'none';
}

export function requestBodyMediaTypes(op, resolve = (x) => x) {
  const body = resolve(op.requestBody);
  return Object.keys(body?.content || {});
}

// Skip rules: operations that stay visible in the CSV artifacts but are not
// mapped to StackQL methods.
//   non_json_request_body - multipart/form-data uploads (the enrichment CSV upload)
//   non_json_response     - a 2xx media type other than JSON
export function skipReason(pathKey, op, resolve) {
  const rbTypes = requestBodyMediaTypes(op, resolve);
  if (rbTypes.length > 0 && !rbTypes.some((m) => m.includes('json'))) return 'non_json_request_body';
  const { kind } = classifyResponse(op, resolve);
  if (kind === 'non-json') return 'non_json_response';
  return '';
}

// ---------------------------------------------------------------------------
// Resource derivation
// ---------------------------------------------------------------------------

// Trailing static segments that name an action on the parent resource
// rather than a resource of their own (POST -> EXEC <snake(segment)>).
export const POST_EXEC_SEGMENTS = new Set([
  'snooze', 'render', 'preview', 'enable', 'ping', 'convert', 'migration', 'dismiss', 'accept',
  'unsubscribe', 'change_tags', 'regenerate_private_url_key', 'associate', 'disassociate', 'test'
]);
// PUT on these trailing segments is a command, not an entity update.
export const PUT_EXEC_SEGMENTS = new Set(['merge', 'cancel', 'channel']);

export const EXEC_METHOD_NAMES = { migration: 'migrate', channel: 'update_channel' };

// Strips a leading API version segment, then iteratively strips scoping
// pairs (a static segment followed by a path parameter) while more segments
// follow: /incidents/{id}/notes/{note_id} -> [notes, {note_id}]. The last
// stripped parent is kept so action segments can resolve to it. A leading
// parameter pair with no static parent ({entity_type}/{id}/tags) is dropped.
export function scopedSegments(pathKey) {
  let segs = pathKey.replace(/^\/v3\//, '/').split('/').filter(Boolean);
  let parent = null;
  while (segs.length > 1 && segs[0].startsWith('{')) segs = segs.slice(1);
  while (segs.length > 2 && !segs[0].startsWith('{') && segs[1].startsWith('{')) {
    parent = segs[0];
    segs = segs.slice(2);
  }
  return { segs, parent };
}

export function deriveResource(pathKey, verb, service, pluralize) {
  const { segs, parent } = scopedSegments(pathKey);
  let statics = segs.filter((s) => !s.startsWith('{'));
  const last = statics[statics.length - 1];
  if (verb === 'post' && POST_EXEC_SEGMENTS.has(last)) statics = statics.slice(0, -1);
  if ((verb === 'put' || verb === 'patch') && PUT_EXEC_SEGMENTS.has(last)) statics = statics.slice(0, -1);
  if (statics.length === 0 && parent) statics = [parent];
  // drop a leading segment that just restates the service name
  if (statics.length > 1 && camelToSnake(statics[0]) === service) statics = statics.slice(1);
  const snake = statics.map(camelToSnake);
  const head = snake.slice(0, -1).map((s) => pluralize.singular(s));
  const tail = pluralize(snake[snake.length - 1]);
  return [...head, tail].join('_');
}

// Header parameters whose wire name is a reserved word in the stackql
// grammar. `From` is bound by double-quoting the identifier in SQL
// (`INSERT INTO ... (incident, "From") SELECT ...`); an x-stackQL-alias is
// NOT used - the probe against the mock API showed the alias is not honoured
// for header parameters by the current stackql release, while the quoted
// wire name binds correctly.
export const RESERVED_WORD_PARAMETERS = ['From'];
