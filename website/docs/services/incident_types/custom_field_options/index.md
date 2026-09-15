--- 
title: custom_field_options
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_field_options
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

Creates, updates, deletes, gets or lists a <code>custom_field_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_field_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_types.custom_field_options" /></td></tr>
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

The field option of the custom field requested.

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
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (field_option)</td>
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

The field option for the custom field requested.

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
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (field_option)</td>
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
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Get a field option on a custom field&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>List field options for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option"><code>field_option</code></a></td>
    <td></td>
    <td>Create a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option"><code>field_option</code></a></td>
    <td></td>
    <td>Update a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Delete a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
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
<tr id="parameter-field_option_id">
    <td><CopyableCode code="field_option_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the field option.</td>
</tr>
<tr id="parameter-type_id_or_name">
    <td><CopyableCode code="type_id_or_name" /></td>
    <td><code>string</code></td>
    <td>The ID or name of the Incident Type.</td>
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

Get a field option on a custom field&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
created_at,
data,
type,
updated_at
FROM pagerduty.incident_types.custom_field_options
WHERE type_id_or_name = '{{ type_id_or_name }}' -- required
AND field_option_id = '{{ field_option_id }}' -- required
AND field_id = '{{ field_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List field options for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;

```sql
SELECT
id,
created_at,
data,
type,
updated_at
FROM pagerduty.incident_types.custom_field_options
WHERE type_id_or_name = '{{ type_id_or_name }}' -- required
AND field_id = '{{ field_id }}' -- required
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

Create a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_types.custom_field_options (
field_option,
type_id_or_name,
field_id
)
SELECT 
'{{ field_option }}' /* required */,
'{{ type_id_or_name }}',
'{{ field_id }}'
RETURNING
field_option
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_field_options
  props:
    - name: type_id_or_name
      value: "{{ type_id_or_name }}"
      description: Required parameter for the custom_field_options resource.
    - name: field_id
      value: "{{ field_id }}"
      description: Required parameter for the custom_field_options resource.
    - name: field_option
      description: |
        Details of the field option to be created.
      value:
        data:
          data_type: "{{ data_type }}"
          value: "{{ value }}"
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

Update a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incident_types.custom_field_options
SET 
field_option = '{{ field_option }}'
WHERE 
type_id_or_name = '{{ type_id_or_name }}' --required
AND field_option_id = '{{ field_option_id }}' --required
AND field_id = '{{ field_id }}' --required
AND field_option = '{{ field_option }}' --required
RETURNING
field_option;
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

Delete a field option for a custom field.&lt;br /&gt;&lt;br /&gt;Custom Fields (CF) are a feature which will allow customers to extend Incidents with their own custom data,&lt;br /&gt;to provide additional context and support features such as customized filtering, search and analytics.&lt;br /&gt;Custom Fields can be applied to different incident types.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.incident_types.custom_field_options
WHERE type_id_or_name = '{{ type_id_or_name }}' --required
AND field_option_id = '{{ field_option_id }}' --required
AND field_id = '{{ field_id }}' --required
;
```
</TabItem>
</Tabs>
