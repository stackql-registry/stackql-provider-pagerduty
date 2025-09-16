--- 
title: customfields_fields_field_options
hide_title: false
hide_table_of_contents: false
keywords:
  - customfields_fields_field_options
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

Creates, updates, deletes, gets or lists a <code>customfields_fields_field_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customfields_fields_field_options</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.customfields_fields_field_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_fields_field_option"
    values={[
        { label: 'get_custom_fields_field_option', value: 'get_custom_fields_field_option' },
        { label: 'list_custom_fields_field_options', value: 'list_custom_fields_field_options' }
    ]}
>
<TabItem value="get_custom_fields_field_option">

The field option requested.

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
    <td><CopyableCode code="data" /></td>
    <td><code></code></td>
    <td></td>
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
<TabItem value="list_custom_fields_field_options">

A list of field options.

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
    <td><CopyableCode code="data" /></td>
    <td><code></code></td>
    <td></td>
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
    <td><a href="#get_custom_fields_field_option"><CopyableCode code="get_custom_fields_field_option" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Get a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#list_custom_fields_field_options"><CopyableCode code="list_custom_fields_field_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>List all enabled Field Options for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#create_custom_fields_field_option"><CopyableCode code="create_custom_fields_field_option" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-data__field_option"><code>data__field_option</code></a></td>
    <td></td>
    <td>Create a new Field Option. Field Options may only be created for Fields where `fixed_options` is `true`. A Field may have no more than 10 enabled options.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#delete_custom_fields_field_option"><CopyableCode code="delete_custom_fields_field_option" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Delete a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_custom_fields_field_options"><CopyableCode code="_list_custom_fields_field_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>List all enabled Field Options for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_get_custom_fields_field_option"><CopyableCode code="_get_custom_fields_field_option" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Get a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#update_custom_fields_field_option"><CopyableCode code="update_custom_fields_field_option" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-field_option"><code>field_option</code></a></td>
    <td></td>
    <td>Update Field Option for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-field_option_id">
    <td><CopyableCode code="field_option_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the field option.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_fields_field_option"
    values={[
        { label: 'get_custom_fields_field_option', value: 'get_custom_fields_field_option' },
        { label: 'list_custom_fields_field_options', value: 'list_custom_fields_field_options' }
    ]}
>
<TabItem value="get_custom_fields_field_option">

Get a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
data,
type,
updated_at
FROM pagerduty.custom_fields.customfields_fields_field_options
WHERE field_id = '{{ field_id }}' -- required
AND field_option_id = '{{ field_option_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_fields_field_options">

List all enabled Field Options for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
data,
type,
updated_at
FROM pagerduty.custom_fields.customfields_fields_field_options
WHERE field_id = '{{ field_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_fields_field_option"
    values={[
        { label: 'create_custom_fields_field_option', value: 'create_custom_fields_field_option' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_fields_field_option">

Create a new Field Option. Field Options may only be created for Fields where `fixed_options` is `true`. A Field may have no more than 10 enabled options.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
INSERT INTO pagerduty.custom_fields.customfields_fields_field_options (
data__field_option,
field_id,
X-EARLY-ACCESS
)
SELECT 
'{{ field_option }}' /* required */,
'{{ field_id }}',
'{{ X-EARLY-ACCESS }}'
RETURNING
field_option
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: customfields_fields_field_options
  props:
    - name: field_id
      value: string
      description: Required parameter for the customfields_fields_field_options resource.
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the customfields_fields_field_options resource.
    - name: field_option
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_fields_field_option"
    values={[
        { label: 'delete_custom_fields_field_option', value: 'delete_custom_fields_field_option' }
    ]}
>
<TabItem value="delete_custom_fields_field_option">

Delete a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
DELETE FROM pagerduty.custom_fields.customfields_fields_field_options
WHERE field_id = '{{ field_id }}' --required
AND field_option_id = '{{ field_option_id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_custom_fields_field_options"
    values={[
        { label: '_list_custom_fields_field_options', value: '_list_custom_fields_field_options' },
        { label: '_get_custom_fields_field_option', value: '_get_custom_fields_field_option' },
        { label: 'update_custom_fields_field_option', value: 'update_custom_fields_field_option' }
    ]}
>
<TabItem value="_list_custom_fields_field_options">

List all enabled Field Options for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields_field_options._list_custom_fields_field_options 
@field_id='{{ field_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
<TabItem value="_get_custom_fields_field_option">

Get a Field Option.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields_field_options._get_custom_fields_field_option 
@field_id='{{ field_id }}' --required, 
@field_option_id='{{ field_option_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
<TabItem value="update_custom_fields_field_option">

Update Field Option for a Field.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.customfields_fields_field_options.update_custom_fields_field_option 
@field_id='{{ field_id }}' --required, 
@field_option_id='{{ field_option_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required 
@@json=
'{
"field_option": "{{ field_option }}"
}'
;
```
</TabItem>
</Tabs>
