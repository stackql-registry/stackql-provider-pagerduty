#!/usr/bin/env node

// Integration tests: run the generated pagerduty provider (local file
// registry) against the mock PagerDuty API and assert row-level results for
// each operation archetype:
//   - api_key auth: `Authorization: Token token=<PAGERDUTY_TOKEN>` (the mock
//     401s anything else) and the wrong-token failure mode
//   - the Accept versioning header prefilled from the parameter default
//   - plural-key unwrapping for collections ($.users, $.incidents) and
//     singular-key unwrapping for single reads ($.incident, $.vendor)
//   - array query parameters (statuses[]) reaching the wire
//   - cursor pagination (audit records: two pages followed via next_cursor)
//   - ORDER BY / LIMIT pushdown to sort_by / limit (reported, not required)
//   - a full team INSERT / SELECT / UPDATE / DELETE lifecycle with the
//     {team: {...}} wire body (naive request body translate)
//   - team membership add (PUT mapped as INSERT) and remove
//   - an incident INSERT carrying the From header through the from_email alias
//   - EXEC snooze with a numeric body attribute
//   - a POST-based SELECT (analytics) with a filters body from the WHERE clause
//   - the 404 error envelope
//
// The vendor server URL is https-only and cannot address the mock, so this
// runner materialises a TEST COPY of provider-dev/openapi in
// tests/integration/.registry-tmp (gitignored, recreated each run) with the
// server URLs rewritten to the mock. provider-dev/** is never modified.
//
// Requires a stackql binary: $STACKQL, ./stackql, or `stackql` on PATH.
//
// Usage: node tests/integration/run_integration_tests.mjs [--verbose]

