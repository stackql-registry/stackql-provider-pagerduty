--- 
title: url_slugs
hide_title: false
hide_table_of_contents: false
keywords:
  - url_slugs
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

Creates, updates, deletes, gets or lists a <code>url_slugs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>url_slugs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_dashboards.url_slugs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status_dashboard_by_url_slug"
    values={[
        { label: 'get_status_dashboard_by_url_slug', value: 'get_status_dashboard_by_url_slug' }
    ]}
>
<TabItem value="get_status_dashboard_by_url_slug">

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
    <td><a href="#get_status_dashboard_by_url_slug"><CopyableCode code="get_status_dashboard_by_url_slug" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-url_slug"><code>url_slug</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference<br />for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
</tr>
<tr>
    <td><a href="#_get_status_dashboard_by_url_slug"><CopyableCode code="_get_status_dashboard_by_url_slug" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-url_slug"><code>url_slug</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference<br />for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
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
<tr id="parameter-url_slug">
    <td><CopyableCode code="url_slug" /></td>
    <td><code>string</code></td>
    <td>The `url_slug` for a status dashboard</td>
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
    defaultValue="get_status_dashboard_by_url_slug"
    values={[
        { label: 'get_status_dashboard_by_url_slug', value: 'get_status_dashboard_by_url_slug' }
    ]}
>
<TabItem value="get_status_dashboard_by_url_slug">

Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference<br />for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
SELECT
id,
name,
url_slug
FROM pagerduty.status_dashboards.url_slugs
WHERE url_slug = '{{ url_slug }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_status_dashboard_by_url_slug"
    values={[
        { label: '_get_status_dashboard_by_url_slug', value: '_get_status_dashboard_by_url_slug' }
    ]}
>
<TabItem value="_get_status_dashboard_by_url_slug">

Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference<br />for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
EXEC pagerduty.status_dashboards.url_slugs._get_status_dashboard_by_url_slug 
@url_slug='{{ url_slug }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
</Tabs>
