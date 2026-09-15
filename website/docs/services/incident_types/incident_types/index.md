--- 
title: incident_types
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_types
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

Creates, updates, deletes, gets or lists an <code>incident_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_types.incident_types" /></td></tr>
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

The incident type requested.

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
    <td>The name of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Incident Type. The first character must be alphanumeric. Max length: 50, Min Length : 1. The `display_name` for a Field must be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the Incident Type was created. (example: 2019-12-01T20:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A succinct description of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>State of this Incident Type object.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The parent Incident Type (id/name). If omitted, type is created under top level (incident_default)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the Incident Type was last modified. (example: 2019-12-01T21:02:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An array of all types for the account. The default incident type will automatically return on this list.

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
    <td>The name of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Incident Type. The first character must be alphanumeric. Max length: 50, Min Length : 1. The `display_name` for a Field must be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the Incident Type was created. (example: 2019-12-01T20:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A succinct description of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>State of this Incident Type object.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The parent Incident Type (id/name). If omitted, type is created under top level (incident_default)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the Incident Type was last modified. (example: 2019-12-01T21:02:00Z)</td>
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
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a></td>
    <td></td>
    <td>Get detailed information about a single incident type. Accepts either an incident type id, or an incident type name.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incident)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td>List the available incident types&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;These can be filtered by enabled or disabled types.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidentType)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_type"><code>incident_type</code></a></td>
    <td></td>
    <td>Create a new incident type.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidentType)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-type_id_or_name"><code>type_id_or_name</code></a>, <a href="#parameter-incident_type"><code>incident_type</code></a></td>
    <td></td>
    <td>Update an Incident Type.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incident)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.write`&lt;br /&gt;</td>
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
<tr id="parameter-type_id_or_name">
    <td><CopyableCode code="type_id_or_name" /></td>
    <td><code>string</code></td>
    <td>The ID or name of the Incident Type.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters the list of incident types based on their `enabled` state.</td>
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

Get detailed information about a single incident type. Accepts either an incident type id, or an incident type name.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incident)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
description,
enabled,
parent,
type,
updated_at
FROM pagerduty.incident_types.incident_types
WHERE type_id_or_name = '{{ type_id_or_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the available incident types&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;These can be filtered by enabled or disabled types.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidentType)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.read`&lt;br /&gt;

```sql
SELECT
id,
name,
display_name,
created_at,
description,
enabled,
parent,
type,
updated_at
FROM pagerduty.incident_types.incident_types
WHERE filter = '{{ filter }}'
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

Create a new incident type.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidentType)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_types.incident_types (
incident_type
)
SELECT 
'{{ incident_type }}' /* required */
RETURNING
incident_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_types
  props:
    - name: incident_type
      description: |
        Details of the incident type to be created.
      value:
        name: "{{ name }}"
        display_name: "{{ display_name }}"
        parent_type: "{{ parent_type }}"
        enabled: {{ enabled }}
        description: "{{ description }}"
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

Update an Incident Type.&lt;br /&gt;&lt;br /&gt;Incident Types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incident)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_types.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incident_types.incident_types
SET 
incident_type = '{{ incident_type }}'
WHERE 
type_id_or_name = '{{ type_id_or_name }}' --required
AND incident_type = '{{ incident_type }}' --required
RETURNING
incident_type;
```
</TabItem>
</Tabs>
