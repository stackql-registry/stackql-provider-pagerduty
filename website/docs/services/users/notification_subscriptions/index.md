--- 
title: notification_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_subscriptions
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

Creates, updates, deletes, gets or lists a <code>notification_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.notification_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="subscribable_name" /></td>
    <td><code>string</code></td>
    <td>The name of the subscribable</td>
</tr>
<tr>
    <td><CopyableCode code="subscription" /></td>
    <td><code>object</code></td>
    <td>An object describing the relationship of a NotificationSubscriber and a NotificationSubscribable. (title: NotificationSubscription)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Retrieve a list of Notification Subscriptions the given User has.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribables"><code>subscribables</code></a></td>
    <td></td>
    <td>Create new Notification Subscriptions for the given User.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#unsubscribe"><CopyableCode code="unsubscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribables"><code>subscribables</code></a></td>
    <td></td>
    <td>Unsubscribe the given User from Notifications on the matching Subscribable entities.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Retrieve a list of Notification Subscriptions the given User has.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.read`&lt;br /&gt;

```sql
SELECT
subscribable_name,
subscription
FROM pagerduty.users.notification_subscriptions
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

Create new Notification Subscriptions for the given User.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.notification_subscriptions (
subscribables,
id
)
SELECT 
'{{ subscribables }}' /* required */,
'{{ id }}'
RETURNING
subscriptions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_subscriptions
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the notification_subscriptions resource.
    - name: subscribables
      value:
        - subscribable_id: "{{ subscribable_id }}"
          subscribable_type: "{{ subscribable_type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unsubscribe"
    values={[
        { label: 'unsubscribe', value: 'unsubscribe' }
    ]}
>
<TabItem value="unsubscribe">

Unsubscribe the given User from Notifications on the matching Subscribable entities.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;

```sql
EXEC pagerduty.users.notification_subscriptions.unsubscribe 
@id='{{ id }}' --required 
@@json=
'{
"subscribables": "{{ subscribables }}"
}'
;
```
</TabItem>
</Tabs>
