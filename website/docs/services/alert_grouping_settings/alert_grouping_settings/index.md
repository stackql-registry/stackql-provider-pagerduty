--- 
title: alert_grouping_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_grouping_settings
  - alert_grouping_settings
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

Creates, updates, deletes, gets or lists an <code>alert_grouping_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_grouping_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.alert_grouping_settings.alert_grouping_settings" /></td></tr>
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

The Alert Grouping Setting.

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
    <td>An optional short-form string that provides succinct information about an AlertGroupingSetting object suitable for primary labeling of the entity. It is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for Content Based Alert Grouping (title: Content Only Grouping)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO8601 date/time an AlertGroupingSetting got created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description in string that provides more information about an AlertGroupingSetting object.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>The array of one or many Services with just ServiceID/name that the AlertGroupingSetting applies to. Type of content_based_intelligent allows for only one service in the array.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (content_based, content_based_intelligent, intelligent, time)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO8601 date/time an AlertGroupingSetting last got updated at.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An array of alert grouping settings.

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
    <td>An optional short-form string that provides succinct information about an AlertGroupingSetting object suitable for primary labeling of the entity. It is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for Content Based Alert Grouping (title: Content Only Grouping)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO8601 date/time an AlertGroupingSetting got created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description in string that provides more information about an AlertGroupingSetting object.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>The array of one or many Services with just ServiceID/name that the AlertGroupingSetting applies to. Type of content_based_intelligent allows for only one service in the array.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (content_based, content_based_intelligent, intelligent, time)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO8601 date/time an AlertGroupingSetting last got updated at.</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get an existing Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-after"><code>after</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a></td>
    <td>List all of your alert grouping settings including both single service settings and global content based settings.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-alert_grouping_setting"><code>alert_grouping_setting</code></a></td>
    <td></td>
    <td>Create a new Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;This endpoint will be used to create an instance of AlertGroupingSettings for either one service or many services that are in the alert group setting.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-alert_grouping_setting"><code>alert_grouping_setting</code></a></td>
    <td></td>
    <td>Update an Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;if `services` are not provided in the request, then the existing services will not be removed from the setting.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>Cursor to retrieve next page; only present if next page exists.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>Cursor to retrieve previous page; only present if not on first page.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-service_ids[]">
    <td><CopyableCode code="service_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of service IDs. Only results related to these services will be returned.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get an existing Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
id,
name,
config,
created_at,
description,
services,
type,
updated_at
FROM pagerduty.alert_grouping_settings.alert_grouping_settings
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all of your alert grouping settings including both single service settings and global content based settings.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
id,
name,
config,
created_at,
description,
services,
type,
updated_at
FROM pagerduty.alert_grouping_settings.alert_grouping_settings
WHERE after = '{{ after }}'
AND before = '{{ before }}'
AND total = '{{ total }}'
AND limit = '{{ limit }}'
AND service_ids[] = '{{ service_ids[] }}'
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

Create a new Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;This endpoint will be used to create an instance of AlertGroupingSettings for either one service or many services that are in the alert group setting.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.alert_grouping_settings.alert_grouping_settings (
alert_grouping_setting
)
SELECT 
'{{ alert_grouping_setting }}' /* required */
RETURNING
alert_grouping_setting
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alert_grouping_settings
  props:
    - name: alert_grouping_setting
      description: |
        Defines how alerts will be automatically grouped into incidents based on the configurations defined. Note that the Alert Grouping Setting features are available only on certain plans.
      value:
        id: "{{ id }}"
        name: "{{ name }}"
        description: "{{ description }}"
        type: "{{ type }}"
        config:
          aggregate: "{{ aggregate }}"
          fields:
            - "{{ fields }}"
          time_window: {{ time_window }}
          recommended_time_window: {{ recommended_time_window }}
          timeout: {{ timeout }}
          iag_fields:
            - "{{ iag_fields }}"
        services:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        created_at: "{{ created_at }}"
        updated_at: "{{ updated_at }}"
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

Update an Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;if `services` are not provided in the request, then the existing services will not be removed from the setting.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
UPDATE pagerduty.alert_grouping_settings.alert_grouping_settings
SET 
alert_grouping_setting = '{{ alert_grouping_setting }}'
WHERE 
id = '{{ id }}' --required
AND alert_grouping_setting = '{{ alert_grouping_setting }}' --required
RETURNING
alert_grouping_setting;
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

Delete an existing Alert Grouping Setting.&lt;br /&gt;&lt;br /&gt;The settings part of Alert Grouper service allows us to create Alert Grouping Settings and configs that are required to be used during grouping of the alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.alert_grouping_settings.alert_grouping_settings
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
