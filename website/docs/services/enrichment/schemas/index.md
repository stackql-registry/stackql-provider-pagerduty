--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.schemas" /></td></tr>
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

The requested enrichment schema.

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier for the enrichment schema.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the enrichment schema.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was deleted, or `null` if it has not been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of this set of enrichment data.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields that make up the schema, including both query and enriched fields. A schema must contain 1-3 `query` fields and at least one `enriched` field, up to a maximum of 25 fields. Field names are unique within the schema (case-insensitive).</td>
</tr>
<tr>
    <td><CopyableCode code="integration_type" /></td>
    <td><code>string</code></td>
    <td>The source of the enrichment schema. `CSV` schemas are created and populated through the schema and CSV-upload endpoints; `SERVICENOW` schemas are managed by the ServiceNow CMDB integration. Schemas created through the API are always `CSV`, and only `CSV` schemas can be deleted. (CSV, SERVICENOW)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (example: enrichment_schema)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of enrichment schemas for the account.

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier for the enrichment schema.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the enrichment schema.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was deleted, or `null` if it has not been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of this set of enrichment data.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields that make up the schema, including both query and enriched fields. A schema must contain 1-3 `query` fields and at least one `enriched` field, up to a maximum of 25 fields. Field names are unique within the schema (case-insensitive).</td>
</tr>
<tr>
    <td><CopyableCode code="integration_type" /></td>
    <td><code>string</code></td>
    <td>The source of the enrichment schema. `CSV` schemas are created and populated through the schema and CSV-upload endpoints; `SERVICENOW` schemas are managed by the ServiceNow CMDB integration. Schemas created through the API are always `CSV`, and only `CSV` schemas can be deleted. (CSV, SERVICENOW)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (example: enrichment_schema)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the schema was last updated.</td>
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
    <td><a href="#parameter-schema_id"><code>schema_id</code></a></td>
    <td></td>
    <td>Retrieves a specific enrichment schema by ID.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists all enrichment schemas for the account.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td><a href="#parameter-filename"><code>filename</code></a></td>
    <td>Creates an enrichment schema. Provide a JSON body to define the schema explicitly (returns `201`), or upload a CSV file as `multipart/form-data` or `text/csv` to auto-generate a schema from the file's columns — the first column becomes a query field and the rest become enriched fields (returns `202` once the file is accepted for processing). A schema must include 1-3 query fields and at least one enriched field, up to 25 fields total, with unique (case-insensitive) field names. Schemas created through the API are always `CSV`, and an account may have at most 25 CSV schemas. CSV uploads are limited to 10 MB.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-schema"><code>schema</code></a></td>
    <td></td>
    <td>Updates the name and/or description of an enrichment schema. At least one of `name` or `description` must be provided. Schema fields cannot be changed after creation.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a></td>
    <td></td>
    <td>Soft-deletes an enrichment schema and returns the deleted schema. Only `CSV` schemas can be deleted; `SERVICENOW` schemas are managed by the ServiceNow CMDB integration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
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
<tr id="parameter-schema_id">
    <td><CopyableCode code="schema_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the enrichment schema.</td>
</tr>
<tr id="parameter-filename">
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>The filename for the CSV content. Required when creating a schema from a `text/csv` body; optional for `text/csv` record uploads. Ignored for `multipart/form-data` and JSON requests.</td>
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

Retrieves a specific enrichment schema by ID.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
fields,
integration_type,
type,
updated_at
FROM pagerduty.enrichment.schemas
WHERE schema_id = '{{ schema_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all enrichment schemas for the account.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
fields,
integration_type,
type,
updated_at
FROM pagerduty.enrichment.schemas
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

Creates an enrichment schema. Provide a JSON body to define the schema explicitly (returns `201`), or upload a CSV file as `multipart/form-data` or `text/csv` to auto-generate a schema from the file's columns — the first column becomes a query field and the rest become enriched fields (returns `202` once the file is accepted for processing). A schema must include 1-3 query fields and at least one enriched field, up to 25 fields total, with unique (case-insensitive) field names. Schemas created through the API are always `CSV`, and an account may have at most 25 CSV schemas. CSV uploads are limited to 10 MB.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.schemas (
integration_type,
name,
description,
fields,
filename
)
SELECT 
'{{ integration_type }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ fields }}' /* required */,
'{{ filename }}'
RETURNING
schema
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schemas
  props:
    - name: integration_type
      value: "{{ integration_type }}"
      description: |
        The schema source. Only \`CSV\` is supported through the API; the schema is always recorded as \`CSV\` regardless of the value sent.
      valid_values: ['CSV']
    - name: name
      value: "{{ name }}"
      description: |
        Display name of the enrichment schema.
    - name: description
      value: "{{ description }}"
      description: |
        Description of this set of enrichment data.
    - name: fields
      description: |
        The schema fields. Must include 1-3 query fields and at least one enriched field, up to 25 fields total. Field names must be unique (case-insensitive).
      value:
        - name: "{{ name }}"
          type: "{{ type }}"
    - name: filename
      value: "{{ filename }}"
      description: The filename for the CSV content. Required when creating a schema from a \`text/csv\` body; optional for \`text/csv\` record uploads. Ignored for \`multipart/form-data\` and JSON requests.
      description: The filename for the CSV content. Required when creating a schema from a \`text/csv\` body; optional for \`text/csv\` record uploads. Ignored for \`multipart/form-data\` and JSON requests.
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

Updates the name and/or description of an enrichment schema. At least one of `name` or `description` must be provided. Schema fields cannot be changed after creation.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.schemas
SET 
schema = '{{ schema }}'
WHERE 
schema_id = '{{ schema_id }}' --required
AND schema = '{{ schema }}' --required
RETURNING
schema;
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

Soft-deletes an enrichment schema and returns the deleted schema. Only `CSV` schemas can be deleted; `SERVICENOW` schemas are managed by the ServiceNow CMDB integration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.schemas
WHERE schema_id = '{{ schema_id }}' --required
;
```
</TabItem>
</Tabs>
