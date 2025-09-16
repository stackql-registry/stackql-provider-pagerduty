--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - users
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_session"
    values={[
        { label: 'get_user_session', value: 'get_user_session' },
        { label: 'get_user_sessions', value: 'get_user_sessions' }
    ]}
>
<TabItem value="get_user_session">

The user's session requested.

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the user session was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The summary of the session</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the session</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_sessions">

A list of the user's active sessions.

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
    <td><a href="#get_user_session"><CopyableCode code="get_user_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_user_sessions"><CopyableCode code="get_user_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List active sessions of a PagerDuty user.<br /><br />Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_session"><CopyableCode code="delete_user_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_sessions"><CopyableCode code="delete_user_sessions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete all user sessions.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_sessions"><CopyableCode code="_get_user_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List active sessions of a PagerDuty user.<br /><br />Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_session"><CopyableCode code="_get_user_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br /></td>
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
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID for the user.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The session type for the user session ID.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_session"
    values={[
        { label: 'get_user_session', value: 'get_user_session' },
        { label: 'get_user_sessions', value: 'get_user_sessions' }
    ]}
>
<TabItem value="get_user_session">

Get details about a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br />

```sql
SELECT
id,
user_id,
created_at,
summary,
type
FROM pagerduty.users.sessions
WHERE id = '{{ id }}' -- required
AND type = '{{ type }}' -- required
AND session_id = '{{ session_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_user_sessions">

List active sessions of a PagerDuty user.<br /><br />Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br />

```sql
SELECT
*
FROM pagerduty.users.sessions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_session"
    values={[
        { label: 'delete_user_session', value: 'delete_user_session' },
        { label: 'delete_user_sessions', value: 'delete_user_sessions' }
    ]}
>
<TabItem value="delete_user_session">

Delete a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.write`<br />

```sql
DELETE FROM pagerduty.users.sessions
WHERE id = '{{ id }}' --required
AND type = '{{ type }}' --required
AND session_id = '{{ session_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="delete_user_sessions">

Delete all user sessions.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.write`<br />

```sql
DELETE FROM pagerduty.users.sessions
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_sessions"
    values={[
        { label: '_get_user_sessions', value: '_get_user_sessions' },
        { label: '_get_user_session', value: '_get_user_session' }
    ]}
>
<TabItem value="_get_user_sessions">

List active sessions of a PagerDuty user.<br /><br />Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br />

```sql
EXEC pagerduty.users.sessions._get_user_sessions 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_user_session">

Get details about a user's session.<br /><br />Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:sessions.read`<br />

```sql
EXEC pagerduty.users.sessions._get_user_session 
@id='{{ id }}' --required, 
@type='{{ type }}' --required, 
@session_id='{{ session_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
