--- 
title: runners_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - runners_teams
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

Creates, updates, deletes, gets or lists a <code>runners_teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>runners_teams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.runners_teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_actions_runner_team_association"
    values={[
        { label: 'get_automation_actions_runner_team_association', value: 'get_automation_actions_runner_team_association' },
        { label: 'get_automation_actions_runner_team_associations', value: 'get_automation_actions_runner_team_associations' }
    ]}
>
<TabItem value="get_automation_actions_runner_team_association">

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
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_automation_actions_runner_team_associations">

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
    <td><a href="#get_automation_actions_runner_team_association"><CopyableCode code="get_automation_actions_runner_team_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets the details of a runner / team relation</td>
</tr>
<tr>
    <td><a href="#get_automation_actions_runner_team_associations"><CopyableCode code="get_automation_actions_runner_team_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets all team references associated with a runner</td>
</tr>
<tr>
    <td><a href="#create_automation_actions_runner_team_association"><CopyableCode code="create_automation_actions_runner_team_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__team"><code>data__team</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Associate a runner with a team<br /></td>
</tr>
<tr>
    <td><a href="#delete_automation_actions_runner_team_association"><CopyableCode code="delete_automation_actions_runner_team_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Disassociates a runner from a team<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_runner_team_associations"><CopyableCode code="_get_automation_actions_runner_team_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets all team references associated with a runner</td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_runner_team_association"><CopyableCode code="_get_automation_actions_runner_team_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets the details of a runner / team relation</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The team ID</td>
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
    defaultValue="get_automation_actions_runner_team_association"
    values={[
        { label: 'get_automation_actions_runner_team_association', value: 'get_automation_actions_runner_team_association' },
        { label: 'get_automation_actions_runner_team_associations', value: 'get_automation_actions_runner_team_associations' }
    ]}
>
<TabItem value="get_automation_actions_runner_team_association">

Gets the details of a runner / team relation

```sql
SELECT
id,
html_url,
self,
summary,
type
FROM pagerduty.automation_actions.runners_teams
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_automation_actions_runner_team_associations">

Gets all team references associated with a runner

```sql
SELECT
id,
html_url,
self,
summary,
type
FROM pagerduty.automation_actions.runners_teams
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_actions_runner_team_association"
    values={[
        { label: 'create_automation_actions_runner_team_association', value: 'create_automation_actions_runner_team_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_actions_runner_team_association">

Associate a runner with a team<br />

```sql
INSERT INTO pagerduty.automation_actions.runners_teams (
data__team,
id,
Accept,
Content-Type
)
SELECT 
'{{ team }}' /* required */,
'{{ id }}',
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
- name: runners_teams
  props:
    - name: id
      value: string
      description: Required parameter for the runners_teams resource.
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
    defaultValue="delete_automation_actions_runner_team_association"
    values={[
        { label: 'delete_automation_actions_runner_team_association', value: 'delete_automation_actions_runner_team_association' }
    ]}
>
<TabItem value="delete_automation_actions_runner_team_association">

Disassociates a runner from a team<br />

```sql
DELETE FROM pagerduty.automation_actions.runners_teams
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_automation_actions_runner_team_associations"
    values={[
        { label: '_get_automation_actions_runner_team_associations', value: '_get_automation_actions_runner_team_associations' },
        { label: '_get_automation_actions_runner_team_association', value: '_get_automation_actions_runner_team_association' }
    ]}
>
<TabItem value="_get_automation_actions_runner_team_associations">

Gets all team references associated with a runner

```sql
EXEC pagerduty.automation_actions.runners_teams._get_automation_actions_runner_team_associations 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_automation_actions_runner_team_association">

Gets the details of a runner / team relation

```sql
EXEC pagerduty.automation_actions.runners_teams._get_automation_actions_runner_team_association 
@id='{{ id }}' --required, 
@team_id='{{ team_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
