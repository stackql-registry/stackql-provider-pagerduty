--- 
title: rotations
hide_title: false
hide_table_of_contents: false
keywords:
  - rotations
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

Creates, updates, deletes, gets or lists a <code>rotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules_v3.rotations" /></td></tr>
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

Rotation retrieved successfully

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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Events in this rotation</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (schedule_rotation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Rotations retrieved successfully

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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Events in this rotation</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (schedule_rotation)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a rotation by ID including all its events.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve all rotations for a schedule.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new empty rotation for a schedule. After creating a rotation,&lt;br /&gt;add events to define the on-call pattern.&lt;br /&gt;&lt;br /&gt;**Note:** Rotations have no configuration of their own — all scheduling&lt;br /&gt;logic (recurrence, assignment strategy, members) is specified on events.&lt;br /&gt;The request body must be empty or `&#123;&#125;`.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rotation_id"><code>rotation_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete a rotation and all its events.&lt;br /&gt;&lt;br /&gt;On deletion, past events are preserved in the audit history, the current&lt;br /&gt;active event is truncated to the deletion time, and future events are&lt;br /&gt;removed.&lt;br /&gt;</td>
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a rotation by ID including all its events.&lt;br /&gt;

```sql
SELECT
id,
events,
html_url,
self,
type
FROM pagerduty.schedules_v3.rotations
WHERE id = '{{ id }}' -- required
AND rotation_id = '{{ rotation_id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve all rotations for a schedule.&lt;br /&gt;

```sql
SELECT
id,
events,
html_url,
self,
type
FROM pagerduty.schedules_v3.rotations
WHERE id = '{{ id }}' -- required
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create a new empty rotation for a schedule. After creating a rotation,&lt;br /&gt;add events to define the on-call pattern.&lt;br /&gt;&lt;br /&gt;**Note:** Rotations have no configuration of their own — all scheduling&lt;br /&gt;logic (recurrence, assignment strategy, members) is specified on events.&lt;br /&gt;The request body must be empty or `&#123;&#125;`.&lt;br /&gt;

```sql
INSERT INTO pagerduty.schedules_v3.rotations (
id
)
SELECT 
'{{ id }}'
RETURNING
rotation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rotations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the rotations resource.
`}</CodeBlock>

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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete a rotation and all its events.&lt;br /&gt;&lt;br /&gt;On deletion, past events are preserved in the audit history, the current&lt;br /&gt;active event is truncated to the deletion time, and future events are&lt;br /&gt;removed.&lt;br /&gt;

```sql
DELETE FROM pagerduty.schedules_v3.rotations
WHERE id = '{{ id }}' --required
AND rotation_id = '{{ rotation_id }}' --required
;
```
</TabItem>
</Tabs>
