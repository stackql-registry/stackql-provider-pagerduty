--- 
title: oauth_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_clients
  - webhooks
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

Creates, updates, deletes, gets or lists an <code>oauth_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.webhooks.oauth_clients" /></td></tr>
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

OAuth client details

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
    <td>The ID of the OAuth client (example: AGMEB7F7YJYELCPG4Y5YWMYGXE)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the OAuth client (example: PagerDuty Webhook Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The OAuth client ID provided by the OAuth server (example: oauth-client-id)</td>
</tr>
<tr>
    <td><CopyableCode code="grant_type" /></td>
    <td><code>string</code></td>
    <td>The OAuth grant type (currently only client_credentials is supported) (client_credentials) (example: client_credentials)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The OAuth scopes requested for this client (example: read write)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the OAuth client (active, error) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The OAuth token endpoint URL (example: https:​//foo.oauth-server.com/oauth_token.do)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created (oauth_client) (example: oauth_client, default: oauth_client)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of OAuth clients

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
    <td>The ID of the OAuth client (example: AGMEB7F7YJYELCPG4Y5YWMYGXE)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the OAuth client (example: PagerDuty Webhook Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The OAuth client ID provided by the OAuth server (example: oauth-client-id)</td>
</tr>
<tr>
    <td><CopyableCode code="grant_type" /></td>
    <td><code>string</code></td>
    <td>The OAuth grant type (currently only client_credentials is supported) (client_credentials) (example: client_credentials)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The OAuth scopes requested for this client (example: read write)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the OAuth client (active, error) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="token_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The OAuth token endpoint URL (example: https:​//foo.oauth-server.com/oauth_token.do)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created (oauth_client) (example: oauth_client, default: oauth_client)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get details of a specific OAuth client by ID.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all OAuth clients for webhook subscriptions. Maximum of 10 clients per account.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-oauth_client"><code>oauth_client</code></a></td>
    <td></td>
    <td>Create a new OAuth client for webhook subscriptions. The client credentials will be validated by attempting to obtain an access token before creation.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;&lt;br /&gt;Maximum of 10 OAuth clients per account.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-oauth_client"><code>oauth_client</code></a></td>
    <td></td>
    <td>Update an existing OAuth client. Any change will trigger token validation with the OAuth server.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an OAuth client. This will also remove the OAuth client association from any webhook subscriptions using it.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;</td>
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

Get details of a specific OAuth client by ID.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;

```sql
SELECT
id,
name,
client_id,
grant_type,
scope,
status,
token_url,
type
FROM pagerduty.webhooks.oauth_clients
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all OAuth clients for webhook subscriptions. Maximum of 10 clients per account.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;

```sql
SELECT
id,
name,
client_id,
grant_type,
scope,
status,
token_url,
type
FROM pagerduty.webhooks.oauth_clients
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

Create a new OAuth client for webhook subscriptions. The client credentials will be validated by attempting to obtain an access token before creation.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;&lt;br /&gt;Maximum of 10 OAuth clients per account.&lt;br /&gt;

```sql
INSERT INTO pagerduty.webhooks.oauth_clients (
oauth_client
)
SELECT 
'{{ oauth_client }}' /* required */
RETURNING
oauth_client
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oauth_clients
  props:
    - name: oauth_client
      value:
        name: "{{ name }}"
        client_id: "{{ client_id }}"
        client_secret: "{{ client_secret }}"
        scope: "{{ scope }}"
        token_url: "{{ token_url }}"
        grant_type: "{{ grant_type }}"
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

Update an existing OAuth client. Any change will trigger token validation with the OAuth server.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;

```sql
UPDATE pagerduty.webhooks.oauth_clients
SET 
oauth_client = '{{ oauth_client }}'
WHERE 
id = '{{ id }}' --required
AND oauth_client = '{{ oauth_client }}' --required
RETURNING
oauth_client;
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

Delete an OAuth client. This will also remove the OAuth client association from any webhook subscriptions using it.&lt;br /&gt;&lt;br /&gt;Requires admin or owner role permissions.&lt;br /&gt;

```sql
DELETE FROM pagerduty.webhooks.oauth_clients
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
