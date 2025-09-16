--- 
title: account_subscription
hide_title: false
hide_table_of_contents: false
keywords:
  - account_subscription
  - business_services
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

Creates, updates, deletes, gets or lists an <code>account_subscription</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>account_subscription</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.business_services.account_subscription" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_business_service_account_subscription"><CopyableCode code="create_business_service_account_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Subscribe your Account to a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
</tr>
<tr>
    <td><a href="#remove_business_service_account_subscription"><CopyableCode code="remove_business_service_account_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Unsubscribe your Account from a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
</tr>
<tr>
    <td><a href="#remove_business_service_notification_subscriber"><CopyableCode code="remove_business_service_notification_subscriber" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribers"><code>subscribers</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Unsubscribes the matching Subscribers from a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_business_service_account_subscription"
    values={[
        { label: 'create_business_service_account_subscription', value: 'create_business_service_account_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_business_service_account_subscription">

Subscribe your Account to a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
INSERT INTO pagerduty.business_services.account_subscription (
id,
Accept
)
SELECT 
'{{ id }}',
'{{ Accept }}'
RETURNING
account_is_subscribed
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: account_subscription
  props:
    - name: id
      value: string
      description: Required parameter for the account_subscription resource.
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_business_service_account_subscription"
    values={[
        { label: 'remove_business_service_account_subscription', value: 'remove_business_service_account_subscription' }
    ]}
>
<TabItem value="remove_business_service_account_subscription">

Unsubscribe your Account from a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
DELETE FROM pagerduty.business_services.account_subscription
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_business_service_notification_subscriber"
    values={[
        { label: 'remove_business_service_notification_subscriber', value: 'remove_business_service_notification_subscriber' }
    ]}
>
<TabItem value="remove_business_service_notification_subscriber">

Unsubscribes the matching Subscribers from a Business Service.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
EXEC pagerduty.business_services.account_subscription.remove_business_service_notification_subscriber 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}' 
@@json=
'{
"subscribers": "{{ subscribers }}"
}'
;
```
</TabItem>
</Tabs>
