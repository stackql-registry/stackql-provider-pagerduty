# Engineering Notes

Findings from the 2026-09 refresh, each with the evidence behind it. Sources: the pinned spec (`provider-dev/downloaded/pagerduty-rest-v2.json`, sha256 `b2e80f8b83b1...`, fetched 2026-09-15 from `PagerDuty/api-schema`), the any-sdk source (`stackql/core/any-sdk`, v0.5.5-alpha01 / commit `dc7bad2`), stackql v0.11.669 (the WSL binary the tests ran with), and probes against the mock API in `tests/integration/`. Live verification against a real account was not possible during the refresh (no account access); the smoke suite in `tests/` is the deferred verification.

## 1. Spec source and shape

The previous release built from `https://api-reference.pagerduty.com/output/openapi.json`, which now returns 404. The vendor publishes the REST spec in GitHub (`PagerDuty/api-schema`, `reference/REST/openapiv3.json`): OpenAPI 3.0.2, `info.version` 2.0.0, 273 paths, 465 operations, 47 tags, no release tags, so the sha256 pin is the record of what was built. Sibling references in the same repository (`events-v2`, `scim`, `mcp`, the Slack / Jira / Teams integration APIs) are separate surfaces on other hosts and are out of scope.

Compared with the previous provider (33 services, 438 methods): 11 new services (`alert_grouping_settings`, `enrichment`, `incident_types`, `ip_allow_lists`, `oauth_delegations`, `recommendations`, `schedules_v3`, `session_configurations`, `sre_agent`, `standards`, `status_pages`, `workflow_integrations`, with `custom_fields` re-scoped), and `response_plays` is gone from the vendor spec. 14 operations are vendor-deprecated (the incident custom field definitions under `/incidents/custom_fields`, user sessions, the OAuth revocation status read) and are mapped as-is with the deprecation visible in the descriptions.

## 2. Header parameters

`Accept` (424 operations) and `Content-Type` (334) are declared REQUIRED with defaults. any-sdk's required-parameter check is `param.Required && !param.AllowEmptyValue` (params.go), defaults notwithstanding, so unmodified they would be required WHERE / INSERT keys on every method. Probe: with the parameters present and optional, stackql sent `Accept: application/json` regardless of a WHERE value (the response media type wins), and `Content-Type: application/json` on writes. The API serves v2 for that Accept (the previous release behaved identically). Both parameters are therefore removed by `pre_normalize.mjs` (758 references dropped). `X-EARLY-ACCESS` (6 operations, `ip_allow_lists`) is given the enum value as its default and IS prefilled by any-sdk (operation_store.go header prefill; verified by the mock: the header arrives without a WHERE value, and a WHERE value also arrives).

## 3. The From header

Required on 13 write operations in the spec (incident create/update/merge/notes/snooze/status updates, alerts, escalation policy create, maintenance window create, user create, log entry channel), optional on one. PagerDuty needs it only with an account-level General Access key (a User API token implies the user), so it is made optional. `from` is a reserved word in the stackql grammar (`stackql-parser` token.go). Probe results (mock, stackql v0.11.669):

| Spelling | Result |
|---|---|
| `INSERT ... (incident, "From") SELECT ..., 'a@b.com'` | From header sent |
| `INSERT ... (incident, from_email)` with `x-stackQL-alias: from_email` on the parameter | header NOT sent (alias not honoured for header params) |
| `` INSERT ... (incident, `From`) `` | parser error |
| `UPDATE ... SET incident = '...', "From" = 'a@b.com'` | From header sent |
| `EXEC ... @From = 'a@b.com'` and `@"From" = 'a@b.com'` | From header sent (both) |

Convention: double-quote `"From"` in INSERT / UPDATE; either spelling in EXEC. The docs sanitizer rewrites the generated examples accordingly.

## 4. Spec repairs the normalize pass needs

Verified by the failure they fix (stackql load errors) and by DESCRIBE afterwards:

