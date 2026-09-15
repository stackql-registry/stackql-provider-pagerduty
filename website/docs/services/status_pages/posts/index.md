--- 
title: posts
hide_title: false
hide_table_of_contents: false
keywords:
  - posts
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

Creates, updates, deletes, gets or lists a <code>posts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="posts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.status_pages.posts" /></td></tr>
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
    <td>An unique identifier within Status Page scope that defines a single Post resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post intent is concluded - only for maintenance post type.</td>
</tr>
<tr>
    <td><CopyableCode code="linked_resource" /></td>
    <td><code>object</code></td>
    <td>Linked resource</td>
</tr>
<tr>
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>The type of the Post. (incident, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="postmortem" /></td>
    <td><code>object</code></td>
    <td>Postmortem</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The API resource URL of the Post.</td>
</tr>
<tr>
    <td><CopyableCode code="starts_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post intent becomes effective - only for maintenance post type.</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title given to a Post.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Post. (default: status_page_post)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>array</code></td>
    <td>List of status_page_post_update references associated to a Post.</td>
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
    <td>An unique identifier within Status Page scope that defines a single Post resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post intent is concluded - only for maintenance post type.</td>
</tr>
<tr>
    <td><CopyableCode code="linked_resource" /></td>
    <td><code>object</code></td>
    <td>Linked resource</td>
</tr>
<tr>
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>The type of the Post. (incident, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="postmortem" /></td>
    <td><code>object</code></td>
    <td>Postmortem</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>The API resource URL of the Post.</td>
</tr>
<tr>
    <td><CopyableCode code="starts_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Post intent becomes effective - only for maintenance post type.</td>
</tr>
<tr>
    <td><CopyableCode code="status_page" /></td>
    <td><code>object</code></td>
    <td>Status Page</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title given to a Post.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object returned by the API - in this case, a Status Page Post. (default: status_page_post)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>array</code></td>
    <td>List of status_page_post_update references associated to a Post.</td>
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
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get a Post for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-post_type"><code>post_type</code></a>, <a href="#parameter-reviewed_status"><code>reviewed_status</code></a>, <a href="#parameter-status[]"><code>status[]</code></a></td>
    <td>List Posts for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post"><code>post</code></a></td>
    <td></td>
    <td>Create a Post for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a>, <a href="#parameter-post"><code>post</code></a></td>
    <td></td>
    <td>Update a Post for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-post_id"><code>post_id</code></a></td>
    <td></td>
    <td>Delete a Post for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>array</code></td>
    <td>Array of additional Models to include in response.</td>
</tr>
<tr id="parameter-post_type">
    <td><CopyableCode code="post_type" /></td>
    <td><code>string</code></td>
    <td>Filter by Post type.</td>
</tr>
<tr id="parameter-reviewed_status">
    <td><CopyableCode code="reviewed_status" /></td>
    <td><code>string</code></td>
    <td>Filter by the reviewed status of the Post to retrieve.</td>
</tr>
<tr id="parameter-status[]">
    <td><CopyableCode code="status[]" /></td>
    <td><code>array</code></td>
    <td>Filter by an array of Status identifiers.</td>
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

Get a Post for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
ends_at,
linked_resource,
post_type,
postmortem,
self,
starts_at,
status_page,
title,
type,
updates
FROM pagerduty.status_pages.posts
WHERE id = '{{ id }}' -- required
AND post_id = '{{ post_id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List Posts for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.read`&lt;br /&gt;

```sql
SELECT
id,
ends_at,
linked_resource,
post_type,
postmortem,
self,
starts_at,
status_page,
title,
type,
updates
FROM pagerduty.status_pages.posts
WHERE id = '{{ id }}' -- required
AND post_type = '{{ post_type }}'
AND reviewed_status = '{{ reviewed_status }}'
AND status[] = '{{ status[] }}'
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

Create a Post for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.status_pages.posts (
post,
id
)
SELECT 
'{{ post }}' /* required */,
'{{ id }}'
RETURNING
post
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: posts
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the posts resource.
    - name: post
      description: |
        Request schema for creating/updating a given Status Page Post resource.
      value:
        type: "{{ type }}"
        title: "{{ title }}"
        post_type: "{{ post_type }}"
        starts_at: "{{ starts_at }}"
        ends_at: "{{ ends_at }}"
        updates:
          - self: "{{ self }}"
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
            impacted_services: "{{ impacted_services }}"
            update_frequency_ms: {{ update_frequency_ms }}
            notify_subscribers: {{ notify_subscribers }}
            reported_at: "{{ reported_at }}"
            type: "{{ type }}"
        status_page:
          id: "{{ id }}"
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

Update a Post for a Status Page by Status Page ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
UPDATE pagerduty.status_pages.posts
SET 
post = '{{ post }}'
WHERE 
id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
AND post = '{{ post }}' --required
RETURNING
post;
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

Delete a Post for a Status Page by Status Page ID and Post ID.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `status_pages.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.status_pages.posts
WHERE id = '{{ id }}' --required
AND post_id = '{{ post_id }}' --required
;
```
</TabItem>
</Tabs>
