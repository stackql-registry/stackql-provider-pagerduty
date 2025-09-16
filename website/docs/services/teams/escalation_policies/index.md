--- 
title: escalation_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - escalation_policies
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

Creates, updates, deletes, gets or lists an <code>escalation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>escalation_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.teams.escalation_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#delete_team_escalation_policy"><CopyableCode code="delete_team_escalation_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy_id"><code>escalation_policy_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove an escalation policy from a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
</tr>
<tr>
    <td><a href="#update_team_escalation_policy"><CopyableCode code="update_team_escalation_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy_id"><code>escalation_policy_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Add an escalation policy to a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br /></td>
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
<tr id="parameter-escalation_policy_id">
    <td><CopyableCode code="escalation_policy_id" /></td>
    <td><code>string</code></td>
    <td>The escalation policy ID on the team.</td>
</tr>
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
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_team_escalation_policy"
    values={[
        { label: 'delete_team_escalation_policy', value: 'delete_team_escalation_policy' }
    ]}
>
<TabItem value="delete_team_escalation_policy">

Remove an escalation policy from a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
DELETE FROM pagerduty.teams.escalation_policies
WHERE id = '{{ id }}' --required
AND escalation_policy_id = '{{ escalation_policy_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_team_escalation_policy"
    values={[
        { label: 'update_team_escalation_policy', value: 'update_team_escalation_policy' }
    ]}
>
<TabItem value="update_team_escalation_policy">

Add an escalation policy to a team.<br /><br />A team is a collection of Users and Escalation Policies that represent a group of people within an organization.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)<br /><br />Scoped OAuth requires: `teams.write`<br />

```sql
EXEC pagerduty.teams.escalation_policies.update_team_escalation_policy 
@id='{{ id }}' --required, 
@escalation_policy_id='{{ escalation_policy_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
