--- 
title: field_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - field_configurations
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

Creates, updates, deletes, gets or lists a <code>field_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>field_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.field_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_fields_field_configuration"
    values={[
        { label: 'get_custom_fields_field_configuration', value: 'get_custom_fields_field_configuration' },
        { label: 'list_custom_fields_field_configurations', value: 'list_custom_fields_field_configurations' }
    ]}
>
<TabItem value="get_custom_fields_field_configuration">

The field configuration requested.

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
    <td><CopyableCode code="default_value" /></td>
    <td><code>object</code></td>
    <td>The value to use for this field if none is provided. It must be specified if `required` is `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code></code></td>
    <td>The Field to be included in this schema. Each Field may only be used in one Field Configuration per schema.</td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, this Field must always have a value set for objects using this schema.</td>
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
<TabItem value="list_custom_fields_field_configurations">

A list of field configurations in the schema.

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
    <td><CopyableCode code="default_value" /></td>
    <td><code>object</code></td>
    <td>The value to use for this field if none is provided. It must be specified if `required` is `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code></code></td>
    <td>The Field to be included in this schema. Each Field may only be used in one Field Configuration per schema.</td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, this Field must always have a value set for objects using this schema.</td>
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
    <td><a href="#get_custom_fields_field_configuration"><CopyableCode code="get_custom_fields_field_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-field_configuration_id"><code>field_configuration_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about a Field Configuration.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#list_custom_fields_field_configurations"><CopyableCode code="list_custom_fields_field_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List all Field Configurations for the given Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#create_custom_fields_field_configuration"><CopyableCode code="create_custom_fields_field_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-data__field_configuration"><code>data__field_configuration</code></a></td>
    <td></td>
    <td>Add a new Field Configuration to an existing Schema. A Schema may use at most 20 Fields, and so may have at most 20 Field Configurations.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#delete_custom_fields_field_configuration"><CopyableCode code="delete_custom_fields_field_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-field_configuration_id"><code>field_configuration_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Remove a Field Configuration and its associated Field from a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_custom_fields_field_configurations"><CopyableCode code="_list_custom_fields_field_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List all Field Configurations for the given Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_get_custom_fields_field_configuration"><CopyableCode code="_get_custom_fields_field_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-field_configuration_id"><code>field_configuration_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about a Field Configuration.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#update_custom_fields_field_configuration"><CopyableCode code="update_custom_fields_field_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schema_id"><code>schema_id</code></a>, <a href="#parameter-field_configuration_id"><code>field_configuration_id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-field_configuration"><code>field_configuration</code></a></td>
    <td></td>
    <td>Update settings for Field Configuration in Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-field_configuration_id">
    <td><CopyableCode code="field_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the field configuration.</td>
</tr>
<tr id="parameter-schema_id">
    <td><CopyableCode code="schema_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the schema.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_fields_field_configuration"
    values={[
        { label: 'get_custom_fields_field_configuration', value: 'get_custom_fields_field_configuration' },
        { label: 'list_custom_fields_field_configurations', value: 'list_custom_fields_field_configurations' }
    ]}
>
<TabItem value="get_custom_fields_field_configuration">

Show detailed information about a Field Configuration.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
default_value,
field,
required,
type,
updated_at
FROM pagerduty.custom_fields.field_configurations
WHERE schema_id = '{{ schema_id }}' -- required
AND field_configuration_id = '{{ field_configuration_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_custom_fields_field_configurations">

List all Field Configurations for the given Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
default_value,
field,
required,
type,
updated_at
FROM pagerduty.custom_fields.field_configurations
WHERE schema_id = '{{ schema_id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_fields_field_configuration"
    values={[
        { label: 'create_custom_fields_field_configuration', value: 'create_custom_fields_field_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_fields_field_configuration">

Add a new Field Configuration to an existing Schema. A Schema may use at most 20 Fields, and so may have at most 20 Field Configurations.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
INSERT INTO pagerduty.custom_fields.field_configurations (
data__field_configuration,
schema_id,
X-EARLY-ACCESS
)
SELECT 
'{{ field_configuration }}' /* required */,
'{{ schema_id }}',
'{{ X-EARLY-ACCESS }}'
RETURNING
field_configuration
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: field_configurations
  props:
    - name: schema_id
      value: string
      description: Required parameter for the field_configurations resource.
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the field_configurations resource.
    - name: field_configuration
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_fields_field_configuration"
    values={[
        { label: 'delete_custom_fields_field_configuration', value: 'delete_custom_fields_field_configuration' }
    ]}
>
<TabItem value="delete_custom_fields_field_configuration">

Remove a Field Configuration and its associated Field from a Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
DELETE FROM pagerduty.custom_fields.field_configurations
WHERE schema_id = '{{ schema_id }}' --required
AND field_configuration_id = '{{ field_configuration_id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_custom_fields_field_configurations"
    values={[
        { label: '_list_custom_fields_field_configurations', value: '_list_custom_fields_field_configurations' },
        { label: '_get_custom_fields_field_configuration', value: '_get_custom_fields_field_configuration' },
        { label: 'update_custom_fields_field_configuration', value: 'update_custom_fields_field_configuration' }
    ]}
>
<TabItem value="_list_custom_fields_field_configurations">

List all Field Configurations for the given Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.field_configurations._list_custom_fields_field_configurations 
@schema_id='{{ schema_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_custom_fields_field_configuration">

Show detailed information about a Field Configuration.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.field_configurations._get_custom_fields_field_configuration 
@schema_id='{{ schema_id }}' --required, 
@field_configuration_id='{{ field_configuration_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_custom_fields_field_configuration">

Update settings for Field Configuration in Schema.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.field_configurations.update_custom_fields_field_configuration 
@schema_id='{{ schema_id }}' --required, 
@field_configuration_id='{{ field_configuration_id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required 
@@json=
'{
"field_configuration": "{{ field_configuration }}"
}'
;
```
</TabItem>
</Tabs>
