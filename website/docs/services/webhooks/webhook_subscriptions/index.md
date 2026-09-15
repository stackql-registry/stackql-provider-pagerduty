--- 
title: webhook_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_subscriptions
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

Creates, updates, deletes, gets or lists a <code>webhook_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.webhooks.webhook_subscriptions" /></td></tr>
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

The webhook subscription that was requested.

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
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether this subscription will produce webhook events.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_method" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the webhook subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The set of outbound event types the webhook will receive.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="oauth_client" /></td>
    <td><code>object</code></td>
    <td>OAuth client details. This field is populated in responses when oauth_client_id is set.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type indicating the schema of the object. (webhook_subscription) (default: webhook_subscription)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A set of webhook subscriptions matching the request.

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
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether this subscription will produce webhook events.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_method" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the webhook subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The set of outbound event types the webhook will receive.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="oauth_client" /></td>
    <td><code>object</code></td>
    <td>OAuth client details. This field is populated in responses when oauth_client_id is set.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type indicating the schema of the object. (webhook_subscription) (default: webhook_subscription)</td>
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
    <td>Gets details about an existing webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-filter_type"><code>filter_type</code></a>, <a href="#parameter-filter_id"><code>filter_id</code></a></td>
    <td>List existing webhook subscriptions.&lt;br /&gt;&lt;br /&gt;The `filter_type` and `filter_id` query parameters may be used to only show subscriptions&lt;br /&gt;for a particular _service_ or _team_.&lt;br /&gt;&lt;br /&gt;For more information on webhook subscriptions and how they are used to configure v3 webhooks&lt;br /&gt;see the &#91;Webhooks v3 Developer Documentation&#93;(https:​//developer.pagerduty.com/docs/webhooks/v3-overview/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-webhook_subscription"><code>webhook_subscription</code></a></td>
    <td></td>
    <td>Creates a new webhook subscription.&lt;br /&gt;&lt;br /&gt;For more information on webhook subscriptions and how they are used to configure v3 webhooks&lt;br /&gt;see the &#91;Webhooks v3 Developer Documentation&#93;(https:​//developer.pagerduty.com/docs/webhooks/v3-overview/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates an existing webhook subscription.&lt;br /&gt;&lt;br /&gt;Only the fields being updated need to be included on the request.  This operation does not&lt;br /&gt;support updating the `delivery_method` of the webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Deletes a webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Enable a webhook subscription that is temporarily disabled. (This API does not require a request body.)&lt;br /&gt;&lt;br /&gt;Webhook subscriptions can become temporarily disabled when the subscription's delivery method is repeatedly rejected by the server.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#ping"><CopyableCode code="ping" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Test a webhook subscription.&lt;br /&gt;&lt;br /&gt;Fires a test event against the webhook subscription.  If properly configured,&lt;br /&gt;this will deliver the `pagey.ping` webhook event to the destination.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;</td>
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
<tr id="parameter-filter_id">
    <td><CopyableCode code="filter_id" /></td>
    <td><code>string</code></td>
    <td>The id of the resource to filter upon. Required if filter_type is service or team.</td>
</tr>
<tr id="parameter-filter_type">
    <td><CopyableCode code="filter_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource to filter upon.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset to start pagination search results.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Gets details about an existing webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.read`&lt;br /&gt;

```sql
SELECT
id,
active,
delivery_method,
description,
events,
filter,
oauth_client,
type
FROM pagerduty.webhooks.webhook_subscriptions
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List existing webhook subscriptions.&lt;br /&gt;&lt;br /&gt;The `filter_type` and `filter_id` query parameters may be used to only show subscriptions&lt;br /&gt;for a particular _service_ or _team_.&lt;br /&gt;&lt;br /&gt;For more information on webhook subscriptions and how they are used to configure v3 webhooks&lt;br /&gt;see the &#91;Webhooks v3 Developer Documentation&#93;(https:​//developer.pagerduty.com/docs/webhooks/v3-overview/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.read`&lt;br /&gt;

```sql
SELECT
id,
active,
delivery_method,
description,
events,
filter,
oauth_client,
type
FROM pagerduty.webhooks.webhook_subscriptions
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND filter_type = '{{ filter_type }}'
AND filter_id = '{{ filter_id }}'
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

Creates a new webhook subscription.&lt;br /&gt;&lt;br /&gt;For more information on webhook subscriptions and how they are used to configure v3 webhooks&lt;br /&gt;see the &#91;Webhooks v3 Developer Documentation&#93;(https:​//developer.pagerduty.com/docs/webhooks/v3-overview/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.webhooks.webhook_subscriptions (
webhook_subscription
)
SELECT 
'{{ webhook_subscription }}' /* required */
RETURNING
webhook_subscription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhook_subscriptions
  props:
    - name: webhook_subscription
      value:
        id: "{{ id }}"
        type: "{{ type }}"
        active: {{ active }}
        delivery_method:
          id: "{{ id }}"
          secret: "{{ secret }}"
          temporarily_disabled: {{ temporarily_disabled }}
          type: "{{ type }}"
          url: "{{ url }}"
          custom_headers:
            - name: "{{ name }}"
              value: "{{ value }}"
        description: "{{ description }}"
        events:
          - "{{ events }}"
        filter:
          id: "{{ id }}"
          type: "{{ type }}"
        oauth_client:
          id: "{{ id }}"
          type: "{{ type }}"
          summary: "{{ summary }}"
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

Updates an existing webhook subscription.&lt;br /&gt;&lt;br /&gt;Only the fields being updated need to be included on the request.  This operation does not&lt;br /&gt;support updating the `delivery_method` of the webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;

```sql
UPDATE pagerduty.webhooks.webhook_subscriptions
SET 
webhook_subscription = '{{ webhook_subscription }}'
WHERE 
id = '{{ id }}' --required
RETURNING
webhook_subscription;
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

Deletes a webhook subscription.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.webhooks.webhook_subscriptions
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' },
        { label: 'ping', value: 'ping' }
    ]}
>
<TabItem value="enable">

Enable a webhook subscription that is temporarily disabled. (This API does not require a request body.)&lt;br /&gt;&lt;br /&gt;Webhook subscriptions can become temporarily disabled when the subscription's delivery method is repeatedly rejected by the server.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;

```sql
EXEC pagerduty.webhooks.webhook_subscriptions.enable 
@id='{{ id }}' --required
;
```
</TabItem>
<TabItem value="ping">

Test a webhook subscription.&lt;br /&gt;&lt;br /&gt;Fires a test event against the webhook subscription.  If properly configured,&lt;br /&gt;this will deliver the `pagey.ping` webhook event to the destination.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `webhook_subscriptions.write`&lt;br /&gt;

```sql
EXEC pagerduty.webhooks.webhook_subscriptions.ping 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
