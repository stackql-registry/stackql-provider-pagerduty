--- 
title: incident_workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_workflows
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

Creates, updates, deletes, gets or lists an <code>incident_workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>incident_workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.incident_workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_workflow"
    values={[
        { label: 'get_incident_workflow', value: 'get_incident_workflow' },
        { label: 'list_incident_workflows', value: 'list_incident_workflows' }
    ]}
>
<TabItem value="get_incident_workflow">

The Incident Workflow

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
    <td>A descriptive name for the Incident Workflow</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp this Incident Workflow was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the Incident Workflow does</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The ordered list of steps that execute sequentially as part of the workflow</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>If specified then workflow edit permissions will be scoped to members of this team</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_workflows">

A paginated array of Incident Workflows.

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
    <td>A descriptive name for the Incident Workflow</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp this Incident Workflow was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the Incident Workflow does</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The ordered list of steps that execute sequentially as part of the workflow</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>If specified then workflow edit permissions will be scoped to members of this team</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_incident_workflow"><CopyableCode code="get_incident_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an existing Incident Workflow<br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_incident_workflows"><CopyableCode code="list_incident_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing Incident Workflows.<br /><br />This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "listIncidentWorkflowsByService" endpoint.<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_workflow_instance"><CopyableCode code="create_incident_workflow_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__incident_workflow_instance"><code>data__incident_workflow_instance</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Start an Instance of an Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows:instances.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_incident_workflow"><CopyableCode code="delete_incident_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incident_workflows"><CopyableCode code="_list_incident_workflows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing Incident Workflows.<br /><br />This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "listIncidentWorkflowsByService" endpoint.<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#post_incident_workflow"><CopyableCode code="post_incident_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-incident_workflow"><code>incident_workflow</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident_workflow"><CopyableCode code="_get_incident_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an existing Incident Workflow<br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#put_incident_workflow"><CopyableCode code="put_incident_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-incident_workflow"><code>incident_workflow</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br /></td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
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
    defaultValue="get_incident_workflow"
    values={[
        { label: 'get_incident_workflow', value: 'get_incident_workflow' },
        { label: 'list_incident_workflows', value: 'list_incident_workflows' }
    ]}
>
<TabItem value="get_incident_workflow">

Get an existing Incident Workflow<br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
name,
created_at,
description,
html_url,
self,
steps,
summary,
team,
type
FROM pagerduty.incident_workflows.incident_workflows
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_incident_workflows">

List existing Incident Workflows.<br /><br />This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "listIncidentWorkflowsByService" endpoint.<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
name,
created_at,
description,
html_url,
self,
steps,
summary,
team,
type
FROM pagerduty.incident_workflows.incident_workflows
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_workflow_instance"
    values={[
        { label: 'create_incident_workflow_instance', value: 'create_incident_workflow_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_workflow_instance">

Start an Instance of an Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows:instances.write`<br />

```sql
INSERT INTO pagerduty.incident_workflows.incident_workflows (
data__incident_workflow_instance,
id,
Accept,
Content-Type
)
SELECT 
'{{ incident_workflow_instance }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
incident_workflow_instance
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: incident_workflows
  props:
    - name: id
      value: string
      description: Required parameter for the incident_workflows resource.
    - name: incident_workflow_instance
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
    defaultValue="delete_incident_workflow"
    values={[
        { label: 'delete_incident_workflow', value: 'delete_incident_workflow' }
    ]}
>
<TabItem value="delete_incident_workflow">

Delete an existing Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
DELETE FROM pagerduty.incident_workflows.incident_workflows
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incident_workflows"
    values={[
        { label: '_list_incident_workflows', value: '_list_incident_workflows' },
        { label: 'post_incident_workflow', value: 'post_incident_workflow' },
        { label: '_get_incident_workflow', value: '_get_incident_workflow' },
        { label: 'put_incident_workflow', value: 'put_incident_workflow' }
    ]}
>
<TabItem value="_list_incident_workflows">

List existing Incident Workflows.<br /><br />This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "listIncidentWorkflowsByService" endpoint.<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.incident_workflows._list_incident_workflows 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@query='{{ query }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="post_incident_workflow">

Create a new Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
EXEC pagerduty.incident_workflows.incident_workflows.post_incident_workflow 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"incident_workflow": "{{ incident_workflow }}"
}'
;
```
</TabItem>
<TabItem value="_get_incident_workflow">

Get an existing Incident Workflow<br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.incident_workflows._get_incident_workflow 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="put_incident_workflow">

Update an Incident Workflow<br /><br />An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.<br /><br />Scoped OAuth requires: `incident_workflows.write`<br />

```sql
EXEC pagerduty.incident_workflows.incident_workflows.put_incident_workflow 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"incident_workflow": "{{ incident_workflow }}"
}'
;
```
</TabItem>
</Tabs>
