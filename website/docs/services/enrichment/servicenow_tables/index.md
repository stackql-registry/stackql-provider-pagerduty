--- 
title: servicenow_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - servicenow_tables
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

Creates, updates, deletes, gets or lists a <code>servicenow_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servicenow_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.servicenow_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-cmdb_table"><code>cmdb_table</code></a></td>
    <td></td>
    <td>Adds a new ServiceNow CMDB table configuration to an existing integration. An integration may contain at most 8 tables. New tables are created with `status: disabled`; enable synchronization separately once the configuration has been validated.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-table_id"><code>table_id</code></a>, <a href="#parameter-cmdb_table"><code>cmdb_table</code></a></td>
    <td></td>
    <td>Replaces a ServiceNow CMDB table configuration. This is a full replacement — all fields, including `ci_table_name` and the complete `field_mappings` list, must be provided. A table can only be updated while its synchronization is disabled and before its initial backfill has started.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-table_id"><code>table_id</code></a></td>
    <td></td>
    <td>Removes a ServiceNow CMDB table configuration from an integration. The table's generated enrichment schema is removed and its data synchronization is disabled.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-table_id"><code>table_id</code></a></td>
    <td></td>
    <td>Enables data synchronization for a ServiceNow CMDB table configuration. Once enabled, the table's enrichment schema is populated with CI data from ServiceNow and kept up to date with periodic syncs. This operation is idempotent — enabling an already-enabled table succeeds.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#test"><CopyableCode code="test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-table_id"><code>table_id</code></a></td>
    <td></td>
    <td>Validates a ServiceNow CMDB table configuration by running a live query against ServiceNow and returning up to 10 sample records. Use this before enabling synchronization to confirm that the credentials, table name, query filter, and mapped fields are correct. Records are returned keyed by ServiceNow field name.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
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
<tr id="parameter-table_id">
    <td><CopyableCode code="table_id" /></td>
    <td><code>string</code></td>
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the CMDB table configuration.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Adds a new ServiceNow CMDB table configuration to an existing integration. An integration may contain at most 8 tables. New tables are created with `status: disabled`; enable synchronization separately once the configuration has been validated.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.servicenow_tables (
cmdb_table,
integration_id
)
SELECT 
'{{ cmdb_table }}' /* required */,
'{{ integration_id }}'
RETURNING
cmdb_table
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: servicenow_tables
  props:
    - name: integration_id
      value: "{{ integration_id }}"
      description: Required parameter for the servicenow_tables resource.
    - name: cmdb_table
      value:
        display_name: "{{ display_name }}"
        ci_table_name: "{{ ci_table_name }}"
        query_filter: "{{ query_filter }}"
        field_mappings:
          - servicenow_field: "{{ servicenow_field }}"
            event_field: "{{ event_field }}"
            type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Replaces a ServiceNow CMDB table configuration. This is a full replacement — all fields, including `ci_table_name` and the complete `field_mappings` list, must be provided. A table can only be updated while its synchronization is disabled and before its initial backfill has started.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.servicenow_tables
SET 
cmdb_table = '{{ cmdb_table }}'
WHERE 
integration_id = '{{ integration_id }}' --required
AND table_id = '{{ table_id }}' --required
AND cmdb_table = '{{ cmdb_table }}' --required
RETURNING
cmdb_table;
```
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

Removes a ServiceNow CMDB table configuration from an integration. The table's generated enrichment schema is removed and its data synchronization is disabled.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.servicenow_tables
WHERE integration_id = '{{ integration_id }}' --required
AND table_id = '{{ table_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' },
        { label: 'test', value: 'test' }
    ]}
>
<TabItem value="enable">

Enables data synchronization for a ServiceNow CMDB table configuration. Once enabled, the table's enrichment schema is populated with CI data from ServiceNow and kept up to date with periodic syncs. This operation is idempotent — enabling an already-enabled table succeeds.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
EXEC pagerduty.enrichment.servicenow_tables.enable 
@integration_id='{{ integration_id }}' --required, 
@table_id='{{ table_id }}' --required
;
```
</TabItem>
<TabItem value="test">

Validates a ServiceNow CMDB table configuration by running a live query against ServiceNow and returning up to 10 sample records. Use this before enabling synchronization to confirm that the credentials, table name, query filter, and mapped fields are correct. Records are returned keyed by ServiceNow field name.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
EXEC pagerduty.enrichment.servicenow_tables.test 
@integration_id='{{ integration_id }}' --required, 
@table_id='{{ table_id }}' --required
;
```
</TabItem>
</Tabs>
