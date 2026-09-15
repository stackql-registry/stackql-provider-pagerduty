--- 
title: oauth_delegations
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_delegations
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

Creates, updates, deletes, gets or lists an <code>oauth_delegations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_delegations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.oauth_delegations" /></td></tr>
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

Delegation retrieved successfully

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
    <td>The unique identifier for the delegation (example: e53326c6-a713-409c-8f7e-ps1xczid)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The OAuth client ID (example: PagerDutyLogin)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the delegation was created (ISO 8601 format) (example: 2025-10-30T15:45:02Z)</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_type" /></td>
    <td><code>string</code></td>
    <td>The type of delegation (web, mobile, integration) (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the delegation expires (ISO 8601 format) (example: 2025-12-29T15:45:02Z)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The OAuth scopes granted (example: openid)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td>URL to retrieve this delegation in detail (example: https:​//api.pagerduty.com/users/PBGVC7B/oauth_delegations/e53326c6-a713-409c-8f7e-ps1xczid)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the delegation (issued, revoked) (example: issued)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Delegations retrieved sucessfully

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
    <td>The unique identifier for the delegation (example: e53326c6-a713-409c-8f7e-ps1xczid)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The OAuth client ID (example: PagerDutyLogin)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the delegation was created (ISO 8601 format) (example: 2025-10-30T15:45:02Z)</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_type" /></td>
    <td><code>string</code></td>
    <td>The type of delegation (web, mobile, integration) (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the delegation expires (ISO 8601 format) (example: 2025-12-29T15:45:02Z)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The OAuth scopes granted (example: openid)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td>URL to retrieve this delegation in detail (example: https:​//api.pagerduty.com/users/PBGVC7B/oauth_delegations/e53326c6-a713-409c-8f7e-ps1xczid)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the delegation (issued, revoked) (example: issued)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-delegation_id"><code>delegation_id</code></a></td>
    <td></td>
    <td>Get details about a specific OAuth delegation.&lt;br /&gt;&lt;br /&gt;This endpoint replaces the deprecated `/users/&#123;id&#125;/sessions/&#123;session_id&#125;` endpoint.&lt;br /&gt;&lt;br /&gt;**Required OAuth Scope:** For Scoped OAuth requests, this operation requires the `oauth_delegations.read` scope.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-delegation_type"><code>delegation_type</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a></td>
    <td>Get a list of OAuth delegations for a specific user.&lt;br /&gt;&lt;br /&gt;This endpoint replaces the deprecated `/users/&#123;id&#125;/sessions` endpoint.&lt;br /&gt;&lt;br /&gt;**Required OAuth Scope:** For Scoped OAuth requests, this operation requires the `oauth_delegations.read` scope.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.read`&lt;br /&gt;</td>
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
<tr id="parameter-delegation_id">
    <td><CopyableCode code="delegation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the delegation.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-delegation_type">
    <td><CopyableCode code="delegation_type" /></td>
    <td><code>string</code></td>
    <td>The type of OAuth delegations to filter on. Allowed values are 'mobile', 'web', and 'integration'. You can pass one or more types in, separated by commas (e.g., `type=web,mobile`).</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the delegations to return. Allowed values are 'issued' and 'revoked'. You can pass one or more statuses in, separated by commas (e.g., `status=issued,revoked`).</td>
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

Get details about a specific OAuth delegation.&lt;br /&gt;&lt;br /&gt;This endpoint replaces the deprecated `/users/&#123;id&#125;/sessions/&#123;session_id&#125;` endpoint.&lt;br /&gt;&lt;br /&gt;**Required OAuth Scope:** For Scoped OAuth requests, this operation requires the `oauth_delegations.read` scope.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.read`&lt;br /&gt;

```sql
SELECT
id,
client_id,
created_at,
delegation_type,
expires_at,
scope,
self,
status
FROM pagerduty.users.oauth_delegations
WHERE id = '{{ id }}' -- required
AND delegation_id = '{{ delegation_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get a list of OAuth delegations for a specific user.&lt;br /&gt;&lt;br /&gt;This endpoint replaces the deprecated `/users/&#123;id&#125;/sessions` endpoint.&lt;br /&gt;&lt;br /&gt;**Required OAuth Scope:** For Scoped OAuth requests, this operation requires the `oauth_delegations.read` scope.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.read`&lt;br /&gt;

```sql
SELECT
id,
client_id,
created_at,
delegation_type,
expires_at,
scope,
self,
status
FROM pagerduty.users.oauth_delegations
WHERE id = '{{ id }}' -- required
AND delegation_type = '{{ delegation_type }}'
AND status = '{{ status }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
;
```
</TabItem>
</Tabs>
