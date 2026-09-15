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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.notification_rules" /></td></tr>
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
    <td>(opaque JSON object)</td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>Which incident urgency this rule is used for. Account must have the `urgencies` ability to have a low urgency notification rule. (high, low)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>Which incident urgency this rule is used for. Account must have the `urgencies` ability to have a low urgency notification rule. (high, low)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-urgency"><code>urgency</code></a></td>
    <td>List notification rules of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule"><code>notification_rule</code></a></td>
    <td></td>
    <td>Create a new notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a>, <a href="#parameter-notification_rule"><code>notification_rule</code></a></td>
    <td></td>
    <td>Update a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td></td>
    <td>Remove a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details about a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;

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
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List notification rules of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;

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
AND include[] = '{{ include[] }}'
AND urgency = '{{ urgency }}'
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

Create a new notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.notification_rules (
notification_rule,
id
)
SELECT 
'{{ notification_rule }}' /* required */,
'{{ id }}'
RETURNING
notification_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_rules
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the notification_rules resource.
    - name: notification_rule
      description: |
        A rule for contacting the user.
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        start_delay_in_minutes: {{ start_delay_in_minutes }}
        contact_method:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        urgency: "{{ urgency }}"
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

Update a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
UPDATE pagerduty.users.notification_rules
SET 
notification_rule = '{{ notification_rule }}'
WHERE 
id = '{{ id }}' --required
AND notification_rule_id = '{{ notification_rule_id }}' --required
AND notification_rule = '{{ notification_rule }}' --required
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

Remove a user's notification rule.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.notification_rules
WHERE id = '{{ id }}' --required
AND notification_rule_id = '{{ notification_rule_id }}' --required
;
```
</TabItem>
</Tabs>
