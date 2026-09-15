--- 
title: contact_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_methods
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

Creates, updates, deletes, gets or lists a <code>contact_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.contact_methods" /></td></tr>
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

The user's contact method requested.

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
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The "address" to deliver to: email, phone number, etc., depending on the type.</td>
</tr>
<tr>
    <td><CopyableCode code="blacklisted" /></td>
    <td><code>boolean</code></td>
    <td>If true, this phone has been blacklisted by PagerDuty and no messages will be sent to it.</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>integer</code></td>
    <td>The 1-to-3 digit country calling code.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the contact method was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device_type" /></td>
    <td><code>string</code></td>
    <td>The type of device. (android, ios)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, this phone is capable of receiving notifications.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label (e.g., "Work", "Mobile", etc.).</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="send_short_email" /></td>
    <td><code>boolean</code></td>
    <td>Send an abbreviated email message instead of the standard email output. Useful for email-to-SMS gateways and email based pagers.</td>
</tr>
<tr>
    <td><CopyableCode code="sounds" /></td>
    <td><code>array</code></td>
    <td></td>
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

A list of contact methods.

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a></td>
    <td></td>
    <td>Get details about a User's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>List contact methods of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method"><code>contact_method</code></a></td>
    <td></td>
    <td>Create a new contact method for the User.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a>, <a href="#parameter-contact_method"><code>contact_method</code></a></td>
    <td></td>
    <td>Update a User's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a></td>
    <td></td>
    <td>Remove a user's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;</td>
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
<tr id="parameter-contact_method_id">
    <td><CopyableCode code="contact_method_id" /></td>
    <td><code>string</code></td>
    <td>The contact method ID on the user.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
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

Get details about a User's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;

```sql
SELECT
id,
address,
blacklisted,
country_code,
created_at,
device_type,
enabled,
html_url,
label,
self,
send_short_email,
sounds,
summary,
type
FROM pagerduty.users.contact_methods
WHERE id = '{{ id }}' -- required
AND contact_method_id = '{{ contact_method_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List contact methods of your PagerDuty user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.read`&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.users.contact_methods
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

Create a new contact method for the User.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.contact_methods (
contact_method,
id
)
SELECT 
'{{ contact_method }}' /* required */,
'{{ id }}'
RETURNING
contact_method
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_methods
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the contact_methods resource.
    - name: contact_method
      description: |
        The Phone Contact Method of the User, used for Voice or SMS.
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        label: "{{ label }}"
        address: "{{ address }}"
        country_code: {{ country_code }}
        enabled: {{ enabled }}
        blacklisted: {{ blacklisted }}
        device_type: "{{ device_type }}"
        sounds:
          - type: "{{ type }}"
            file: "{{ file }}"
        created_at: "{{ created_at }}"
        send_short_email: {{ send_short_email }}
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

Update a User's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
UPDATE pagerduty.users.contact_methods
SET 
contact_method = '{{ contact_method }}'
WHERE 
id = '{{ id }}' --required
AND contact_method_id = '{{ contact_method_id }}' --required
AND contact_method = '{{ contact_method }}' --required
RETURNING
contact_method;
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

Remove a user's contact method.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:contact_methods.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.contact_methods
WHERE id = '{{ id }}' --required
AND contact_method_id = '{{ contact_method_id }}' --required
;
```
</TabItem>
</Tabs>
