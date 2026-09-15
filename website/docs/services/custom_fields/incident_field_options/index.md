--- 
title: incident_field_options
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_field_options
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

Creates, updates, deletes, gets or lists an <code>incident_field_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_field_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.incident_field_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \&lt;br /&gt;&gt; For more flexibility, we recommend using the Incident Types endpoint: \&lt;br /&gt;&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options&lt;br /&gt;&lt;br /&gt;List all enabled Field Options for a Custom Field on the Base Incident Type.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option"><code>field_option</code></a></td>
    <td></td>
    <td>&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \&lt;br /&gt;&gt; For more flexibility, we recommend using the Incident Types endpoint: \&lt;br /&gt;&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options&lt;br /&gt;&lt;br /&gt;Create a new Field Option for a Custom Field on the Base Incident Type. Field Options may only be created for Fields that have `field_options`. A Field may have no more than 10 enabled options.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a>, <a href="#parameter-field_option"><code>field_option</code></a></td>
    <td></td>
    <td>&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \&lt;br /&gt;&gt; For more flexibility, we recommend using the Incident Types endpoint: \&lt;br /&gt;&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options/&#123;field_option_id&#125;&lt;br /&gt;&lt;br /&gt;Update a Field Option for a Custom Field on the Base Incident Type.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-field_option_id"><code>field_option_id</code></a></td>
    <td></td>
    <td>&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \&lt;br /&gt;&gt; For more flexibility, we recommend using the Incident Types endpoint: \&lt;br /&gt;&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options/&#123;field_option_id&#125;&lt;br /&gt;&lt;br /&gt;Delete a Field Option for a Custom Field on the Base Incident Type.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `custom_fields.write`&lt;br /&gt;</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Deprecated<br />&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \<br />&gt; For more flexibility, we recommend using the Incident Types endpoint: \<br />&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options<br /><br />List all enabled Field Options for a Custom Field on the Base Incident Type.<br /><br />Scoped OAuth requires: `custom_fields.read`<br />

```sql
SELECT
id,
created_at,
data,
type,
updated_at
FROM pagerduty.custom_fields.incident_field_options
WHERE field_id = '{{ field_id }}' -- required
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

<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Deprecated<br />&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \<br />&gt; For more flexibility, we recommend using the Incident Types endpoint: \<br />&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options<br /><br />Create a new Field Option for a Custom Field on the Base Incident Type. Field Options may only be created for Fields that have `field_options`. A Field may have no more than 10 enabled options.<br /><br />Scoped OAuth requires: `custom_fields.write`<br />

```sql
INSERT INTO pagerduty.custom_fields.incident_field_options (
field_option,
field_id
)
SELECT 
'{{ field_option }}' /* required */,
'{{ field_id }}'
RETURNING
field_option
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_field_options
  props:
    - name: field_id
      value: "{{ field_id }}"
      description: Required parameter for the incident_field_options resource.
    - name: field_option
      value:
        data:
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

<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Deprecated<br />&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \<br />&gt; For more flexibility, we recommend using the Incident Types endpoint: \<br />&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options/&#123;field_option_id&#125;<br /><br />Update a Field Option for a Custom Field on the Base Incident Type.<br /><br />Scoped OAuth requires: `custom_fields.write`<br />

```sql
UPDATE pagerduty.custom_fields.incident_field_options
SET 
field_option = '{{ field_option }}'
WHERE 
field_id = '{{ field_id }}' --required
AND field_option_id = '{{ field_option_id }}' --required
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

<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Deprecated<br />&gt; This endpoint is deprecated and only works for fields on the Base Incident Type. \<br />&gt; For more flexibility, we recommend using the Incident Types endpoint: \<br />&gt; /incidents/types/&#123;type_id_or_name&#125;/custom_fields/&#123;field_id&#125;/field_options/&#123;field_option_id&#125;<br /><br />Delete a Field Option for a Custom Field on the Base Incident Type.<br /><br />Scoped OAuth requires: `custom_fields.write`<br />

```sql
DELETE FROM pagerduty.custom_fields.incident_field_options
WHERE field_id = '{{ field_id }}' --required
AND field_option_id = '{{ field_option_id }}' --required
;
```
</TabItem>
</Tabs>
