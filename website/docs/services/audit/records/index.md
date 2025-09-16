--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - audit
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>records</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.audit.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audit_records"
    values={[
        { label: 'list_audit_records', value: 'list_audit_records' }
    ]}
>
<TabItem value="list_audit_records">

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
    <td><a href="#list_audit_records"><CopyableCode code="list_audit_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-root_resource_types[]"><code>root_resource_types[]</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-method_type"><code>method_type</code></a>, <a href="#parameter-method_truncated_token"><code>method_truncated_token</code></a>, <a href="#parameter-actions[]"><code>actions[]</code></a></td>
    <td>List audit trail records matching provided query params or default criteria.<br /><br />The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />Only admins, account owners, or global API tokens on PagerDuty account [pricing plans](https://www.pagerduty.com/pricing) with the "Audit Trail" feature can access this endpoint.<br /><br />For other role based access to audit records by resource ID, see the resource's API documentation.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_audit_records"><CopyableCode code="_list_audit_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-root_resource_types[]"><code>root_resource_types[]</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-method_type"><code>method_type</code></a>, <a href="#parameter-method_truncated_token"><code>method_truncated_token</code></a>, <a href="#parameter-actions[]"><code>actions[]</code></a></td>
    <td>List audit trail records matching provided query params or default criteria.<br /><br />The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />Only admins, account owners, or global API tokens on PagerDuty account [pricing plans](https://www.pagerduty.com/pricing) with the "Audit Trail" feature can access this endpoint.<br /><br />For other role based access to audit records by resource ID, see the resource's API documentation.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br /></td>
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
<tr id="parameter-actions[]">
    <td><CopyableCode code="actions[]" /></td>
    <td><code>string</code></td>
    <td>Action filter</td>
</tr>
<tr id="parameter-actor_id">
    <td><CopyableCode code="actor_id" /></td>
    <td><code>string</code></td>
    <td>Actor Id filter. Must be qualified by providing the `actor_type` param.</td>
</tr>
<tr id="parameter-actor_type">
    <td><CopyableCode code="actor_type" /></td>
    <td><code>string</code></td>
    <td>Actor type filter.</td>
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
<tr id="parameter-method_truncated_token">
    <td><CopyableCode code="method_truncated_token" /></td>
    <td><code>string</code></td>
    <td>Method truncated_token filter. Must be qualified by providing the `method_type` param.</td>
</tr>
<tr id="parameter-method_type">
    <td><CopyableCode code="method_type" /></td>
    <td><code>string</code></td>
    <td>Method type filter.</td>
</tr>
<tr id="parameter-root_resource_types[]">
    <td><CopyableCode code="root_resource_types[]" /></td>
    <td><code>string</code></td>
    <td>Resource type filter for the root_resource.</td>
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
    defaultValue="list_audit_records"
    values={[
        { label: 'list_audit_records', value: 'list_audit_records' }
    ]}
>
<TabItem value="list_audit_records">

List audit trail records matching provided query params or default criteria.<br /><br />The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />Only admins, account owners, or global API tokens on PagerDuty account [pricing plans](https://www.pagerduty.com/pricing) with the "Audit Trail" feature can access this endpoint.<br /><br />For other role based access to audit records by resource ID, see the resource's API documentation.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br />

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
FROM pagerduty.audit.records
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND root_resource_types[] = '{{ root_resource_types[] }}'
AND actor_type = '{{ actor_type }}'
AND actor_id = '{{ actor_id }}'
AND method_type = '{{ method_type }}'
AND method_truncated_token = '{{ method_truncated_token }}'
AND actions[] = '{{ actions[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_audit_records"
    values={[
        { label: '_list_audit_records', value: '_list_audit_records' }
    ]}
>
<TabItem value="_list_audit_records">

List audit trail records matching provided query params or default criteria.<br /><br />The returned records are sorted by the `execution_time` from newest to oldest.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /><br />Only admins, account owners, or global API tokens on PagerDuty account [pricing plans](https://www.pagerduty.com/pricing) with the "Audit Trail" feature can access this endpoint.<br /><br />For other role based access to audit records by resource ID, see the resource's API documentation.<br /><br />For more information see the [Audit API Document](https://developer.pagerduty.com/docs/rest-api-v2/audit-records-api/).<br /><br />Scoped OAuth requires: `audit_records.read`<br />

```sql
EXEC pagerduty.audit.records._list_audit_records 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@since='{{ since }}', 
@until='{{ until }}', 
@root_resource_types[]='{{ root_resource_types[] }}', 
@actor_type='{{ actor_type }}', 
@actor_id='{{ actor_id }}', 
@method_type='{{ method_type }}', 
@method_truncated_token='{{ method_truncated_token }}', 
@actions[]='{{ actions[] }}'
;
```
</TabItem>
</Tabs>
