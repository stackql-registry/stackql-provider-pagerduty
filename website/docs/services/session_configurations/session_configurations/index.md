--- 
title: session_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - session_configurations
  - session_configurations
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

Creates, updates, deletes, gets or lists a <code>session_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.session_configurations.session_configurations" /></td></tr>
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

Session Configurations retrieved successfully

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
    <td><CopyableCode code="absolute_session_ttl" /></td>
    <td><code>integer</code></td>
    <td>Absolute session time to live in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="idle_session_ttl" /></td>
    <td><code>integer</code></td>
    <td>Idle session time to live in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The session configuration type (mobile or web) (mobile, web) (example: web)</td>
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
    <td></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>Retrieves session configurations for a PagerDuty account. Returns an array containing&lt;br /&gt;the requested configurations. If a specific type is requested, the array contains one item.&lt;br /&gt;If no type is specified, the array contains all available configurations (mobile and web).&lt;br /&gt;If no configurations exist, a 404 Not Found error will be returned.&lt;br /&gt;&lt;br /&gt;A Session Configuration needs to be created before it can be retrieved and used.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-session_configuration"><code>session_configuration</code></a></td>
    <td></td>
    <td>Creates or updates session configurations for a PagerDuty Account. The configurations will take effect immediately for new sessions, while existing sessions for the specified `types` are immediately revoked.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Deletes the session configurations for a PagerDuty account that was previously set.&lt;br /&gt;The type parameter is required and specifies which configurations to delete.&lt;br /&gt;A single type ('mobile' or 'web') or comma-separated list may be passed in.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.write`&lt;br /&gt;</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Session configuration type. This can be either 'mobile' or 'web', or a comma-separated list of both.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Session configuration type. If omitted, returns both mobile and web configurations.</td>
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

Retrieves session configurations for a PagerDuty account. Returns an array containing&lt;br /&gt;the requested configurations. If a specific type is requested, the array contains one item.&lt;br /&gt;If no type is specified, the array contains all available configurations (mobile and web).&lt;br /&gt;If no configurations exist, a 404 Not Found error will be returned.&lt;br /&gt;&lt;br /&gt;A Session Configuration needs to be created before it can be retrieved and used.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.read`&lt;br /&gt;

```sql
SELECT
absolute_session_ttl,
idle_session_ttl,
type
FROM pagerduty.session_configurations.session_configurations
WHERE type = '{{ type }}'
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

Creates or updates session configurations for a PagerDuty Account. The configurations will take effect immediately for new sessions, while existing sessions for the specified `types` are immediately revoked.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.write`&lt;br /&gt;

```sql
UPDATE pagerduty.session_configurations.session_configurations
SET 
session_configuration = '{{ session_configuration }}'
WHERE 
type = '{{ type }}' --required
AND session_configuration = '{{ session_configuration }}' --required
RETURNING
session_configurations;
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

Deletes the session configurations for a PagerDuty account that was previously set.&lt;br /&gt;The type parameter is required and specifies which configurations to delete.&lt;br /&gt;A single type ('mobile' or 'web') or comma-separated list may be passed in.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `session_configurations.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.session_configurations.session_configurations
WHERE type = '{{ type }}' --required
;
```
</TabItem>
</Tabs>
