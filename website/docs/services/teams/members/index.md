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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.teams.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td>(opaque JSON object)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about members on a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Add a user to a team. Attempting to add a user with the `read_only_user` role will return a 400 error.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Remove a user from a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;</td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get information about members on a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.read`&lt;br /&gt;

```sql
SELECT
role,
user
FROM pagerduty.teams.members
WHERE id = '{{ id }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Add a user to a team. Attempting to add a user with the `read_only_user` role will return a 400 error.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.teams.members (
role,
id,
user_id
)
SELECT 
'{{ role }}',
'{{ id }}',
'{{ user_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the members resource.
    - name: user_id
      value: "{{ user_id }}"
      description: Required parameter for the members resource.
    - name: role
      value: "{{ role }}"
      description: |
        The role of the user on the team.
      valid_values: ['observer', 'responder', 'manager']
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

Remove a user from a team.&lt;br /&gt;&lt;br /&gt;A team is a collection of Users and Escalation Policies that represent a group of people within an organization.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#teams)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `teams.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.teams.members
WHERE id = '{{ id }}' --required
AND user_id = '{{ user_id }}' --required
;
```
</TabItem>
</Tabs>
