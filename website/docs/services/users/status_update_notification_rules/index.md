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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>status_update_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>status_update_notification_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.status_update_notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_status_update_notification_rule"
    values={[
        { label: 'get_user_status_update_notification_rule', value: 'get_user_status_update_notification_rule' },
        { label: 'get_user_status_update_notification_rules', value: 'get_user_status_update_notification_rules' }
    ]}
>
<TabItem value="get_user_status_update_notification_rule">

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
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_status_update_notification_rules">

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
    <td><a href="#get_user_status_update_notification_rule"><CopyableCode code="get_user_status_update_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_user_status_update_notification_rules"><CopyableCode code="get_user_status_update_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List status update notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_user_status_update_notification_rule"><CopyableCode code="create_user_status_update_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__status_update_notification_rule"><code>data__status_update_notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_user_status_update_notification_rule"><CopyableCode code="delete_user_status_update_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_status_update_notification_rules"><CopyableCode code="_get_user_status_update_notification_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List status update notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_status_update_notification_rule"><CopyableCode code="_get_user_status_update_notification_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_user_status_update_notification_rule"><CopyableCode code="update_user_status_update_notification_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-status_update_notification_rule_id"><code>status_update_notification_rule_id</code></a>, <a href="#parameter-status_update_notification_rule"><code>status_update_notification_rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br /></td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header and the above value. Do not use this endpoint in production, as it may change! </td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_status_update_notification_rule"
    values={[
        { label: 'get_user_status_update_notification_rule', value: 'get_user_status_update_notification_rule' },
        { label: 'get_user_status_update_notification_rules', value: 'get_user_status_update_notification_rules' }
    ]}
>
<TabItem value="get_user_status_update_notification_rule">

Get details about a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
SELECT
contact_method
FROM pagerduty.users.status_update_notification_rules
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND id = '{{ id }}' -- required
AND status_update_notification_rule_id = '{{ status_update_notification_rule_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="get_user_status_update_notification_rules">

List status update notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
SELECT
*
FROM pagerduty.users.status_update_notification_rules
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_status_update_notification_rule"
    values={[
        { label: 'create_user_status_update_notification_rule', value: 'create_user_status_update_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_status_update_notification_rule">

Create a new status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
INSERT INTO pagerduty.users.status_update_notification_rules (
data__status_update_notification_rule,
X-EARLY-ACCESS,
id,
Accept,
Content-Type
)
SELECT 
'{{ status_update_notification_rule }}' /* required */,
'{{ X-EARLY-ACCESS }}',
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
status_update_notification_rule
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: status_update_notification_rules
  props:
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the status_update_notification_rules resource.
    - name: id
      value: string
      description: Required parameter for the status_update_notification_rules resource.
    - name: status_update_notification_rule
      value: object
      description: |
        A rule for contacting the user for Incident Status Updates.
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
    defaultValue="delete_user_status_update_notification_rule"
    values={[
        { label: 'delete_user_status_update_notification_rule', value: 'delete_user_status_update_notification_rule' }
    ]}
>
<TabItem value="delete_user_status_update_notification_rule">

Remove a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
DELETE FROM pagerduty.users.status_update_notification_rules
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
AND id = '{{ id }}' --required
AND status_update_notification_rule_id = '{{ status_update_notification_rule_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_status_update_notification_rules"
    values={[
        { label: '_get_user_status_update_notification_rules', value: '_get_user_status_update_notification_rules' },
        { label: '_get_user_status_update_notification_rule', value: '_get_user_status_update_notification_rule' },
        { label: 'update_user_status_update_notification_rule', value: 'update_user_status_update_notification_rule' }
    ]}
>
<TabItem value="_get_user_status_update_notification_rules">

List status update notification rules of your PagerDuty user.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
EXEC pagerduty.users.status_update_notification_rules._get_user_status_update_notification_rules 
@id='{{ id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_user_status_update_notification_rule">

Get details about a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.read`<br />

```sql
EXEC pagerduty.users.status_update_notification_rules._get_user_status_update_notification_rule 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@id='{{ id }}' --required, 
@status_update_notification_rule_id='{{ status_update_notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_user_status_update_notification_rule">

Update a user's status update notification rule.<br /><br />Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)<br /><br />Scoped OAuth requires: `users.write`<br />

```sql
EXEC pagerduty.users.status_update_notification_rules.update_user_status_update_notification_rule 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@id='{{ id }}' --required, 
@status_update_notification_rule_id='{{ status_update_notification_rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"status_update_notification_rule": "{{ status_update_notification_rule }}"
}'
;
```
</TabItem>
</Tabs>
