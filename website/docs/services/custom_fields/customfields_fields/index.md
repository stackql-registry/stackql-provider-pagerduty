--- 
title: customfields_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - customfields_fields
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

Creates, updates, deletes, gets or lists a <code>customfields_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customfields_fields</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.customfields_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_fields_field"
    values={[
        { label: 'get_custom_fields_field', value: 'get_custom_fields_field' },
        { label: 'list_custom_fields_fields', value: 'list_custom_fields_fields' }
    ]}
>
<TabItem value="get_custom_fields_field">

The field requested.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the field. This must be unique across an account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="datatype" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The fixed list of value options that may be stored in this field.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_options" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, restricts the values allowed to be stored in the custom field to a limited set of options (configured via the Field Option sub-resource). Must be `false` if `datatype` is "boolean", "url", or "datetime"</td>
</tr>
<tr>
    <td><CopyableCode code="multi_value" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, allows the custom field to store a set of multiple values. Must be `false` if `datatype` is not "string" or "url"</td>
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
<TabItem value="list_custom_fields_fields">

A paginated list of fields.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the field. This must be unique across an account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="datatype" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The fixed list of value options that may be stored in this field.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_options" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, restricts the values allowed to be stored in the custom field to a limited set of options (configured via the Field Option sub-resource). Must be `false` if `datatype` is "boolean", "url", or "datetime"</td>
</tr>
<tr>
    <td><CopyableCode code="multi_value" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, allows the custom field to store a set of multiple values. Must be `false` if `datatype` is not "string" or "url"</td>
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
    <td><a href="#get_custom_fields_field"><CopyableCode code="get_custom_fields_field" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about a field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#list_custom_fields_fields"><CopyableCode code="list_custom_fields_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#create_custom_fields_field"><CopyableCode code="create_custom_fields_field" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-data__field"><code>data__field</code></a></td>
    <td></td>
    <td>Create a new Field, along with the Field Options if provided. An account may have up to 1000 Fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#delete_custom_fields_field"><CopyableCode code="delete_custom_fields_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Delete a Field. Fields may not be deleted if they are used by a Field Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_custom_fields_fields"><CopyableCode code="_list_custom_fields_fields" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_get_custom_fields_field"><CopyableCode code="_get_custom_fields_field" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about a field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#update_custom_fields_field"><CopyableCode code="update_custom_fields_field" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-field"><code>field</code></a></td>
    <td></td>
    <td>Update a field.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-field_id">
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the field.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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
    defaultValue="get_custom_fields_field"
    values={[
        { label: 'get_custom_fields_field', value: 'get_custom_fields_field' },
        { label: 'list_custom_fields_fields', value: 'list_custom_fields_fields' }
    ]}
>
<TabItem value="get_custom_fields_field">

Show detailed information about a field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
display_name,
created_at,
datatype,
description,
field_options,
fixed_options,
multi_value,
self,
summary,
type,
updated_at
FROM pagerduty.custom_fields.customfields_fields
WHERE field_id = '{{ field_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_custom_fields_fields">

List fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
display_name,
created_at,
datatype,
description,
field_options,
fixed_options,
multi_value,
self,
summary,
type,
updated_at
FROM pagerduty.custom_fields.customfields_fields
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_fields_field"
    values={[
        { label: 'create_custom_fields_field', value: 'create_custom_fields_field' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_fields_field">

Create a new Field, along with the Field Options if provided. An account may have up to 1000 Fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
INSERT INTO pagerduty.custom_fields.customfields_fields (
data__field,
X-EARLY-ACCESS
)
SELECT 
'{{ field }}' /* required */,
'{{ X-EARLY-ACCESS }}'
RETURNING
field
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: customfields_fields
  props:
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the customfields_fields resource.
    - name: field
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_fields_field"
    values={[
        { label: 'delete_custom_fields_field', value: 'delete_custom_fields_field' }
    ]}
>
<TabItem value="delete_custom_fields_field">

Delete a Field. Fields may not be deleted if they are used by a Field Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
DELETE FROM pagerduty.custom_fields.customfields_fields
WHERE field_id = '{{ field_id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_custom_fields_fields"
    values={[
        { label: '_list_custom_fields_fields', value: '_list_custom_fields_fields' },
        { label: '_get_custom_fields_field', value: '_get_custom_fields_field' },
        { label: 'update_custom_fields_field', value: 'update_custom_fields_field' }
    ]}
>
<TabItem value="_list_custom_fields_fields">

List fields.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields._list_custom_fields_fields 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_custom_fields_field">

Show detailed information about a field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields._get_custom_fields_field 
@field_id='{{ field_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_custom_fields_field">

Update a field.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields.update_custom_fields_field 
@field_id='{{ field_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required 
@@json=
'{
"field": "{{ field }}"
}'
;
```
</TabItem>
</Tabs>
