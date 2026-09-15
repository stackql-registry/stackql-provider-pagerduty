--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - status_pages
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_pages.subscriptions" /></td></tr>
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
    <td>The ID of the Subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channel of the subscription. (webhook, email, slack) (title: SubscriptionChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="contact" /></td>
    <td><code>string</code></td>
    <td>The subscriber's contact - email address, webhook URL, etc...</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The path in which the Subscription resource is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Subscription. (active, pending, suspended) (title: SubscriptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="subscribable_object" /></td>
    <td><code>object</code></td>
    <td>The subscribed entity for a given subscription. (title: SubscribableObject)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>The ID of the Subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channel of the subscription. (webhook, email, slack) (title: SubscriptionChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="contact" /></td>
    <td><code>string</code></td>
    <td>The subscriber's contact - email address, webhook URL, etc...</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The path in which the Subscription resource is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Subscription. (active, pending, suspended) (title: SubscriptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="subscribable_object" /></td>
    <td><code>object</code></td>
    <td>The subscribed entity for a given subscription. (title: SubscribableObject)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a></td>
    <td></td>
    <td>Get a Subscription for a Status Page by Status Page ID and Subscription ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-channel"><code>channel</code></a></td>
    <td>List Subscriptions for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscription"><code>subscription</code></a></td>
    <td></td>
    <td>Create a Subscription for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a></td>
    <td></td>
    <td>Delete a Subscription for a Status Page by Status Page ID and Subscription ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
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
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Status Page subscription.</td>
</tr>
<tr id="parameter-channel">
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>Filter by Subscription channel.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by Subscription status.</td>
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

Get a Subscription for a Status Page by Status Page ID and Subscription ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
channel,
contact,
self,
status,
status_page,
subscribable_object,
type
FROM pagerduty.status_pages.subscriptions
WHERE id = '{{ id }}' -- required
AND subscription_id = '{{ subscription_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Subscriptions for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
channel,
contact,
self,
status,
status_page,
subscribable_object,
type
FROM pagerduty.status_pages.subscriptions
WHERE id = '{{ id }}' -- required
AND status = '{{ status }}'
AND channel = '{{ channel }}'
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

Create a Subscription for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.status_pages.subscriptions (
subscription,
id
)
SELECT 
'{{ subscription }}' /* required */,
'{{ id }}'
RETURNING
subscription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the subscriptions resource.
    - name: subscription
      description: |
        Request schema for creating a StatusPageSubscription.
      value:
        channel: "{{ channel }}"
        contact: "{{ contact }}"
        status_page:
          id: "{{ id }}"
          type: "{{ type }}"
        subscribable_object:
          id: "{{ id }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

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

Delete a Subscription for a Status Page by Status Page ID and Subscription ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.status_pages.subscriptions
WHERE id = '{{ id }}' --required
AND subscription_id = '{{ subscription_id }}' --required
;
```
</TabItem>
</Tabs>
