--- 
title: raw_users
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_users
  - analytics
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

Creates, updates, deletes, gets or lists a <code>raw_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raw_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_users" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Obfuscated ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>integer</code></td>
    <td>Account ID the user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team the user belongs to, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team the user belongs to, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_types_configured" /></td>
    <td><code>array</code></td>
    <td>List of notification channel types configured for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_notification_channel_count" /></td>
    <td><code>integer</code></td>
    <td>Number of notification channels configured for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User description, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="downloaded_mobile_app" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has downloaded the mobile app.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies_count" /></td>
    <td><code>integer</code></td>
    <td>Number of escalation policies this user is part of.</td>
</tr>
<tr>
    <td><CopyableCode code="last_sign_in_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the user's last sign-in, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_methods" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has notification methods configured.</td>
</tr>
<tr>
    <td><CopyableCode code="on_escalation_policy" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user is part of any escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="on_schedule" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user is part of any schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>User's role in the account.</td>
</tr>
<tr>
    <td><CopyableCode code="schedules_count" /></td>
    <td><code>integer</code></td>
    <td>Number of schedules this user is part of.</td>
</tr>
<tr>
    <td><CopyableCode code="signed_up" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has signed up (based on last_sign_in_at not being null).</td>
</tr>
<tr>
    <td><CopyableCode code="team_count" /></td>
    <td><code>integer</code></td>
    <td>Number of teams this user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>User's configured time zone.</td>
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
    <td></td>
    <td></td>
    <td>Allows users to retrieve a raw list of user analytics data within their account. This endpoint provides detailed data about user activity and account configuration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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

Allows users to retrieve a raw list of user analytics data within their account. This endpoint provides detailed data about user activity and account configuration.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
id,
account_id,
team_id,
team_name,
user_name,
channel_types_configured,
created_at,
default_notification_channel_count,
description,
downloaded_mobile_app,
email,
escalation_policies_count,
last_sign_in_at,
notification_methods,
on_escalation_policy,
on_schedule,
role,
schedules_count,
signed_up,
team_count,
time_zone
FROM pagerduty.analytics.raw_users
;
```
</TabItem>
</Tabs>
