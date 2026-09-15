--- 
title: postmortems
hide_title: false
hide_table_of_contents: false
keywords:
  - postmortems
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

Creates, updates, deletes, gets or lists a <code>postmortems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="postmortems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_pages.postmortems" /></td></tr>
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
    <td>An unique identifier within Status Page scope that defines a single Postmortem resource.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message of the Postmortem (supports Rich-Text).</td>
</tr>
<tr>
    <td><CopyableCode code="notify_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not subscribers of the Status Page should be notified about the Postmortem.</td>
</tr>
<tr>
    <td><CopyableCode code="post" /></td>
    <td><code>object</code></td>
    <td>Status Page Post</td>
</tr>
<tr>
    <td><CopyableCode code="reported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Postmortem was reported.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The API resource URL of the Postmortem.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Post Postmortem.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a></td>
    <td></td>
    <td>Get a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-postmortem"><code>postmortem</code></a></td>
    <td></td>
    <td>Create or Update a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a></td>
    <td></td>
    <td>Delete a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
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
<tr id="parameter-post_id">
    <td><CopyableCode code="post_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Status Page Post.</td>
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

Get a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
message,
notify_subscribers,
post,
reported_at,
self,
type
FROM pagerduty.status_pages.postmortems
WHERE id = '{{ id }}' -- required
AND post_id = '{{ post_id }}' -- required
;
```
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

Create or Update a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
UPDATE pagerduty.status_pages.postmortems
SET 
postmortem = '{{ postmortem }}'
WHERE 
id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
AND postmortem = '{{ postmortem }}' --required
RETURNING
postmortem;
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

Delete a Postmortem for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.status_pages.postmortems
WHERE id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
;
```
</TabItem>
</Tabs>
