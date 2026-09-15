--- 
title: audit_records
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_records
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

Creates, updates, deletes, gets or lists an <code>audit_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules_v3.audit_records" /></td></tr>
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

Records matching the query criteria.

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td> (example: create)</td>
</tr>
<tr>
    <td><CopyableCode code="actors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>Additional details to provide further information about the action or the resource that has been audited. </td>
</tr>
<tr>
    <td><CopyableCode code="execution_context" /></td>
    <td><code>object</code></td>
    <td>Action execution context</td>
</tr>
<tr>
    <td><CopyableCode code="execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the action executed, in ISO8601 format and millisecond precision.</td>
</tr>
<tr>
    <td><CopyableCode code="method" /></td>
    <td><code>object</code></td>
    <td>The method information</td>
</tr>
<tr>
    <td><CopyableCode code="root_resource" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>Record URL.</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;The returned records are sorted by the `execution_time` from newest to oldest.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Audit API Document&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `audit_records.read`&lt;br /&gt;</td>
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
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.</td>
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

&lt;!-- theme: info --&gt;&lt;br /&gt;&lt;br /&gt;&gt; **Important note:** Shift-based schedules use the V3 API and are not compatible with V2 automations. **To create automations for Shift-Based Schedules, you need to:**&lt;br /&gt;&gt;&lt;br /&gt;&gt; 1. **Update your automations** to use the V3 API for all new shift-based schedules&lt;br /&gt;&gt; 2. **Keep the V2 endpoint** for your existing schedules&lt;br /&gt;&gt;&lt;br /&gt;&gt; An upgrade tool for existing schedules is coming soon; your legacy schedules will keep working in the meantime. &#91;Learn more&#93;(https:​//support.pagerduty.com/main/docs/shift-based-schedules-api-upgrade-examples).&lt;br /&gt;&lt;br /&gt;The returned records are sorted by the `execution_time` from newest to oldest.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Audit API Document&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `audit_records.read`&lt;br /&gt;

```sql
SELECT
id,
action,
actors,
details,
execution_context,
execution_time,
method,
root_resource,
self
FROM pagerduty.schedules_v3.audit_records
WHERE id = '{{ id }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
</Tabs>
