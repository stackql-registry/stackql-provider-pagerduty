#!/usr/bin/env node

// Quick offline validation of the generated provider against the local file
// registry - no network, no server. Runs SHOW SERVICES / SHOW RESOURCES /
// SHOW METHODS and DESCRIBE EXTENDED over representative resources and
// asserts expected counts and mappings, plus a structural pass over the
// generated service documents (cursor pagination blocks, the From alias,
// optional header parameters, POST-select object keys).
// Exit 1 on any failure.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then PATH.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'pagerduty', 'v00.00.00000', 'services');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql'; // PATH
}
const bin = findBinary();

function runSql(sql) {
  return new Promise((resolve) => {
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env: process.env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 200)}]`}`);
}

const EXPECTED_SERVICES = [
  'abilities', 'add_ons', 'alert_grouping_settings', 'analytics', 'audit', 'automation_actions', 'business_services',
  'change_events', 'custom_fields', 'enrichment', 'escalation_policies', 'event_orchestrations', 'extension_schemas',
  'extensions', 'incident_types', 'incident_workflows', 'incidents', 'ip_allow_lists', 'licenses', 'log_entries',
  'maintenance_windows', 'notifications', 'oauth_delegations', 'on_calls', 'paused_incident_reports', 'priorities',
  'recommendations', 'rulesets', 'schedules', 'schedules_v3', 'service_dependencies', 'services', 'session_configurations',
  'sre_agent', 'standards', 'status_dashboards', 'status_pages', 'tags', 'teams', 'templates', 'users', 'vendors',
  'webhooks', 'workflow_integrations'
];
const EXPECTED_RESOURCES = {
  incidents: ['alerts', 'business_service_impacts', 'custom_field_values', 'incidents', 'log_entries', 'notes', 'outlier_incidents', 'past_incidents', 'related_incidents', 'responder_requests', 'status_update_subscribers', 'status_updates'],
  services: ['audit_records', 'custom_field_values', 'enablements', 'integrations', 'rules', 'services'],
  teams: ['audit_records', 'escalation_policies', 'members', 'notification_subscriptions', 'teams'],
  users: ['audit_records', 'contact_methods', 'licenses', 'me', 'notification_rules', 'notification_subscriptions', 'oauth_delegations', 'oncall_handoff_notification_rules', 'sessions', 'status_update_notification_rules', 'users'],
  event_orchestrations: ['cache_variable_data', 'cache_variables', 'enablements', 'event_orchestrations', 'global_paths', 'integrations', 'router_paths', 'service_active_statuses', 'service_cache_variable_data', 'service_cache_variables', 'service_paths', 'unrouted_paths'],
  analytics: ['incident_metrics', 'incident_metrics_all_escalation_policies', 'incident_metrics_all_services', 'incident_metrics_all_teams', 'incident_metrics_by_escalation_policy', 'incident_metrics_by_service', 'incident_metrics_by_team', 'pd_advance_usage_metrics', 'raw_incident_responses', 'raw_incidents', 'raw_responder_incidents', 'raw_users', 'responder_metrics', 'responder_metrics_by_team', 'user_metrics'],
  tags: ['entity_tags', 'tagged_entities', 'tags'],
  webhooks: ['oauth_clients', 'webhook_subscriptions'],
  workflow_integrations: ['connections', 'integrations']
};

console.log(`stackql: ${bin}`);
let r = await runSql('SHOW SERVICES IN pagerduty');
check(`SHOW SERVICES (${EXPECTED_SERVICES.length})`, r.rows.length === EXPECTED_SERVICES.length && EXPECTED_SERVICES.every((s) => r.rows.some((x) => x.name === s)), r.stderr || JSON.stringify(r.rows.map((x) => x.name)));

for (const [svc, expected] of Object.entries(EXPECTED_RESOURCES)) {
  r = await runSql(`SHOW RESOURCES IN pagerduty.${svc}`);
  const names = r.rows.map((x) => x.name).sort();
  check(`SHOW RESOURCES IN pagerduty.${svc} (${expected.length})`, JSON.stringify(names) === JSON.stringify(expected), r.stderr || JSON.stringify(names));
}

// incidents.incidents: list/get/create/update + exec merge/snooze/update_bulk
r = await runSql('SHOW METHODS IN pagerduty.incidents.incidents');
let byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('incidents.incidents methods (7)', r.rows.length === 7, JSON.stringify(Object.keys(byName)));
check('incidents.incidents verbs', byName.list?.SQLVerb === 'SELECT' && byName.get?.SQLVerb === 'SELECT' && byName.create?.SQLVerb === 'INSERT' && byName.update?.SQLVerb === 'UPDATE' && byName.snooze?.SQLVerb === 'EXEC' && byName.merge?.SQLVerb === 'EXEC' && byName.update_bulk?.SQLVerb === 'EXEC', JSON.stringify(byName));
check('incidents.incidents list has no required params (headers are optional)', byName.list && !String(byName.list.RequiredParams || '').trim(), JSON.stringify(byName.list));
check('incidents.incidents get requires id', String(byName.get?.RequiredParams || '').split(/,\s*/).includes('id'), JSON.stringify(byName.get));
check('incidents.incidents create requires the incident body attribute', String(byName.create?.RequiredParams || '').includes('incident'), JSON.stringify(byName.create));

