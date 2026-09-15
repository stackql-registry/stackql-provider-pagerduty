--- 
title: me
hide_title: false
hide_table_of_contents: false
keywords:
  - me
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

Creates, updates, deletes, gets or lists a <code>me</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="me" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.me" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The requesting user.

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about the current user.&lt;br /&gt;&lt;br /&gt;This endpoint can only be used with a &#91;user-level API key&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or a key generated through an OAuth flow. This will not work if the request is made with an account-level access token.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional Models to include in response. Use `calendar_urls` to include `http_cal_url` and `web_cal_url`; account admins with `can_update_user` may use this to retrieve another user's calendar feed URLs. Note that these URLs are bearer credentials: anyone with the URL can read that user's on-call calendar.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get details about the current user.&lt;br /&gt;&lt;br /&gt;This endpoint can only be used with a &#91;user-level API key&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or a key generated through an OAuth flow. This will not work if the request is made with an account-level access token.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;

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
FROM pagerduty.users.me
WHERE include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>
