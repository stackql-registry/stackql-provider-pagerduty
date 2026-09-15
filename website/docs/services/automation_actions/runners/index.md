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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>runners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.runners" /></td></tr>
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
    <td><code>string</code></td>
    <td>Additional metadata (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runbook_base_uri" /></td>
    <td><code>string</code></td>
    <td>The base URI of the Runbook server to connect to. May only contain alphanumeric characters, periods, underscores and dashes. Specified as the subdomain portion of an RBA host, as in &lt;runbook_base_uri&gt;.runbook.pagerduty.cloud (example: subdomain)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>sidecar -- The runner is backed by an external sidecar that polls for invocations. runbook -- The runner communicates directly with a runbook instance.  (sidecar, runbook) (example: runbook)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Configured -- Runner has connected to the backend at least once  NotConfigured -- Runner has never connected to backend  (Configured, NotConfigured) (example: Configured)</td>
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
<TabItem value="list">

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
    <td><code>string</code></td>
    <td>Additional metadata (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runbook_base_uri" /></td>
    <td><code>string</code></td>
    <td>The base URI of the Runbook server to connect to. May only contain alphanumeric characters, periods, underscores and dashes. Specified as the subdomain portion of an RBA host, as in &lt;runbook_base_uri&gt;.runbook.pagerduty.cloud (example: subdomain)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>sidecar -- The runner is backed by an external sidecar that polls for invocations. runbook -- The runner communicates directly with a runbook instance.  (sidecar, runbook) (example: runbook)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Configured -- Runner has connected to the backend at least once  NotConfigured -- Runner has never connected to backend  (Configured, NotConfigured) (example: Configured)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get an Automation Action runner&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Lists Automation Action runners matching provided query params.&lt;br /&gt;The returned records are sorted by runner name in alphabetical order.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-runner"><code>runner</code></a></td>
    <td></td>
    <td>Create a Process Automation or a Runbook Automation runner.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-runner"><code>runner</code></a></td>
    <td></td>
    <td>Update an Automation Action runner&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an Automation Action runner&lt;br /&gt;</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an Automation Action runner&lt;br /&gt;

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
;
```
</TabItem>
<TabItem value="list">

Lists Automation Action runners matching provided query params.&lt;br /&gt;The returned records are sorted by runner name in alphabetical order.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;

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
WHERE limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND name = '{{ name }}'
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

Create a Process Automation or a Runbook Automation runner.&lt;br /&gt;

```sql
INSERT INTO pagerduty.automation_actions.runners (
runner
)
SELECT 
'{{ runner }}' /* required */
RETURNING
runner
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runners
  props:
    - name: runner
      value:
        runner_type: "{{ runner_type }}"
        name: "{{ name }}"
        description: "{{ description }}"
        teams:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        runbook_base_uri: "{{ runbook_base_uri }}"
        runbook_api_key: "{{ runbook_api_key }}"
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

Update an Automation Action runner&lt;br /&gt;

```sql
UPDATE pagerduty.automation_actions.runners
SET 
runner = '{{ runner }}'
WHERE 
id = '{{ id }}' --required
AND runner = '{{ runner }}' --required
RETURNING
runner;
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

Delete an Automation Action runner&lt;br /&gt;

```sql
DELETE FROM pagerduty.automation_actions.runners
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
