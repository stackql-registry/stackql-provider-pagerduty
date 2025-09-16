--- 
title: status_dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - status_dashboards
  - status_dashboards
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

Creates, updates, deletes, gets or lists a <code>status_dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>status_dashboards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_dashboards.status_dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status_dashboard_by_id"
    values={[
        { label: 'get_status_dashboard_by_id', value: 'get_status_dashboard_by_id' },
        { label: 'list_status_dashboards', value: 'list_status_dashboards' }
    ]}
>
<TabItem value="get_status_dashboard_by_id">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_status_dashboards">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url_slug" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_status_dashboard_by_id"><CopyableCode code="get_status_dashboard_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get a Status Dashboard by its PagerDuty `id`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
</tr>
<tr>
    <td><a href="#list_status_dashboards"><CopyableCode code="list_status_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get all your account's custom Status Dashboard views<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
</tr>
<tr>
    <td><a href="#_list_status_dashboards"><CopyableCode code="_list_status_dashboards" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get all your account's custom Status Dashboard views<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
</tr>
<tr>
    <td><a href="#_get_status_dashboard_by_id"><CopyableCode code="_get_status_dashboard_by_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get a Status Dashboard by its PagerDuty `id`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header with the value `status-dashboards`. Do not use this endpoint in production, as it may change!</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_status_dashboard_by_id"
    values={[
        { label: 'get_status_dashboard_by_id', value: 'get_status_dashboard_by_id' },
        { label: 'list_status_dashboards', value: 'list_status_dashboards' }
    ]}
>
<TabItem value="get_status_dashboard_by_id">

Get a Status Dashboard by its PagerDuty `id`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
SELECT
id,
name,
url_slug
FROM pagerduty.status_dashboards.status_dashboards
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
<TabItem value="list_status_dashboards">

Get all your account's custom Status Dashboard views<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
SELECT
id,
name,
url_slug
FROM pagerduty.status_dashboards.status_dashboards
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_status_dashboards"
    values={[
        { label: '_list_status_dashboards', value: '_list_status_dashboards' },
        { label: '_get_status_dashboard_by_id', value: '_get_status_dashboard_by_id' }
    ]}
>
<TabItem value="_list_status_dashboards">

Get all your account's custom Status Dashboard views<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
EXEC pagerduty.status_dashboards.status_dashboards._list_status_dashboards 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
<TabItem value="_get_status_dashboard_by_id">

Get a Status Dashboard by its PagerDuty `id`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
EXEC pagerduty.status_dashboards.status_dashboards._get_status_dashboard_by_id 
@id='{{ id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
</Tabs>
