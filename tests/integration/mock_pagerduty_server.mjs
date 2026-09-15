#!/usr/bin/env node

// Mock PagerDuty REST API v2 for integration-testing the generated pagerduty
// provider without an account. Serves canned JSON in the wire shapes the
// real API produces: collections wrap their rows under a plural key with
// offset/limit/more/total (classic pagination) or limit/next_cursor (cursor
// pagination); single reads wrap the object under its singular key; deletes
// are 204 with no body; errors are {"error": {"message", "code", "errors"}}.
// Mutable in-memory stores make the team and incident lifecycles round-trip.
//
// Every request must carry `Authorization: Token token=<EXPECTED_TOKEN>` or
// it is rejected 401 with the real error envelope - this proves the
// provider's api_key wiring (PAGERDUTY_TOKEN, `Token token=` prefix).
//
// Every request is appended to the exported `log` (method, path, query
// pairs, selected headers, parsed JSON body) so the runner can assert the
// exact wire shapes stackql produced.
//
// Exports startMockServer() for the test runner; also runnable standalone:
//   node tests/integration/mock_pagerduty_server.mjs [port]

import http from 'http';
import { URL } from 'url';

export const EXPECTED_TOKEN = 'mock-pagerduty-token';
export const ACCEPT_V2 = 'application/vnd.pagerduty+json;version=2';
export const USER_ID = 'PUSER01';
export const TEAM_ID = 'PTEAM01';
export const TEAM_ID_2 = 'PTEAM02';
export const SERVICE_ID = 'PSVC001';
export const INCIDENT_ID = 'PINC001';
export const INCIDENT_ID_2 = 'PINC002';
export const VENDOR_ID = 'PVEND01';
export const AUDIT_CURSOR = 'eyJvZmZzZXQiOjJ9';

let idCounter = 0;
function newId(prefix) {
  idCounter++;
  return `${prefix}${String(idCounter).padStart(4, '0')}`;
}

// ---------------------------------------------------------------------------
// Fixtures (wire shapes per the PagerDuty REST API v2 reference)
// ---------------------------------------------------------------------------

const ref = (id, type, summary) => ({ id, type, summary, self: `https://api.pagerduty.com/${type.replace(/_reference$/, '')}s/${id}`, html_url: `https://mock.pagerduty.com/${id}` });

function userObj(id, name, email, role = 'user') {
  return {
    id, type: 'user', summary: name, self: `https://api.pagerduty.com/users/${id}`, html_url: `https://mock.pagerduty.com/users/${id}`,
    name, email, time_zone: 'Australia/Sydney', color: 'teal', role, avatar_url: 'https://secure.gravatar.com/avatar/0', description: null,
    invitation_sent: false, job_title: 'SRE', teams: [], contact_methods: [], notification_rules: [], coordinated_incidents: []
  };
}

function teamObj(id, name, description = 'mock team', extra = {}) {
  return {
    id, type: 'team', summary: name, self: `https://api.pagerduty.com/teams/${id}`, html_url: `https://mock.pagerduty.com/teams/${id}`,
    name, description, default_role: 'manager', parent: null, ...extra
  };
}

function serviceObj(id, name) {
  return {
    id, type: 'service', summary: name, self: `https://api.pagerduty.com/services/${id}`, html_url: `https://mock.pagerduty.com/service-directory/${id}`,
    name, description: 'mock service', auto_resolve_timeout: 14400, acknowledgement_timeout: 600, created_at: '2026-01-05T10:00:00Z',
    updated_at: '2026-01-05T10:00:00Z', status: 'active', alert_creation: 'create_alerts_and_incidents',
    escalation_policy: ref('PEP0001', 'escalation_policy_reference', 'Default'), teams: [ref(TEAM_ID, 'team_reference', 'Platform')],
    integrations: [], incident_urgency_rule: { type: 'constant', urgency: 'high' }, support_hours: null, scheduled_actions: [], addons: []
  };
}

