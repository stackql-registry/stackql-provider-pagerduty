---
title: pagerduty
hide_title: false
hide_table_of_contents: false
keywords:
  - pagerduty
  - incident management
  - on-call
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, provision and manage PagerDuty incidents, services, escalation policies, schedules, teams, users, event orchestrations and more using SQL
custom_edit_url: null
image: /img/stackql-pagerduty-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Query, provision and operate PagerDuty using SQL - incidents (with their alerts, notes, log entries, status updates and responder requests), services and their integrations, escalation policies, schedules and on-calls, teams and users, maintenance windows, business services, event orchestrations, incident workflows, automation actions, tags, webhooks, status pages, audit records and analytics. The full REST API v2 surface (44 services, 162 resources, 463 methods) generated from the vendor's published OpenAPI description.


:::info[Provider Summary] 

total services: __44__  
total resources: __206__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `pagerduty` provider, run the following command:

```bash
REGISTRY PULL pagerduty;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

The provider authenticates with a PagerDuty REST API token, sent as `Authorization: Token token=...`. Either token type works: a User API token (created under My Profile -> User Settings -> Create API User Token, scoped to that user's permissions) or an account-level General Access REST API key (Integrations -> API Access Keys, Admin role required). Export it as the same environment variable the Terraform PagerDuty provider reads and StackQL picks it up with no further configuration:

```bash
export PAGERDUTY_TOKEN='...'
```

or using PowerShell:

```powershell
$env:PAGERDUTY_TOKEN = '...'
```

<details>

<summary>Using a different environment variable</summary>

To read the token from a different variable, use the `--auth` flag of the `stackql` program:

```bash
AUTH='{ "pagerduty": { "type": "api_key", "valuePrefix": "Token token=", "credentialsenvvar": "MY_PAGERDUTY_TOKEN" }}'
stackql shell --auth="${AUTH}"
```

or using PowerShell:

```powershell
$Auth = "{ 'pagerduty': { 'type': 'api_key', 'valuePrefix': 'Token token=', 'credentialsenvvar': 'MY_PAGERDUTY_TOKEN' }}"
stackql.exe shell --auth=$Auth
```

</details>

### The From header

PagerDuty attributes some writes to a person: creating or updating incidents, notes, status updates, snoozes, responder requests, escalation policies, maintenance windows and users. With a User API token the acting user is implicit. With an account-level key those operations need the `From` header carrying the email address of a valid user on the account. `from` is a reserved word in the StackQL grammar, so the parameter is double-quoted:

```sql
INSERT INTO pagerduty.incidents.incidents (incident, "From")
SELECT '{"type": "incident", "title": "Checkout latency", "urgency": "high",
         "service": {"id": "PXXXXXX", "type": "service_reference"}}',
       'ops@example.com';
```

## Service region

The provider addresses the US service region, `https://api.pagerduty.com`. Accounts in the EU service region (`https://api.eu.pagerduty.com`) are not addressable in this release; see the repository notes for the reason and the planned follow-up.

## Pagination and filtering

Collections that paginate with a cursor (audit records, automation actions and runners, incident workflow actions and triggers, workflow integrations, status dashboards, recommended rules, enrichment records) are traversed automatically. The classic `offset` / `limit` collections (incidents, services, users, teams, schedules, log entries and most others) return one page: the API default is 25 rows and the maximum is 100, and `limit` and `offset` are ordinary `WHERE` parameters, so page explicitly:

```sql
SELECT id, incident_number, title, status
FROM pagerduty.incidents.incidents
WHERE limit = 100 AND offset = 100;
```

A SQL `LIMIT` is pushed down to the `limit` parameter. Filters keep the API's parameter names, including the array-valued ones, which are double-quoted because of the brackets:

```sql
SELECT id, incident_number, title, urgency, created_at
FROM pagerduty.incidents.incidents
WHERE "statuses[]" = 'triggered'
AND "service_ids[]" = 'PXXXXXX'
AND since = '2026-09-01T00:00:00Z';
```

## Example queries

### Who is on call right now

```sql
SELECT json_extract(user, '$.summary') AS user_name,
       json_extract(escalation_policy, '$.summary') AS escalation_policy,
       json_extract(schedule, '$.summary') AS schedule,
       escalation_level, start, "end"
FROM pagerduty.on_calls.on_calls
ORDER BY escalation_level;
```

### Open incidents with their service and assignee

