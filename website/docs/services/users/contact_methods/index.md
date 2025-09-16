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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>contact_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contact_methods</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.contact_methods" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_contact_method"
    values={[
        { label: 'get_user_contact_method', value: 'get_user_contact_method' },
        { label: 'get_user_contact_methods', value: 'get_user_contact_methods' }
    ]}
>
<TabItem value="get_user_contact_method">

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
</tbody>
</table>
</TabItem>
<TabItem value="get_user_contact_methods">

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
    <td><a href="#get_user_contact_method"><CopyableCode code="get_user_contact_method" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_user_contact_methods"><CopyableCode code="get_user_contact_methods" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List contact methods of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_user_contact_method"><CopyableCode code="create_user_contact_method" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__contact_method"><code>data__contact_method</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new contact method for the User.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_contact_method"><CopyableCode code="delete_user_contact_method" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a user's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_contact_methods"><CopyableCode code="_get_user_contact_methods" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List contact methods of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_contact_method"><CopyableCode code="_get_user_contact_method" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_user_contact_method"><CopyableCode code="update_user_contact_method" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-contact_method_id"><code>contact_method_id</code></a>, <a href="#parameter-contact_method"><code>contact_method</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br /></td>
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
    defaultValue="get_user_contact_method"
    values={[
        { label: 'get_user_contact_method', value: 'get_user_contact_method' },
        { label: 'get_user_contact_methods', value: 'get_user_contact_methods' }
    ]}
>
<TabItem value="get_user_contact_method">

Get details about a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
SELECT
*
FROM pagerduty.users.contact_methods
WHERE id = '{{ id }}' -- required
AND contact_method_id = '{{ contact_method_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_user_contact_methods">

List contact methods of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
SELECT
*
FROM pagerduty.users.contact_methods
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_contact_method"
    values={[
        { label: 'create_user_contact_method', value: 'create_user_contact_method' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_contact_method">

Create a new contact method for the User.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
INSERT INTO pagerduty.users.contact_methods (
data__contact_method,
id,
Accept,
Content-Type
)
SELECT 
'{{ contact_method }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
contact_method
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: contact_methods
  props:
    - name: id
      value: string
      description: Required parameter for the contact_methods resource.
    - name: contact_method
      value: string
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
    defaultValue="delete_user_contact_method"
    values={[
        { label: 'delete_user_contact_method', value: 'delete_user_contact_method' }
    ]}
>
<TabItem value="delete_user_contact_method">

Remove a user's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
DELETE FROM pagerduty.users.contact_methods
WHERE id = '{{ id }}' --required
AND contact_method_id = '{{ contact_method_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_contact_methods"
    values={[
        { label: '_get_user_contact_methods', value: '_get_user_contact_methods' },
        { label: '_get_user_contact_method', value: '_get_user_contact_method' },
        { label: 'update_user_contact_method', value: 'update_user_contact_method' }
    ]}
>
<TabItem value="_get_user_contact_methods">

List contact methods of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
EXEC pagerduty.users.contact_methods._get_user_contact_methods 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_user_contact_method">

Get details about a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.read`<br />

```sql
EXEC pagerduty.users.contact_methods._get_user_contact_method 
@id='{{ id }}' --required, 
@contact_method_id='{{ contact_method_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_user_contact_method">

Update a User's contact method.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users:contact_methods.write`<br />

```sql
EXEC pagerduty.users.contact_methods.update_user_contact_method 
@id='{{ id }}' --required, 
@contact_method_id='{{ contact_method_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"contact_method": "{{ contact_method }}"
}'
;
```
</TabItem>
</Tabs>
