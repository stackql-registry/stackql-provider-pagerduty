--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.users.users" /></td></tr>
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

The user requested.

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
<TabItem value="list">

A paginated array of users.

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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List users of your PagerDuty account, optionally filtered by a search query.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user"><code>user</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Create a new user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td></td>
    <td>Update an existing user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Remove an existing user.&lt;br /&gt;&lt;br /&gt;Returns 400 if the user has assigned incidents unless your &#91;pricing plan&#93;(https:​//www.pagerduty.com/pricing) has the `offboarding` feature and the account is &#91;configured&#93;(https:​//support.pagerduty.com/docs/offboarding#section-additional-configurations) appropriately.&lt;br /&gt;&lt;br /&gt;Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the api call return.&lt;br /&gt;&lt;br /&gt;&#91;*Learn more about `offboarding` feature*&#93;(https:​//support.pagerduty.com/docs/offboarding).&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#regenerate_private_url_key"><CopyableCode code="regenerate_private_url_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Regenerate the private URL key used to construct a user's personal iCal calendar feed URLs&lt;br /&gt;(`http_cal_url` and `web_cal_url`). The old key is immediately invalidated; callers should&lt;br /&gt;update any stored feed subscriptions with the new key.&lt;br /&gt;&lt;br /&gt;A user may only regenerate their own key. Account admins may regenerate on behalf of any user.&lt;br /&gt;&lt;br /&gt;The calendar feed URLs act as bearer credentials: anyone with the URL can read that user's&lt;br /&gt;on-call calendar without further authentication. Rotate the key here whenever a URL may&lt;br /&gt;have been exposed (for example, if it was shared outside the intended audience or if an&lt;br /&gt;admin with `can_update_user` retrieved it via `GET /users/&#123;id&#125;?include&#91;&#93;=calendar_urls`).&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and&lt;br /&gt;other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;</td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional Models to include in response.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
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

Get details about an existing user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

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
FROM pagerduty.users.users
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List users of your PagerDuty account, optionally filtered by a search query.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.read`&lt;br /&gt;

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
FROM pagerduty.users.users
WHERE query = '{{ query }}'
AND team_ids[] = '{{ team_ids[] }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
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

Create a new user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.users.users (
user,
"From"
)
SELECT 
'{{ user }}' /* required */,
'{{ From }}'
RETURNING
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: user
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        email: "{{ email }}"
        time_zone: "{{ time_zone }}"
        color: "{{ color }}"
        role: "{{ role }}"
        avatar_url: "{{ avatar_url }}"
        description: "{{ description }}"
        invitation_sent: {{ invitation_sent }}
        job_title: "{{ job_title }}"
        created_via_sso: {{ created_via_sso }}
        teams:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        contact_methods:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        notification_rules:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        http_cal_url: "{{ http_cal_url }}"
        web_cal_url: "{{ web_cal_url }}"
        license:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
    - name: From
      value: "{{ From }}"
      description: The email address of a valid user associated with the account making the request.
      description: The email address of a valid user associated with the account making the request.
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

Update an existing user.&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
UPDATE pagerduty.users.users
SET 
user = '{{ user }}'
WHERE 
id = '{{ id }}' --required
AND user = '{{ user }}' --required
RETURNING
user;
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

Remove an existing user.&lt;br /&gt;&lt;br /&gt;Returns 400 if the user has assigned incidents unless your &#91;pricing plan&#93;(https:​//www.pagerduty.com/pricing) has the `offboarding` feature and the account is &#91;configured&#93;(https:​//support.pagerduty.com/docs/offboarding#section-additional-configurations) appropriately.&lt;br /&gt;&lt;br /&gt;Note that the incidents reassignment process is asynchronous and has no guarantee to complete before the api call return.&lt;br /&gt;&lt;br /&gt;&#91;*Learn more about `offboarding` feature*&#93;(https:​//support.pagerduty.com/docs/offboarding).&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.users.users
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="regenerate_private_url_key"
    values={[
        { label: 'regenerate_private_url_key', value: 'regenerate_private_url_key' }
    ]}
>
<TabItem value="regenerate_private_url_key">

Regenerate the private URL key used to construct a user's personal iCal calendar feed URLs&lt;br /&gt;(`http_cal_url` and `web_cal_url`). The old key is immediately invalidated; callers should&lt;br /&gt;update any stored feed subscriptions with the new key.&lt;br /&gt;&lt;br /&gt;A user may only regenerate their own key. Account admins may regenerate on behalf of any user.&lt;br /&gt;&lt;br /&gt;The calendar feed URLs act as bearer credentials: anyone with the URL can read that user's&lt;br /&gt;on-call calendar without further authentication. Rotate the key here whenever a URL may&lt;br /&gt;have been exposed (for example, if it was shared outside the intended audience or if an&lt;br /&gt;admin with `can_update_user` retrieved it via `GET /users/&#123;id&#125;?include&#91;&#93;=calendar_urls`).&lt;br /&gt;&lt;br /&gt;Users are members of a PagerDuty account that have the ability to interact with Incidents and&lt;br /&gt;other data on the account.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#users)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `users.write`&lt;br /&gt;

```sql
EXEC pagerduty.users.users.regenerate_private_url_key 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