```sql
SELECT incident_number, title, urgency, status, created_at,
       json_extract(service, '$.summary') AS service,
       json_extract(assignments, '$[0].assignee.summary') AS assignee
FROM pagerduty.incidents.incidents
WHERE "statuses[]" = 'triggered'
ORDER BY created_at DESC;
```

### Service inventory with escalation policy and team

```sql
SELECT name, status, alert_creation,
       json_extract(escalation_policy, '$.summary') AS escalation_policy,
       json_extract(teams, '$[0].summary') AS team,
       last_incident_timestamp
FROM pagerduty.services.services
ORDER BY name;
```

### Users by role, and a user's contact methods

```sql
SELECT name, email, role, time_zone, job_title
FROM pagerduty.users.users
WHERE role IN ('admin', 'owner')
ORDER BY name;

SELECT type, label, address
FROM pagerduty.users.contact_methods
WHERE id = 'PUSERXX';
```

### Incident metrics for the last 30 days

The analytics reads are POST operations exposed as `SELECT`; the `WHERE filters` JSON becomes the request body:

```sql
SELECT total_incident_count, mean_seconds_to_first_ack, mean_seconds_to_resolve, total_notifications
FROM pagerduty.analytics.incident_metrics
WHERE filters = '{"created_at_start": "2026-08-15T00:00:00Z", "created_at_end": "2026-09-15T00:00:00Z"}';
```

### Audit trail

Cursor-paginated, followed automatically:

```sql
SELECT execution_time, action,
       json_extract(actors, '$[0].summary') AS actor,
       json_extract(root_resource, '$.type') AS resource_type,
       json_extract(root_resource, '$.id') AS resource_id
FROM pagerduty.audit.records
WHERE since = '2026-09-08T00:00:00Z' AND until = '2026-09-15T00:00:00Z';
```

### Provision, mutate and tear down

Mutations use the same SQL grammar - `INSERT` creates a resource, `UPDATE` changes it and `DELETE` removes it. Request bodies keep the API's wrapper shape (`{"team": {...}}`), passed as a JSON string in the wrapper column. A team, an escalation policy and a service end to end:

```sql
-- create a team
INSERT INTO pagerduty.teams.teams (team)
SELECT '{"type": "team", "name": "Platform", "description": "Platform engineering"}';

-- find its id
SELECT id, name FROM pagerduty.teams.teams WHERE query = 'Platform';

-- an escalation policy paging one user after 30 minutes
INSERT INTO pagerduty.escalation_policies.escalation_policies (escalation_policy)
SELECT '{"type": "escalation_policy", "name": "Platform primary", "num_loops": 2,
         "escalation_rules": [{"escalation_delay_in_minutes": 30,
                               "targets": [{"id": "PUSERXX", "type": "user_reference"}]}],
         "teams": [{"id": "PTEAMXX", "type": "team_reference"}]}';

-- a service on that policy
INSERT INTO pagerduty.services.services (service)
SELECT '{"type": "service", "name": "Checkout API",
         "escalation_policy": {"id": "PEPXXXX", "type": "escalation_policy_reference"},
         "alert_creation": "create_alerts_and_incidents"}';

-- add an Events API v2 integration to the service
INSERT INTO pagerduty.services.integrations (id, integration)
SELECT 'PSVCXXX', '{"type": "events_api_v2_inbound_integration", "name": "Checkout monitors"}';

-- change the service description
UPDATE pagerduty.services.services
SET service = '{"type": "service", "description": "Customer checkout and payment flow",
                "escalation_policy": {"id": "PEPXXXX", "type": "escalation_policy_reference"}}'
WHERE id = 'PSVCXXX';

-- tear down
DELETE FROM pagerduty.services.services WHERE id = 'PSVCXXX';
DELETE FROM pagerduty.escalation_policies.escalation_policies WHERE id = 'PEPXXXX';
DELETE FROM pagerduty.teams.teams WHERE id = 'PTEAMXX';
```

### Team membership

Adding a user to a team is a `PUT` with no entity of its own, mapped as an `INSERT` on `teams.members`; removal is a `DELETE`:

```sql
INSERT INTO pagerduty.teams.members (id, user_id, role)
SELECT 'PTEAMXX', 'PUSERXX', 'manager';

DELETE FROM pagerduty.teams.members WHERE id = 'PTEAMXX' AND user_id = 'PUSERXX';
```

### Incident lifecycle

Acknowledge and resolve are status updates on the incident; snooze is an `EXEC` whose body is passed as raw JSON because its `duration` attribute is integer-typed:

