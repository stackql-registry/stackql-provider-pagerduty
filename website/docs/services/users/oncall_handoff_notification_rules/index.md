--- 
title: oncall_handoff_notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - oncall_handoff_notification_rules
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>oncall_handoff_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oncall_handoff_notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.oncall_handoff_notification_rules" /></td></tr>
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

The user's handoff notification rule requested.

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
    <td><CopyableCode code="contact_method" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="handoff_type" /></td>
    <td><code>string</code></td>
    <td>The type of handoff being created. (both, oncall, offcall) (default: both)</td>
</tr>
<tr>
    <td><CopyableCode code="notify_advance_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The delay before firing the rule, in minutes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of Handoff Notification Rules.

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
    <td><CopyableCode code="contact_method" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="handoff_type" /></td>
    <td><code>string</code></td>
    <td>The type of handoff being created. (both, oncall, offcall) (default: both)</td>
</tr>
<tr>
    <td><CopyableCode code="notify_advance_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The delay before firing the rule, in minutes.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a></td>
    <td></td>
    <td>Get details about a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>List Handoff Notification Rules of your PagerDuty User.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule"><code>oncall_handoff_notification_rule</code></a></td>
    <td></td>
    <td>Create a new Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a>, <a href="#parameter-oncall_handoff_notification_rule"><code>oncall_handoff_notification_rule</code></a></td>
    <td></td>
    <td>Update a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a></td>
    <td></td>
    <td>Remove a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
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
<tr id="parameter-oncall_handoff_notification_rule_id">
    <td><CopyableCode code="oncall_handoff_notification_rule_id" /></td>
    <td><code>string</code></td>
    <td>The oncall handoff notification rule ID on the user.</td>
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

Get details about a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

```sql
SELECT
id,
contact_method,
handoff_type,
notify_advance_in_minutes
FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' -- required
AND oncall_handoff_notification_rule_id = '{{ oncall_handoff_notification_rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Handoff Notification Rules of your PagerDuty User.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

```sql
SELECT
id,
contact_method,
handoff_type,
notify_advance_in_minutes
FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' -- required
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

Create a new Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.oncall_handoff_notification_rules (
oncall_handoff_notification_rule,
id
)
SELECT 
'{{ oncall_handoff_notification_rule }}' /* required */,
'{{ id }}'
RETURNING
oncall_handoff_notification_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oncall_handoff_notification_rules
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the oncall_handoff_notification_rules resource.
    - name: oncall_handoff_notification_rule
      description: |
        A rule for contacting the user for Handoff Notifications.
      value:
        id: "{{ id }}"
        notify_advance_in_minutes: {{ notify_advance_in_minutes }}
        handoff_type: "{{ handoff_type }}"
        contact_method:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
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

Update a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
UPDATE pagerduty.users.oncall_handoff_notification_rules
SET 
oncall_handoff_notification_rule = '{{ oncall_handoff_notification_rule }}'
WHERE 
id = '{{ id }}' --required
AND oncall_handoff_notification_rule_id = '{{ oncall_handoff_notification_rule_id }}' --required
AND oncall_handoff_notification_rule = '{{ oncall_handoff_notification_rule }}' --required
RETURNING
oncall_handoff_notification_rule;
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

Remove a User's Handoff Notification Rule.&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' --required
AND oncall_handoff_notification_rule_id = '{{ oncall_handoff_notification_rule_id }}' --required
;
```
</TabItem>
</Tabs>
