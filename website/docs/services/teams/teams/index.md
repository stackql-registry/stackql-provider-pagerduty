--- 
title: teams
hide_title: false
hide_table_of_contents: false
keywords:
  - teams
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

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>teams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.teams.teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team"
    values={[
        { label: 'get_team', value: 'get_team' },
        { label: 'list_teams', value: 'list_teams' }
    ]}
>
<TabItem value="get_team">

The team requested.

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
    <td>The name of the team.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the team.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: team)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_teams">

A paginated array of teams.

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
    <td>The name of the team.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the team.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: team)</td>
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
    <td><a href="#get_team"><CopyableCode code="get_team" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_teams"><CopyableCode code="list_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>List teams of your PagerDuty account, optionally filtered by a search query.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_team"><CopyableCode code="create_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__team"><code>data__team</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_team"><CopyableCode code="delete_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-reassignment_team"><code>reassignment_team</code></a></td>
    <td>Remove an existing team.<br /><br />Succeeds only if the team has no associated Escalation Policies, Services, Schedules and Subteams.<br /><br />All associated unresovled incidents will be reassigned to another team (if specified) or will loose team association, thus becoming account-level (with visibility implications).<br /><br />Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the API call return.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_teams"><CopyableCode code="_list_teams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>List teams of your PagerDuty account, optionally filtered by a search query.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_team"><CopyableCode code="_get_team" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_team"><CopyableCode code="update_team" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-team"><code>team</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-reassignment_team">
    <td><CopyableCode code="reassignment_team" /></td>
    <td><code>string</code></td>
    <td>Team to reassign unresolved incident to. If an unresolved incident exists on both the reassignment team and the team being deleted, a duplicate will not be made. If not supplied, unresolved incidents will be made account-level. </td>
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
    defaultValue="get_team"
    values={[
        { label: 'get_team', value: 'get_team' },
        { label: 'list_teams', value: 'list_teams' }
    ]}
>
<TabItem value="get_team">

Get details about an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
SELECT
id,
name,
description,
html_url,
parent,
self,
summary,
type
FROM pagerduty.teams.teams
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_teams">

List teams of your PagerDuty account, optionally filtered by a search query.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
SELECT
id,
name,
description,
html_url,
parent,
self,
summary,
type
FROM pagerduty.teams.teams
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team"
    values={[
        { label: 'create_team', value: 'create_team' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team">

Create a new Team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
INSERT INTO pagerduty.teams.teams (
data__team,
Accept,
Content-Type
)
SELECT 
'{{ team }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
team
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: teams
  props:
    - name: team
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
    defaultValue="delete_team"
    values={[
        { label: 'delete_team', value: 'delete_team' }
    ]}
>
<TabItem value="delete_team">

Remove an existing team.<br /><br />Succeeds only if the team has no associated Escalation Policies, Services, Schedules and Subteams.<br /><br />All associated unresovled incidents will be reassigned to another team (if specified) or will loose team association, thus becoming account-level (with visibility implications).<br /><br />Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the API call return.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
DELETE FROM pagerduty.teams.teams
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND reassignment_team = '{{ reassignment_team }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_teams"
    values={[
        { label: '_list_teams', value: '_list_teams' },
        { label: '_get_team', value: '_get_team' },
        { label: 'update_team', value: 'update_team' }
    ]}
>
<TabItem value="_list_teams">

List teams of your PagerDuty account, optionally filtered by a search query.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
EXEC pagerduty.teams.teams._list_teams 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@query='{{ query }}'
;
```
</TabItem>
<TabItem value="_get_team">

Get details about an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.read`<br />

```sql
EXEC pagerduty.teams.teams._get_team 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_team">

Update an existing team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
EXEC pagerduty.teams.teams.update_team 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"team": "{{ team }}"
}'
;
```
</TabItem>
</Tabs>
