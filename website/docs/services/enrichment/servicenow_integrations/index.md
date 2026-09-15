--- 
title: servicenow_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - servicenow_integrations
  - enrichment
  - pagerduty
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage pagerduty resources using SQL
custom_edit_url: null
image: /img/stackql-pagerduty-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>servicenow_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servicenow_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.servicenow_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The requested ServiceNow enrichment integration, including its CMDB tables, field mappings, and credentials.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="cmdb_tables" /></td>
    <td><code>array</code></td>
    <td>The ServiceNow CMDB table configurations belonging to this integration. An integration must have at least 1 and at most 8 tables.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>The ServiceNow credentials associated with the account, or `null` if no credentials have been configured. Credentials are managed through the credentials endpoints, not through this object.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the integration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of ServiceNow enrichment integrations for the account. Returns at most one integration due to product limits.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="cmdb_tables" /></td>
    <td><code>array</code></td>
    <td>The ServiceNow CMDB table configurations belonging to this integration. An integration must have at least 1 and at most 8 tables.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>The ServiceNow credentials associated with the account, or `null` if no credentials have been configured. Credentials are managed through the credentials endpoints, not through this object.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the integration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Retrieves a single ServiceNow enrichment integration by ID, including its CMDB tables, field mappings, the current sync status of each table, and credentials.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists the ServiceNow enrichment integrations for the account, including their CMDB tables, field mappings, and credentials. Because only one integration is allowed per account, this returns at most one integration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-cmdb_tables"><code>cmdb_tables</code></a></td>
    <td></td>
    <td>Creates a ServiceNow enrichment integration with one or more CMDB table configurations. Only one integration is allowed per account. Each CMDB table must define between 2 and 20 field mappings, and an integration may contain at most 8 tables. Credentials are managed separately through the credentials endpoints.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Deletes a ServiceNow enrichment integration, including all of its CMDB table configurations and their generated enrichment schemas, and disables any associated data synchronization.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the ServiceNow enrichment integration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves a single ServiceNow enrichment integration by ID, including its CMDB tables, field mappings, the current sync status of each table, and credentials.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
SELECT
id,
name,
cmdb_tables,
created_at,
credentials,
description,
updated_at
FROM pagerduty.enrichment.servicenow_integrations
WHERE integration_id = '{{ integration_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the ServiceNow enrichment integrations for the account, including their CMDB tables, field mappings, and credentials. Because only one integration is allowed per account, this returns at most one integration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
SELECT
id,
name,
cmdb_tables,
created_at,
credentials,
description,
updated_at
FROM pagerduty.enrichment.servicenow_integrations
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a ServiceNow enrichment integration with one or more CMDB table configurations. Only one integration is allowed per account. Each CMDB table must define between 2 and 20 field mappings, and an integration may contain at most 8 tables. Credentials are managed separately through the credentials endpoints.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.servicenow_integrations (
name,
description,
cmdb_tables
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ cmdb_tables }}' /* required */
RETURNING
integration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: servicenow_integrations
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the integration.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of the integration.
    - name: cmdb_tables
      description: |
        The ServiceNow CMDB table configurations. An integration must have between 1 and 8 tables.
      value:
        - display_name: "{{ display_name }}"
          ci_table_name: "{{ ci_table_name }}"
          query_filter: "{{ query_filter }}"
          field_mappings: "{{ field_mappings }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a ServiceNow enrichment integration, including all of its CMDB table configurations and their generated enrichment schemas, and disables any associated data synchronization.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.servicenow_integrations
WHERE integration_id = '{{ integration_id }}' --required
;
```
</TabItem>
</Tabs>
