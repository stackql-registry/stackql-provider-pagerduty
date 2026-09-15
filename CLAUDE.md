# CLAUDE.md

## Project

This repository builds and documents the `pagerduty` provider for [StackQL](https://github.com/stackql/stackql): SQL-based query and provisioning against the PagerDuty REST API v2 - incidents (alerts, notes, log entries, status updates, responder requests, custom field values, business service impacts), services and integrations, escalation policies, schedules (classic and v3), on-calls, teams and members, users (contact methods, notification rules, sessions, licenses), maintenance windows, business services, event orchestrations, incident workflows, automation actions, tags, webhooks, status pages, standards, audit records, analytics and the rest of the vendor's published surface (44 services, 162 resources, 463 methods).

The provider is built with `@stackql/provider-utils` and follows the repository pattern of the `clickhouse` and `github` provider repos under `stackql-registry` (Makefile pipeline, deterministic mapping scripts, durable `all_services.csv`, mock-server integration tests, manifest-driven smoke suite, shared-config Docusaurus microsite). When in doubt about structure, mirror those.

## Spec source

PagerDuty publishes the REST spec in the `PagerDuty/api-schema` GitHub repository (`reference/REST/openapiv3.json`, OpenAPI 3.0.2, 273 paths / 465 operations / 47 tags), with no release tags. `bin/fetch-spec.sh` downloads it into `provider-dev/downloaded/pagerduty-rest-v2.json`, validates it with `@apidevtools/swagger-parser`, and records date and sha256 in `provider-dev/config/spec_pin.json`; a changed upstream fails `make fetch-spec` and is accepted deliberately with `make refresh-spec`. The old `api-reference.pagerduty.com/output/openapi.json` URL is gone (404). The Events API v2 (`events.pagerduty.com`, routing-key auth) is a different surface and is out of scope; PagerDuty has no public GraphQL API.

## Design decisions (load-bearing)

- **Auth**: `{"auth": {"type": "api_key", "valuePrefix": "Token token=", "credentialsenvvar": "PAGERDUTY_TOKEN"}}` - the construct the previous release shipped with, renamed to the Terraform provider's variable (`PAGERDUTY_TOKEN`; the old provider used `PAGERDUTY_API_TOKEN`). Proven on the wire by the mock-server integration suite.
- **Fixed US server, no region variable**: `servers: [{url: https://api.pagerduty.com}]`. any-sdk marks a server variable required unless it is env-resolved (the okta `subdomain` precedent, `getServerVariablesMap` in server.go), so a `{service_region}` / `api_host` variable would put a required parameter on every query for the US default. The EU region (`api.eu.pagerduty.com`) is a documented limitation with a core follow-up in NOTES.md. Do not add a server variable without solving that.
- **Header parameters**: `Accept` and `Content-Type` are removed by `pre_normalize.mjs` (stackql sets both from the media types; a WHERE value is overridden). `From` and `X-EARLY-ACCESS` are optional. `From` is bound as a double-quoted identifier in SQL (`"From"`, or `@"From"` / `@From` in EXEC); `x-stackQL-alias` is NOT honoured for header parameters by the current stackql release, so do not reintroduce the `from_email` alias. `X-EARLY-ACCESS` gets a default and is prefilled (verified).
- **Spec repair before normalize** (all in `pre_normalize.mjs`, all verified by the load and DESCRIBE checks): deep JSON-pointer refs (`.../allOf/0`, `.../properties/x`, `.../content/application~1json/schema`) are inlined because the normalize pass renames/flattens variants and orphans positional pointers; two responses that reference a `requestBodies` component are inlined (a vendor error kin-openapi rejects as "bad data"); bare `oneOf` body unions (cache variable data) are merged into one object schema.
- **Mapping conventions**: see the header of `provider-dev/scripts/map_operations.mjs`. Resource names are plural snake_case derived from the path (scoping pairs stripped, intermediate segments singularized); `RESOURCE_RULES` / `METHOD_RULES` hold every override. Bulk PUTs and action segments are EXEC; team membership PUT is INSERT (`members.add`); the analytics POSTs are SELECT over `$.data`; `abilities/{id}` is EXEC `check` (204/402).
- **Pagination**: cursor lists (18) get method-level `config.pagination` (`cursor` / `next_cursor`) in `post_process.mjs`. Classic offset lists (41) cannot be traversed - any-sdk has no offset algorithm (token, page_number, link_header_next, odata_next_link only). `limit` / `offset` stay WHERE parameters; a SQL `LIMIT` is pushed down to `limit` (verified), `ORDER BY` to `sort_by` is configured but not honoured by the current binary (reported by the integration suite).
- **EXEC bodies with integer / boolean attributes**: stackql's EXEC analyzer only recognises string / object / array / int / int32 / int64 (`providerTypeConditionIsValid`), so `@duration = 3600` fails for the OpenAPI `integer`. `post_process.mjs` lifts `required` from such EXEC bodies (the snooze `duration`) so the raw-body form works: `EXEC pagerduty.incidents.incidents.snooze @id = '...' @@json='{"duration": 3600}'`. Booleans in UPDATE take the string form (`SET active = 'true'` is coerced to a JSON boolean on the wire; a bare `true` is rejected by the parser).
- **Casing**: the wire is already snake_case, so no `snake_case_aliases` / `nativeCasing`. Array query parameters keep their bracketed wire names and are double-quoted in SQL: `WHERE "statuses[]" = 'triggered'`.
- **Durable mappings**: `provider-dev/config/all_services.csv` is committed. `make check-mappings` (used in CI) fails when a previously mapped operation would change resource / method / verb after a spec refresh - a breaking change must be a reviewed, deliberate edit of the rules, not a side effect.

## Toolchain rules

- Use the **latest** `@stackql/provider-utils` (currently 0.7.9) and `@stackql/pgwire-lite` (1.0.2). Node >= 20, `type: module`. The two CLI entry points are wrapped as npm scripts and invoked through `node`.
- A `stackql` binary is required for tests (`$STACKQL`, `./stackql`, or on PATH; `bin/start-server.sh` downloads one otherwise). Run under WSL on Windows - the smoke runner and server scripts need a POSIX shell.
- Python 3 with `pyyaml` and `jinja2` for the smoke suite (`tests/requirements.txt`).

## Repository layout

```
provider-dev/
  downloaded/            # pinned spec snapshot (committed)
  source/                # split per-service specs (build artifacts, committed)
  config/                # spec_pin.json, service_names.json (tag -> service), servers.json,
                         # provider_config.json, endpoint_inventory.csv, all_services.csv (durable mappings)
  openapi/src/pagerduty/ # generated provider output
  scripts/               # lib/spec_helpers.mjs, record_spec_pin.mjs, build_inventory.mjs,
                         # map_operations.mjs, pre_normalize.mjs, post_process.mjs
  docgen/provider-data/  # headerContent1.txt, headerContent2.txt (docs landing page)
bin/                     # fetch-spec.sh, split.mjs, start/stop/server-status.sh, test-meta-routes.cjs
tests/
  offline_validation.mjs # SHOW / DESCRIBE assertions against the local registry
  integration/           # mock_pagerduty_server.mjs + run_integration_tests.mjs (row-level wire checks)
  smoke.py, manifest.yaml, README.md   # live manifest-driven smoke suite (--live for the published provider)
website/                 # Docusaurus 3.10 microsite (shared config vendored at build time)
Makefile, CLAUDE.md, README.md, NOTES.md
```

## Build pipeline

`make help` lists every target. Every step is deterministic and re-runnable; manual decisions are rules in scripts, never hand edits to CSVs or specs; scripts validate and fail without writing.

1. `make fetch-spec` (or `make refresh-spec` to accept drift)
2. `make inventory` - `provider-dev/config/endpoint_inventory.csv`
3. `make split` - function discriminator over the tag map in `service_names.json`
4. `make mappings` - provider-utils `analyze` skeleton + `map_operations.mjs` rules (`make check-mappings` in CI)
5. `make pre-normalize` - header params, deep refs, cross-kind refs, body unions, doc links
6. `make normalize` - generic provider-utils pass
7. `make generate` - provider output + `post_process.mjs` (pagination, pushdown, POST-select object keys, EXEC body relaxation)
8. `make test` - offline validation, mock-server integration tests, meta-route suite
9. `make docs` then `make website` - docgen, `sanitize-docs.mjs` (MDX escaping, `"From"` rewrite), yarn build
10. `make smoke` / `make smoke-live` - live suite against the local or the published provider (needs `.env`)

`make all` = deps, build, test, docs, website (never live).

## Testing

Every regeneration is followed by `make test` before commit. The integration suite is the wire-level proof for everything that cannot be exercised without an account - it runs against `tests/integration/mock_pagerduty_server.mjs` (canned responses in the real envelope shapes, token auth enforced, every request logged) on a test copy of the registry pointed at the mock. Extend it when a mapping convention changes. The smoke suite (`tests/README.md`) creates `stackql-smoke-<stamp>-*` resources only and rolls back on failure; never point it at a production account.

## Writing conventions

- README, docs and code comments: measured, precise, no hyperbole. No em dashes; use `-`. No characters not on a QWERTY keyboard; use `->` for arrows.
- Example queries are runnable against a real account: wrapper-shaped JSON bodies (`{"team": {...}}`), `json_extract` for nested fields, `"From"` and `"statuses[]"` double-quoted.

## Non-negotiables

1. Latest `@stackql/provider-utils`, always.
2. Deterministic scripts; never hand-edit derived artifacts (`all_services.csv`, `provider-dev/source`, `provider-dev/openapi`, `website/docs`).
3. `make test` green before commit; `make check-mappings` green before a refresh is merged.
4. Every finding about stackql / any-sdk behaviour is recorded in NOTES.md with the evidence (probe or test) - the next refresh must not re-derive it.
5. The smoke suite cleans up everything it creates.