- **Deep JSON-pointer refs** (511 inlined): the vendor references into schemas (`#/components/schemas/Tag/allOf/0` x33, `.../CustomFieldsFieldValue/properties/value/oneOf/N`, `.../responses/X/content/application~1json/schema/oneOf/N`). provider-utils normalize renames `oneOf`/`anyOf` to `allOf` and flattens `allOf`, so every positional pointer dangles: `failed to resolve "0" in fragment in URI ... slice index out of bounds` on load. `pre_normalize.mjs` inlines every non-top-level component ref (deep copy, sibling keys kept, targets taken from the full spec when the split document lacks them, referenced components copied in) before the generic pass.
- **Cross-kind refs** (2): `PUT .../cache_variables/{id}/data` (global and service) reference `#/components/requestBodies/OrchestrationCacheVariableDataPutResponse` as their 200 response. kin-openapi rejects a Response resolved from a RequestBody component (`bad data in "#/components/requestBodies/..."`) - the whole `event_orchestrations` service failed to load. Inlined.
- **Bare body unions** (6): the cache-variable data request/response bodies are a top-level `oneOf` of string / number / boolean variants; merged into one object schema (`cache_variable_data: string`) so the body attribute is addressable.

## 5. Pagination

Two styles in the spec (inventory, `provider-dev/config/endpoint_inventory.csv`):

- **Cursor** (18 GETs: audit records at seven scopes, automation actions and runners, incident workflow actions and triggers, workflow integrations and connections, enrichment records, user OAuth delegations, recommended rules, status dashboards, impacted business services): `cursor` query parameter, `next_cursor` in the body. Configured per method (`config.pagination`, requestToken `cursor`/query, responseToken `next_cursor`/body); verified by the mock - `audit.records` returns 3 rows across 2 pages and the second request carries `cursor=<next_cursor>`.
- **Classic offset** (41 GETs: incidents, services, users, teams, schedules, log entries, notifications, on-calls, etc.): `offset` / `limit` parameters, `more` / `total` in the body, no next token. any-sdk's pagination algorithms are token (request token + response token), `page_number` (current page vs total pages), `link_header_next` and `odata_next_link` - none can express "offset += limit while more" (pagination.go). Not configured; `limit` (max 100, default 25) and `offset` are ordinary WHERE parameters, documented on the landing page. **Core follow-up**: an `offset` pagination algorithm in any-sdk (`requestToken` offset, `responseTerminator` `more`) would make these 41 collections traverse automatically.

## 6. Query parameter pushdown

