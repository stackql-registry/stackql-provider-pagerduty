--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - schedules
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules.users" /></td></tr>
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

The users on the given schedule.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (url)</code></td>
    <td>The URL of the user's avatar.</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>The schedule color.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_methods" /></td>
    <td><code>array</code></td>
    <td>The list of contact methods for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="created_via_sso" /></td>
    <td><code>boolean</code></td>
    <td>If true, the user was created via Single Sign-On (SSO).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user's bio.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The user's email address.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="http_cal_url" /></td>
    <td><code>string (uri)</code></td>
    <td>iCal HTTP feed URL for this user's on-call shifts. Only returned on the `GET /users/&#123;id&#125;` detail endpoint: automatically when viewing your own profile with a user-level token, or when an account admin with `can_update_user` passes `include&#91;&#93;=calendar_urls` for another user. Not returned on list endpoints or with account-level read-only keys.  **Security:** this URL is a bearer credential. Anyone with the URL can read the user's on-call calendar without further authentication. Rotate via `POST /users/&#123;id&#125;/regenerate_private_url_key` if it may have been exposed.</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_sent" /></td>
    <td><code>boolean</code></td>
    <td>If true, the user has an outstanding invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="job_title" /></td>
    <td><code>string</code></td>
    <td>The user's title.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_rules" /></td>
    <td><code>array</code></td>
    <td>The list of notification rules for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The user role. Account must have the `read_only_users` ability to set a user as a `read_only_user` or a `read_only_limited_user`, and must have advanced permissions abilities to set a user as `observer` or `restricted_access`. (admin, limited_user, observer, owner, read_only_user, restricted_access, read_only_limited_user, user)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The list of teams to which the user belongs. Account must have the `teams` ability to set this.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>The preferred time zone name. If null, the account's time zone will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="web_cal_url" /></td>
    <td><code>string (uri)</code></td>
    <td>iCal webcal URL for this user's on-call shifts. Only returned on the `GET /users/&#123;id&#125;` detail endpoint: automatically when viewing your own profile with a user-level token, or when an account admin with `can_update_user` passes `include&#91;&#93;=calendar_urls` for another user. Not returned on list endpoints or with account-level read-only keys.  **Security:** this URL is a bearer credential. Anyone with the URL can read the user's on-call calendar without further authentication. Rotate via `POST /users/&#123;id&#125;/regenerate_private_url_key` if it may have been exposed.</td>
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
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>List all of the users on call in a given schedule for a given time range.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
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
    <td>The ID of the schedule. (example: P2LJD7G)</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search.</td>
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

List all of the users on call in a given schedule for a given time range.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

```sql
SELECT
id,
name,
avatar_url,
color,
contact_methods,
created_via_sso,
description,
email,
html_url,
http_cal_url,
invitation_sent,
job_title,
notification_rules,
role,
self,
summary,
teams,
time_zone,
type,
web_cal_url
FROM pagerduty.schedules.users
WHERE id = '{{ id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
</Tabs>
