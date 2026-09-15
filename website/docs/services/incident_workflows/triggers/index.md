--- 
title: triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - triggers
  - incident_workflows
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

Creates, updates, deletes, gets or lists a <code>triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.triggers" /></td></tr>
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

The Incident Workflows Trigger

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
    <td><CopyableCode code="trigger_type_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for the trigger type</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>string</code></td>
    <td>A PCL condition string.  If specified, the trigger will execute when the condition is met on an incident.  If unspecified, the trigger will execute on incident creation.  Required if trigger_type is “conditional”, not allowed for other trigger types. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_types" /></td>
    <td><code>array</code></td>
    <td>An optional array of Incident Types associated with the trigger when it is of type `incident_type`.</td>
</tr>
<tr>
    <td><CopyableCode code="is_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Trigger is disabled or not. Inherited from the "is_enabled" property on the workflow to which this trigger belongs. This attribute is deprecated, and will be removed in a future version of  this API. </td>
</tr>
<tr>
    <td><CopyableCode code="is_subscribed_to_all_services" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the Trigger should be associated with All Services</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>An object detailing who can start this Trigger. Applicable only to manual Triggers.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>An optional array of Services associated with this workflow. Incidents in any of the listed Services are eligible to fire this Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td> (conditional, manual, incident_type)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_url" /></td>
    <td><code>string (url)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>Workflow to start when this trigger is invoked</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated array of Incident Workflow Triggers

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
    <td><CopyableCode code="trigger_type_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for the trigger type</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>string</code></td>
    <td>A PCL condition string.  If specified, the trigger will execute when the condition is met on an incident.  If unspecified, the trigger will execute on incident creation.  Required if trigger_type is “conditional”, not allowed for other trigger types. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_types" /></td>
    <td><code>array</code></td>
    <td>An optional array of Incident Types associated with the trigger when it is of type `incident_type`.</td>
</tr>
<tr>
    <td><CopyableCode code="is_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Trigger is disabled or not. Inherited from the "is_enabled" property on the workflow to which this trigger belongs. This attribute is deprecated, and will be removed in a future version of  this API. </td>
</tr>
<tr>
    <td><CopyableCode code="is_subscribed_to_all_services" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the Trigger should be associated with All Services</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>An object detailing who can start this Trigger. Applicable only to manual Triggers.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>An optional array of Services associated with this workflow. Incidents in any of the listed Services are eligible to fire this Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td> (conditional, manual, incident_type)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_url" /></td>
    <td><code>string (url)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>Workflow to start when this trigger is invoked</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Retrieve an existing Incident Workflows Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-trigger_type"><code>trigger_type</code></a>, <a href="#parameter-workflow_name_contains"><code>workflow_name_contains</code></a>, <a href="#parameter-is_disabled"><code>is_disabled</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a></td>
    <td>List existing Incident Workflow Triggers&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-trigger"><code>trigger</code></a></td>
    <td></td>
    <td>Create new Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-trigger"><code>trigger</code></a></td>
    <td></td>
    <td>Update an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>If provided, only show triggers configured on the service of the given incident. Useful for finding manual triggers that are configured on the service for a specific incident. Cannot be specified if `service_id` is provided.</td>
</tr>
<tr id="parameter-is_disabled">
    <td><CopyableCode code="is_disabled" /></td>
    <td><code>boolean</code></td>
    <td>If provided, filters between disabled and enabled Triggers. This query parameter is deprecated, and will be removed in a future version of this API. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>If provided, only show triggers configured for incidents in the given service. Useful for listing all workflows associated with the given service. Cannot be specified if `incident_id` is provided.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>If provided, returns triggers sorted by the specified property.</td>
</tr>
<tr id="parameter-trigger_type">
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td>If provided, only show triggers of the given type. For example “manual” to search for manual triggers</td>
</tr>
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>If provided, only show triggers configured to start the given workflow. Useful for listing all services associated with the given workflow</td>
</tr>
<tr id="parameter-workflow_name_contains">
    <td><CopyableCode code="workflow_name_contains" /></td>
    <td><code>string</code></td>
    <td>If provided, only show triggers configured to start workflows whose name contain the provided value.</td>
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

Retrieve an existing Incident Workflows Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;

```sql
SELECT
id,
trigger_type_name,
condition,
html_url,
incident_types,
is_disabled,
is_subscribed_to_all_services,
permissions,
self,
services,
summary,
trigger_type,
trigger_url,
type,
workflow
FROM pagerduty.incident_workflows.triggers
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List existing Incident Workflow Triggers&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;

```sql
SELECT
id,
trigger_type_name,
condition,
html_url,
incident_types,
is_disabled,
is_subscribed_to_all_services,
permissions,
self,
services,
summary,
trigger_type,
trigger_url,
type,
workflow
FROM pagerduty.incident_workflows.triggers
WHERE workflow_id = '{{ workflow_id }}'
AND incident_id = '{{ incident_id }}'
AND service_id = '{{ service_id }}'
AND trigger_type = '{{ trigger_type }}'
AND workflow_name_contains = '{{ workflow_name_contains }}'
AND is_disabled = '{{ is_disabled }}'
AND sort_by = '{{ sort_by }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
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

Create new Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_workflows.triggers (
trigger
)
SELECT 
'{{ trigger }}' /* required */
RETURNING
trigger
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: triggers
  props:
    - name: trigger
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        trigger_type: "{{ trigger_type }}"
        condition: "{{ condition }}"
        trigger_url: "{{ trigger_url }}"
        incident_types:
          - "{{ incident_types }}"
        workflow:
          id: "{{ id }}"
        services:
          - id: "{{ id }}"
        is_subscribed_to_all_services: {{ is_subscribed_to_all_services }}
        permissions:
          restricted: {{ restricted }}
          team_id: "{{ team_id }}"
        is_disabled: {{ is_disabled }}
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

Update an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incident_workflows.triggers
SET 
trigger = '{{ trigger }}'
WHERE 
id = '{{ id }}' --required
AND trigger = '{{ trigger }}' --required
RETURNING
trigger;
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

Delete an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.incident_workflows.triggers
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
