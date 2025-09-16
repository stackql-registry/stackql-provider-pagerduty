--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
  - notifications
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notifications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.notifications.notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_notifications"
    values={[
        { label: 'list_notifications', value: 'list_notifications' }
    ]}
>
<TabItem value="list_notifications">

A paginated array of notifications.

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
    <td><CopyableCode code="" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The address where the notification was sent. This will be null for notification type `push_notification`.</td>
</tr>
<tr>
    <td><CopyableCode code="conferenceAddress" /></td>
    <td><code>string</code></td>
    <td>The address of the conference bridge</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the notification was sent</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of notification.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#list_notifications"><CopyableCode code="list_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List notifications for a given time range, optionally filtered by type (sms_notification, email_notification, phone_notification, or push_notification).<br /><br />A Notification is created when an Incident is triggered or escalated.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#notifications)<br /><br />Scoped OAuth requires: `users:notifications.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_notifications"><CopyableCode code="_list_notifications" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List notifications for a given time range, optionally filtered by type (sms_notification, email_notification, phone_notification, or push_notification).<br /><br />A Notification is created when an Incident is triggered or escalated.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#notifications)<br /><br />Scoped OAuth requires: `users:notifications.read`<br /></td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search. The time element is optional.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search. This should be in the same format as since. The size of the date range must be less than 3 months.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Return notification of this type only.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>Time zone in which dates in the result will be rendered.</td>
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
    defaultValue="list_notifications"
    values={[
        { label: 'list_notifications', value: 'list_notifications' }
    ]}
>
<TabItem value="list_notifications">

List notifications for a given time range, optionally filtered by type (sms_notification, email_notification, phone_notification, or push_notification).<br /><br />A Notification is created when an Incident is triggered or escalated.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#notifications)<br /><br />Scoped OAuth requires: `users:notifications.read`<br />

```sql
SELECT
id,
,
address,
conferenceAddress,
started_at,
status,
type,
user
FROM pagerduty.notifications.notifications
WHERE since = '{{ since }}' -- required
AND until = '{{ until }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND time_zone = '{{ time_zone }}'
AND filter = '{{ filter }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_notifications"
    values={[
        { label: '_list_notifications', value: '_list_notifications' }
    ]}
>
<TabItem value="_list_notifications">

List notifications for a given time range, optionally filtered by type (sms_notification, email_notification, phone_notification, or push_notification).<br /><br />A Notification is created when an Incident is triggered or escalated.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#notifications)<br /><br />Scoped OAuth requires: `users:notifications.read`<br />

```sql
EXEC pagerduty.notifications.notifications._list_notifications 
@since='{{ since }}' --required, 
@until='{{ until }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@time_zone='{{ time_zone }}', 
@filter='{{ filter }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
</Tabs>
