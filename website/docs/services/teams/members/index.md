--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - teams
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.teams.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_team_users"
    values={[
        { label: 'list_team_users', value: 'list_team_users' }
    ]}
>
<TabItem value="list_team_users">

A paginated array of users within the requested team.

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
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
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
    <td><a href="#list_team_users"><CopyableCode code="list_team_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about members on a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#delete_team_user"><CopyableCode code="delete_team_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a user from a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_team_users"><CopyableCode code="_list_team_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about members on a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_team_user"><CopyableCode code="update_team_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Add a user to a team. Attempting to add a user with the `read_only_user` role will return a 400 error.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
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
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID on the team.</td>
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
    <td>Array of additional Models to include in response.</td>
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
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_team_users"
    values={[
        { label: 'list_team_users', value: 'list_team_users' }
    ]}
>
<TabItem value="list_team_users">

Get information about members on a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
SELECT
role,
user
FROM pagerduty.teams.members
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team_user"
    values={[
        { label: 'delete_team_user', value: 'delete_team_user' }
    ]}
>
<TabItem value="delete_team_user">

Remove a user from a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
DELETE FROM pagerduty.teams.members
WHERE id = '{{ id }}' --required
AND user_id = '{{ user_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_team_users"
    values={[
        { label: '_list_team_users', value: '_list_team_users' },
        { label: 'update_team_user', value: 'update_team_user' }
    ]}
>
<TabItem value="_list_team_users">

Get information about members on a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
EXEC pagerduty.teams.members._list_team_users 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_team_user">

Add a user to a team. Attempting to add a user with the `read_only_user` role will return a 400 error.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
EXEC pagerduty.teams.members.update_team_user 
@id='{{ id }}' --required, 
@user_id='{{ user_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"role": "{{ role }}"
}'
;
```
</TabItem>
</Tabs>
