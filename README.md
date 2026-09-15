# `pagerduty` provider for [`stackql`](https://github.com/stackql/stackql)

This repository builds and documents the `pagerduty` provider for StackQL, enabling SQL-based query and provisioning operations against the [PagerDuty REST API v2](https://developer.pagerduty.com/api-reference/) - incidents and their alerts, notes, log entries, status updates and responder requests; services and integrations; escalation policies; schedules and on-calls; teams and members; users, contact methods and notification rules; maintenance windows; business services; event orchestrations; incident workflows; automation actions; tags; webhooks; status pages; standards; audit records; analytics. The full published surface: 44 services, 162 resources, 463 methods.

Provider docs: [pagerduty-provider.stackql.io](https://pagerduty-provider.stackql.io).

## Design principles

- **Terraform-parity authentication.** A REST API token (User API token or account-level General Access key) read from `PAGERDUTY_TOKEN` - the variable the Terraform PagerDuty provider uses - and sent as `Authorization: Token token=...` (provider config `{"auth": {"type": "api_key", "valuePrefix": "Token token=", "credentialsenvvar": "PAGERDUTY_TOKEN"}}`).
- **Fixed US server.** `https://api.pagerduty.com`. The EU service region is not addressable in this release: any-sdk treats a server variable as a required parameter unless it is resolved from an environment variable, which would break zero-configuration use for US accounts. See NOTES.md section 8 for the reasoning and the core follow-up.
- **Wrapper-shaped bodies, snake_case wire.** PagerDuty bodies wrap the entity (`{"team": {...}}`); INSERT and UPDATE take the wrapper as a JSON string in the wrapper column (`--naive-req-body-translate`). The API is already snake_case, so no casing engine is needed. Array query parameters keep their bracketed wire names and are double-quoted in SQL: `WHERE "statuses[]" = 'triggered'`.
- **The `From` header.** PagerDuty attributes incident, note, snooze, status update, escalation policy, maintenance window and user writes to a person; with an account-level key the `From` header must carry a user's email. `from` is a reserved word in the StackQL grammar, so the parameter is double-quoted: `INSERT INTO pagerduty.incidents.incidents (incident, "From") SELECT '{...}', 'user@example.com'`.
- **Cursor pagination configured; offset pagination documented.** The 18 cursor-paginated collections (audit records, automation actions, workflow integrations, ...) are traversed automatically. The 41 classic `offset`/`limit` collections cannot be traversed by any-sdk today (no offset algorithm); they return one page of up to 100 rows and take `limit` / `offset` in the WHERE clause. A SQL `LIMIT` is pushed down to `limit`.
- **Durable mappings.** `provider-dev/config/all_services.csv` records every operation's resource, method, SQL verb and object key and is committed. `make check-mappings` fails when a spec refresh would change a previously mapped operation, so a resource or method rename between releases is always a reviewed decision.
- **Deterministic builds.** Every pipeline step is a re-runnable script; manual mapping decisions are rules in `provider-dev/scripts`, never hand-edits to CSVs or specs. Scripts validate and fail without writing on any violation.

## Prerequisites

- Node.js >= 20 and GNU make (Linux, macOS, or WSL on Windows)
- A local `stackql` binary for testing (`$STACKQL`, `./stackql`, or on `PATH`; `bin/start-server.sh` downloads the latest release otherwise)
- Python 3 with `pyyaml` and `jinja2` for the live smoke suite (`pip install -r tests/requirements.txt`)
- yarn for the website
- A PagerDuty REST API token for the live smoke suite (`.env`, see `.env.example`)

```bash
npm install
```

### Makefile

Every step below is a `make` target; `make help` lists them. The two composite targets:

```bash
make all      # deps, full pipeline (fetch/pin, inventory, split, mappings, pre-normalize, normalize,
              # generate), offline + integration + meta-route tests, docs generation, website build
make smoke    # live smoke suite against the local provider (sources .env if present)
make smoke-live   # the same suite against the published provider (REGISTRY PULL pagerduty)
```

`make all` never touches a live account. Live credentials are read from the environment or a gitignored `.env`:

```bash
PAGERDUTY_TOKEN=...            # REST API token
PAGERDUTY_FROM_EMAIL=...       # optional; needed with an account-level key for person-attributed writes
```

## 0. Download and pin the spec

PagerDuty publishes the REST API description in the [`PagerDuty/api-schema`](https://github.com/PagerDuty/api-schema) repository (`reference/REST/openapiv3.json`, OpenAPI 3.0.2, 273 paths, 465 operations, 47 tags). There are no release tags, so the snapshot in `provider-dev/downloaded/` and the sha256 pin in `provider-dev/config/spec_pin.json` are the record of what was built.

```bash
make fetch-spec      # download, validate (@apidevtools/swagger-parser), verify against the pin
make refresh-spec    # accept an upstream change and rewrite the pin (review the diff)
```

## 1. Endpoint inventory and service split

```bash
make inventory
```

Builds `provider-dev/config/endpoint_inventory.csv` from the pinned spec: one row per operation with the resolved service, the response envelope classification (the payload key that becomes the object key), the pagination style (cursor / offset / none), header parameters, the OAuth scope from `x-pd-requires-scope`, the deprecation flag, the request body media type, a skip reason where applicable and a draft resource / verb.

Inventory for the pinned spec (465 operations): 211 GET, 105 POST, 77 PUT, 1 PATCH, 71 DELETE; 151 collection responses, 207 single-object responses, 32 bare-field responses, 73 without a body; 18 cursor-paginated and 39 offset-paginated GETs; 14 deprecated operations; 2 skipped (`no_success_response` - the OAuth revocation status read has no 2xx; `non_json_request_body` - the enrichment CSV upload is multipart).

The split is by the operation's first tag through the map in `provider-dev/config/service_names.json` (path rules override the tag). The vendor's 47 tags collapse to 44 services: the three enrichment tags become `enrichment`, and the incident (deprecated) and service custom field definitions become `custom_fields`.

```bash
make split
```

## 2. Generate mappings

```bash
make mappings          # analyze skeleton + map_operations.mjs rules
make check-mappings    # the same, failing on any change to a previously mapped operation
```

Mapping conventions (rules in `provider-dev/scripts/map_operations.mjs`):

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET collection (`{<key>: [...]}`) | `SELECT` | `<resource>.list`, objectKey `$.<key>` |
| GET single (`{<key>: {...}}`) | `SELECT` | `<resource>.get`, objectKey `$.<key>` |
| POST create | `INSERT` | `<resource>.create` |
| PUT / PATCH update | `UPDATE` | `<resource>.update` |
| DELETE | `DELETE` | `<resource>.delete` |
| POST action segment (snooze, render, preview, enable, ping, convert, migrate, dismiss, accept, unsubscribe, change_tags, associate, ...) | `EXEC` | `<parent>.<action>` |
| PUT command segment (merge, cancel, channel) | `EXEC` | `<parent>.<command>` |
| Bulk PUTs (`/incidents`, `/incidents/{id}/alerts`) | `EXEC` | `<resource>.update_bulk` |
| Analytics POST reads | `SELECT` | `<metric>.list`, objectKey `$.data` |
| Team membership PUT / DELETE | `INSERT` / `DELETE` | `teams.members.add` / `remove` |

Resource names are plural snake_case derived from the path (scoping pairs stripped, intermediate segments singularized); explicit overrides live in `RESOURCE_RULES` / `METHOD_RULES`. Result: 44 services, 162 resources, 463 methods - 223 `SELECT`, 72 `INSERT`, 71 `UPDATE`, 69 `DELETE`, 28 `EXEC`.

## 3. Normalize the service specs

```bash
make pre-normalize
make normalize
```

`pre_normalize.mjs` applies the PagerDuty-specific repairs before the generic provider-utils pass: removes the `Accept` / `Content-Type` header parameters (stackql sets both itself), makes `From` and `X-EARLY-ACCESS` optional (with a default for the latter), inlines the vendor's deep JSON-pointer refs (`.../allOf/0` and friends, which the generic pass would otherwise orphan), inlines two responses that reference a request-body component, merges the bare `oneOf` body unions, and rewrites relative documentation links. The generic pass then flattens `allOf`, lowers `oneOf`/`anyOf` and wraps the one bare-array response.

## 4. Generate the provider

```bash
make generate
```

which runs `generate-provider` with the fixed server (`provider-dev/config/servers.json`), the api_key auth block (`provider-dev/config/provider_config.json`) and `--naive-req-body-translate`, then `post_process.mjs`: cursor pagination on the 18 cursor lists, `limit` (`top`) and `sort_by` (`orderBy`) pushdown, object keys on the 15 POST-based selects, and the `@@json` calling convention for the one EXEC whose body attribute is integer-typed (incident snooze).

## 5. Test the provider

```bash
make test              # test-offline + test-integration + test-meta
```

- `make test-offline` - `SHOW` / `DESCRIBE` against the local file registry: the 44 services, representative resources and methods, nested-schema resolution, pagination and pushdown blocks, optional headers, the auth block (33 checks).
- `make test-integration` - row-level tests against an in-process mock of the REST API (`tests/integration/`): the `Token token=` header and the 401 failure mode, plural/singular unwrapping, `"statuses[]"` filters, cursor pagination across pages, `LIMIT` pushdown, a team INSERT / UPDATE / DELETE lifecycle with the `{team: {...}}` body, team membership add/remove, an incident INSERT with `"From"`, `EXEC snooze` with `@@json`, an analytics POST-based SELECT with a `filters` body, the early-access header, the 404 envelope (46 checks).
- `make test-meta` - every `SHOW` / `DESCRIBE` route over a local wire server (44 services, 162 resources, 463 methods, 223 selectable).

### Smoke tests (live)

```bash
make smoke             # local provider
make smoke-live        # published provider (post-publish verification)
make smoke-cleanup     # discover and delete stackql-smoke-* leftovers
make smoke-list
```

`tests/smoke.py` runs `tests/manifest.yaml`: read smokes over users, teams, services, escalation policies, schedules, on-calls, incidents, log entries, priorities, vendors, extension schemas, licenses, audit records and analytics, then a write lifecycle - team (create, update, member), escalation policy targeting the calling user, service on that policy with an Events API v2 integration, incident (create, note, snooze, acknowledge, resolve), tag applied to the team, maintenance window - with `always_run` cleanup and confirm-gone steps. Everything is named `stackql-smoke-<stamp>-*` and a failed run rolls back by live discovery. The REST API has no per-call charge. See [tests/README.md](tests/README.md).

### UAT

```bash
set -a; source .env; set +a
REG_ROOT="$(pwd)/provider-dev/openapi"
REG="{\"url\":\"file://${REG_ROOT}\",\"localDocRoot\":\"${REG_ROOT}\",\"verifyConfig\":{\"nopVerify\":true}}"
stackql --registry="${REG}" shell
```

```sql
SELECT incident_number, title, urgency, status, created_at
FROM pagerduty.incidents.incidents
WHERE "statuses[]" = 'triggered';
```

### CI

[.github/workflows/build-and-test.yml](.github/workflows/build-and-test.yml): pin check, build with `check-mappings`, generation-drift check, offline validation, integration tests, meta-route tests and docs generation on every push and PR; the secret-gated live smoke suite on pushes; a weekly `spec-drift` job that fetches the published spec, compares it with the pin and opens a `spec-drift` issue when it moves. The web workflows build and deploy the microsite from `main`.

## 6. Publish the provider

Push the `pagerduty` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). Pull and verify from the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull pagerduty;
```

then `make smoke-live`.

## 7. Generate web docs

The microsite (`website/`) is Docusaurus 3.10 on the shared architecture used by the other provider microsites: navbar / footer / theme / plugin configuration lives in [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config), vendored into `.shared-config/` at build time. Site-local files are the provider identity (`website/provider.js`), thin config wrappers (with `showLastUpdateTime` enabled so every page carries a "Last updated on" stamp from git history), shared components and theme under `src/`, and static assets including `static/CNAME` (`pagerduty-provider.stackql.io`).

```bash
make docs          # generate-docs + website/scripts/sanitize-docs.mjs (MDX escaping, "From" rewrite)
make website       # yarn install && yarn build (vendors the shared config; needs GitHub access)
make website-start
```

`headerContent1.txt` / `headerContent2.txt` in `provider-dev/docgen/provider-data/` supply the landing page: installation, authentication and the `From` header, the service region note, pagination and filtering, and getting-started queries (on-call now, open incidents, service inventory, users, incident metrics, the audit trail, a team / escalation policy / service lifecycle, team membership, the incident lifecycle, tags and maintenance windows).

To publish, select GitHub Actions as the Pages source and create the DNS record (the served hostname is pinned by `website/static/CNAME`):

| Source Domain | Record Type | Target |
|---|---|---|
| pagerduty-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT License - see [LICENSE](LICENSE).

## Contributing

Contributions are welcome. Please open an issue or pull request.
