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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.templates.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'get_templates', value: 'get_templates' }
    ]}
>
<TabItem value="get_template">

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
    <td>The type of template (`status_update` is the only supported template at this time)</td>
</tr>
<tr>
    <td><CopyableCode code="templated_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code></code></td>
    <td>User/Account object reference of the updator</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_templates">

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
    <td>The type of template (`status_update` is the only supported template at this time)</td>
</tr>
<tr>
    <td><CopyableCode code="templated_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a single template on the account<br /><br />Scoped OAuth requires: `templates.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_templates"><CopyableCode code="get_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-template_type"><code>template_type</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>Get a list of all the template on an account<br /><br />Scoped OAuth requires: `templates.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__template"><code>data__template</code></a></td>
    <td></td>
    <td>Create a new template<br /><br />Scoped OAuth requires: `templates.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a specific of templates on the account<br /><br />Scoped OAuth requires: `templates.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_templates"><CopyableCode code="_get_templates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-template_type"><code>template_type</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>Get a list of all the template on an account<br /><br />Scoped OAuth requires: `templates.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_template"><CopyableCode code="_get_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a single template on the account<br /><br />Scoped OAuth requires: `templates.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-template"><code>template</code></a></td>
    <td></td>
    <td>Update an existing template<br /><br />Scoped OAuth requires: `templates.write`<br /></td>
</tr>
<tr>
    <td><a href="#render_template"><CopyableCode code="render_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Render a template. This endpoint has a variable request body depending on the template type. For the `status_update` template type, the caller will provide the incident id, and a status update message.<br /><br />Scoped OAuth requires: `templates.read`<br /></td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'get_templates', value: 'get_templates' }
    ]}
>
<TabItem value="get_template">

Get a single template on the account<br /><br />Scoped OAuth requires: `templates.read`<br />

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
<TabItem value="get_templates">

Get a list of all the template on an account<br /><br />Scoped OAuth requires: `templates.read`<br />

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
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Create a new template<br /><br />Scoped OAuth requires: `templates.write`<br />

```sql
INSERT INTO pagerduty.templates.templates (
data__template
)
SELECT 
'{{ template }}' /* required */
RETURNING
template
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: templates
  props:
    - name: template
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Delete a specific of templates on the account<br /><br />Scoped OAuth requires: `templates.write`<br />

```sql
DELETE FROM pagerduty.templates.templates
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_templates"
    values={[
        { label: '_get_templates', value: '_get_templates' },
        { label: '_get_template', value: '_get_template' },
        { label: 'update_template', value: 'update_template' },
        { label: 'render_template', value: 'render_template' }
    ]}
>
<TabItem value="_get_templates">

Get a list of all the template on an account<br /><br />Scoped OAuth requires: `templates.read`<br />

```sql
EXEC pagerduty.templates.templates._get_templates 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@query='{{ query }}', 
@template_type='{{ template_type }}', 
@sort_by='{{ sort_by }}'
;
```
</TabItem>
<TabItem value="_get_template">

Get a single template on the account<br /><br />Scoped OAuth requires: `templates.read`<br />

```sql
EXEC pagerduty.templates.templates._get_template 
@id='{{ id }}' --required
;
```
</TabItem>
<TabItem value="update_template">

Update an existing template<br /><br />Scoped OAuth requires: `templates.write`<br />

```sql
EXEC pagerduty.templates.templates.update_template 
@id='{{ id }}' --required 
@@json=
'{
"template": "{{ template }}"
}'
;
```
</TabItem>
<TabItem value="render_template">

Render a template. This endpoint has a variable request body depending on the template type. For the `status_update` template type, the caller will provide the incident id, and a status update message.<br /><br />Scoped OAuth requires: `templates.read`<br />

```sql
EXEC pagerduty.templates.templates.render_template 
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
