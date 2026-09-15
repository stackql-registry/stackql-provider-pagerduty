--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - templates
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.templates.templates" /></td></tr>
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

Successful operation

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code></code></td>
    <td>User/Account object reference of the creator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the template</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>The type of template (`status_update` is the only supported template at this time) (status_update)</td>
</tr>
<tr>
    <td><CopyableCode code="templated_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (template)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code></code></td>
    <td>User/Account object reference of the updator</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated array of templates.

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code></code></td>
    <td>User/Account object reference of the creator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the template</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>The type of template (`status_update` is the only supported template at this time) (status_update)</td>
</tr>
<tr>
    <td><CopyableCode code="templated_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (template)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code></code></td>
    <td>User/Account object reference of the updator</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a single template on the account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-template_type"><code>template_type</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>Get a list of all the template on an account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template"><code>template</code></a></td>
    <td></td>
    <td>Create a new template&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-template"><code>template</code></a></td>
    <td></td>
    <td>Update an existing template&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a specific of templates on the account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#render"><CopyableCode code="render" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Render a template. This endpoint has a variable request body depending on the template type. For the `status_update` template type, the caller will provide the incident id, and a status update message.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset to start pagination search results.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Template name or description to search</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Used to specify both the field you wish to sort the results on (name/created_at), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. Sort direction defaults to ascending.</td>
</tr>
<tr id="parameter-template_type">
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>Filters templates by type.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get a single template on the account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_by,
description,
html_url,
self,
summary,
template_type,
templated_fields,
type,
updated_by
FROM pagerduty.templates.templates
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get a list of all the template on an account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_by,
description,
html_url,
self,
summary,
template_type,
templated_fields,
type,
updated_by
FROM pagerduty.templates.templates
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
AND template_type = '{{ template_type }}'
AND sort_by = '{{ sort_by }}'
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

Create a new template&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.templates.templates (
template
)
SELECT 
'{{ template }}' /* required */
RETURNING
template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: template
      value:
        template_type: "{{ template_type }}"
        name: "{{ name }}"
        description: "{{ description }}"
        templated_fields:
          email_subject: "{{ email_subject }}"
          email_body: "{{ email_body }}"
          message: "{{ message }}"
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

Update an existing template&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;

```sql
UPDATE pagerduty.templates.templates
SET 
template = '{{ template }}'
WHERE 
id = '{{ id }}' --required
AND template = '{{ template }}' --required
RETURNING
template;
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

Delete a specific of templates on the account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.templates.templates
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="render"
    values={[
        { label: 'render', value: 'render' }
    ]}
>
<TabItem value="render">

Render a template. This endpoint has a variable request body depending on the template type. For the `status_update` template type, the caller will provide the incident id, and a status update message.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `templates.read`&lt;br /&gt;

```sql
EXEC pagerduty.templates.templates.render 
@id='{{ id }}' --required 
@@json=
'{
"incident_id": "{{ incident_id }}", 
"status_update": "{{ status_update }}", 
"external": "{{ external }}"
}'
;
```
</TabItem>
</Tabs>