// teams.members: list + add (PUT as insert) + remove (delete)
r = await runSql('SHOW METHODS IN pagerduty.teams.members');
byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('teams.members methods list/add/remove', byName.list?.SQLVerb === 'SELECT' && byName.add?.SQLVerb === 'INSERT' && byName.remove?.SQLVerb === 'DELETE', JSON.stringify(byName));

// analytics: POST-based SELECT
r = await runSql('SHOW METHODS IN pagerduty.analytics.incident_metrics');
check('analytics.incident_metrics list is a SELECT over a POST operation', r.rows.length === 1 && r.rows[0].MethodName === 'list' && r.rows[0].SQLVerb === 'SELECT', JSON.stringify(r.rows));

// workflow_integrations.connections: two list methods with distinct signatures
r = await runSql('SHOW METHODS IN pagerduty.workflow_integrations.connections');
byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('connections list / list_by_integration disambiguated', byName.list && byName.list_by_integration && String(byName.list_by_integration.RequiredParams).includes('integration_id'), JSON.stringify(byName));

// DESCRIBE EXTENDED on representative resources (nested schemas resolved)
r = await runSql('DESCRIBE EXTENDED pagerduty.incidents.incidents');
let cols = r.rows.map((c) => c.name);
check('DESCRIBE incidents.incidents columns', ['id', 'incident_number', 'title', 'status', 'urgency', 'created_at', 'service', 'escalation_policy', 'assignments'].every((c) => cols.includes(c)), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED pagerduty.users.me');
cols = r.rows.map((c) => c.name);
check('DESCRIBE users.me columns', ['id', 'name', 'email', 'role', 'time_zone'].every((c) => cols.includes(c)), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED pagerduty.services.services');
cols = r.rows.map((c) => c.name);
check('DESCRIBE services.services columns', ['id', 'name', 'status', 'escalation_policy', 'alert_creation'].every((c) => cols.includes(c)), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED pagerduty.audit.records');
cols = r.rows.map((c) => c.name);
check('DESCRIBE audit.records projects $.records rows', ['id', 'action', 'actors', 'execution_time'].every((c) => cols.includes(c)) && !cols.includes('next_cursor'), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED pagerduty.analytics.incident_metrics');
cols = r.rows.map((c) => c.name);
check('DESCRIBE analytics.incident_metrics projects $.data rows', cols.includes('total_incident_count') && !cols.includes('data'), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED pagerduty.event_orchestrations.cache_variable_data');
cols = r.rows.map((c) => c.name);
check('DESCRIBE event_orchestrations.cache_variable_data (lowered body union)', cols.includes('cache_variable_data'), JSON.stringify(cols));

// structural pass over the generated documents
const docs = Object.fromEntries(fs.readdirSync(servicesDir).filter((f) => f.endsWith('.yaml')).map((f) => [f, yaml.load(fs.readFileSync(path.join(servicesDir, f), 'utf8'))]));
const methods = (f, res) => docs[f].components['x-stackQL-resources'][res].methods;
check('audit.records.list carries cursor pagination', methods('audit.yaml', 'records').list.config?.pagination?.requestToken?.key === 'cursor' && methods('audit.yaml', 'records').list.config.pagination.responseToken.key === 'next_cursor');
let paginated = 0;
for (const d of Object.values(docs)) for (const res of Object.values(d.components['x-stackQL-resources'])) for (const m of Object.values(res.methods)) if (m.config?.pagination) paginated++;
check('18 cursor-paginated list methods', paginated === 18, `got ${paginated}`);
check('incidents.list has limit (top) pushdown', methods('incidents.yaml', 'incidents').list.config?.queryParamPushdown?.top?.paramName === 'limit');
check('analytics.incident_metrics.list objectKey $.data', methods('analytics.yaml', 'incident_metrics').list.response?.objectKey === '$.data');
const fromParam = Object.values(docs['incidents.yaml'].components.parameters).find((p) => p.name === 'From');
check('From header parameter is optional (bound as "From" in SQL)', fromParam && fromParam.required === false, JSON.stringify(fromParam));
const snoozeOp = docs['incidents.yaml'].paths['/incidents/{id}/snooze'].post;
const snoozeSchema = snoozeOp.requestBody.content['application/json'].schema;
check('snooze body: required lifted so @@json can carry the integer duration', !snoozeSchema.required && snoozeSchema.properties.duration.type === 'integer' && /@@json/.test(snoozeOp.description), JSON.stringify(snoozeSchema));
let requiredHeaders = 0;
for (const d of Object.values(docs)) {
  for (const p of Object.values(d.components?.parameters || {})) if (p.in === 'header' && p.required) requiredHeaders++;
  for (const item of Object.values(d.paths)) for (const verb of ['get', 'post', 'put', 'patch', 'delete']) for (const p of item[verb]?.parameters || []) if (p.in === 'header' && p.required) requiredHeaders++;
}
check('no required header parameters remain', requiredHeaders === 0, `got ${requiredHeaders}`);
check('every service document has a fixed api.pagerduty.com server', Object.values(docs).every((d) => d.servers?.[0]?.url === 'https://api.pagerduty.com' && !d.servers[0].variables));
const provider = yaml.load(fs.readFileSync(path.join(servicesDir, '..', 'provider.yaml'), 'utf8'));
check('provider auth: api_key, Token token= prefix, PAGERDUTY_TOKEN', provider.config?.auth?.type === 'api_key' && provider.config.auth.valuePrefix === 'Token token=' && provider.config.auth.credentialsenvvar === 'PAGERDUTY_TOKEN', JSON.stringify(provider.config));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
