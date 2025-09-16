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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>webhook_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>webhook_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.webhooks.webhook_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhook_subscription"
    values={[
        { label: 'get_webhook_subscription', value: 'get_webhook_subscription' },
        { label: 'list_webhook_subscriptions', value: 'list_webhook_subscriptions' }
    ]}
>
<TabItem value="get_webhook_subscription">

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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type indicating the schema of the object. (default: webhook_subscription)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_webhook_subscriptions">

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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type indicating the schema of the object. (default: webhook_subscription)</td>
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
    <td><a href="#get_webhook_subscription"><CopyableCode code="get_webhook_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Gets details about an existing webhook subscription.<br /></td>
</tr>
<tr>
    <td><a href="#list_webhook_subscriptions"><CopyableCode code="list_webhook_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-filter_type"><code>filter_type</code></a>, <a href="#parameter-filter_id"><code>filter_id</code></a></td>
    <td>List existing webhook subscriptions.<br /><br />The `filter_type` and `filter_id` query parameters may be used to only show subscriptions<br />for a particular _service_ or _team_.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br /></td>
</tr>
<tr>
    <td><a href="#create_webhook_subscription"><CopyableCode code="create_webhook_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__webhook_subscription"><code>data__webhook_subscription</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Creates a new webhook subscription.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br /></td>
</tr>
<tr>
    <td><a href="#delete_webhook_subscription"><CopyableCode code="delete_webhook_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Deletes a webhook subscription.<br /></td>
</tr>
<tr>
    <td><a href="#_list_webhook_subscriptions"><CopyableCode code="_list_webhook_subscriptions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-filter_type"><code>filter_type</code></a>, <a href="#parameter-filter_id"><code>filter_id</code></a></td>
    <td>List existing webhook subscriptions.<br /><br />The `filter_type` and `filter_id` query parameters may be used to only show subscriptions<br />for a particular _service_ or _team_.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br /></td>
</tr>
<tr>
    <td><a href="#_get_webhook_subscription"><CopyableCode code="_get_webhook_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Gets details about an existing webhook subscription.<br /></td>
</tr>
<tr>
    <td><a href="#update_webhook_subscription"><CopyableCode code="update_webhook_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Updates an existing webhook subscription.<br /><br />Only the fields being updated need to be included on the request.  This operation does not<br />support updating the `delivery_method` of the webhook subscription.<br /></td>
</tr>
<tr>
    <td><a href="#enable_webhook_subscription"><CopyableCode code="enable_webhook_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Enable a webhook subscription that is temporarily disabled. (This API does not require a request body.)<br /><br />Webhook subscriptions can become temporarily disabled when the subscription's delivery method is repeatedly rejected by the server.<br /></td>
</tr>
<tr>
    <td><a href="#test_webhook_subscription"><CopyableCode code="test_webhook_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Test a webhook subscription.<br /><br />Fires a test event against the webhook subscription.  If properly configured,<br />this will deliver the `pagey.ping` webhook event to the destination.<br /></td>
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
<tr id="parameter-filter_id">
    <td><CopyableCode code="filter_id" /></td>
    <td><code>string</code></td>
    <td>The id of the resource to filter upon.</td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_webhook_subscription"
    values={[
        { label: 'get_webhook_subscription', value: 'get_webhook_subscription' },
        { label: 'list_webhook_subscriptions', value: 'list_webhook_subscriptions' }
    ]}
>
<TabItem value="get_webhook_subscription">

Gets details about an existing webhook subscription.<br />

```sql
SELECT
id,
active,
delivery_method,
description,
events,
filter,
type
FROM pagerduty.webhooks.webhook_subscriptions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
<TabItem value="list_webhook_subscriptions">

List existing webhook subscriptions.<br /><br />The `filter_type` and `filter_id` query parameters may be used to only show subscriptions<br />for a particular _service_ or _team_.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br />

```sql
SELECT
id,
active,
delivery_method,
description,
events,
filter,
type
FROM pagerduty.webhooks.webhook_subscriptions
WHERE Accept = '{{ Accept }}'
AND limit = '{{ limit }}'
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
    defaultValue="create_webhook_subscription"
    values={[
        { label: 'create_webhook_subscription', value: 'create_webhook_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_webhook_subscription">

Creates a new webhook subscription.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br />

```sql
INSERT INTO pagerduty.webhooks.webhook_subscriptions (
data__webhook_subscription,
Accept,
Content-Type
)
SELECT 
'{{ webhook_subscription }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
webhook_subscription
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: webhook_subscriptions
  props:
    - name: webhook_subscription
      value: object
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
    defaultValue="delete_webhook_subscription"
    values={[
        { label: 'delete_webhook_subscription', value: 'delete_webhook_subscription' }
    ]}
>
<TabItem value="delete_webhook_subscription">

Deletes a webhook subscription.<br />

```sql
DELETE FROM pagerduty.webhooks.webhook_subscriptions
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_webhook_subscriptions"
    values={[
        { label: '_list_webhook_subscriptions', value: '_list_webhook_subscriptions' },
        { label: '_get_webhook_subscription', value: '_get_webhook_subscription' },
        { label: 'update_webhook_subscription', value: 'update_webhook_subscription' },
        { label: 'enable_webhook_subscription', value: 'enable_webhook_subscription' },
        { label: 'test_webhook_subscription', value: 'test_webhook_subscription' }
    ]}
>
<TabItem value="_list_webhook_subscriptions">

List existing webhook subscriptions.<br /><br />The `filter_type` and `filter_id` query parameters may be used to only show subscriptions<br />for a particular _service_ or _team_.<br /><br />For more information on webhook subscriptions and how they are used to configure v3 webhooks<br />see the [Webhooks v3 Developer Documentation](https://developer.pagerduty.com/docs/webhooks/v3-overview/).<br />

```sql
EXEC pagerduty.webhooks.webhook_subscriptions._list_webhook_subscriptions 
@Accept='{{ Accept }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@filter_type='{{ filter_type }}', 
@filter_id='{{ filter_id }}'
;
```
</TabItem>
<TabItem value="_get_webhook_subscription">

Gets details about an existing webhook subscription.<br />

```sql
EXEC pagerduty.webhooks.webhook_subscriptions._get_webhook_subscription 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
<TabItem value="update_webhook_subscription">

Updates an existing webhook subscription.<br /><br />Only the fields being updated need to be included on the request.  This operation does not<br />support updating the `delivery_method` of the webhook subscription.<br />

```sql
EXEC pagerduty.webhooks.webhook_subscriptions.update_webhook_subscription 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"webhook_subscription": "{{ webhook_subscription }}"
}'
;
```
</TabItem>
<TabItem value="enable_webhook_subscription">

Enable a webhook subscription that is temporarily disabled. (This API does not require a request body.)<br /><br />Webhook subscriptions can become temporarily disabled when the subscription's delivery method is repeatedly rejected by the server.<br />

```sql
EXEC pagerduty.webhooks.webhook_subscriptions.enable_webhook_subscription 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
<TabItem value="test_webhook_subscription">

Test a webhook subscription.<br /><br />Fires a test event against the webhook subscription.  If properly configured,<br />this will deliver the `pagey.ping` webhook event to the destination.<br />

```sql
EXEC pagerduty.webhooks.webhook_subscriptions.test_webhook_subscription 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
</Tabs>