function incidentObj(id, number, title, status, extra = {}) {
  return {
    id, type: 'incident', summary: `[#${number}] ${title}`, self: `https://api.pagerduty.com/incidents/${id}`, html_url: `https://mock.pagerduty.com/incidents/${id}`,
    incident_number: number, title, description: title, created_at: '2026-09-01T00:00:00Z', updated_at: '2026-09-01T00:05:00Z', status,
    incident_key: `key-${id}`, service: ref(SERVICE_ID, 'service_reference', 'Checkout API'), assignments: [], assigned_via: 'escalation_policy',
    last_status_change_at: '2026-09-01T00:05:00Z', resolved_at: null, first_trigger_log_entry: ref('R0001', 'trigger_log_entry_reference', 'Triggered'),
    alert_counts: { all: 1, triggered: status === 'triggered' ? 1 : 0, resolved: status === 'resolved' ? 1 : 0 }, is_mergeable: true,
    escalation_policy: ref('PEP0001', 'escalation_policy_reference', 'Default'), teams: [], pending_actions: [], alert_grouping: null,
    last_status_change_by: ref(SERVICE_ID, 'service_reference', 'Checkout API'), priority: null, urgency: 'high', ...extra
  };
}

function auditRecord(id, action) {
  return {
    id, execution_time: '2026-09-01T00:00:00Z', execution_context: { request_id: `req-${id}` }, action,
    actors: [{ id: USER_ID, type: 'user_reference', summary: 'Mock User' }], method: { type: 'api_token', truncated_token: 'ab12' },
    root_resource: { id: TEAM_ID, type: 'team_reference' }, details: { resource: { id: TEAM_ID, type: 'team_reference' }, fields: [] }
  };
}

function makeState() {
  const users = new Map([[USER_ID, userObj(USER_ID, 'Mock User', 'mock.user@example.com', 'admin')], ['PUSER02', userObj('PUSER02', 'Second User', 'second@example.com')]]);
  const teams = new Map([[TEAM_ID, teamObj(TEAM_ID, 'Platform')], [TEAM_ID_2, teamObj(TEAM_ID_2, 'Payments')]]);
  const services = new Map([[SERVICE_ID, serviceObj(SERVICE_ID, 'Checkout API')]]);
  const incidents = new Map([
    [INCIDENT_ID, incidentObj(INCIDENT_ID, 1001, 'Checkout latency', 'triggered')],
    [INCIDENT_ID_2, incidentObj(INCIDENT_ID_2, 1002, 'Disk full', 'resolved', { resolved_at: '2026-09-01T01:00:00Z' })]
  ]);
  const members = new Map([[TEAM_ID, [{ user: ref(USER_ID, 'user_reference', 'Mock User'), role: 'manager' }]]]);
  const audit = [auditRecord('A0001', 'create'), auditRecord('A0002', 'update'), auditRecord('A0003', 'update')];
  return { users, teams, services, incidents, members, audit, authFailures: 0 };
}

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

