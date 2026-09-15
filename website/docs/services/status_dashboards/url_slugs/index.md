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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>url_slugs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="url_slugs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_dashboards.url_slugs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-url_slug"><code>url_slug</code></a></td>
    <td></td>
    <td>Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference&lt;br /&gt;for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_dashboards.read`&lt;br /&gt;</td>
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
<tr id="parameter-url_slug">
    <td><CopyableCode code="url_slug" /></td>
    <td><code>string</code></td>
    <td>The `url_slug` for a status dashboard</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get a Status Dashboard by its PagerDuty `url_slug`.  A `url_slug` is a human-readable reference&lt;br /&gt;for a custom Status Dashboard that may be created or changed in the UI. It will generally be a `dash-separated-string-like-this`.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_dashboards.read`&lt;br /&gt;

```sql
SELECT
id,
name,
url_slug
FROM pagerduty.status_dashboards.url_slugs
WHERE url_slug = '{{ url_slug }}' -- required
;
```
</TabItem>
</Tabs>
