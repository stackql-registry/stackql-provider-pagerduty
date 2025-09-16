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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>triggers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_workflow_trigger"
    values={[
        { label: 'get_incident_workflow_trigger', value: 'get_incident_workflow_trigger' },
        { label: 'list_incident_workflow_triggers', value: 'list_incident_workflow_triggers' }
    ]}
>
<TabItem value="get_incident_workflow_trigger">

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
    <td>A PCL condition string.  If specified, the trigger will execute when the condition is met on an incident.  If unspecified, the trigger will execute on incident creation.  Required if trigger_type is “conditional”, not allowed if trigger_type is “manual”. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="trigger_url" /></td>
    <td><code>string (url)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>Workflow to start when this trigger is invoked</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_workflow_triggers">

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
    <td>A PCL condition string.  If specified, the trigger will execute when the condition is met on an incident.  If unspecified, the trigger will execute on incident creation.  Required if trigger_type is “conditional”, not allowed if trigger_type is “manual”. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="trigger_url" /></td>
    <td><code>string (url)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_incident_workflow_trigger"><CopyableCode code="get_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Retrieve an existing Incident Workflows Trigger<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_incident_workflow_triggers"><CopyableCode code="list_incident_workflow_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-trigger_type"><code>trigger_type</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a></td>
    <td>List existing Incident Workflow Triggers<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_workflow_trigger"><CopyableCode code="create_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__trigger"><code>data__trigger</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create new Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_service_from_incident_workflow_trigger"><CopyableCode code="delete_service_from_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-trigger_id"><code>trigger_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a an existing Service from an Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_incident_workflow_trigger"><CopyableCode code="delete_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incident_workflow_triggers"><CopyableCode code="_list_incident_workflow_triggers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-trigger_type"><code>trigger_type</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a></td>
    <td>List existing Incident Workflow Triggers<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident_workflow_trigger"><CopyableCode code="_get_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Retrieve an existing Incident Workflows Trigger<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_incident_workflow_trigger"><CopyableCode code="update_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-trigger"><code>trigger</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#associate_service_to_incident_workflow_trigger"><CopyableCode code="associate_service_to_incident_workflow_trigger" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Associate a Service with an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the Service</td>
</tr>
<tr id="parameter-trigger_id">
    <td><CopyableCode code="trigger_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the Trigger</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The `Accept` header is used as a versioning header.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_workflow_trigger"
    values={[
        { label: 'get_incident_workflow_trigger', value: 'get_incident_workflow_trigger' },
        { label: 'list_incident_workflow_triggers', value: 'list_incident_workflow_triggers' }
    ]}
>
<TabItem value="get_incident_workflow_trigger">

Retrieve an existing Incident Workflows Trigger<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
trigger_type_name,
condition,
html_url,
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
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_incident_workflow_triggers">

List existing Incident Workflow Triggers<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
trigger_type_name,
condition,
html_url,
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
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND workflow_id = '{{ workflow_id }}'
AND incident_id = '{{ incident_id }}'
AND service_id = '{{ service_id }}'
AND trigger_type = '{{ trigger_type }}'
AND sort_by = '{{ sort_by }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_workflow_trigger"
    values={[
        { label: 'create_incident_workflow_trigger', value: 'create_incident_workflow_trigger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_workflow_trigger">

Create new Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
INSERT INTO pagerduty.incident_workflows.triggers (
data__trigger,
Accept,
Content-Type
)
SELECT 
'{{ trigger }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
trigger
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: triggers
  props:
    - name: trigger
      value: object
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_from_incident_workflow_trigger"
    values={[
        { label: 'delete_service_from_incident_workflow_trigger', value: 'delete_service_from_incident_workflow_trigger' },
        { label: 'delete_incident_workflow_trigger', value: 'delete_incident_workflow_trigger' }
    ]}
>
<TabItem value="delete_service_from_incident_workflow_trigger">

Remove a an existing Service from an Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
DELETE FROM pagerduty.incident_workflows.triggers
WHERE trigger_id = '{{ trigger_id }}' --required
AND service_id = '{{ service_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="delete_incident_workflow_trigger">

Delete an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
DELETE FROM pagerduty.incident_workflows.triggers
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incident_workflow_triggers"
    values={[
        { label: '_list_incident_workflow_triggers', value: '_list_incident_workflow_triggers' },
        { label: '_get_incident_workflow_trigger', value: '_get_incident_workflow_trigger' },
        { label: 'update_incident_workflow_trigger', value: 'update_incident_workflow_trigger' },
        { label: 'associate_service_to_incident_workflow_trigger', value: 'associate_service_to_incident_workflow_trigger' }
    ]}
>
<TabItem value="_list_incident_workflow_triggers">

List existing Incident Workflow Triggers<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.triggers._list_incident_workflow_triggers 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@workflow_id='{{ workflow_id }}', 
@incident_id='{{ incident_id }}', 
@service_id='{{ service_id }}', 
@trigger_type='{{ trigger_type }}', 
@sort_by='{{ sort_by }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}'
;
```
</TabItem>
<TabItem value="_get_incident_workflow_trigger">

Retrieve an existing Incident Workflows Trigger<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.triggers._get_incident_workflow_trigger 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_incident_workflow_trigger">

Update an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
EXEC pagerduty.incident_workflows.triggers.update_incident_workflow_trigger 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"trigger": "{{ trigger }}"
}'
;
```
</TabItem>
<TabItem value="associate_service_to_incident_workflow_trigger">

Associate a Service with an existing Incident Workflow Trigger<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
EXEC pagerduty.incident_workflows.triggers.associate_service_to_incident_workflow_trigger 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
</Tabs>