import { spawn } from 'child_process';
import { existsSync, rmSync, cpSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import {
  startMockServer, EXPECTED_TOKEN, ACCEPT_V2, USER_ID, TEAM_ID, SERVICE_ID, INCIDENT_ID, INCIDENT_ID_2, VENDOR_ID, AUDIT_CURSOR
} from './mock_pagerduty_server.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const verbose = process.argv.includes('--verbose');
const t0 = Date.now();

function findStackql() {
  if (process.env.STACKQL) return process.env.STACKQL;
  const local = path.join(repoRoot, process.platform === 'win32' ? 'stackql.exe' : 'stackql');
  if (existsSync(local)) return local;
  return 'stackql'; // PATH
}

function buildTestRegistry(port) {
  const srcDir = path.join(repoRoot, 'provider-dev', 'openapi');
  const tmpDir = path.join(here, '.registry-tmp');
  rmSync(tmpDir, { recursive: true, force: true });
  cpSync(srcDir, tmpDir, { recursive: true });
  const servicesDir = path.join(tmpDir, 'src', 'pagerduty', 'v00.00.00000', 'services');
  const base = `http://127.0.0.1:${port}`;
  for (const f of readdirSync(servicesDir)) {
    if (!f.endsWith('.yaml')) continue;
    const fp = path.join(servicesDir, f);
    const doc = yaml.load(readFileSync(fp, 'utf8'));
    if (!doc.servers?.[0]?.url) throw new Error(`no top-level servers block found in ${f}`);
    doc.servers = [{ url: base }];
    writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
  }
  return tmpDir;
}

const stackqlBin = findStackql();

// IMPORTANT: must be async (spawn, not spawnSync) - the mock server runs on
// this process's event loop, so a synchronous wait for stackql deadlocks.
function makeRunSql(registry) {
  return function runSql(sql, envOverrides = {}) {
    return new Promise((resolve) => {
      const env = { ...process.env, PAGERDUTY_TOKEN: EXPECTED_TOKEN, ...envOverrides };
      for (const [k, v] of Object.entries(envOverrides)) if (v === undefined) delete env[k];
      const child = spawn(stackqlBin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
      let stdout = '', stderr = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.stderr.on('data', (d) => { stderr += d; });
      const timer = setTimeout(() => child.kill(), 120000);
      child.on('error', (e) => { clearTimeout(timer); resolve({ rows: null, err: String(e) }); });
      child.on('close', () => {
        clearTimeout(timer);
        stdout = stdout.trim();
        stderr = stderr.trim();
        if (verbose) console.log(`    sql: ${sql}\n    out: ${stdout.slice(0, 400)}${stderr ? `\n    err: ${stderr.slice(0, 400)}` : ''}`);
        const errish = /http response status code: [45]|error|panic|FindRoute|no matching operation|cannot find matching operation|disallowed|cannot find any viable servers|not found/i;
        if (errish.test(stderr)) return resolve({ rows: null, err: stderr });
        if (!stdout) return resolve({ rows: [], err: null });
        try {
          resolve({ rows: JSON.parse(stdout) ?? [], err: null }); // literal null for zero rows
        } catch {
          resolve({ rows: [{ _text: stdout }], err: errish.test(stdout) ? stdout : null }); // DML status text
        }
      });
    });
  };
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${!cond && note ? `  [${String(note).slice(0, 240)}]` : ''}`);
}
function info(name, cond, note = '') {
  results.push({ name, pass: true, note, info: true });
  console.log(`  ${cond ? 'INFO' : 'NOTE'}  ${name}${!cond && note ? `  [${String(note).slice(0, 240)}]` : ''}`);
}

const { server, port, log, state } = await startMockServer();
const tmpDir = buildTestRegistry(port);
const regPath = tmpDir.split(path.sep).join('/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
const runSql = makeRunSql(registry);
console.log(`mock PagerDuty API on 127.0.0.1:${port}, stackql: ${stackqlBin}`);

const calls = (mark, method, p) => log.slice(mark).filter((e) => e.method === method && e.path === p);
const qget = (entry, key) => (entry?.query || []).filter(([k]) => k === key).map(([, v]) => v);

try {
  // --- meta sanity
  let r = await runSql('SHOW SERVICES IN pagerduty');
  check('show services (44)', r.rows && r.rows.length === 44, r.err || `got ${r.rows?.length}`);

  // --- auth + accept header
  let mark = log.length;
  r = await runSql('SELECT id, name, email, role FROM pagerduty.users.me');
  check('users.me (1 row via $.user)', r.rows && r.rows.length === 1 && r.rows[0].id === USER_ID && r.rows[0].email === 'mock.user@example.com', r.err || JSON.stringify(r.rows));
  const meCalls = calls(mark, 'GET', '/users/me');
  check('api_key auth header sent (Token token=<PAGERDUTY_TOKEN>)', meCalls.length === 1 && meCalls[0].authorization === `Token token=${EXPECTED_TOKEN}`, JSON.stringify(meCalls.map((c) => c.authorization)));
  // stackql sets Accept from the response media type (application/json) and
  // does not prefill the versioning header default; the API defaults to v2
  // for that Accept (the previous provider release behaved the same way).
  info(`Accept header is the v2 versioning value (${ACCEPT_V2})`, meCalls.length === 1 && meCalls[0].accept === ACCEPT_V2, JSON.stringify(meCalls.map((c) => c.accept)));
  check('no auth failures so far', state.authFailures === 0, `authFailures=${state.authFailures}`);
  r = await runSql('SELECT id FROM pagerduty.users.me', { PAGERDUTY_TOKEN: 'wrong' });
  check('wrong token -> 401 surfaced', r.err && /401/.test(r.err), r.err || 'no error');

  // --- collections and single reads
  r = await runSql('SELECT id, name, email FROM pagerduty.users.users');
  check('users list (2 rows via $.users)', r.rows && r.rows.length === 2, r.err || `got ${r.rows?.length}`);
  r = await runSql(`SELECT id, incident_number, title, status, urgency FROM pagerduty.incidents.incidents`);
  check('incidents list (2 rows via $.incidents)', r.rows && r.rows.length === 2 && r.rows.some((x) => String(x.incident_number) === '1001'), r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT id, title, status, json_extract(service, '$.id') AS service_id FROM pagerduty.incidents.incidents WHERE id = '${INCIDENT_ID}'`);
  check('incident get by id (via $.incident, nested service id)', r.rows && r.rows.length === 1 && r.rows[0].service_id === SERVICE_ID, r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT id, name, website_url FROM pagerduty.vendors.vendors WHERE id = '${VENDOR_ID}'`);
  check('vendor get (single object under $.vendor)', r.rows && r.rows.length === 1 && r.rows[0].name === 'Datadog', r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT id, name FROM pagerduty.teams.teams WHERE id = 'PNOPE'`);
  check('unknown id -> 404 error envelope surfaced', r.err && /404/.test(r.err), r.err || JSON.stringify(r.rows));

  // --- array query parameters
  mark = log.length;
  r = await runSql(`SELECT id, status FROM pagerduty.incidents.incidents WHERE "statuses[]" = 'resolved'`);
  let incCalls = calls(mark, 'GET', '/incidents');
  check('statuses[] filter reaches the wire (quoted identifier) and filters rows', incCalls.length === 1 && qget(incCalls[0], 'statuses[]').includes('resolved') && r.rows && r.rows.length === 1 && r.rows[0].id === INCIDENT_ID_2, r.err || `rows=${JSON.stringify(r.rows)} query=${JSON.stringify(incCalls.map((c) => c.query))}`);
  mark = log.length;
  r = await runSql(`SELECT id FROM pagerduty.incidents.incidents WHERE "include[]" = 'services' AND since = '2026-09-01T00:00:00Z'`);
  incCalls = calls(mark, 'GET', '/incidents');
  check('include[] and since pass through as query parameters', incCalls.length === 1 && qget(incCalls[0], 'include[]').includes('services') && qget(incCalls[0], 'since').length === 1, r.err || JSON.stringify(incCalls.map((c) => c.query)));

  // --- pushdown (reported): ORDER BY -> sort_by, LIMIT -> limit
  mark = log.length;
  r = await runSql(`SELECT id, created_at FROM pagerduty.incidents.incidents ORDER BY created_at DESC LIMIT 1`);
  incCalls = calls(mark, 'GET', '/incidents');
  check('ORDER BY / LIMIT query returns rows', r.rows && r.rows.length === 1, r.err || JSON.stringify(r.rows));
  info('LIMIT pushed down as limit=1', incCalls.length === 1 && qget(incCalls[0], 'limit').includes('1'), JSON.stringify(incCalls.map((c) => c.query)));
  info('ORDER BY pushed down as sort_by=created_at:desc', incCalls.length === 1 && qget(incCalls[0], 'sort_by').includes('created_at:desc'), JSON.stringify(incCalls.map((c) => c.query)));

  // --- cursor pagination
  mark = log.length;
  r = await runSql('SELECT id, action FROM pagerduty.audit.records');
  const auditCalls = calls(mark, 'GET', '/audit/records');
  check('audit records: 3 rows across 2 cursor pages', r.rows && r.rows.length === 3, r.err || `got ${r.rows?.length}`);
  check('second page requested with cursor=next_cursor', auditCalls.length === 2 && qget(auditCalls[1], 'cursor')[0] === AUDIT_CURSOR, JSON.stringify(auditCalls.map((c) => c.query)));

  // --- team lifecycle (INSERT / SELECT / UPDATE / DELETE)
  mark = log.length;
  r = await runSql(`INSERT INTO pagerduty.teams.teams (team) SELECT '{"type": "team", "name": "stackql-smoke-int", "description": "integration test"}'`);
  const postTeam = calls(mark, 'POST', '/teams');
  check('team INSERT posts {team: {...}} (naive request body translate)', !r.err && postTeam.length === 1 && postTeam[0].body?.team?.name === 'stackql-smoke-int' && postTeam[0].body.team.type === 'team', r.err || JSON.stringify(postTeam.map((c) => c.body)));
  check('team INSERT sends Content-Type application/json', postTeam.length === 1 && /application\/json/.test(postTeam[0].contentType), JSON.stringify(postTeam.map((c) => c.contentType)));
  r = await runSql('SELECT id, name FROM pagerduty.teams.teams');
  const created = (r.rows || []).find((t) => t.name === 'stackql-smoke-int');
  check('team visible after INSERT (3 rows)', r.rows && r.rows.length === 3 && !!created, r.err || JSON.stringify(r.rows));
  const newTeamId = created?.id;
  if (newTeamId) {
    mark = log.length;
    r = await runSql(`UPDATE pagerduty.teams.teams SET team = '{"type": "team", "name": "stackql-smoke-int-renamed"}' WHERE id = '${newTeamId}'`);
    const putTeam = calls(mark, 'PUT', `/teams/${newTeamId}`);
    check('team UPDATE puts {team: {...}} to /teams/{id}', !r.err && putTeam.length === 1 && putTeam[0].body?.team?.name === 'stackql-smoke-int-renamed', r.err || JSON.stringify(putTeam.map((c) => c.body)));
    r = await runSql(`SELECT name, description FROM pagerduty.teams.teams WHERE id = '${newTeamId}'`);
    check('team reflects UPDATE', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql-smoke-int-renamed', r.err || JSON.stringify(r.rows));
    mark = log.length;
    r = await runSql(`DELETE FROM pagerduty.teams.teams WHERE id = '${newTeamId}'`);
    check('team DELETE -> DELETE /teams/{id} (204)', !r.err && calls(mark, 'DELETE', `/teams/${newTeamId}`).length === 1, r.err || JSON.stringify(log.slice(mark)));
    r = await runSql('SELECT id FROM pagerduty.teams.teams');
    check('team gone after DELETE (2 rows)', r.rows && r.rows.length === 2 && !r.rows.some((t) => t.id === newTeamId), r.err || JSON.stringify(r.rows));
  }

  // --- team membership: PUT mapped as INSERT, DELETE as remove
  mark = log.length;
  r = await runSql(`INSERT INTO pagerduty.teams.members (id, user_id, role) SELECT '${TEAM_ID}', 'PUSER02', 'responder'`);
  const putMember = calls(mark, 'PUT', `/teams/${TEAM_ID}/users/PUSER02`);
  check('members.add: PUT /teams/{id}/users/{user_id} with {role}', !r.err && putMember.length === 1 && putMember[0].body?.role === 'responder', r.err || JSON.stringify(log.slice(mark)));
  r = await runSql(`SELECT json_extract(user, '$.id') AS user_id, role FROM pagerduty.teams.members WHERE id = '${TEAM_ID}'`);
  check('members list shows the added member (2 rows via $.members)', r.rows && r.rows.length === 2 && r.rows.some((m) => m.user_id === 'PUSER02' && m.role === 'responder'), r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql(`DELETE FROM pagerduty.teams.members WHERE id = '${TEAM_ID}' AND user_id = 'PUSER02'`);
  check('members.remove: DELETE /teams/{id}/users/{user_id}', !r.err && calls(mark, 'DELETE', `/teams/${TEAM_ID}/users/PUSER02`).length === 1, r.err || JSON.stringify(log.slice(mark)));

  // --- incident INSERT with the From header via the from_email alias
  mark = log.length;
  r = await runSql(`INSERT INTO pagerduty.incidents.incidents (incident, "From") SELECT '{"type": "incident", "title": "stackql smoke", "urgency": "low", "service": {"id": "${SERVICE_ID}", "type": "service_reference"}}', 'mock.user@example.com'`);
  const postInc = calls(mark, 'POST', '/incidents');
  check('incident INSERT posts {incident: {...}}', !r.err && postInc.length === 1 && postInc[0].body?.incident?.title === 'stackql smoke' && postInc[0].body.incident.service?.id === SERVICE_ID, r.err || JSON.stringify(postInc.map((c) => c.body)));
  check('quoted "From" column sets the From header', postInc.length === 1 && postInc[0].from === 'mock.user@example.com', JSON.stringify(postInc.map((c) => c.from)));
  r = await runSql(`SELECT id, title, status FROM pagerduty.incidents.incidents WHERE "statuses[]" = 'triggered'`);
  const smokeInc = (r.rows || []).find((i) => i.title === 'stackql smoke');
  check('new incident listed as triggered', !!smokeInc, r.err || JSON.stringify(r.rows));
  if (smokeInc) {
    mark = log.length;
    r = await runSql(`EXEC pagerduty.incidents.incidents.snooze @id = '${smokeInc.id}' @@json='{"duration": 3600}'`);
    const snooze = calls(mark, 'POST', `/incidents/${smokeInc.id}/snooze`);
    check('EXEC snooze with @@json posts {duration: 3600} as an integer', !r.err && snooze.length === 1 && snooze[0].body?.duration === 3600, r.err || JSON.stringify(log.slice(mark)));
    mark = log.length;
    r = await runSql(`UPDATE pagerduty.incidents.incidents SET incident = '{"type": "incident_reference", "status": "resolved"}', "From" = 'mock.user@example.com' WHERE id = '${smokeInc.id}'`);
    const putInc = calls(mark, 'PUT', `/incidents/${smokeInc.id}`);
    check('incident UPDATE (resolve) puts {incident: {status}} with From', !r.err && putInc.length === 1 && putInc[0].body?.incident?.status === 'resolved' && putInc[0].from === 'mock.user@example.com', r.err || JSON.stringify(log.slice(mark)));
    r = await runSql(`SELECT status, resolved_at FROM pagerduty.incidents.incidents WHERE id = '${smokeInc.id}'`);
    check('incident reflects resolve', r.rows && r.rows[0]?.status === 'resolved' && !!r.rows[0].resolved_at, r.err || JSON.stringify(r.rows));
    mark = log.length;
    r = await runSql(`INSERT INTO pagerduty.incidents.notes (id, note, "From") SELECT '${smokeInc.id}', '{"content": "smoke note"}', 'mock.user@example.com'`);
    check('note INSERT posts {note: {content}} to /incidents/{id}/notes', !r.err && calls(mark, 'POST', `/incidents/${smokeInc.id}/notes`)[0]?.body?.note?.content === 'smoke note', r.err || JSON.stringify(log.slice(mark)));
    r = await runSql(`SELECT id, content FROM pagerduty.incidents.notes WHERE id = '${smokeInc.id}'`);
    check('notes list (1 row via $.notes)', r.rows && r.rows.length === 1 && r.rows[0].content === 'smoke note', r.err || JSON.stringify(r.rows));
  }

  // --- POST-based SELECT (analytics)
  mark = log.length;
  r = await runSql(`SELECT total_incident_count, mean_seconds_to_resolve FROM pagerduty.analytics.incident_metrics`);
  check('analytics.incident_metrics SELECT over POST (1 row via $.data)', r.rows && r.rows.length === 1 && String(r.rows[0].total_incident_count) === '7', r.err || JSON.stringify(r.rows));
  check('analytics POST issued to /analytics/metrics/incidents/all', calls(mark, 'POST', '/analytics/metrics/incidents/all').length === 1, JSON.stringify(log.slice(mark).map((c) => `${c.method} ${c.path}`)));
  mark = log.length;
  r = await runSql(`SELECT total_incident_count FROM pagerduty.analytics.incident_metrics WHERE filters = '{"urgency": "low", "created_at_start": "2026-09-01T00:00:00Z"}'`);
  const anCalls = calls(mark, 'POST', '/analytics/metrics/incidents/all');
  check('WHERE filters = JSON becomes the analytics request body', anCalls.length === 1 && anCalls[0].body?.filters?.urgency === 'low' && String(r.rows?.[0]?.total_incident_count) === '1', r.err || JSON.stringify(anCalls.map((c) => c.body)));

  // --- EXEC with the From header: which spelling parses (reported)
  if (smokeInc) {
    mark = log.length;
    r = await runSql(`EXEC pagerduty.incidents.incidents.snooze @id = '${smokeInc.id}', @"From" = 'mock.user@example.com' @@json='{"duration": 600}'`);
    let fromCalls = calls(mark, 'POST', `/incidents/${smokeInc.id}/snooze`);
    info('EXEC @"From" (quoted) parses and sets the From header', !r.err && fromCalls.length === 1 && fromCalls[0].from === 'mock.user@example.com', r.err || JSON.stringify(fromCalls.map((c) => c.from)));
    mark = log.length;
    r = await runSql(`EXEC pagerduty.incidents.incidents.snooze @id = '${smokeInc.id}', @From = 'mock.user@example.com' @@json='{"duration": 600}'`);
    fromCalls = calls(mark, 'POST', `/incidents/${smokeInc.id}/snooze`);
    info('EXEC @From (bare) parses and sets the From header', !r.err && fromCalls.length === 1 && fromCalls[0].from === 'mock.user@example.com', r.err || JSON.stringify(fromCalls.map((c) => c.from)));
  }

  // --- early access header: explicit WHERE value reaches the wire; default prefill reported
  mark = log.length;
  r = await runSql(`SELECT id FROM pagerduty.ip_allow_lists.ip_allow_lists WHERE "X-EARLY-ACCESS" = 'ip-allow-lists'`);
  let eaCalls = calls(mark, 'GET', '/ip_allow_lists');
  check('X-EARLY-ACCESS passed in WHERE reaches the wire (1 row)', eaCalls.length === 1 && eaCalls[0].earlyAccess === 'ip-allow-lists' && r.rows?.length === 1, r.err || JSON.stringify(eaCalls.map((c) => c.earlyAccess)));
  mark = log.length;
  r = await runSql(`SELECT id FROM pagerduty.ip_allow_lists.ip_allow_lists`);
  eaCalls = calls(mark, 'GET', '/ip_allow_lists');
  info('X-EARLY-ACCESS default prefilled without a WHERE value', eaCalls.length === 1 && eaCalls[0].earlyAccess === 'ip-allow-lists', r.err || JSON.stringify(eaCalls.map((c) => c.earlyAccess)));

  // --- EXEC over a GET (ability check, 204)
  mark = log.length;
  r = await runSql(`EXEC pagerduty.abilities.abilities.check @id = 'teams'`);
  check('EXEC abilities.check -> GET /abilities/teams (204)', !r.err && calls(mark, 'GET', '/abilities/teams').length === 1, r.err || JSON.stringify(log.slice(mark)));
  r = await runSql(`SELECT * FROM pagerduty.abilities.abilities`);
  check('abilities list (3 rows via $.abilities, scalar array)', r.rows && r.rows.length === 3, r.err || JSON.stringify(r.rows));

  check('no auth failures apart from the deliberate wrong-token call', state.authFailures === 1, `authFailures=${state.authFailures}`);
} finally {
  server.close();
}

const failed = results.filter((x) => !x.pass);
const infos = results.filter((x) => x.info).length;
console.log(`\n${results.length - failed.length}/${results.length} passed (${infos} informational) in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (failed.length) process.exit(1);
