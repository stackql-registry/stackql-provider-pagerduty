--- 
title: custom_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_fields
  - incident_types
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

Creates, updates, deletes, gets or lists a <code>custom_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_types.custom_fields" /></td></tr>
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

The incident type custom field requested.

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
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain. (boolean, integer, float, string, datetime, url)</td>
</tr>
<tr>
    <td><CopyableCode code="default_value" /></td>
    <td><code>object</code></td>
    <td> (title: Boolean)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the custom field is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The options for the custom field. Applies only to `single_value_fixed` and `multi_value_fixed` field types. Optionally included in response based on query parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>The type of data this field contains. In combination with the `data_type` field. (single_value, single_value_fixed, multi_value, multi_value_fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type" /></td>
    <td><code>string</code></td>
    <td>The id of the incident type the custom field is associated with.</td>
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
    <td> (field)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The custom fields for the incident type requested. Passing in include[]=field_options will return the field options for the custom field.

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
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The kind of data the custom field is allowed to contain. (boolean, integer, float, string, datetime, url)</td>
</tr>
<tr>
    <td><CopyableCode code="default_value" /></td>
    <td><code>object</code></td>
    <td> (title: Boolean)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data this field contains.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the custom field is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="field_options" /></td>
    <td><code>array</code></td>
    <td>The options for the custom field. Applies only to `single_value_fixed` and `multi_value_fixed` field types. Optionally included in response based on query parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>The type of data this field contains. In combination with the `data_type` field. (single_value, single_value_fixed, multi_value, multi_value_fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type" /></td>
    <td><code>string</code></td>
    <td>The id of the incident type the custom field is associated with.</td>
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
    <td> (field)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_id"><code>field_id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get a custom field for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List the custom fields for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field"><code>field</code></a></td>
    <td></td>
    <td>Create a Custom Field for an Incident Type&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field"><code>field</code></a></td>
    <td></td>
    <td>Update a custom field for an incident type. Field Options can also be updated within the same call.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Delete a custom field for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
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
<tr id="parameter-type_id_or_name">
    <td><CopyableCode code="type_id_or_name" /></td>
    <td><code>string</code></td>
    <td>The ID or name of the Incident Type.</td>
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

Get a custom field for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
data_type,
default_value,
description,
enabled,
field_options,
field_type,
incident_type,
self,
summary,
type,
updated_at
FROM pagerduty.incident_types.custom_fields
WHERE type_id_or_name = '{{ type_id_or_name }}' -- required
AND field_id = '{{ field_id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List the custom fields for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
data_type,
default_value,
description,
enabled,
field_options,
field_type,
incident_type,
self,
summary,
type,
updated_at
FROM pagerduty.incident_types.custom_fields
WHERE type_id_or_name = '{{ type_id_or_name }}' -- required
AND include[] = '{{ include[] }}'
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

Create a Custom Field for an Incident Type&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_types.custom_fields (
field,
type_id_or_name
)
SELECT 
'{{ field }}' /* required */,
'{{ type_id_or_name }}'
RETURNING
field
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_fields
  props:
    - name: type_id_or_name
      value: "{{ type_id_or_name }}"
      description: Required parameter for the custom_fields resource.
    - name: field
      description: |
        Details of the custom field to be created.
      value:
        name: "{{ name }}"
        display_name: "{{ display_name }}"
        data_type: "{{ data_type }}"
        field_type: "{{ field_type }}"
        description: "{{ description }}"
        enabled: {{ enabled }}
        default_value: "{{ default_value }}"
        field_options:
          - data:
              data_type: "{{ data_type }}"
              value: "{{ value }}"
            id: "{{ id }}"
            type: "{{ type }}"
            updated_at: "{{ updated_at }}"
            created_at: "{{ created_at }}"
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

Update a custom field for an incident type. Field Options can also be updated within the same call.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incident_types.custom_fields
SET 
field = '{{ field }}'
WHERE 
type_id_or_name = '{{ type_id_or_name }}' --required
AND field_id = '{{ field_id }}' --required
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

Delete a custom field for an incident type.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.incident_types.custom_fields
WHERE type_id_or_name = '{{ type_id_or_name }}' --required
AND field_id = '{{ field_id }}' --required
;
```
</TabItem>
</Tabs>
