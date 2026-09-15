--- 
title: severities
hide_title: false
hide_table_of_contents: false
keywords:
  - severities
  - status_pages
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

Creates, updates, deletes, gets or lists a <code>severities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="severities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_pages.severities" /></td></tr>
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
    <td>An unique identifier within Status Page scope that defines a Severity entry.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description is a human-readable text that describes the Severity level.</td>
</tr>
<tr>
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>The type of the Post. (incident, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The API resource URL of the Severity.</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Severity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>An unique identifier within Status Page scope that defines a Severity entry.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description is a human-readable text that describes the Severity level.</td>
</tr>
<tr>
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>The type of the Post. (incident, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The API resource URL of the Severity.</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Severity.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-severity_id"><code>severity_id</code></a></td>
    <td></td>
    <td>Get a Severity for a Status Page by Status Page ID and Severity ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-post_type"><code>post_type</code></a></td>
    <td>List Severities for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
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
<tr id="parameter-severity_id">
    <td><CopyableCode code="severity_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Status Page severity.</td>
</tr>
<tr id="parameter-post_type">
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>Filter by Post type.</td>
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

Get a Severity for a Status Page by Status Page ID and Severity ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
description,
post_type,
self,
status_page,
type
FROM pagerduty.status_pages.severities
WHERE id = '{{ id }}' -- required
AND severity_id = '{{ severity_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Severities for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
description,
post_type,
self,
status_page,
type
FROM pagerduty.status_pages.severities
WHERE id = '{{ id }}' -- required
AND post_type = '{{ post_type }}'
;
```
</TabItem>
</Tabs>
