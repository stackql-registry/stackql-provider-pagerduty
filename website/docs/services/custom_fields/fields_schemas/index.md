--- 
title: fields_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - fields_schemas
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

Creates, updates, deletes, gets or lists a <code>fields_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fields_schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.fields_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_custom_fields_schemas_using_field"
    values={[
        { label: 'list_custom_fields_schemas_using_field', value: 'list_custom_fields_schemas_using_field' }
    ]}
>
<TabItem value="list_custom_fields_schemas_using_field">

A paginated list of schemas using the field.

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
    <td><a href="#list_custom_fields_schemas_using_field"><CopyableCode code="list_custom_fields_schemas_using_field" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Schemas using the Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_custom_fields_schemas_using_field"><CopyableCode code="_list_custom_fields_schemas_using_field" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Schemas using the Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
    defaultValue="list_custom_fields_schemas_using_field"
    values={[
        { label: 'list_custom_fields_schemas_using_field', value: 'list_custom_fields_schemas_using_field' }
    ]}
>
<TabItem value="list_custom_fields_schemas_using_field">

List all Schemas using the Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

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
FROM pagerduty.custom_fields.fields_schemas
WHERE field_id = '{{ field_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_custom_fields_schemas_using_field"
    values={[
        { label: '_list_custom_fields_schemas_using_field', value: '_list_custom_fields_schemas_using_field' }
    ]}
>
<TabItem value="_list_custom_fields_schemas_using_field">

List all Schemas using the Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.fields_schemas._list_custom_fields_schemas_using_field 
@field_id='{{ field_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
</Tabs>