`post_process.mjs` configures `queryParamPushdown` on collection reads: `top` -> `limit` (max 100) on 61 methods, `orderBy` -> `sort_by` (syntax `suffix`, columns from the enum) on 6. Probe: `SELECT ... LIMIT 1` sends `limit=1` (verified, and correct in the presence of both pagination styles); `ORDER BY created_at DESC` does NOT send `sort_by` with stackql v0.11.669 - the generalised orderBy rendering (any-sdk #120) is newer than the binary, so the config is inert but harmless (ordering stays client-side and correct). Re-check after the next stackql release. Array filters (`statuses[]`, `service_ids[]`, `include[]`, `team_ids[]`, ...) are explicit parameters and reach the wire via a double-quoted identifier: `WHERE "statuses[]" = 'triggered'` (verified). One value per statement.

## 7. Request bodies and EXEC typing

`--naive-req-body-translate` exposes the top-level body properties as columns. PagerDuty bodies are wrapper-shaped (`{"team": {...}}`), so INSERT / UPDATE take the wrapper as a JSON string: `INSERT INTO pagerduty.teams.teams (team) SELECT '{"type": "team", "name": "..."}'` (verified: the wire body is `{"team": {...}}` with the JSON parsed, not a string). PUT-as-INSERT with a scalar body works (`teams.members.add`, `{"role": "responder"}`). A POST-based SELECT takes its body from the WHERE clause (`analytics.incident_metrics WHERE filters = '{...}'` -> `{"filters": {...}}`, verified).

The EXEC analyzer (stackql parserutil `CheckSQLParserTypeVsColumn` -> any-sdk `providerTypeConditionIsValid`) accepts `string`, `object`, `array`, `int`, `int32`, `int64` - not the OpenAPI names `integer`, `number`, `boolean`. So `EXEC ... snooze @duration = 3600` fails (`does NOT match SQL type 'IntVal'`) and `'3600'` fails too. The raw-body form `@@json='{"duration": 3600}'` works and sends an integer, but only when the attribute is not `required` (otherwise `required param not supplied for exec`). `post_process.mjs` lifts `required` on such EXEC bodies (currently one: snooze) and documents the `@@json` form in the description. **Core follow-up**: teach `providerTypeConditionIsValid` the OpenAPI type names. In UPDATE, `SET active = 'true'` is coerced to a JSON boolean on the wire (verified); a bare `true` is rejected (`RHS of type BoolVal not yet supported`).

## 8. Service region

The Terraform provider reads `PAGERDUTY_SERVICE_REGION=eu` to switch to `api.eu.pagerduty.com`. `api.us.pagerduty.com` resolves in DNS but does not serve HTTPS, so the two hosts cannot be produced from one `https://api.{region}.pagerduty.com` template. A host variable (`api_host`, `x-stackQL-envVar`) would work mechanically, but any-sdk marks every server variable required unless it is resolved from its env var (server.go `getServerVariablesMap`: `!isEnvResolved`, defaults ignored) and the docgen lists server variables as required on every method - the okta `subdomain` precedent. That would make US users export a variable or add `WHERE api_host = ...` to every query. Decision: fixed US server; EU unsupported in this release. **Core follow-up**: treat a server variable with a `default` as optional (env var, then WHERE, then default); with that, `api_host` (default `api.pagerduty.com`, envVar `PAGERDUTY_API_HOST`) gives EU parity without touching US usage.

## 9. Response envelopes and object keys

Collections wrap rows under the plural key (`{"incidents": [...], "offset", "limit", "more", "total"}`), single reads under the singular key (`{"incident": {...}}`); `classifyResponse` in `lib/spec_helpers.mjs` derives the object key from the schema (meta keys such as `offset`, `limit`, `more`, `total`, `next_cursor`, `response_metadata` excluded). Deviations handled explicitly: `GET /vendors/{id}` types `vendor` as an array (object key `$.vendor` kept, mapped as `get`); `GET /tags/{id}/{entity_type}` returns three arrays (no key; `tagged_entities.list` yields one row); `POST /schedules/{id}/overrides` returns a bare array (wrapped by the normalize pass); the analytics POSTs carry rows under `$.data`; `GET /abilities/{id}` is 204/402 (EXEC `check`). The generator only writes object keys onto GET methods, so `post_process.mjs` applies the CSV object key to the 15 POST-based selects.

## 10. Rate limit

PagerDuty applies a per-key rate limit to the REST API (documented on the developer portal under "REST API rate limits"; a `429` with `Retry-After` is the signal). The limit is generous for interactive use; the smoke runner pauses 0.25 s between statements and no retry policy is configured in the provider.

## 11. Verification status

| Layer | Status |
|---|---|
| Offline validation (`make test-offline`) | 33/33 |
| Mock-server integration (`make test-integration`) | 46/46 (6 informational: Accept value, orderBy pushdown, exec From spellings, early-access prefill) |
| Meta routes (`make test-meta`) | 44 services, 162 resources, 463 methods, 223 selectable, 9 non-selectable resources, no failures |
| Docs + website (`make docs`, `make website`) | 206 pages, no broken links |
| Live smoke (`make smoke`) | not run during the refresh (no account access) - run before publishing, then `make smoke-live` after |

Non-selectable resources (write-only surfaces): `business_services.account_subscriptions`, `enrichment.servicenow_tables`, `incident_workflows.instances`, `incident_workflows.trigger_services`, `incidents.responder_requests`, `incidents.status_updates`, `oauth_delegations.oauth_delegations`, `service_dependencies.dependencies`, `teams.escalation_policies`.
