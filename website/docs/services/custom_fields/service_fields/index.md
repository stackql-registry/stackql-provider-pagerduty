--- 
title: service_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - service_fields
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>service_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.service_fields" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field. May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created. (title: Field Name)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the field. This must be unique across an account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at. (title: Datetime)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain. (boolean, integer, float, string, datetime, url)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the field is enabled. (true, false)</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The options for the custom field. Applies only to `single_value_fixed` and `multi_value_fixed` field types. These options are returned only if the `include&#91;&#93;` parameter specifies `field_options`.</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>The type of data this field contains. In combination with the `data_type` field. (single_value, single_value_fixed, multi_value, multi_value_fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `display_name`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (field)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was updated at. (title: Datetime)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of fields.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field. May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created. (title: Field Name)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the field. This must be unique across an account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at. (title: Datetime)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain. (boolean, integer, float, string, datetime, url)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the field is enabled. (true, false)</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The options for the custom field. Applies only to `single_value_fixed` and `multi_value_fixed` field types. These options are returned only if the `include&#91;&#93;` parameter specifies `field_options`.</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>The type of data this field contains. In combination with the `data_type` field. (single_value, single_value_fixed, multi_value, multi_value_fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `display_name`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (field)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was updated at. (title: Datetime)</td>
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
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about a Custom Field for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List Custom Fields available for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-field"><code>field</code></a></td>
    <td></td>
    <td>Creates a new Custom Field for Services, along with the Field Options if provided.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field"><code>field</code></a></td>
    <td></td>
    <td>Update a Custom Field for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Delete a Custom Field from Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
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

Show detailed information about a Custom Field for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
data_type,
description,
enabled,
field_options,
field_type,
self,
summary,
type,
updated_at
FROM pagerduty.custom_fields.service_fields
WHERE field_id = '{{ field_id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List Custom Fields available for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
data_type,
description,
enabled,
field_options,
field_type,
self,
summary,
type,
updated_at
FROM pagerduty.custom_fields.service_fields
WHERE include[] = '{{ include[] }}'
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

Creates a new Custom Field for Services, along with the Field Options if provided.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.custom_fields.service_fields (
field
)
SELECT 
'{{ field }}' /* required */
RETURNING
field
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_fields
  props:
    - name: field
      description: |
        Details of the custom field to be created.
      value:
        data_type: "{{ data_type }}"
        description: "{{ description }}"
        display_name: "{{ display_name }}"
        enabled: {{ enabled }}
        field_options:
          - data:
              data_type: "{{ data_type }}"
              value: "{{ value }}"
        field_type: "{{ field_type }}"
        name: "{{ name }}"
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

Update a Custom Field for Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
UPDATE pagerduty.custom_fields.service_fields
SET 
field = '{{ field }}'
WHERE 
field_id = '{{ field_id }}' --required
AND field = '{{ field }}' --required
RETURNING
field;
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

Delete a Custom Field from Services.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.custom_fields.service_fields
WHERE field_id = '{{ field_id }}' --required
;
```
</TabItem>
</Tabs>
