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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>oncall_handoff_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oncall_handoff_notification_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.oncall_handoff_notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_handoff_notifiaction_rule"
    values={[
        { label: 'get_user_handoff_notifiaction_rule', value: 'get_user_handoff_notifiaction_rule' },
        { label: 'get_user_handoff_notification_rules', value: 'get_user_handoff_notification_rules' }
    ]}
>
<TabItem value="get_user_handoff_notifiaction_rule">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="handoff_type" /></td>
    <td><code>string</code></td>
    <td>The type of handoff being created. (default: both)</td>
</tr>
<tr>
    <td><CopyableCode code="notify_advance_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The delay before firing the rule, in minutes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_handoff_notification_rules">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="handoff_type" /></td>
    <td><code>string</code></td>
    <td>The type of handoff being created. (default: both)</td>
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
    <td><a href="#get_user_handoff_notifiaction_rule"><CopyableCode code="get_user_handoff_notifiaction_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_user_handoff_notification_rules"><CopyableCode code="get_user_handoff_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List Handoff Notification Rules of your PagerDuty User.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_user_handoff_notification_rule"><CopyableCode code="create_user_handoff_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__oncall_handoff_notification_rule"><code>data__oncall_handoff_notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_handoff_notification_rule"><CopyableCode code="delete_user_handoff_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_handoff_notification_rules"><CopyableCode code="_get_user_handoff_notification_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List Handoff Notification Rules of your PagerDuty User.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_handoff_notifiaction_rule"><CopyableCode code="_get_user_handoff_notifiaction_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_user_handoff_notification"><CopyableCode code="update_user_handoff_notification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oncall_handoff_notification_rule_id"><code>oncall_handoff_notification_rule_id</code></a>, <a href="#parameter-oncall_handoff_notification_rule"><code>oncall_handoff_notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
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
    defaultValue="get_user_handoff_notifiaction_rule"
    values={[
        { label: 'get_user_handoff_notifiaction_rule', value: 'get_user_handoff_notifiaction_rule' },
        { label: 'get_user_handoff_notification_rules', value: 'get_user_handoff_notification_rules' }
    ]}
>
<TabItem value="get_user_handoff_notifiaction_rule">

Get details about a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
SELECT
id,
contact_method,
handoff_type,
notify_advance_in_minutes
FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' -- required
AND oncall_handoff_notification_rule_id = '{{ oncall_handoff_notification_rule_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_user_handoff_notification_rules">

List Handoff Notification Rules of your PagerDuty User.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
SELECT
id,
contact_method,
handoff_type,
notify_advance_in_minutes
FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_handoff_notification_rule"
    values={[
        { label: 'create_user_handoff_notification_rule', value: 'create_user_handoff_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_handoff_notification_rule">

Create a new Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
INSERT INTO pagerduty.users.oncall_handoff_notification_rules (
data__oncall_handoff_notification_rule,
id,
Accept,
Content-Type
)
SELECT 
'{{ oncall_handoff_notification_rule }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
oncall_handoff_notification_rule
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: oncall_handoff_notification_rules
  props:
    - name: id
      value: string
      description: Required parameter for the oncall_handoff_notification_rules resource.
    - name: oncall_handoff_notification_rule
      value: object
      description: |
        A rule for contacting the user for Handoff Notifications.
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
    defaultValue="delete_user_handoff_notification_rule"
    values={[
        { label: 'delete_user_handoff_notification_rule', value: 'delete_user_handoff_notification_rule' }
    ]}
>
<TabItem value="delete_user_handoff_notification_rule">

Remove a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
DELETE FROM pagerduty.users.oncall_handoff_notification_rules
WHERE id = '{{ id }}' --required
AND oncall_handoff_notification_rule_id = '{{ oncall_handoff_notification_rule_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_handoff_notification_rules"
    values={[
        { label: '_get_user_handoff_notification_rules', value: '_get_user_handoff_notification_rules' },
        { label: '_get_user_handoff_notifiaction_rule', value: '_get_user_handoff_notifiaction_rule' },
        { label: 'update_user_handoff_notification', value: 'update_user_handoff_notification' }
    ]}
>
<TabItem value="_get_user_handoff_notification_rules">

List Handoff Notification Rules of your PagerDuty User.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
EXEC pagerduty.users.oncall_handoff_notification_rules._get_user_handoff_notification_rules 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_user_handoff_notifiaction_rule">

Get details about a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
EXEC pagerduty.users.oncall_handoff_notification_rules._get_user_handoff_notifiaction_rule 
@id='{{ id }}' --required, 
@oncall_handoff_notification_rule_id='{{ oncall_handoff_notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_user_handoff_notification">

Update a User's Handoff Notification Rule.<br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
EXEC pagerduty.users.oncall_handoff_notification_rules.update_user_handoff_notification 
@id='{{ id }}' --required, 
@oncall_handoff_notification_rule_id='{{ oncall_handoff_notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"oncall_handoff_notification_rule": "{{ oncall_handoff_notification_rule }}"
}'
;
```
</TabItem>
</Tabs>