export async function startMockServer(port = 0) {
  const state = makeState();
  const log = [];

  function send(res, status, body, extraHeaders = {}) {
    const headers = { 'X-Request-Id': `req-${log.length}`, ...extraHeaders };
    if (body === undefined) {
      res.writeHead(status, headers);
      res.end();
      return;
    }
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...headers });
    res.end(JSON.stringify(body));
  }
  const notFound = (res) => send(res, 404, { error: { message: 'Not Found', code: 2100 } });
  const badRequest = (res, msg) => send(res, 400, { error: { message: 'Invalid Input Provided', code: 2001, errors: [msg] } });
  const collection = (key, rows, q) => {
    const limit = Number(q.get('limit') || 25);
    const offset = Number(q.get('offset') || 0);
    const page = rows.slice(offset, offset + limit);
    return { [key]: page, limit, offset, more: offset + limit < rows.length, total: q.get('total') === 'true' ? rows.length : null };
  };

  const server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', (c) => (raw += c));
    req.on('end', () => {
      const url = new URL(req.url, 'http://localhost');
      const q = url.searchParams;
      let body = null;
      if (raw) { try { body = JSON.parse(raw); } catch { body = raw; } }
      const entry = {
        method: req.method, path: url.pathname, query: [...q.entries()],
        authorization: req.headers.authorization || '', accept: req.headers.accept || '', from: req.headers.from || '',
        contentType: req.headers['content-type'] || '', earlyAccess: req.headers['x-early-access'] || '', body
      };
      log.push(entry);

      if (entry.authorization !== `Token token=${EXPECTED_TOKEN}`) {
        state.authFailures++;
        return send(res, 401, { error: { message: 'Unauthorized', code: 2001 } });
      }

      const p = url.pathname;
      const m = (re) => p.match(re);
      let x;

      // --- users
      if (req.method === 'GET' && p === '/users/me') return send(res, 200, { user: state.users.get(USER_ID) });
      if (req.method === 'GET' && p === '/users') return send(res, 200, collection('users', [...state.users.values()], q));
      if ((x = m(/^\/users\/([^/]+)$/)) && req.method === 'GET') {
        const u = state.users.get(x[1]);
        return u ? send(res, 200, { user: u }) : notFound(res);
      }

      // --- abilities
      if (req.method === 'GET' && p === '/abilities') return send(res, 200, { abilities: ['teams', 'sso', 'advanced_permissions'] });
      if ((x = m(/^\/abilities\/([^/]+)$/)) && req.method === 'GET') return x[1] === 'teams' ? send(res, 204) : send(res, 402, { error: { message: 'Payment Required', code: 2016 } });

      // --- ip allow lists (early access: the X-EARLY-ACCESS header is mandatory)
      if (req.method === 'GET' && p === '/ip_allow_lists') {
        if (entry.earlyAccess !== 'ip-allow-lists') return send(res, 403, { error: { message: 'This endpoint requires the X-EARLY-ACCESS header', code: 2010 } });
        return send(res, 200, { ip_allow_lists: [{ id: 'PIPL001', type: 'ip_allow_list', name: 'office', cidrs: ['203.0.113.0/24'], enabled: true }] });
      }

      // --- vendors
      if ((x = m(/^\/vendors\/([^/]+)$/)) && req.method === 'GET') {
        return x[1] === VENDOR_ID ? send(res, 200, { vendor: { id: VENDOR_ID, type: 'vendor', summary: 'Datadog', name: 'Datadog', website_url: 'https://www.datadoghq.com', integration_guide_url: null, is_pd_cef: false } }) : notFound(res);
      }

      // --- services
      if (req.method === 'GET' && p === '/services') return send(res, 200, collection('services', [...state.services.values()], q));
      if ((x = m(/^\/services\/([^/]+)$/)) && req.method === 'GET') {
        const s = state.services.get(x[1]);
        return s ? send(res, 200, { service: s }) : notFound(res);
      }

      // --- teams (full lifecycle)
      if (req.method === 'GET' && p === '/teams') return send(res, 200, collection('teams', [...state.teams.values()], q));
      if (req.method === 'POST' && p === '/teams') {
        if (!body?.team?.name) return badRequest(res, 'Name is required');
        const id = newId('PTEAM');
        const t = teamObj(id, body.team.name, body.team.description || null, body.team.default_role ? { default_role: body.team.default_role } : {});
        state.teams.set(id, t);
        return send(res, 201, { team: t });
      }
      if ((x = m(/^\/teams\/([^/]+)$/))) {
        const t = state.teams.get(x[1]);
        if (!t) return notFound(res);
        if (req.method === 'GET') return send(res, 200, { team: t });
        if (req.method === 'PUT') {
          if (!body?.team) return badRequest(res, 'team is required');
          Object.assign(t, { name: body.team.name ?? t.name, description: body.team.description ?? t.description, summary: body.team.name ?? t.name });
          return send(res, 200, { team: t });
        }
        if (req.method === 'DELETE') { state.teams.delete(x[1]); return send(res, 204); }
      }
      if ((x = m(/^\/teams\/([^/]+)\/members$/)) && req.method === 'GET') {
        if (!state.teams.has(x[1])) return notFound(res);
        return send(res, 200, collection('members', state.members.get(x[1]) || [], q));
      }
      if ((x = m(/^\/teams\/([^/]+)\/users\/([^/]+)$/))) {
        if (!state.teams.has(x[1]) || !state.users.has(x[2])) return notFound(res);
        const list = state.members.get(x[1]) || [];
        if (req.method === 'PUT') {
          list.push({ user: ref(x[2], 'user_reference', state.users.get(x[2]).name), role: body?.role || 'manager' });
          state.members.set(x[1], list);
          return send(res, 204);
        }
        if (req.method === 'DELETE') {
          state.members.set(x[1], list.filter((mm) => mm.user.id !== x[2]));
          return send(res, 204);
        }
      }

      // --- incidents
      if (req.method === 'GET' && p === '/incidents') {
        let rows = [...state.incidents.values()];
        const statuses = q.getAll('statuses[]');
        if (statuses.length) rows = rows.filter((i) => statuses.includes(i.status));
        const sort = q.get('sort_by');
        if (sort) {
          const [col, dir] = sort.split(':');
          rows.sort((a, b) => (a[col] > b[col] ? 1 : a[col] < b[col] ? -1 : 0) * (dir === 'desc' ? -1 : 1));
        }
        return send(res, 200, collection('incidents', rows, q));
      }
      if (req.method === 'POST' && p === '/incidents') {
        if (!body?.incident?.title || !body.incident.service?.id) return badRequest(res, 'title and service are required');
        const id = newId('PINC');
        const inc = incidentObj(id, 2000 + idCounter, body.incident.title, 'triggered', { urgency: body.incident.urgency || 'high' });
        state.incidents.set(id, inc);
        return send(res, 201, { incident: inc });
      }
      if ((x = m(/^\/incidents\/([^/]+)$/))) {
        const inc = state.incidents.get(x[1]);
        if (!inc) return notFound(res);
        if (req.method === 'GET') return send(res, 200, { incident: inc });
        if (req.method === 'PUT') {
          if (!body?.incident) return badRequest(res, 'incident is required');
          if (body.incident.status) inc.status = body.incident.status;
          if (body.incident.title) inc.title = body.incident.title;
          if (body.incident.status === 'resolved') inc.resolved_at = '2026-09-01T02:00:00Z';
          return send(res, 200, { incident: inc });
        }
      }
      if ((x = m(/^\/incidents\/([^/]+)\/snooze$/)) && req.method === 'POST') {
        const inc = state.incidents.get(x[1]);
        if (!inc) return notFound(res);
        if (typeof body?.duration !== 'number') return badRequest(res, 'duration is required');
        inc.pending_actions = [{ type: 'unacknowledge', at: '2026-09-01T03:00:00Z' }];
        return send(res, 201, { incident: inc });
      }
      if ((x = m(/^\/incidents\/([^/]+)\/notes$/))) {
        const inc = state.incidents.get(x[1]);
        if (!inc) return notFound(res);
        inc.notes = inc.notes || [];
        if (req.method === 'GET') return send(res, 200, { notes: inc.notes });
        if (req.method === 'POST') {
          if (!body?.note?.content) return badRequest(res, 'note content is required');
          const note = { id: newId('PNOTE'), user: ref(USER_ID, 'user_reference', 'Mock User'), channel: { summary: 'The PagerDuty website or APIs' }, content: body.note.content, created_at: '2026-09-01T00:10:00Z' };
          inc.notes.push(note);
          return send(res, 200, { note });
        }
      }

      // --- audit (cursor pagination: two pages)
      if (req.method === 'GET' && p === '/audit/records') {
        const cursor = q.get('cursor');
        const limit = Number(q.get('limit') || 2);
        if (!cursor) return send(res, 200, { records: state.audit.slice(0, 2), limit, next_cursor: AUDIT_CURSOR, response_metadata: { messages: [] } });
        if (cursor === AUDIT_CURSOR) return send(res, 200, { records: state.audit.slice(2), limit, next_cursor: null, response_metadata: { messages: [] } });
        return badRequest(res, 'Invalid cursor');
      }

      // --- analytics (POST-based read)
      if (req.method === 'POST' && p === '/analytics/metrics/incidents/all') {
        const filters = body?.filters || {};
        return send(res, 200, {
          filters, time_zone: body?.time_zone || 'Etc/UTC', aggregate_unit: body?.aggregate_unit || null,
          data: [{
            mean_seconds_to_resolve: 3600, mean_seconds_to_first_ack: 120, total_incident_count: filters.urgency === 'low' ? 1 : 7,
            total_notifications: 14, up_time_pct: 99.9, mean_assignment_count: 1, total_escalation_count: 2, range_start: filters.created_at_start || '2026-09-01T00:00:00Z'
          }]
        });
      }

      return notFound(res);
    });
  });

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  return { server, port: server.address().port, log, state };
}

if (process.argv[1] && process.argv[1].endsWith('mock_pagerduty_server.mjs')) {
  const { port } = await startMockServer(Number(process.argv[2] || 8642));
  console.log(`mock PagerDuty API listening on http://127.0.0.1:${port} (Authorization: Token token=${EXPECTED_TOKEN})`);
}
