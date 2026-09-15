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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>escalation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="escalation_policies" /></td></tr>
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
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy_id"><code>escalation_policy_id</code></a></td>
    <td></td>
    <td>Add an escalation policy to a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy_id"><code>escalation_policy_id</code></a></td>
    <td></td>
    <td>Remove an escalation policy from a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Add an escalation policy to a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.teams.escalation_policies (
id,
escalation_policy_id
)
SELECT 
'{{ id }}',
'{{ escalation_policy_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: escalation_policies
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the escalation_policies resource.
    - name: escalation_policy_id
      value: "{{ escalation_policy_id }}"
      description: Required parameter for the escalation_policies resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="remove">

Remove an escalation policy from a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.teams.escalation_policies
WHERE id = '{{ id }}' --required
AND escalation_policy_id = '{{ escalation_policy_id }}' --required
;
```
</TabItem>
</Tabs>
