--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - schedules_v3
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
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules_v3.schedules" /></td></tr>
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

Schedule retrieved successfully

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
    <td> (example: PL5FQHC)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Engineering On-Call)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Primary engineering on-call rotation)</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies" /></td>
    <td><code>array</code></td>
    <td>Escalation policies that reference this schedule</td>
</tr>
<tr>
    <td><CopyableCode code="final_schedule" /></td>
    <td><code>object</code></td>
    <td>Computed on-call assignments for the requested time range. Only present when `include&#91;&#93;=final_schedule` is specified and `since`/`until` are provided. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="http_cal_url" /></td>
    <td><code>string (uri)</code></td>
    <td>iCal HTTP feed URL for this schedule</td>
</tr>
<tr>
    <td><CopyableCode code="rotations" /></td>
    <td><code>array</code></td>
    <td>Rotations in this schedule</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td> (example: America/New_York)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Always `"schedule_v3"` for schedules created with this API. Schedules created with the legacy `/schedules` API use `"schedule"`.  (schedule_v3)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>All users referenced in this schedule (only present when include&#91;&#93;=users)</td>
</tr>
<tr>
    <td><CopyableCode code="web_cal_url" /></td>
    <td><code>string (uri)</code></td>
    <td>iCal webcal URL for this schedule</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Schedules retrieved successfully

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
    <td> (example: PL5FQHC)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https:​//example.pagerduty.com/schedules/PL5FQHC)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https:​//api.pagerduty.com/v3/schedules/PL5FQHC)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>Schedule name (example: Engineering On-Call)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (schedule_v3_reference)</td>
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
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-overflow"><code>overflow</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a schedule by ID including rotations and events. Optionally&lt;br /&gt;include the computed final schedule for a time range.&lt;br /&gt;&lt;br /&gt;Use `include&#91;&#93;=final_schedule` to get computed on-call assignments.&lt;br /&gt;Use `since` and `until` to specify the time range.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a paginated list of schedule references. Returns lightweight&lt;br /&gt;objects without embedded rotations or events.&lt;br /&gt;&lt;br /&gt;Each result is filtered by the caller's read permission; schedules the&lt;br /&gt;caller cannot read are silently excluded.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-schedule"><code>schedule</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new on-call schedule with basic metadata. Rotations and events&lt;br /&gt;must be added via separate API calls after creation.&lt;br /&gt;&lt;br /&gt;**Rejected fields:** `rotations` and `escalation_policies` are not&lt;br /&gt;accepted in the request body and will result in a 400 error.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update schedule metadata (name, description, time zone). All fields are&lt;br /&gt;optional — only provided fields are updated.&lt;br /&gt;&lt;br /&gt;To modify rotations or events, use their respective endpoints.&lt;br /&gt;&lt;br /&gt;**Rejected fields:** `rotations` and `escalation_policies` are not&lt;br /&gt;accepted and will result in a 400 error.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete a schedule and all associated rotations and events.&lt;br /&gt;&lt;br /&gt;If the schedule is referenced by an active escalation policy, the&lt;br /&gt;deletion will be rejected.&lt;br /&gt;</td>
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
    <td>The ID of the schedule. (example: PSJUKNI)</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>array</code></td>
    <td>Additional data to include in the schedule response: - `final_schedule`: computed on-call assignments for the time range  (example: &#91;final_schedule&#93;)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of schedules to return</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-overflow">
    <td><CopyableCode code="overflow" /></td>
    <td><code>boolean</code></td>
    <td>Include shifts that extend beyond the requested time range boundaries</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start of time range (ISO 8601) (example: 2025-01-01T00:00:00Z)</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>IANA timezone identifier for rendering shift times. Defaults to the schedule's configured time zone.  (example: America/New_York)</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>End of time range (ISO 8601) (example: 2025-01-31T23:59:59Z)</td>
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a schedule by ID including rotations and events. Optionally&lt;br /&gt;include the computed final schedule for a time range.&lt;br /&gt;&lt;br /&gt;Use `include&#91;&#93;=final_schedule` to get computed on-call assignments.&lt;br /&gt;Use `since` and `until` to specify the time range.&lt;br /&gt;

```sql
SELECT
id,
name,
description,
escalation_policies,
final_schedule,
html_url,
http_cal_url,
rotations,
self,
teams,
time_zone,
type,
users,
web_cal_url
FROM pagerduty.schedules_v3.schedules
WHERE id = '{{ id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
AND time_zone = '{{ time_zone }}'
AND overflow = '{{ overflow }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a paginated list of schedule references. Returns lightweight&lt;br /&gt;objects without embedded rotations or events.&lt;br /&gt;&lt;br /&gt;Each result is filtered by the caller's read permission; schedules the&lt;br /&gt;caller cannot read are silently excluded.&lt;br /&gt;

```sql
SELECT
id,
html_url,
self,
summary,
type
FROM pagerduty.schedules_v3.schedules
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND query = '{{ query }}'
AND total = '{{ total }}'
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new on-call schedule with basic metadata. Rotations and events&lt;br /&gt;must be added via separate API calls after creation.&lt;br /&gt;&lt;br /&gt;**Rejected fields:** `rotations` and `escalation_policies` are not&lt;br /&gt;accepted in the request body and will result in a 400 error.&lt;br /&gt;

```sql
INSERT INTO pagerduty.schedules_v3.schedules (
schedule
)
SELECT 
'{{ schedule }}' /* required */
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
        name: "{{ name }}"
        time_zone: "{{ time_zone }}"
        description: "{{ description }}"
        teams:
          - id: "{{ id }}"
            type: "{{ type }}"
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update schedule metadata (name, description, time zone). All fields are&lt;br /&gt;optional — only provided fields are updated.&lt;br /&gt;&lt;br /&gt;To modify rotations or events, use their respective endpoints.&lt;br /&gt;&lt;br /&gt;**Rejected fields:** `rotations` and `escalation_policies` are not&lt;br /&gt;accepted and will result in a 400 error.&lt;br /&gt;

```sql
UPDATE pagerduty.schedules_v3.schedules
SET 
schedule = '{{ schedule }}'
WHERE 
id = '{{ id }}' --required
AND schedule = '{{ schedule }}' --required
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete a schedule and all associated rotations and events.&lt;br /&gt;&lt;br /&gt;If the schedule is referenced by an active escalation policy, the&lt;br /&gt;deletion will be rejected.&lt;br /&gt;

```sql
DELETE FROM pagerduty.schedules_v3.schedules
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
