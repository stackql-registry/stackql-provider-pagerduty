--- 
title: audit_records
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_records
  - escalation_policies
  - pagerduty
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage pagerduty resources using SQL
custom_edit_url: null
image: /img/stackql-pagerduty-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>audit_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>audit_records</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.escalation_policies.audit_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_escalation_policy_audit_records"
    values={[
        { label: 'list_escalation_policy_audit_records', value: 'list_escalation_policy_audit_records' }
    ]}
>
<TabItem value="list_escalation_policy_audit_records">

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
    <td></td>
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
    <td><a href="#list_escalation_policy_audit_records"><CopyableCode code="list_escalation_policy_audit_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_escalation_policy_audit_records"><CopyableCode code="_list_escalation_policy_audit_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br /></td>
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
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The `Accept` header is used as a versioning header.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="list_escalation_policy_audit_records"
    values={[
        { label: 'list_escalation_policy_audit_records', value: 'list_escalation_policy_audit_records' }
    ]}
>
<TabItem value="list_escalation_policy_audit_records">

The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br />

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
FROM pagerduty.escalation_policies.audit_records
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_escalation_policy_audit_records"
    values={[
        { label: '_list_escalation_policy_audit_records', value: '_list_escalation_policy_audit_records' }
    ]}
>
<TabItem value="_list_escalation_policy_audit_records">

The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br />

```sql
EXEC pagerduty.escalation_policies.audit_records._list_escalation_policy_audit_records 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@since='{{ since }}', 
@until='{{ until }}'
;
```
</TabItem>
</Tabs>
