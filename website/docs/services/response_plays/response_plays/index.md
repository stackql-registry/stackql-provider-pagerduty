--- 
title: response_plays
hide_title: false
hide_table_of_contents: false
keywords:
  - response_plays
  - response_plays
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

Creates, updates, deletes, gets or lists a <code>response_plays</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>response_plays</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.response_plays.response_plays" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_response_play"
    values={[
        { label: 'get_response_play', value: 'get_response_play' },
        { label: 'list_response_plays', value: 'list_response_plays' }
    ]}
>
<TabItem value="get_response_play">

The Response Play requested.

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
    <td>The name of the response play.</td>
</tr>
<tr>
    <td><CopyableCode code="conference_number" /></td>
    <td><code>string</code></td>
    <td>The telephone number that will be set as the conference number for any incident on which this response play is run.</td>
</tr>
<tr>
    <td><CopyableCode code="conference_type" /></td>
    <td><code>string</code></td>
    <td>This field has three possible values and indicates how the response play was created.   - `none` : The response play had no conference_number or conference_url set at time of creation.   - `manual` : The response play had one or both of conference_number and conference_url set at time of creation.   - `zoom` : Customers with the Zoom-Integration Entitelment can use this value to dynamicly configure conference number and url for zoom (default: none)</td>
</tr>
<tr>
    <td><CopyableCode code="conference_url" /></td>
    <td><code>string</code></td>
    <td>The URL that will be set as the conference URL for any incident on which this response play is run.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the response play.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="responders" /></td>
    <td><code>array</code></td>
    <td>An array containing the users and/or escalation policies to be requested as responders to any incident on which this response play is run.</td>
</tr>
<tr>
    <td><CopyableCode code="responders_message" /></td>
    <td><code>string</code></td>
    <td>The message body of the notification that will be sent to this response play's set of responders. If empty, a default response request notification will be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="runnability" /></td>
    <td><code>string</code></td>
    <td>String representing how this response play is allowed to be run. Valid options are:   - `services`: This response play cannot be manually run by any users. It will run automatically for new incidents triggered on any services that are configured with this response play.   - `teams`: This response play can be run manually on an incident only by members of its configured team. This option can only be selected when the `team` property for this response play is not empty.   - `responders`: This response play can be run manually on an incident by any responders in this account. (default: services)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="subscribers" /></td>
    <td><code>array</code></td>
    <td>An array containing the users and/or teams to be added as subscribers to any incident on which this response play is run.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribers_message" /></td>
    <td><code>string</code></td>
    <td>The content of the notification that will be sent to all incident subscribers upon the running of this response play. Note that this includes any users who may have already been subscribed to the incident prior to the running of this response play. If empty, no notifications will be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: response_play)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_response_plays">

The array of Response Plays returned by the query.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#get_response_play"><CopyableCode code="get_response_play" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>Get details about an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br />Scoped OAuth requires: `response_plays.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_response_plays"><CopyableCode code="list_response_plays" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-filter_for_manual_run"><code>filter_for_manual_run</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>List all of the existing Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br /><br />Scoped OAuth requires: `response_plays.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_response_play"><CopyableCode code="create_response_play" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-From"><code>From</code></a>, <a href="#parameter-data__response_play"><code>data__response_play</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Creates a new Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_response_play"><CopyableCode code="delete_response_play" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing Response Play. Once the Response Play is deleted, the action cannot be undone.<br /><br />WARNING: When the Response Play is deleted, it is also removed from any Services that were using it.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied to an Incident.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_response_plays"><CopyableCode code="_list_response_plays" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-filter_for_manual_run"><code>filter_for_manual_run</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>List all of the existing Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br /><br />Scoped OAuth requires: `response_plays.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_response_play"><CopyableCode code="_get_response_play" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>Get details about an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br />Scoped OAuth requires: `response_plays.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_response_play"><CopyableCode code="update_response_play" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-response_play"><code>response_play</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Updates an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br /></td>
</tr>
<tr>
    <td><a href="#run_response_play"><CopyableCode code="run_response_play" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-response_play_id"><code>response_play_id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-incident"><code>incident</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Run a specified response play on a given incident.<br /><br />Response Plays are a package of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br /></td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-response_play_id">
    <td><CopyableCode code="response_play_id" /></td>
    <td><code>string</code></td>
    <td>The response play ID of the response play associated with the request.</td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request. This is optional, and is only used for change tracking.</td>
