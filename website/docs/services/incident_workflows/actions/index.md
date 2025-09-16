--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_workflow_action"
    values={[
        { label: 'get_incident_workflow_action', value: 'get_incident_workflow_action' },
        { label: 'list_incident_workflow_actions', value: 'list_incident_workflow_actions' }
    ]}
>
<TabItem value="get_incident_workflow_action">

An Incident Workflow Action

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
    <td>The descriptive name of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_user_id" /></td>
    <td><code>string</code></td>
    <td>The obfuscated Id of the User who created this Action</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The Verified Domain of the account that created the action</td>
</tr>
<tr>
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The Function Name describing the specific functionality of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The Package Name corresponding to the broad category of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of Action</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date-time at which this Action was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Inputs whose values used during Action execution</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>JSON-formatted string of metadata pertaining to the Action</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>array</code></td>
    <td>Outputs whose values set during Action execution</td>
</tr>
<tr>
    <td><CopyableCode code="search_keywords" /></td>
    <td><code>array</code></td>
    <td>A set of search keywords to apply to this action.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A set of tags to apply to this action.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td>The type of Trigger this Action is, if action_type is trigger</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>number</code></td>
    <td>The version of the Action</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_workflow_actions">

A paginated array of Incident Workflow Actions

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
    <td>The descriptive name of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_user_id" /></td>
    <td><code>string</code></td>
    <td>The obfuscated Id of the User who created this Action</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The Verified Domain of the account that created the action</td>
</tr>
<tr>
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The Function Name describing the specific functionality of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The Package Name corresponding to the broad category of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of Action</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date-time at which this Action was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the Action</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Inputs whose values used during Action execution</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>JSON-formatted string of metadata pertaining to the Action</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>array</code></td>
    <td>Outputs whose values set during Action execution</td>
</tr>
<tr>
    <td><CopyableCode code="search_keywords" /></td>
    <td><code>array</code></td>
    <td>A set of search keywords to apply to this action.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A set of tags to apply to this action.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td>The type of Trigger this Action is, if action_type is trigger</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>number</code></td>
    <td>The version of the Action</td>
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
    <td><a href="#get_incident_workflow_action"><CopyableCode code="get_incident_workflow_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Incident Workflow Action<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_incident_workflow_actions"><CopyableCode code="list_incident_workflow_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-keyword"><code>keyword</code></a></td>
    <td>List Incident Workflow Actions<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incident_workflow_actions"><CopyableCode code="_list_incident_workflow_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-keyword"><code>keyword</code></a></td>
    <td>List Incident Workflow Actions<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident_workflow_action"><CopyableCode code="_get_incident_workflow_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Incident Workflow Action<br /><br />Scoped OAuth requires: `incident_workflows.read`<br /></td>
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
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-keyword">
    <td><CopyableCode code="keyword" /></td>
    <td><code>string</code></td>
    <td>If provided, only show actions tagged with the specified keyword</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_workflow_action"
    values={[
        { label: 'get_incident_workflow_action', value: 'get_incident_workflow_action' },
        { label: 'list_incident_workflow_actions', value: 'list_incident_workflow_actions' }
    ]}
>
<TabItem value="get_incident_workflow_action">

Get an Incident Workflow Action<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
name,
created_by_user_id,
domain_name,
function_name,
package_name,
action_type,
created_at,
description,
html_url,
inputs,
metadata,
outputs,
search_keywords,
self,
summary,
tags,
trigger_type,
type,
version
FROM pagerduty.incident_workflows.actions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_incident_workflow_actions">

List Incident Workflow Actions<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
SELECT
id,
name,
created_by_user_id,
domain_name,
function_name,
package_name,
action_type,
created_at,
description,
html_url,
inputs,
metadata,
outputs,
search_keywords,
self,
summary,
tags,
trigger_type,
type,
version
FROM pagerduty.incident_workflows.actions
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND keyword = '{{ keyword }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incident_workflow_actions"
    values={[
        { label: '_list_incident_workflow_actions', value: '_list_incident_workflow_actions' },
        { label: '_get_incident_workflow_action', value: '_get_incident_workflow_action' }
    ]}
>
<TabItem value="_list_incident_workflow_actions">

List Incident Workflow Actions<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.actions._list_incident_workflow_actions 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@keyword='{{ keyword }}'
;
```
</TabItem>
<TabItem value="_get_incident_workflow_action">

Get an Incident Workflow Action<br /><br />Scoped OAuth requires: `incident_workflows.read`<br />

```sql
EXEC pagerduty.incident_workflows.actions._get_incident_workflow_action 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
