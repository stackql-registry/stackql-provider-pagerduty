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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>notification_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notification_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.notification_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_notification_subscriptions"
    values={[
        { label: 'get_user_notification_subscriptions', value: 'get_user_notification_subscriptions' }
    ]}
>
<TabItem value="get_user_notification_subscriptions">

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
    <td><a href="#get_user_notification_subscriptions"><CopyableCode code="get_user_notification_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Retrieve a list of Notification Subscriptions the given User has.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.<br /><br />Scoped OAuth requires: `subscribers.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_user_notification_subscriptions"><CopyableCode code="create_user_notification_subscriptions" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__subscribables"><code>data__subscribables</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Create new Notification Subscriptions for the given User.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_user_notification_subscriptions"><CopyableCode code="_get_user_notification_subscriptions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Retrieve a list of Notification Subscriptions the given User has.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.<br /><br />Scoped OAuth requires: `subscribers.read`<br /></td>
</tr>
<tr>
    <td><a href="#unsubscribe_user_notification_subscriptions"><CopyableCode code="unsubscribe_user_notification_subscriptions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribables"><code>subscribables</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Unsubscribe the given User from Notifications on the matching Subscribable entities.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_notification_subscriptions"
    values={[
        { label: 'get_user_notification_subscriptions', value: 'get_user_notification_subscriptions' }
    ]}
>
<TabItem value="get_user_notification_subscriptions">

Retrieve a list of Notification Subscriptions the given User has.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.<br /><br />Scoped OAuth requires: `subscribers.read`<br />

```sql
SELECT
subscribable_name,
subscription
FROM pagerduty.users.notification_subscriptions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_notification_subscriptions"
    values={[
        { label: 'create_user_notification_subscriptions', value: 'create_user_notification_subscriptions' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_notification_subscriptions">

Create new Notification Subscriptions for the given User.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
INSERT INTO pagerduty.users.notification_subscriptions (
data__subscribables,
id,
Accept
)
SELECT 
'{{ subscribables }}' /* required */,
'{{ id }}',
'{{ Accept }}'
RETURNING
subscriptions
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notification_subscriptions
  props:
    - name: id
      value: string
      description: Required parameter for the notification_subscriptions resource.
    - name: subscribables
      value: array
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_user_notification_subscriptions"
    values={[
        { label: '_get_user_notification_subscriptions', value: '_get_user_notification_subscriptions' },
        { label: 'unsubscribe_user_notification_subscriptions', value: 'unsubscribe_user_notification_subscriptions' }
    ]}
>
<TabItem value="_get_user_notification_subscriptions">

Retrieve a list of Notification Subscriptions the given User has.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /users/&#123;id&#125;/notification_subscriptions` to be returned from this endpoint.<br /><br />Scoped OAuth requires: `subscribers.read`<br />

```sql
EXEC pagerduty.users.notification_subscriptions._get_user_notification_subscriptions 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
<TabItem value="unsubscribe_user_notification_subscriptions">

Unsubscribe the given User from Notifications on the matching Subscribable entities.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
EXEC pagerduty.users.notification_subscriptions.unsubscribe_user_notification_subscriptions 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}' 
@@json=
'{
"subscribables": "{{ subscribables }}"
}'
;
```
</TabItem>
</Tabs>
