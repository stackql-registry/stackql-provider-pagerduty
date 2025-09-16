--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - custom_fields
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_fields_schema"
    values={[
        { label: 'get_custom_fields_schema', value: 'get_custom_fields_schema' },
        { label: 'list_custom_fields_schemas', value: 'list_custom_fields_schemas' }
    ]}
>
<TabItem value="get_custom_fields_schema">

The schema requested.

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
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this schema.</td>
</tr>
<tr>
    <td><CopyableCode code="field_configurations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_fields_schemas">

A paginated list of schemas.

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
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this schema.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was last updated.</td>
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
    <td><a href="#get_custom_fields_schema"><CopyableCode code="get_custom_fields_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get detailed information about a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#list_custom_fields_schemas"><CopyableCode code="list_custom_fields_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#create_custom_fields_schema"><CopyableCode code="create_custom_fields_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-data__schema"><code>data__schema</code></a></td>
    <td></td>
    <td>Create a new Schema, along with the Field Configurations if provided. An account may have up to 100 Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#delete_custom_fields_schema"><CopyableCode code="delete_custom_fields_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Delete a Schema. Schemas may not be deleted if they are in use by any Service.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_custom_fields_schemas"><CopyableCode code="_list_custom_fields_schemas" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_get_custom_fields_schema"><CopyableCode code="_get_custom_fields_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get detailed information about a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#update_custom_fields_schema"><CopyableCode code="update_custom_fields_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-schema"><code>schema</code></a></td>
    <td></td>
    <td>Update a Schema, along with the Field Configurations if provided.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header and the above value. Do not use this endpoint in production, as it may change! </td>
</tr>
<tr id="parameter-schema_id">
    <td><CopyableCode code="schema_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the schema.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include. Including `field_configurations` will also include full field details.</td>
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
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_fields_schema"
    values={[
        { label: 'get_custom_fields_schema', value: 'get_custom_fields_schema' },
        { label: 'list_custom_fields_schemas', value: 'list_custom_fields_schemas' }
    ]}
>
<TabItem value="get_custom_fields_schema">

Get detailed information about a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
description,
field_configurations,
self,
summary,
title,
type,
updated_at
FROM pagerduty.custom_fields.schemas
WHERE schema_id = '{{ schema_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_custom_fields_schemas">

List all Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
description,
self,
summary,
title,
type,
updated_at
FROM pagerduty.custom_fields.schemas
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_fields_schema"
    values={[
        { label: 'create_custom_fields_schema', value: 'create_custom_fields_schema' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_fields_schema">

Create a new Schema, along with the Field Configurations if provided. An account may have up to 100 Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
INSERT INTO pagerduty.custom_fields.schemas (
data__schema,
X-EARLY-ACCESS
)
SELECT 
'{{ schema }}' /* required */,
'{{ X-EARLY-ACCESS }}'
RETURNING
schema
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: schemas
  props:
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the schemas resource.
    - name: schema
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_fields_schema"
    values={[
        { label: 'delete_custom_fields_schema', value: 'delete_custom_fields_schema' }
    ]}
>
<TabItem value="delete_custom_fields_schema">

Delete a Schema. Schemas may not be deleted if they are in use by any Service.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
DELETE FROM pagerduty.custom_fields.schemas
WHERE schema_id = '{{ schema_id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_custom_fields_schemas"
    values={[
        { label: '_list_custom_fields_schemas', value: '_list_custom_fields_schemas' },
        { label: '_get_custom_fields_schema', value: '_get_custom_fields_schema' },
        { label: 'update_custom_fields_schema', value: 'update_custom_fields_schema' }
    ]}
>
<TabItem value="_list_custom_fields_schemas">

List all Schemas.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.schemas._list_custom_fields_schemas 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
<TabItem value="_get_custom_fields_schema">

Get detailed information about a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.schemas._get_custom_fields_schema 
@schema_id='{{ schema_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_custom_fields_schema">

Update a Schema, along with the Field Configurations if provided.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.schemas.update_custom_fields_schema 
@schema_id='{{ schema_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required 
@@json=
'{
"schema": "{{ schema }}"
}'
;
```
</TabItem>
</Tabs>
