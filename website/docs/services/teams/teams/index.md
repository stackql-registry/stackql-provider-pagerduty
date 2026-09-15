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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.teams.teams" /></td></tr>
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
    <td><CopyableCode code="default_role" /></td>
    <td><code>string</code></td>
    <td>The team is private if the value is "none", or public if it is "manager" (the default permissions for a non-member of the team are either "none", or their base role up until "manager"). (manager, none) (default: manager)</td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="default_role" /></td>
    <td><code>string</code></td>
    <td>The team is private if the value is "none", or public if it is "manager" (the default permissions for a non-member of the team are either "none", or their base role up until "manager"). (manager, none) (default: manager)</td>
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
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>List teams of your PagerDuty account, optionally filtered by a search query.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team"><code>team</code></a></td>
    <td></td>
    <td>Create a new Team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-team"><code>team</code></a></td>
    <td></td>
    <td>Update an existing team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-reassignment_team"><code>reassignment_team</code></a></td>
    <td>Remove an existing team.&lt;br /&gt;&lt;br /&gt;Succeeds only if the team has no associated Escalation Policies, Services, Schedules and Subteams.&lt;br /&gt;&lt;br /&gt;All associated unresovled incidents will be reassigned to another team (if specified) or will loose team association, thus becoming account-level (with visibility implications).&lt;br /&gt;&lt;br /&gt;Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the API call return.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
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

Get details about an existing team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;

```sql
SELECT
id,
name,
default_role,
description,
html_url,
self,
summary,
type
FROM pagerduty.teams.teams
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List teams of your PagerDuty account, optionally filtered by a search query.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;

```sql
SELECT
id,
name,
default_role,
description,
html_url,
self,
summary,
type
FROM pagerduty.teams.teams
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
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

Create a new Team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.teams.teams (
team
)
SELECT 
'{{ team }}' /* required */
RETURNING
team
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: teams
  props:
    - name: team
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        description: "{{ description }}"
        default_role: "{{ default_role }}"
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

Update an existing team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
UPDATE pagerduty.teams.teams
SET 
team = '{{ team }}'
WHERE 
id = '{{ id }}' --required
AND team = '{{ team }}' --required
RETURNING
team;
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

Remove an existing team.&lt;br /&gt;&lt;br /&gt;Succeeds only if the team has no associated Escalation Policies, Services, Schedules and Subteams.&lt;br /&gt;&lt;br /&gt;All associated unresovled incidents will be reassigned to another team (if specified) or will loose team association, thus becoming account-level (with visibility implications).&lt;br /&gt;&lt;br /&gt;Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the API call return.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.teams.teams
WHERE id = '{{ id }}' --required
AND reassignment_team = '{{ reassignment_team }}'
;
```
</TabItem>
</Tabs>
