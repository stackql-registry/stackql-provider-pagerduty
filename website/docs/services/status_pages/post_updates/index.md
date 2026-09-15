--- 
title: post_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - post_updates
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

Creates, updates, deletes, gets or lists a <code>post_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="post_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_pages.post_updates" /></td></tr>
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
    <td>The ID of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="impacted_services" /></td>
    <td><code>array</code></td>
    <td>Impacted services represent the status page services affected by a post update, and its impact.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="notify_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the subscribers should be notified of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="post" /></td>
    <td><code>object</code></td>
    <td>Status Page Post</td>
</tr>
<tr>
    <td><CopyableCode code="reported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post Update was reported.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewed_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Post Updates to retrieve. (approved, not_reviewed)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The path to which the Post Update resource is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>object</code></td>
    <td>Status Page Severity</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Status Page Status</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="update_frequency_ms" /></td>
    <td><code>integer</code></td>
    <td>The frequency of the next Post Update in milliseconds.</td>
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
    <td>The ID of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="impacted_services" /></td>
    <td><code>array</code></td>
    <td>Impacted services represent the status page services affected by a post update, and its impact.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="notify_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the subscribers should be notified of the Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="post" /></td>
    <td><code>object</code></td>
    <td>Status Page Post</td>
</tr>
<tr>
    <td><CopyableCode code="reported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post Update was reported.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewed_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Post Updates to retrieve. (approved, not_reviewed)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The path to which the Post Update resource is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>object</code></td>
    <td>Status Page Severity</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Status Page Status</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Post Update.</td>
</tr>
<tr>
    <td><CopyableCode code="update_frequency_ms" /></td>
    <td><code>integer</code></td>
    <td>The frequency of the next Post Update in milliseconds.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-post_update_id"><code>post_update_id</code></a></td>
    <td></td>
    <td>Get a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a></td>
    <td><a href="#parameter-reviewed_status"><code>reviewed_status</code></a></td>
    <td>List Post Updates for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-post_update"><code>post_update</code></a></td>
    <td></td>
    <td>Create a Post Update for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-post_update_id"><code>post_update_id</code></a>, <a href="#parameter-post_update"><code>post_update</code></a></td>
    <td></td>
    <td>Update a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-post_update_id"><code>post_update_id</code></a></td>
    <td></td>
    <td>Delete a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
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
<tr id="parameter-post_update_id">
    <td><CopyableCode code="post_update_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Status Page Post Update.</td>
</tr>
<tr id="parameter-reviewed_status">
    <td><CopyableCode code="reviewed_status" /></td>
    <td><code>string</code></td>
    <td>Filter by the reviewed status of the Post Update to retrieve.</td>
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

Get a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
impacted_services,
message,
notify_subscribers,
post,
reported_at,
reviewed_status,
self,
severity,
status,
type,
update_frequency_ms
FROM pagerduty.status_pages.post_updates
WHERE id = '{{ id }}' -- required
AND post_id = '{{ post_id }}' -- required
AND post_update_id = '{{ post_update_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Post Updates for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
impacted_services,
message,
notify_subscribers,
post,
reported_at,
reviewed_status,
self,
severity,
status,
type,
update_frequency_ms
FROM pagerduty.status_pages.post_updates
WHERE id = '{{ id }}' -- required
AND post_id = '{{ post_id }}' -- required
AND reviewed_status = '{{ reviewed_status }}'
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

Create a Post Update for a Post by Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.status_pages.post_updates (
post_update,
id,
post_id
)
SELECT 
'{{ post_update }}' /* required */,
'{{ id }}',
'{{ post_id }}'
RETURNING
post_update
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: post_updates
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the post_updates resource.
    - name: post_id
      value: "{{ post_id }}"
      description: Required parameter for the post_updates resource.
    - name: post_update
      description: |
        Attributes for Post Update creation/update
      value:
        self: "{{ self }}"
        post:
          id: "{{ id }}"
          type: "{{ type }}"
        message: "{{ message }}"
        status:
          id: "{{ id }}"
          type: "{{ type }}"
        severity:
          id: "{{ id }}"
          type: "{{ type }}"
        impacted_services:
          - service:
              id: "{{ id }}"
              type: "{{ type }}"
            impact:
              id: "{{ id }}"
              type: "{{ type }}"
        update_frequency_ms: {{ update_frequency_ms }}
        notify_subscribers: {{ notify_subscribers }}
        reported_at: "{{ reported_at }}"
        type: "{{ type }}"
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

Update a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
UPDATE pagerduty.status_pages.post_updates
SET 
post_update = '{{ post_update }}'
WHERE 
id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
AND post_update_id = '{{ post_update_id }}' --required
AND post_update = '{{ post_update }}' --required
RETURNING
post_update;
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

Delete a Post Update for a Post by Post ID and Post Update ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.status_pages.post_updates
WHERE id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
AND post_update_id = '{{ post_update_id }}' --required
;
```
</TabItem>
</Tabs>
