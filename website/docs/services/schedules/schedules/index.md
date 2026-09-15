--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules.schedules" /></td></tr>
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

The schedule object.

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
    <td>The name of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies" /></td>
    <td><code>array</code></td>
    <td>An array of all of the escalation policies that uses this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="final_schedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="next_oncall_for_user" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="overrides_subschedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schedule_layers" /></td>
    <td><code>array</code></td>
    <td>A list of schedule layers.</td>
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
    <td>An array of all of the teams on the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (activesupport-time-zone)</code></td>
    <td>The time zone of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>An array of all of the users on the schedule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated array of schedule objects.

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
    <td>The name of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies" /></td>
    <td><code>array</code></td>
    <td>An array of all of the escalation policies that uses this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="final_schedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="next_oncall_for_user" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="overrides_subschedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schedule_layers" /></td>
    <td><code>array</code></td>
    <td>A list of schedule layers.</td>
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
    <td>An array of all of the teams on the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (activesupport-time-zone)</code></td>
    <td>The time zone of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>An array of all of the users on the schedule.</td>
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
    <td><a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-overflow"><code>overflow</code></a>, <a href="#parameter-include_next_oncall_for_user"><code>include_next_oncall_for_user</code></a></td>
    <td>Show detailed information about a schedule, including entries for each layer.&lt;br /&gt;Scoped OAuth requires: `schedules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-include_next_oncall_for_user"><code>include_next_oncall_for_user</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a></td>
    <td>List the on-call schedules.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-schedule"><code>schedule</code></a></td>
    <td><a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Create a new on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td><a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Update an existing on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#preview"><CopyableCode code="preview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schedule"><code>schedule</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Preview what an on-call schedule would look like without saving it.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
</tr>
<tr id="parameter-include_next_oncall_for_user">
    <td><CopyableCode code="include_next_oncall_for_user" /></td>
    <td><code>string</code></td>
    <td>Specify an `user_id`, and the schedule list API will return information about this user's next on-call.</td>
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
<tr id="parameter-overflow">
    <td><CopyableCode code="overflow" /></td>
    <td><code>boolean</code></td>
    <td>Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:   - If you don't pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`. </td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>Time zone in which results will be rendered. This will default to the current user's time zone and then the account's time zone.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Show detailed information about a schedule, including entries for each layer.&lt;br /&gt;Scoped OAuth requires: `schedules.read`&lt;br /&gt;

```sql
SELECT
id,
name,
description,
escalation_policies,
final_schedule,
html_url,
next_oncall_for_user,
overrides_subschedule,
schedule_layers,
self,
summary,
teams,
time_zone,
type,
users
FROM pagerduty.schedules.schedules
WHERE id = '{{ id }}' -- required
AND time_zone = '{{ time_zone }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND overflow = '{{ overflow }}'
AND include_next_oncall_for_user = '{{ include_next_oncall_for_user }}'
;
```
</TabItem>
<TabItem value="list">

List the on-call schedules.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.read`&lt;br /&gt;

```sql
SELECT
id,
name,
description,
escalation_policies,
final_schedule,
html_url,
next_oncall_for_user,
overrides_subschedule,
schedule_layers,
self,
summary,
teams,
time_zone,
type,
users
FROM pagerduty.schedules.schedules
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
AND include[] = '{{ include[] }}'
AND time_zone = '{{ time_zone }}'
AND include_next_oncall_for_user = '{{ include_next_oncall_for_user }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND team_ids[] = '{{ team_ids[] }}'
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

Create a new on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.schedules.schedules (
schedule,
overflow
)
SELECT 
'{{ schedule }}' /* required */,
'{{ overflow }}'
RETURNING
schedule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedules
  props:
    - name: schedule
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        schedule_layers:
          - id: "{{ id }}"
            start: "{{ start }}"
            end: "{{ end }}"
            users: "{{ users }}"
            restrictions: "{{ restrictions }}"
            rotation_virtual_start: "{{ rotation_virtual_start }}"
            rotation_turn_length_seconds: {{ rotation_turn_length_seconds }}
            name: "{{ name }}"
            rendered_schedule_entries: "{{ rendered_schedule_entries }}"
            rendered_coverage_percentage: {{ rendered_coverage_percentage }}
        time_zone: "{{ time_zone }}"
        name: "{{ name }}"
        description: "{{ description }}"
        final_schedule:
          name: "{{ name }}"
          rendered_schedule_entries:
            - user:
                id: "{{ id }}"
                summary: "{{ summary }}"
                type: "{{ type }}"
                self: "{{ self }}"
                html_url: "{{ html_url }}"
              start: "{{ start }}"
              end: "{{ end }}"
          rendered_coverage_percentage: {{ rendered_coverage_percentage }}
        overrides_subschedule:
          name: "{{ name }}"
          rendered_schedule_entries:
            - user:
                id: "{{ id }}"
                summary: "{{ summary }}"
                type: "{{ type }}"
                self: "{{ self }}"
                html_url: "{{ html_url }}"
              start: "{{ start }}"
              end: "{{ end }}"
          rendered_coverage_percentage: {{ rendered_coverage_percentage }}
        escalation_policies:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        users:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        teams:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        next_oncall_for_user:
          start: "{{ start }}"
          end: "{{ end }}"
          user:
            id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
    - name: overflow
      value: {{ overflow }}
      description: Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter \`overflow=true\` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from \`2011-06-01T10:00:00Z\` to \`2011-06-01T14:00:00Z\`:   - If you don't pass the \`overflow=true\` parameter, you will get one schedule entry returned with a start of \`2011-06-01T10:00:00Z\` and end of \`2011-06-01T14:00:00Z\`. - If you do pass the \`overflow=true\` parameter, you will get one schedule entry returned with a start of \`2011-06-01T00:00:00Z\` and end of \`2011-06-02T00:00:00Z\`. 
      description: Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter \`overflow=true\` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from \`2011-06-01T10:00:00Z\` to \`2011-06-01T14:00:00Z\`:   - If you don't pass the \`overflow=true\` parameter, you will get one schedule entry returned with a start of \`2011-06-01T10:00:00Z\` and end of \`2011-06-01T14:00:00Z\`. - If you do pass the \`overflow=true\` parameter, you will get one schedule entry returned with a start of \`2011-06-01T00:00:00Z\` and end of \`2011-06-02T00:00:00Z\`. 
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

Update an existing on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;

```sql
UPDATE pagerduty.schedules.schedules
SET 
schedule = '{{ schedule }}'
WHERE 
id = '{{ id }}' --required
AND schedule = '{{ schedule }}' --required
AND overflow = {{ overflow}}
RETURNING
schedule;
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

Delete an on-call schedule.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.schedules.schedules
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="preview"
    values={[
        { label: 'preview', value: 'preview' }
    ]}
>
<TabItem value="preview">

Preview what an on-call schedule would look like without saving it.&lt;br /&gt;&lt;br /&gt;A Schedule determines the time periods that users are On-Call.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `schedules.write`&lt;br /&gt;

```sql
EXEC pagerduty.schedules.schedules.preview 
@since='{{ since }}', 
@until='{{ until }}', 
@overflow={{ overflow }} 
@@json=
'{
"schedule": "{{ schedule }}"
}'
;
```
</TabItem>
</Tabs>
