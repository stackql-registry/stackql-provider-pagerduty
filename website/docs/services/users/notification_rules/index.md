--- 
title: notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_rules
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

Creates, updates, deletes, gets or lists a <code>notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notification_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_notification_rule"
    values={[
        { label: 'get_user_notification_rule', value: 'get_user_notification_rule' },
        { label: 'get_user_notification_rules', value: 'get_user_notification_rules' }
    ]}
>
<TabItem value="get_user_notification_rule">

The user's notification rule requested.

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
    <td><CopyableCode code="start_delay_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The delay before firing the rule, in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: assignment_notification_rule)</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>Which incident urgency this rule is used for. Account must have the `urgencies` ability to have a low urgency notification rule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_notification_rules">

A list of notification rules.

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
    <td><a href="#get_user_notification_rule"><CopyableCode code="get_user_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_user_notification_rules"><CopyableCode code="get_user_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-urgency"><code>urgency</code></a></td>
    <td>List notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_user_notification_rule"><CopyableCode code="create_user_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__notification_rule"><code>data__notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_notification_rule"><CopyableCode code="delete_user_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_notification_rules"><CopyableCode code="_get_user_notification_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-urgency"><code>urgency</code></a></td>
    <td>List notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_notification_rule"><CopyableCode code="_get_user_notification_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_user_notification_rule"><CopyableCode code="update_user_notification_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a>, <a href="#parameter-notification_rule"><code>notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
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
<tr id="parameter-notification_rule_id">
    <td><CopyableCode code="notification_rule_id" /></td>
    <td><code>string</code></td>
    <td>The notification rule ID on the user.</td>
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
    <td>Array of additional details to include.</td>
</tr>
<tr id="parameter-urgency">
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>The incident urgency for which the notification rules are applied. If not specified, defaults to `high`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_notification_rule"
    values={[
        { label: 'get_user_notification_rule', value: 'get_user_notification_rule' },
        { label: 'get_user_notification_rules', value: 'get_user_notification_rules' }
    ]}
>
<TabItem value="get_user_notification_rule">

Get details about a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
SELECT
id,
contact_method,
html_url,
self,
start_delay_in_minutes,
summary,
type,
urgency
FROM pagerduty.users.notification_rules
WHERE id = '{{ id }}' -- required
AND notification_rule_id = '{{ notification_rule_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="get_user_notification_rules">

List notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
SELECT
*
FROM pagerduty.users.notification_rules
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
AND urgency = '{{ urgency }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_notification_rule"
    values={[
        { label: 'create_user_notification_rule', value: 'create_user_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_notification_rule">

Create a new notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
INSERT INTO pagerduty.users.notification_rules (
data__notification_rule,
id,
Accept,
Content-Type
)
SELECT 
'{{ notification_rule }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
notification_rule
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notification_rules
  props:
    - name: id
      value: string
      description: Required parameter for the notification_rules resource.
    - name: notification_rule
      value: object
      description: |
        A rule for contacting the user.
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
    defaultValue="delete_user_notification_rule"
    values={[
        { label: 'delete_user_notification_rule', value: 'delete_user_notification_rule' }
    ]}
>
<TabItem value="delete_user_notification_rule">

Remove a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
DELETE FROM pagerduty.users.notification_rules
WHERE id = '{{ id }}' --required
AND notification_rule_id = '{{ notification_rule_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_notification_rules"
    values={[
        { label: '_get_user_notification_rules', value: '_get_user_notification_rules' },
        { label: '_get_user_notification_rule', value: '_get_user_notification_rule' },
        { label: 'update_user_notification_rule', value: 'update_user_notification_rule' }
    ]}
>
<TabItem value="_get_user_notification_rules">

List notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
EXEC pagerduty.users.notification_rules._get_user_notification_rules 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}', 
@urgency='{{ urgency }}'
;
```
</TabItem>
<TabItem value="_get_user_notification_rule">

Get details about a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
EXEC pagerduty.users.notification_rules._get_user_notification_rule 
@id='{{ id }}' --required, 
@notification_rule_id='{{ notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_user_notification_rule">

Update a user's notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
EXEC pagerduty.users.notification_rules.update_user_notification_rule 
@id='{{ id }}' --required, 
@notification_rule_id='{{ notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"notification_rule": "{{ notification_rule }}"
}'
;
```
</TabItem>
</Tabs>