</tr>
<tr id="parameter-filter_for_manual_run">
    <td><CopyableCode code="filter_for_manual_run" /></td>
    <td><code>boolean</code></td>
    <td>When this parameter is present, only those Response Plays that can be run manually will be returned.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_response_play"
    values={[
        { label: 'get_response_play', value: 'get_response_play' },
        { label: 'list_response_plays', value: 'list_response_plays' }
    ]}
>
<TabItem value="get_response_play">

Get details about an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br />Scoped OAuth requires: `response_plays.read`<br />

```sql
SELECT
id,
name,
conference_number,
conference_type,
conference_url,
description,
html_url,
responders,
responders_message,
runnability,
self,
subscribers,
subscribers_message,
summary,
team,
type
FROM pagerduty.response_plays.response_plays
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND From = '{{ From }}'
;
```
</TabItem>
<TabItem value="list_response_plays">

List all of the existing Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br /><br />Scoped OAuth requires: `response_plays.read`<br />

```sql
SELECT
*
FROM pagerduty.response_plays.response_plays
WHERE query = '{{ query }}'
AND filter_for_manual_run = '{{ filter_for_manual_run }}'
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND From = '{{ From }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_response_play"
    values={[
        { label: 'create_response_play', value: 'create_response_play' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_response_play">

Creates a new Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br />

```sql
INSERT INTO pagerduty.response_plays.response_plays (
data__response_play,
From,
Accept,
Content-Type
)
SELECT 
'{{ response_play }}' /* required */,
'{{ From }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
response_play
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: response_plays
  props:
    - name: From
      value: string (email)
      description: Required parameter for the response_plays resource.
    - name: response_play
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
    defaultValue="delete_response_play"
    values={[
        { label: 'delete_response_play', value: 'delete_response_play' }
    ]}
>
<TabItem value="delete_response_play">

Delete an existing Response Play. Once the Response Play is deleted, the action cannot be undone.<br /><br />WARNING: When the Response Play is deleted, it is also removed from any Services that were using it.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied to an Incident.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br />

```sql
DELETE FROM pagerduty.response_plays.response_plays
WHERE id = '{{ id }}' --required
AND From = '{{ From }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_response_plays"
    values={[
        { label: '_list_response_plays', value: '_list_response_plays' },
        { label: '_get_response_play', value: '_get_response_play' },
        { label: 'update_response_play', value: 'update_response_play' },
        { label: 'run_response_play', value: 'run_response_play' }
    ]}
>
<TabItem value="_list_response_plays">

List all of the existing Response Plays.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br /><br />Scoped OAuth requires: `response_plays.read`<br />

```sql
EXEC pagerduty.response_plays.response_plays._list_response_plays 
@query='{{ query }}', 
@filter_for_manual_run={{ filter_for_manual_run }}, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@From='{{ From }}'
;
```
</TabItem>
<TabItem value="_get_response_play">

Get details about an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />When using a Global API token, the `From` header is required.<br />Scoped OAuth requires: `response_plays.read`<br />

```sql
EXEC pagerduty.response_plays.response_plays._get_response_play 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@From='{{ From }}'
;
```
</TabItem>
<TabItem value="update_response_play">

Updates an existing Response Play.<br /><br />Response Plays allow you to create packages of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br />

```sql
EXEC pagerduty.response_plays.response_plays.update_response_play 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"response_play": "{{ response_play }}"
}'
;
```
</TabItem>
<TabItem value="run_response_play">

Run a specified response play on a given incident.<br /><br />Response Plays are a package of Incident Actions that can be applied during an Incident's life cycle.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#response-plays)<br /><br />Scoped OAuth requires: `response_plays.write`<br />

```sql
EXEC pagerduty.response_plays.response_plays.run_response_play 
@response_play_id='{{ response_play_id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"incident": "{{ incident }}"
}'
;
```
</TabItem>
</Tabs>
