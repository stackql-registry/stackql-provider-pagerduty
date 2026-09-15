--- 
title: overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - overrides
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

Creates, updates, deletes, gets or lists an <code>overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules_v3.overrides" /></td></tr>
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

Override retrieved successfully

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
    <td><CopyableCode code="custom_shift_id" /></td>
    <td><code>string</code></td>
    <td>ID of the custom shift being overridden (mutually exclusive with rotation_id)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_id" /></td>
    <td><code>string</code></td>
    <td>ID of the rotation whose shift is being overridden (mutually exclusive with custom_shift_id) (example: ABCDEFGHIJKLMNOPQRSTUVWXY2)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2025-03-15T17:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="overridden_member" /></td>
    <td><code>object</code></td>
    <td>A member (user) assigned to a shift or rotation slot</td>
</tr>
<tr>
    <td><CopyableCode code="overriding_member" /></td>
    <td><code>object</code></td>
    <td>A member (user) assigned to a shift or rotation slot</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2025-03-15T09:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (override_shift)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Overrides retrieved successfully

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
    <td><CopyableCode code="custom_shift_id" /></td>
    <td><code>string</code></td>
    <td>ID of the custom shift being overridden (mutually exclusive with rotation_id)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_id" /></td>
    <td><code>string</code></td>
    <td>ID of the rotation whose shift is being overridden (mutually exclusive with custom_shift_id) (example: ABCDEFGHIJKLMNOPQRSTUVWXY2)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2025-03-15T17:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="overridden_member" /></td>
    <td><code>object</code></td>
    <td>A member (user) assigned to a shift or rotation slot</td>
</tr>
<tr>
    <td><CopyableCode code="overriding_member" /></td>
    <td><code>object</code></td>
    <td>A member (user) assigned to a shift or rotation slot</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2025-03-15T09:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (override_shift)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-override_id"><code>override_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a single override by ID.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td><a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-overflow"><code>overflow</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve overrides for a schedule within a time range.&lt;br /&gt;&lt;br /&gt;**`since` and `until` are required.**&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-overrides"><code>overrides</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create one or more overrides for a schedule. An override temporarily&lt;br /&gt;replaces a scheduled on-call member with a different member for a&lt;br /&gt;specific time period.&lt;br /&gt;&lt;br /&gt;Each override must reference either a `rotation_id` or a&lt;br /&gt;`custom_shift_id` (not both). The overriding member must belong to&lt;br /&gt;the account.&lt;br /&gt;&lt;br /&gt;**Note:** The create response wraps the result in an `overrides` array.&lt;br /&gt;Single-resource endpoints (get, update) wrap in `override` (singular).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-override_id"><code>override_id</code></a>, <a href="#parameter-override"><code>override</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update an existing override.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-override_id"><code>override_id</code></a></td>
    <td></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete an override by ID.&lt;br /&gt;</td>
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
<tr id="parameter-override_id">
    <td><CopyableCode code="override_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the override. (example: AGO4642RBB5RBGG65Q6I5X34VI)</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start of time range (ISO 8601) (example: 2026-06-01T00:00:00Z)</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>End of time range (ISO 8601) (example: 2026-06-28T23:59:59Z)</td>
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
<tr id="parameter-overflow">
    <td><CopyableCode code="overflow" /></td>
    <td><code>boolean</code></td>
    <td>Include shifts that extend beyond the requested time range boundaries</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>IANA timezone identifier for rendering shift times. Defaults to the schedule's configured time zone.  (example: America/New_York)</td>
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve a single override by ID.&lt;br /&gt;

```sql
SELECT
id,
custom_shift_id,
rotation_id,
end_time,
html_url,
overridden_member,
overriding_member,
self,
start_time,
type
FROM pagerduty.schedules_v3.overrides
WHERE id = '{{ id }}' -- required
AND override_id = '{{ override_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Retrieve overrides for a schedule within a time range.&lt;br /&gt;&lt;br /&gt;**`since` and `until` are required.**&lt;br /&gt;

```sql
SELECT
id,
custom_shift_id,
rotation_id,
end_time,
html_url,
overridden_member,
overriding_member,
self,
start_time,
type
FROM pagerduty.schedules_v3.overrides
WHERE id = '{{ id }}' -- required
AND since = '{{ since }}' -- required
AND until = '{{ until }}' -- required
AND time_zone = '{{ time_zone }}'
AND overflow = '{{ overflow }}'
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Create one or more overrides for a schedule. An override temporarily&lt;br /&gt;replaces a scheduled on-call member with a different member for a&lt;br /&gt;specific time period.&lt;br /&gt;&lt;br /&gt;Each override must reference either a `rotation_id` or a&lt;br /&gt;`custom_shift_id` (not both). The overriding member must belong to&lt;br /&gt;the account.&lt;br /&gt;&lt;br /&gt;**Note:** The create response wraps the result in an `overrides` array.&lt;br /&gt;Single-resource endpoints (get, update) wrap in `override` (singular).&lt;br /&gt;

```sql
INSERT INTO pagerduty.schedules_v3.overrides (
overrides,
id
)
SELECT 
'{{ overrides }}' /* required */,
'{{ id }}'
RETURNING
overrides
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: overrides
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the overrides resource.
    - name: overrides
      value:
        - type: "{{ type }}"
          rotation_id: "{{ rotation_id }}"
          custom_shift_id: "{{ custom_shift_id }}"
          start_time: "{{ start_time }}"
          end_time: "{{ end_time }}"
          overridden_member:
            type: "{{ type }}"
            user_id: "{{ user_id }}"
          overriding_member:
            type: "{{ type }}"
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Update an existing override.&lt;br /&gt;

```sql
UPDATE pagerduty.schedules_v3.overrides
SET 
override = '{{ override }}'
WHERE 
id = '{{ id }}' --required
AND override_id = '{{ override_id }}' --required
AND override = '{{ override }}' --required
RETURNING
override;
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;Delete an override by ID.&lt;br /&gt;

```sql
DELETE FROM pagerduty.schedules_v3.overrides
WHERE id = '{{ id }}' --required
AND override_id = '{{ override_id }}' --required
;
```
</TabItem>
</Tabs>
