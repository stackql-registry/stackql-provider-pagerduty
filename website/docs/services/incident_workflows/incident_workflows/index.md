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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>incident_workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.incident_workflows" /></td></tr>
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
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Incident Workflow is enabled or not. Disabled workflows will not be triggered, and will not count toward the account's enabled workflow limit. </td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Incident Workflow is enabled or not. Disabled workflows will not be triggered, and will not count toward the account's enabled workflow limit. </td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
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
    <td>Get an existing Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing Incident Workflows.&lt;br /&gt;&lt;br /&gt;This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "List Triggers" method to find Incident Workflows configured to start for Incidents in a given Service.&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_workflow"><code>incident_workflow</code></a></td>
    <td></td>
    <td>Create a new Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-incident_workflow"><code>incident_workflow</code></a></td>
    <td></td>
    <td>Update an Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get an existing Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
description,
html_url,
is_enabled,
self,
steps,
summary,
team,
type
FROM pagerduty.incident_workflows.incident_workflows
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List existing Incident Workflows.&lt;br /&gt;&lt;br /&gt;This is the best method to use to list all Incident Workflows in your account. If your use case requires listing Incident Workflows associated with a particular Service, you can use the "List Triggers" method to find Incident Workflows configured to start for Incidents in a given Service.&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
description,
html_url,
is_enabled,
self,
steps,
summary,
team,
type
FROM pagerduty.incident_workflows.incident_workflows
WHERE limit = '{{ limit }}'
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a new Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_workflows.incident_workflows (
incident_workflow
)
SELECT 
'{{ incident_workflow }}' /* required */
RETURNING
incident_workflow
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_workflows
  props:
    - name: incident_workflow
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        description: "{{ description }}"
        created_at: "{{ created_at }}"
        team:
          type: "{{ type }}"
          id: "{{ id }}"
        is_enabled: {{ is_enabled }}
        steps:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
            name: "{{ name }}"
            description: "{{ description }}"
            action_configuration:
              action_id: "{{ action_id }}"
              description: "{{ description }}"
              inputs:
                - name: "{{ name }}"
                  parameter_type: "{{ parameter_type }}"
                  value: "{{ value }}"
              inline_steps_inputs:
                - name: "{{ name }}"
                  value:
                    steps: "{{ steps }}"
              outputs:
                - name: "{{ name }}"
                  reference_name: "{{ reference_name }}"
                  parameter_type: "{{ parameter_type }}"
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

Update an Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incident_workflows.incident_workflows
SET 
incident_workflow = '{{ incident_workflow }}'
WHERE 
id = '{{ id }}' --required
AND incident_workflow = '{{ incident_workflow }}' --required
RETURNING
incident_workflow;
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

Delete an existing Incident Workflow&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.incident_workflows.incident_workflows
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
