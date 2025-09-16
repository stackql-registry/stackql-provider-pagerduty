--- 
title: runners
hide_title: false
hide_table_of_contents: false
keywords:
  - runners
  - automation_actions
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

Creates, updates, deletes, gets or lists a <code>runners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>runners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.runners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_actions_runner"
    values={[
        { label: 'get_automation_actions_runner', value: 'get_automation_actions_runner' },
        { label: 'get_automation_actions_runners', value: 'get_automation_actions_runners' }
    ]}
>
<TabItem value="get_automation_actions_runner">

Runner information

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
    <td> (example: us-west-2 prod runner)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_actions" /></td>
    <td><code>object</code></td>
    <td>References to at most 3 actions associated with the Runner. Use appropriate endpoints to retrieve the full list of associated actions.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: us-west-2 runner provisioned in the production environment by the SRE team)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runbook_base_uri" /></td>
    <td><code>string</code></td>
    <td>The base URI of the Runbook server to connect to. May only contain alphanumeric characters, periods, underscores and dashes. (example: subdomain)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>sidecar -- The runner is backed by an external sidecar that polls for invocations. runbook -- The runner communicates directly with a runbook instance.  (example: runbook)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Configured -- Runner has connected to the backend at least once  NotConfigured -- Runner has never connected to backend  (example: Configured)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The list of teams associated with the Runner</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_automation_actions_runners">

Runners matching the criteria.

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
    <td> (example: us-west-2 prod runner)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_actions" /></td>
    <td><code>object</code></td>
    <td>References to at most 3 actions associated with the Runner. Use appropriate endpoints to retrieve the full list of associated actions.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: us-west-2 runner provisioned in the production environment by the SRE team)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runbook_base_uri" /></td>
    <td><code>string</code></td>
    <td>The base URI of the Runbook server to connect to. May only contain alphanumeric characters, periods, underscores and dashes. (example: subdomain)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>sidecar -- The runner is backed by an external sidecar that polls for invocations. runbook -- The runner communicates directly with a runbook instance.  (example: runbook)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Configured -- Runner has connected to the backend at least once  NotConfigured -- Runner has never connected to backend  (example: Configured)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The list of teams associated with the Runner</td>
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
    <td><a href="#get_automation_actions_runner"><CopyableCode code="get_automation_actions_runner" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action runner<br /></td>
</tr>
<tr>
    <td><a href="#get_automation_actions_runners"><CopyableCode code="get_automation_actions_runners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Lists Automation Action runners matching provided query params.<br />The returned records are sorted by runner name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /></td>
</tr>
<tr>
    <td><a href="#create_automation_actions_runner"><CopyableCode code="create_automation_actions_runner" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__runner"><code>data__runner</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a Process Automation or a Runbook Automation runner.<br /></td>
</tr>
<tr>
    <td><a href="#delete_automation_actions_runner"><CopyableCode code="delete_automation_actions_runner" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an Automation Action runner<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_runners"><CopyableCode code="_get_automation_actions_runners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Lists Automation Action runners matching provided query params.<br />The returned records are sorted by runner name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_runner"><CopyableCode code="_get_automation_actions_runner" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action runner<br /></td>
</tr>
<tr>
    <td><a href="#update_automation_actions_runner"><CopyableCode code="update_automation_actions_runner" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-runner"><code>runner</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an Automation Action runner<br /></td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>array</code></td>
    <td>Includes additional data elements into the response</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones matching the name (case insensitive substring matching)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automation_actions_runner"
    values={[
        { label: 'get_automation_actions_runner', value: 'get_automation_actions_runner' },
        { label: 'get_automation_actions_runners', value: 'get_automation_actions_runners' }
    ]}
>
<TabItem value="get_automation_actions_runner">

Get an Automation Action runner<br />

```sql
SELECT
id,
name,
associated_actions,
creation_time,
description,
html_url,
last_seen,
metadata,
privileges,
runbook_base_uri,
runner_type,
self,
status,
summary,
teams,
type
FROM pagerduty.automation_actions.runners
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_automation_actions_runners">

Lists Automation Action runners matching provided query params.<br />The returned records are sorted by runner name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br />

```sql
SELECT
id,
name,
associated_actions,
creation_time,
description,
html_url,
last_seen,
metadata,
privileges,
runbook_base_uri,
runner_type,
self,
status,
summary,
teams,
type
FROM pagerduty.automation_actions.runners
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND name = '{{ name }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_actions_runner"
    values={[
        { label: 'create_automation_actions_runner', value: 'create_automation_actions_runner' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_actions_runner">

Create a Process Automation or a Runbook Automation runner.<br />

```sql
INSERT INTO pagerduty.automation_actions.runners (
data__runner,
Accept,
Content-Type
)
SELECT 
'{{ runner }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
runner
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: runners
  props:
    - name: runner
      value: string
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
    defaultValue="delete_automation_actions_runner"
    values={[
        { label: 'delete_automation_actions_runner', value: 'delete_automation_actions_runner' }
    ]}
>
<TabItem value="delete_automation_actions_runner">

Delete an Automation Action runner<br />

```sql
DELETE FROM pagerduty.automation_actions.runners
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_automation_actions_runners"
    values={[
        { label: '_get_automation_actions_runners', value: '_get_automation_actions_runners' },
        { label: '_get_automation_actions_runner', value: '_get_automation_actions_runner' },
        { label: 'update_automation_actions_runner', value: 'update_automation_actions_runner' }
    ]}
>
<TabItem value="_get_automation_actions_runners">

Lists Automation Action runners matching provided query params.<br />The returned records are sorted by runner name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br />

```sql
EXEC pagerduty.automation_actions.runners._get_automation_actions_runners 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@name='{{ name }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_automation_actions_runner">

Get an Automation Action runner<br />

```sql
EXEC pagerduty.automation_actions.runners._get_automation_actions_runner 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_automation_actions_runner">

Update an Automation Action runner<br />

```sql
EXEC pagerduty.automation_actions.runners.update_automation_actions_runner 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"runner": "{{ runner }}"
}'
;
```
</TabItem>
</Tabs>
