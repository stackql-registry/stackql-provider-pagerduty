--- 
title: extension_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - extension_schemas
  - extension_schemas
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

Creates, updates, deletes, gets or lists an <code>extension_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>extension_schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.extension_schemas.extension_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_extension_schema"
    values={[
        { label: 'get_extension_schema', value: 'get_extension_schema' },
        { label: 'list_extension_schemas', value: 'list_extension_schemas' }
    ]}
>
<TabItem value="get_extension_schema">

The extension vendor requested

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The long description for the Extension</td>
</tr>
<tr>
    <td><CopyableCode code="guide_url" /></td>
    <td><code>string (url)</code></td>
    <td>A link to the extension's support guide</td>
</tr>
<tr>
    <td><CopyableCode code="icon_url" /></td>
    <td><code>string (url)</code></td>
    <td>A small logo, 18-by-18 pixels.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Machine friendly display label</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Human friendly display label</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string (url)</code></td>
    <td>A large logo, 75 pixels high and no more than 300 pixels wide.</td>
</tr>
<tr>
    <td><CopyableCode code="send_types" /></td>
    <td><code>array</code></td>
    <td>The types of PagerDuty incident events that will activate this Extension</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The url that the webhook payload will be sent to for this Extension.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_extension_schemas">

A paginated array of extension schemas.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The long description for the Extension</td>
</tr>
<tr>
    <td><CopyableCode code="guide_url" /></td>
    <td><code>string (url)</code></td>
    <td>A link to the extension's support guide</td>
</tr>
<tr>
    <td><CopyableCode code="icon_url" /></td>
    <td><code>string (url)</code></td>
    <td>A small logo, 18-by-18 pixels.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Machine friendly display label</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Human friendly display label</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string (url)</code></td>
    <td>A large logo, 75 pixels high and no more than 300 pixels wide.</td>
</tr>
<tr>
    <td><CopyableCode code="send_types" /></td>
    <td><code>array</code></td>
    <td>The types of PagerDuty incident events that will activate this Extension</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The url that the webhook payload will be sent to for this Extension.</td>
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
    <td><a href="#get_extension_schema"><CopyableCode code="get_extension_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about one specific extension vendor.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_extension_schemas"><CopyableCode code="list_extension_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List all extension schemas.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_extension_schemas"><CopyableCode code="_list_extension_schemas" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List all extension schemas.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_extension_schema"><CopyableCode code="_get_extension_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about one specific extension vendor.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br /></td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset to start pagination search results.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_extension_schema"
    values={[
        { label: 'get_extension_schema', value: 'get_extension_schema' },
        { label: 'list_extension_schemas', value: 'list_extension_schemas' }
    ]}
>
<TabItem value="get_extension_schema">

Get details about one specific extension vendor.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br />

```sql
SELECT
description,
guide_url,
icon_url,
key,
label,
logo_url,
send_types,
url
FROM pagerduty.extension_schemas.extension_schemas
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_extension_schemas">

List all extension schemas.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br />

```sql
SELECT
description,
guide_url,
icon_url,
key,
label,
logo_url,
send_types,
url
FROM pagerduty.extension_schemas.extension_schemas
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_extension_schemas"
    values={[
        { label: '_list_extension_schemas', value: '_list_extension_schemas' },
        { label: '_get_extension_schema', value: '_get_extension_schema' }
    ]}
>
<TabItem value="_list_extension_schemas">

List all extension schemas.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br />

```sql
EXEC pagerduty.extension_schemas.extension_schemas._list_extension_schemas 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_extension_schema">

Get details about one specific extension vendor.<br /><br />A PagerDuty extension vendor represents a specific type of outbound extension such as Generic Webhook, Slack, ServiceNow.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extension-schemas)<br /><br />Scoped OAuth requires: `extension_schemas.read`<br />

```sql
EXEC pagerduty.extension_schemas.extension_schemas._get_extension_schema 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
