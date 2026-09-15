--- 
title: status_update_notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - status_update_notification_rules
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

Creates, updates, deletes, gets or lists a <code>status_update_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status_update_notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.status_update_notification_rules" /></td></tr>
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

The user's status update notification rule requested.

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
    <td><CopyableCode code="contact_method" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of status update notification rules.

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
    <td><CopyableCode code="contact_method" /></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List status update notification rules of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule"><code>status_update_notification_rule</code></a></td>
    <td></td>
    <td>Create a new status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a>, <a href="#parameter-status_update_notification_rule"><code>status_update_notification_rule</code></a></td>
    <td></td>
    <td>Update a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a></td>
    <td></td>
    <td>Remove a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
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
<tr id="parameter-status_update_notification_rule_id">
    <td><CopyableCode code="status_update_notification_rule_id" /></td>
    <td><code>string</code></td>
    <td>The status update notification rule ID on the user.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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

Get details about a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

```sql
SELECT
contact_method
FROM pagerduty.users.status_update_notification_rules
WHERE id = '{{ id }}' -- required
AND status_update_notification_rule_id = '{{ status_update_notification_rule_id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List status update notification rules of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

```sql
SELECT
contact_method
FROM pagerduty.users.status_update_notification_rules
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
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

Create a new status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.status_update_notification_rules (
status_update_notification_rule,
id
)
SELECT 
'{{ status_update_notification_rule }}' /* required */,
'{{ id }}'
RETURNING
status_update_notification_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: status_update_notification_rules
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the status_update_notification_rules resource.
    - name: status_update_notification_rule
      description: |
        A rule for contacting the user for Incident Status Updates.
      value:
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

Update a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
UPDATE pagerduty.users.status_update_notification_rules
SET 
status_update_notification_rule = '{{ status_update_notification_rule }}'
WHERE 
id = '{{ id }}' --required
AND status_update_notification_rule_id = '{{ status_update_notification_rule_id }}' --required
AND status_update_notification_rule = '{{ status_update_notification_rule }}' --required
RETURNING
notification_rule;
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

Remove a user's status update notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.status_update_notification_rules
WHERE id = '{{ id }}' --required
AND status_update_notification_rule_id = '{{ status_update_notification_rule_id }}' --required
;
```
</TabItem>
</Tabs>
