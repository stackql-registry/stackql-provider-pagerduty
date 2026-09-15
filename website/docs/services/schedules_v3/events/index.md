--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules_v3.events" /></td></tr>
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

Event retrieved successfully

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
    <td> (example: ABCDEFGHIJKLMNOPQRSTUVWXY2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name for this event (example: Weekly On-Call)</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_strategy" /></td>
    <td><code>object</code></td>
    <td>Defines how users are assigned on-call within an event's time window.  - `rotating_member_assignment_strategy`: users rotate in sequence.   `shifts_per_member` controls how many consecutive shift periods each   member covers before rotating. - `every_member_assignment_strategy`: all listed members are on-call   simultaneously for every occurrence. </td>
</tr>
<tr>
    <td><CopyableCode code="effective_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this event starts producing shifts (UTC) (example: 2025-03-03T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this event stops producing shifts (UTC). Null means indefinite. (example: 2025-09-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>object</code></td>
    <td>A time-of-day value with an explicit time zone. Used for event `start_time` and `end_time` to define the recurring window of coverage (e.g., 9 AM–5 PM every Monday in New York). </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="recurrence" /></td>
    <td><code>array</code></td>
    <td>RFC 5545 recurrence rules defining the repeating pattern. This must be an array containing:  &lt;br /&gt; - Exactly one &lt;b&gt;RRULE&lt;/b&gt; &lt;br /&gt;- Zero or more &lt;b&gt;EXDATE&lt;/b&gt; &lt;br /&gt;- Zero or more &lt;b&gt;RDATE&lt;/b&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>object</code></td>
    <td>A time-of-day value with an explicit time zone. Used for event `start_time` and `end_time` to define the recurring window of coverage (e.g., 9 AM–5 PM every Monday in New York). </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (schedule_event)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Events retrieved successfully

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
    <td> (example: ABCDEFGHIJKLMNOPQRSTUVWXY2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name for this event (example: Weekly On-Call)</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_strategy" /></td>
    <td><code>object</code></td>
    <td>Defines how users are assigned on-call within an event's time window.  - `rotating_member_assignment_strategy`: users rotate in sequence.   `shifts_per_member` controls how many consecutive shift periods each   member covers before rotating. - `every_member_assignment_strategy`: all listed members are on-call   simultaneously for every occurrence. </td>
</tr>
<tr>
    <td><CopyableCode code="effective_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this event starts producing shifts (UTC) (example: 2025-03-03T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>When this event stops producing shifts (UTC). Null means indefinite. (example: 2025-09-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>object</code></td>
    <td>A time-of-day value with an explicit time zone. Used for event `start_time` and `end_time` to define the recurring window of coverage (e.g., 9 AM–5 PM every Monday in New York). </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="recurrence" /></td>
    <td><code>array</code></td>
    <td>RFC 5545 recurrence rules defining the repeating pattern. This must be an array containing:  &lt;br /&gt; - Exactly one &lt;b&gt;RRULE&lt;/b&gt; &lt;br /&gt;- Zero or more &lt;b&gt;EXDATE&lt;/b&gt; &lt;br /&gt;- Zero or more &lt;b&gt;RDATE&lt;/b&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>object</code></td>
    <td>A time-of-day value with an explicit time zone. Used for event `start_time` and `end_time` to define the recurring window of coverage (e.g., 9 AM–5 PM every Monday in New York). </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (schedule_event)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a specific event by ID.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve all events for a rotation, ordered by start time.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a>, <a href="#parameter-event"><code>event</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new event that defines when and how users are on-call within&lt;br /&gt;a rotation.&lt;br /&gt;&lt;br /&gt;**Constraints:**&lt;br /&gt;- Maximum 5 events per rotation&lt;br /&gt;- Events within a rotation cannot overlap&lt;br /&gt;- `effective_since` must be in the future (past values are clamped to now)&lt;br /&gt;- All users referenced in `assignment_strategy.members` must exist and&lt;br /&gt;  belong to the account&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-event"><code>event</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update an existing event.&lt;br /&gt;&lt;br /&gt;**Restrictions based on event timing:**&lt;br /&gt;- **Past events** (effective_until in the past): Cannot be modified&lt;br /&gt;- **Active events** (currently producing shifts): Can only update&lt;br /&gt;  `effective_until`&lt;br /&gt;- **Future events** (effective_since in the future): All fields can&lt;br /&gt;  be updated&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete an event from a rotation.&lt;br /&gt;</td>
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
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the event. (example: AGO462IDT55XVGN74FDAQUUNHY)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the schedule. (example: PSJUKNI)</td>
</tr>
<tr id="parameter-rotation_id">
    <td><CopyableCode code="rotation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rotation. (example: AGO462IDT5ZMNFBVSROUDT6B4M)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start of time range (ISO 8601) (example: 2025-01-01T00:00:00Z)</td>
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a specific event by ID.&lt;br /&gt;

```sql
SELECT
id,
name,
assignment_strategy,
effective_since,
effective_until,
end_time,
html_url,
recurrence,
self,
start_time,
type
FROM pagerduty.schedules_v3.events
WHERE id = '{{ id }}' -- required
AND rotation_id = '{{ rotation_id }}' -- required
AND event_id = '{{ event_id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve all events for a rotation, ordered by start time.&lt;br /&gt;

```sql
SELECT
id,
name,
assignment_strategy,
effective_since,
effective_until,
end_time,
html_url,
recurrence,
self,
start_time,
type
FROM pagerduty.schedules_v3.events
WHERE id = '{{ id }}' -- required
AND rotation_id = '{{ rotation_id }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new event that defines when and how users are on-call within&lt;br /&gt;a rotation.&lt;br /&gt;&lt;br /&gt;**Constraints:**&lt;br /&gt;- Maximum 5 events per rotation&lt;br /&gt;- Events within a rotation cannot overlap&lt;br /&gt;- `effective_since` must be in the future (past values are clamped to now)&lt;br /&gt;- All users referenced in `assignment_strategy.members` must exist and&lt;br /&gt;  belong to the account&lt;br /&gt;

```sql
INSERT INTO pagerduty.schedules_v3.events (
event,
id,
rotation_id
)
SELECT 
'{{ event }}' /* required */,
'{{ id }}',
'{{ rotation_id }}'
RETURNING
event
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: events
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the events resource.
    - name: rotation_id
      value: "{{ rotation_id }}"
      description: Required parameter for the events resource.
    - name: event
      value:
        name: "{{ name }}"
        start_time:
          date_time: "{{ date_time }}"
          time_zone: "{{ time_zone }}"
        end_time:
          date_time: "{{ date_time }}"
          time_zone: "{{ time_zone }}"
        effective_since: "{{ effective_since }}"
        effective_until: "{{ effective_until }}"
        recurrence:
          - "{{ recurrence }}"
        assignment_strategy:
          type: "{{ type }}"
          shifts_per_member: {{ shifts_per_member }}
          members:
            - type: "{{ type }}"
              user_id: "{{ user_id }}"
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update an existing event.&lt;br /&gt;&lt;br /&gt;**Restrictions based on event timing:**&lt;br /&gt;- **Past events** (effective_until in the past): Cannot be modified&lt;br /&gt;- **Active events** (currently producing shifts): Can only update&lt;br /&gt;  `effective_until`&lt;br /&gt;- **Future events** (effective_since in the future): All fields can&lt;br /&gt;  be updated&lt;br /&gt;

```sql
UPDATE pagerduty.schedules_v3.events
SET 
event = '{{ event }}'
WHERE 
id = '{{ id }}' --required
AND rotation_id = '{{ rotation_id }}' --required
AND event_id = '{{ event_id }}' --required
AND event = '{{ event }}' --required
RETURNING
event;
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete an event from a rotation.&lt;br /&gt;

```sql
DELETE FROM pagerduty.schedules_v3.events
WHERE id = '{{ id }}' --required
AND rotation_id = '{{ rotation_id }}' --required
AND event_id = '{{ event_id }}' --required
;
```
</TabItem>
</Tabs>
