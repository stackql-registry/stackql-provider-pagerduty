# pagerduty provider tests

Four layers, cheapest first. The first three need no PagerDuty account and run in CI on every push; the smoke suite is live.

| Layer | Command | What it proves |
|---|---|---|
| Offline validation | `make test-offline` | The generated documents load: 44 services, the expected resources and methods, `DESCRIBE` resolves nested schemas, cursor pagination and pushdown blocks are present, headers are optional, the auth block is right |
| Integration (mock API) | `make test-integration` | Row-level results against an in-process mock of the REST API: the `Token token=` auth header, plural/singular key unwrapping, array query parameters (`"statuses[]"`), cursor pagination across pages, `LIMIT` pushdown, a team INSERT / UPDATE / DELETE lifecycle with the `{team: {...}}` wire body, team membership via PUT-as-INSERT, an incident INSERT carrying the `"From"` header, `EXEC snooze` with `@@json`, a POST-based analytics SELECT with a `filters` body, the 404 envelope |
| Meta routes | `make test-meta` | Every `SHOW` / `DESCRIBE` route over a local wire server (44 services, 162 resources, 463 methods) |
| Smoke (live) | `make smoke`, `make smoke-live` | The manifest below against a real account |

## Smoke suite

`tests/smoke.py` is a manifest-driven runner: each test in `tests/manifest.yaml` is a Jinja2-rendered SQL statement (inline `sql:`; `file:` under `tests/queries/` also works) executed with `stackql exec --output json` and checked against `expect` (exit code, minimum rows, `contains` / `not_contains` on the raw output). Tests share a variable map: `exports` publish values as `{test_name}.{export_name}` for later templates, so the write lifecycle captures each created id from a server-side `query =` lookup and uses it downstream.

Coverage: read smokes over users, abilities, teams, services, escalation policies, schedules, on-calls, incidents (array filters, `LIMIT` pushdown), log entries, priorities, vendors, extension schemas, licenses, audit records (cursor pagination) and an analytics POST-based read; then a full write lifecycle - team (create, get, update, add a member), escalation policy targeting the calling user, service on that policy with an Events API v2 integration, incident on the service (create, note, snooze, acknowledge, resolve), tag applied to the team, maintenance window - with `always_run` cleanup steps and a confirm-gone check for the team and service. Everything is named `stackql-smoke-<stamp>-*`.

Cost: the PagerDuty REST API has no per-call charge, so the suite costs nothing beyond the account (well under the sub-$1 target). The API applies a per-key rate limit (a `429` is the signal); the runner pauses 0.25 s between statements, which keeps the suite far below it.

```bash
cp .env.example .env            # PAGERDUTY_TOKEN=... (+ PAGERDUTY_FROM_EMAIL for account-level keys)
make smoke                      # local provider (provider-dev/openapi)
make smoke-live                 # published provider: REGISTRY PULL pagerduty, no --registry override
make smoke-cleanup              # discover and delete stackql-smoke-* leftovers
make smoke-list                 # list the tests
make smoke SMOKE_ARGS="--only me,teams_list --verbose"
```

Under the hood: `python3 tests/smoke.py --env-file .env [--live] [--only a,b] [--verbose] [--rendered-sql out.sql] [--rollback] [--no-rollback]`. Needs Python 3 with `pyyaml` and `jinja2` (`pip install -r tests/requirements.txt`) and a stackql binary (`--stackql`, `$STACKQL`, `./stackql`, or on `PATH`). Run under WSL on Windows (the binary is a Linux ELF).

### The From header

PagerDuty attributes incident, note, snooze, escalation policy and maintenance window writes to a person. With a User API token the acting user is implicit; with an account-level General Access key the `From` header must carry a valid user's email. Set `PAGERDUTY_FROM_EMAIL` and the manifest adds the header to those statements. `from` is a reserved word in the stackql grammar, so the column is double-quoted in SQL:

```sql
INSERT INTO pagerduty.incidents.incidents (incident, "From")
SELECT '{"type": "incident", "title": "...", "service": {"id": "PXXXXXX", "type": "service_reference"}}', 'user@example.com';
```

### Rollback

A failed or interrupted run leaves resources behind that the export chain may not reach. The runner rolls back automatically after a failure (disable with `--no-rollback`), and `--rollback` runs it standalone: it discovers services, escalation policies, teams and tags named `stackql-smoke-*` by server-side `query`, resolves open incidents on the smoke services, deletes smoke maintenance windows on them, then deletes service, policy, team and tag in dependency order.

### Manifest schema

```yaml
config:
  registry_path: ../provider-dev/openapi   # relative to the manifest; ignored with --live
  queries_dir: queries
  query_timeout_seconds: 120
  inter_request_delay_seconds: 0.25

vars:                          # rendered once against the base context ({{ stamp }}, {{ now_iso }}, ...)
  team_name: stackql-smoke-{{ stamp }}-team

tests:
  - name: my_test              # unique; namespace for exports
    description: optional
    sql: SELECT ...            # or file: subdir/query.iql (relative to queries_dir)
    always_run: false          # run even after an earlier failure (cleanups)
    skip_if_var: from_email    # skip when the named context variable is set
    requires_var: from_email   # skip when it is not
    retry:                     # re-run until expectations pass (eventual consistency)
      attempts: 4
      delay_seconds: 3
    expect:                    # all optional; no expect = "exit code 0"
      allow_error: true
      min_rows: 1
      contains: ["{{ other_test.id }}"]
      not_contains: ["{{ other_test.id }}"]
    exports:
      - name: my_id
        column: id             # from the JSON result; optional row: (default 0)
      - name: arn
        regex: 'P[A-Z0-9]{6}'  # first capture group, else the whole match
```

Base context variables available to every template: `stamp`, `from_email`, `now_iso`, `days_ago_7_iso`, `days_ago_30_iso`, `mw_start_iso`, `mw_end_iso`.

Gotchas:

- Numbers arrive as strings in `--output json` (`"incident_number": "1001"`); assert on the bare token.
- A column whose value is a JSON object arrives escaped inside the JSON output; project nested fields with `json_extract(col, '$.path')` instead of asserting on `"key":"value"` fragments.
- Array query parameters keep their wire name: `WHERE "statuses[]" = 'triggered'`, `WHERE "service_ids[]" = 'PXXXXXX'`. One value per statement.
- EXEC methods whose body attribute is integer-typed (`snooze`) take the raw body: `EXEC ... @id = '...' @@json='{"duration": 600}'`.
