Here's a README for a PagerDuty provider for StackQL, following the same structure as the previous examples:

# `pagerduty` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `pagerduty` provider for StackQL, allowing you to query and manipulate PagerDuty resources using SQL-like syntax. The provider is built using the `@stackql/provider-utils` package, which provides tools for converting OpenAPI specifications into StackQL-compatible provider schemas.

## Prerequisites

To use the PagerDuty provider with StackQL, you'll need:

1. A PagerDuty account with appropriate API credentials
2. PagerDuty API key with sufficient permissions for the resources you want to access
3. StackQL CLI installed on your system (see [StackQL](https://github.com/stackql/stackql))

## 1. Download the Open API Specification

First, download the PagerDuty API OpenAPI specification:

```bash
rm -rf provider-dev/downloaded/*
curl -L https://api-reference.pagerduty.com/output/openapi.json \
-o provider-dev/downloaded/openapi.json
```

## 2. Split into Service Specs

Next, split the monolithic OpenAPI specification into service-specific files:

```bash
rm -rf provider-dev/source/*
npm run split -- \
  --provider-name pagerduty \
  --api-doc provider-dev/downloaded/openapi.json \
  --svc-discriminator path \
  --output-dir provider-dev/source \
  --overwrite \
  --svc-name-overrides "$(cat <<EOF
{
  "incidents": "incidents",
  "services": "services",
  "escalation_policies": "escalation_policies",
  "schedules": "schedules",
  "users": "users",
  "teams": "teams",
  "extensions": "extensions",
  "vendors": "vendors",
  "rulesets": "rulesets",
  "event_rules": "event_rules",
  "event_orchestrations": "event_orchestrations",
  "blueprints": "blueprints",
  "business_services": "business_services",
  "service_dependencies": "service_dependencies",
  "technical_services": "technical_services",
  "tags": "tags",
  "abilities": "abilities",
  "addons": "addons",
  "analytics": "analytics",
  "audit": "audit",
  "change_events": "change_events",
  "alerts": "alerts",
  "log_entries": "log_entries",
  "maintenance_windows": "maintenance_windows",
  "notifications": "notifications",
  "oncalls": "oncalls",
  "priorities": "priorities",
  "response_plays": "response_plays",
  "webhook_subscriptions": "webhook_subscriptions"
}
EOF
)"
```

## 3. Generate Mappings

Generate the mapping configuration that connects OpenAPI operations to StackQL resources:

```bash
npm run generate-mappings -- \
  --provider-name pagerduty \
  --input-dir provider-dev/source \
  --output-dir provider-dev/config
```

Update the resultant `provider-dev/config/all_services.csv` to add the `stackql_resource_name`, `stackql_method_name`, `stackql_verb` values for each operation.

## 4. Generate Provider

This step transforms the split OpenAPI service specs into a fully-functional StackQL provider by applying the resource and method mappings defined in your CSV file.

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name pagerduty \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/pagerduty \
  --config-path provider-dev/config/all_services.csv \
  --servers '[{"url": "https://api.pagerduty.com"}]' \
  --provider-config '{"auth": { "type": "custom", "location": "header", "name": "Authorization", "valuePrefix": "Token token=", "credentialsenvvar": "PAGERDUTY_API_KEY" }}' \
  --overwrite
```
```bash
sh provider-dev/scripts/fix_broken_links.sh
```

## 5. Test Provider

### Starting the StackQL Server

Before running tests, start a StackQL server with your provider:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
npm run start-server -- --provider pagerduty --registry $PROVIDER_REGISTRY_ROOT_DIR
```

### Test Meta Routes

Test all metadata routes (services, resources, methods) in the provider:

```bash
npm run test-meta-routes -- pagerduty --verbose
```

When you're done testing, stop the StackQL server:

```bash
npm run stop-server
```

Use this command to view the server status:

```bash
npm run server-status
```

### Run test queries

Run some test queries against the provider using the `stackql shell`:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

Example queries to try:

```sql
-- List all incidents
SELECT 
id,
incident_number,
title,
status,
urgency,
created_at,
last_status_change_at,
service.name
FROM pagerduty.incidents.list;

-- View on-call schedules
SELECT
id,
name,
description,
time_zone,
escalation_policies.name
FROM pagerduty.schedules.list;

-- Check users
SELECT
id,
name,
email,
role,
job_title,
time_zone
FROM pagerduty.users.list;

-- List services
SELECT
id,
name,
description,
status,
created_at,
escalation_policy.name,
alert_creation
FROM pagerduty.services.list;

-- View recent alerts
SELECT
id,
alert_key,
severity,
status,
created_at,
service.name,
incident.id
FROM pagerduty.alerts.list
WHERE since = 'date_time_iso8601_minus_24h'
AND until = 'date_time_iso8601_now';
```

## 6. Publish the provider

To publish the provider push the `pagerduty` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry). Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).  

Launch the StackQL shell:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
./stackql --registry="${DEV_REG}" shell
```

Pull the latest dev `pagerduty` provider:

```sql
registry pull pagerduty;
```

Run some test queries to verify the provider works as expected.

## 7. Generate web docs

Provider doc microsites are built using Docusaurus and published using GitHub Pages.  

a. Update `headerContent1.txt` and `headerContent2.txt` accordingly in `provider-dev/docgen/provider-data/`  

b. Update the following in `website/docusaurus.config.js`:  

```js
// Provider configuration - change these for different providers
const providerName = "pagerduty";
const providerTitle = "PagerDuty Provider";
```

c. Then generate docs using...

```bash
sh provider-dev/scripts/fix-broken-links.sh
npm run generate-docs -- \
  --provider-name pagerduty \
  --provider-dir ./provider-dev/openapi/src/pagerduty/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
```  

## 8. Test web docs locally

```bash
cd website
# test build
yarn build

# run local dev server
yarn start
```

## 9. Publish web docs to GitHub Pages

Under __Pages__ in the repository, in the __Build and deployment__ section select __GitHub Actions__ as the __Source__. In Netlify DNS create the following records:

| Source Domain | Record Type  | Target |
|---------------|--------------|--------|
| pagerduty-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.