--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.sessions" /></td></tr>
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

The user's session requested.

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the user session was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The summary of the session</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the session (browser, oauth)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of the user's active sessions.

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the user session was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The summary of the session</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the session (browser, oauth)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated, please use the &#91;Get OAuth Delegation endpoint&#93;(https:​//developer.pagerduty.com/api-reference//e3c7cd550aa2b-get-a-user-oauth-delegation) instead.&lt;br /&gt;Get details about a user's session.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated, please use the &#91;List OAuth Delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/fc03ba9dffd1f-list-user-oauth-delegations) instead.&lt;br /&gt;&lt;br /&gt;List active sessions of a PagerDuty user.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated as OAuth token revocation is now synchronous. Please use the &#91;DELETE /oauth_delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/ad1161db75db1-delete-all-o-auth-delegations) instead.&lt;br /&gt;&lt;br /&gt;Delete a user's session.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete_all"><CopyableCode code="delete_all" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated as OAuth token revocation is now synchronous. Please use the &#91;DELETE /oauth_delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/ad1161db75db1-delete-all-o-auth-delegations) instead.&lt;br /&gt;&lt;br /&gt;Delete all user sessions.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;If you are interested in deleting mobile app sessions, refer to the Delete OAuth Delegations endpoint.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.write`&lt;br /&gt;</td>
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
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID for the user.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The session type for the user session ID.</td>
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

&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated, please use the &#91;Get OAuth Delegation endpoint&#93;(https:​//developer.pagerduty.com/api-reference//e3c7cd550aa2b-get-a-user-oauth-delegation) instead.&lt;br /&gt;Get details about a user's session.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.read`&lt;br /&gt;

```sql
SELECT
id,
user_id,
created_at,
summary,
type
FROM pagerduty.users.sessions
WHERE id = '{{ id }}' -- required
AND type = '{{ type }}' -- required
AND session_id = '{{ session_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated, please use the &#91;List OAuth Delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/fc03ba9dffd1f-list-user-oauth-delegations) instead.&lt;br /&gt;&lt;br /&gt;List active sessions of a PagerDuty user.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, active sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.read`&lt;br /&gt;

```sql
SELECT
id,
user_id,
created_at,
summary,
type
FROM pagerduty.users.sessions
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'delete_all', value: 'delete_all' }
    ]}
>
<TabItem value="delete">

&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated as OAuth token revocation is now synchronous. Please use the &#91;DELETE /oauth_delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/ad1161db75db1-delete-all-o-auth-delegations) instead.&lt;br /&gt;&lt;br /&gt;Delete a user's session.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.sessions
WHERE id = '{{ id }}' --required
AND type = '{{ type }}' --required
AND session_id = '{{ session_id }}' --required
;
```
</TabItem>
<TabItem value="delete_all">

&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### Deprecated&lt;br /&gt;&gt; This endpoint is deprecated as OAuth token revocation is now synchronous. Please use the &#91;DELETE /oauth_delegations endpoint&#93;(https:​//developer.pagerduty.com/api-reference/ad1161db75db1-delete-all-o-auth-delegations) instead.&lt;br /&gt;&lt;br /&gt;Delete all user sessions.&lt;br /&gt;&lt;br /&gt;Beginning November 2021, user sessions no longer includes newly issued OAuth tokens.&lt;br /&gt;&lt;br /&gt;If you are interested in deleting mobile app sessions, refer to the Delete OAuth Delegations endpoint.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users:sessions.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.sessions
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