```sql
UPDATE pagerduty.incidents.incidents
SET incident = '{"type": "incident_reference", "status": "acknowledged"}', "From" = 'ops@example.com'
WHERE id = 'PINCXXX';

EXEC pagerduty.incidents.incidents.snooze @id = 'PINCXXX', @"From" = 'ops@example.com' @@json='{"duration": 3600}';

INSERT INTO pagerduty.incidents.notes (id, note, "From")
SELECT 'PINCXXX', '{"content": "Rolling back the 14:05 deploy"}', 'ops@example.com';

UPDATE pagerduty.incidents.incidents
SET incident = '{"type": "incident_reference", "status": "resolved"}', "From" = 'ops@example.com'
WHERE id = 'PINCXXX';
```

### Tags

```sql
INSERT INTO pagerduty.tags.tags (tag) SELECT '{"type": "tag", "label": "tier-1"}';

EXEC pagerduty.tags.entity_tags.change_tags
  @entity_type = 'services', @id = 'PSVCXXX',
  @add = '[{"type": "tag_reference", "id": "PTAGXXX"}]';

SELECT id, label FROM pagerduty.tags.entity_tags WHERE entity_type = 'services' AND id = 'PSVCXXX';
```

### Maintenance windows

```sql
INSERT INTO pagerduty.maintenance_windows.maintenance_windows (maintenance_window)
SELECT '{"type": "maintenance_window", "start_time": "2026-09-20T22:00:00Z", "end_time": "2026-09-21T00:00:00Z",
         "description": "Database migration",
         "services": [{"id": "PSVCXXX", "type": "service_reference"}]}';

SELECT id, description, start_time, end_time
FROM pagerduty.maintenance_windows.maintenance_windows
WHERE "service_ids[]" = 'PSVCXXX' AND filter = 'future';
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/abilities/">abilities</a><br />
<a href="/services/add_ons/">add_ons</a><br />
<a href="/services/alert_grouping_settings/">alert_grouping_settings</a><br />
<a href="/services/analytics/">analytics</a><br />
<a href="/services/audit/">audit</a><br />
<a href="/services/automation_actions/">automation_actions</a><br />
<a href="/services/business_services/">business_services</a><br />
<a href="/services/change_events/">change_events</a><br />
<a href="/services/custom_fields/">custom_fields</a><br />
<a href="/services/enrichment/">enrichment</a><br />
<a href="/services/escalation_policies/">escalation_policies</a><br />
<a href="/services/event_orchestrations/">event_orchestrations</a><br />
<a href="/services/extension_schemas/">extension_schemas</a><br />
<a href="/services/extensions/">extensions</a><br />
<a href="/services/incident_types/">incident_types</a><br />
<a href="/services/incident_workflows/">incident_workflows</a><br />
<a href="/services/incidents/">incidents</a><br />
<a href="/services/ip_allow_lists/">ip_allow_lists</a><br />
<a href="/services/licenses/">licenses</a><br />
<a href="/services/log_entries/">log_entries</a><br />
<a href="/services/maintenance_windows/">maintenance_windows</a><br />
<a href="/services/notifications/">notifications</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/oauth_delegations/">oauth_delegations</a><br />
<a href="/services/on_calls/">on_calls</a><br />
<a href="/services/paused_incident_reports/">paused_incident_reports</a><br />
<a href="/services/priorities/">priorities</a><br />
<a href="/services/recommendations/">recommendations</a><br />
<a href="/services/rulesets/">rulesets</a><br />
<a href="/services/schedules/">schedules</a><br />
<a href="/services/schedules_v3/">schedules_v3</a><br />
<a href="/services/service_dependencies/">service_dependencies</a><br />
<a href="/services/services/">services</a><br />
<a href="/services/session_configurations/">session_configurations</a><br />
<a href="/services/sre_agent/">sre_agent</a><br />
<a href="/services/standards/">standards</a><br />
<a href="/services/status_dashboards/">status_dashboards</a><br />
<a href="/services/status_pages/">status_pages</a><br />
<a href="/services/tags/">tags</a><br />
<a href="/services/teams/">teams</a><br />
<a href="/services/templates/">templates</a><br />
<a href="/services/users/">users</a><br />
<a href="/services/vendors/">vendors</a><br />
<a href="/services/webhooks/">webhooks</a><br />
<a href="/services/workflow_integrations/">workflow_integrations</a><br />
</div>
</div>
