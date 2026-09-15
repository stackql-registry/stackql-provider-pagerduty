--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - workflow_integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.workflow_integrations.integrations" /></td></tr>
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

The Workflow Integration requested.

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
    <td>The name of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Will be pagerduty.com</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The package that the integration is part of</td>
</tr>
<tr>
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The application that this integration is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_schema" /></td>
    <td><code>string</code></td>
    <td>The JSON schema for the configuration of the integration. This is a dynamic field and is different for every integration (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user who created this connection</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="entitled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the integration is entitled</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="icon_svg" /></td>
    <td><code>string</code></td>
    <td>The svg string of the icon for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="is_deprecated" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the integration is deprecated</td>
</tr>
<tr>
    <td><CopyableCode code="search_keywords" /></td>
    <td><code>array</code></td>
    <td>A list of keywords that match this integration</td>
</tr>
<tr>
    <td><CopyableCode code="secrets_schema" /></td>
    <td><code>string</code></td>
    <td>The JSON schema for the secrets of the integration. This is a dynamic field and is different for every integration (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags applied to the integration</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of Workflow Integrations.

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
    <td>The name of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Will be pagerduty.com</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The package that the integration is part of</td>
</tr>
<tr>
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The application that this integration is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_schema" /></td>
    <td><code>string</code></td>
    <td>The JSON schema for the configuration of the integration. This is a dynamic field and is different for every integration (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user who created this connection</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="entitled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the integration is entitled</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="icon_svg" /></td>
    <td><code>string</code></td>
    <td>The svg string of the icon for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="is_deprecated" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the integration is deprecated</td>
</tr>
<tr>
    <td><CopyableCode code="search_keywords" /></td>
    <td><code>array</code></td>
    <td>A list of keywords that match this integration</td>
</tr>
<tr>
    <td><CopyableCode code="secrets_schema" /></td>
    <td><code>string</code></td>
    <td>The JSON schema for the secrets of the integration. This is a dynamic field and is different for every integration (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags applied to the integration</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
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
    <td>Get details about a Workflow Integration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-include_deprecated"><code>include_deprecated</code></a></td>
    <td>List available Workflow Integrations.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations.read`&lt;br /&gt;</td>
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
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-include_deprecated">
    <td><CopyableCode code="include_deprecated" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deprecated Integrations in the response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
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

Get details about a Workflow Integration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations.read`&lt;br /&gt;

```sql
SELECT
id,
name,
domain_name,
package_name,
application,
configuration_schema,
created_at,
created_by,
description,
entitled,
html_url,
icon_svg,
is_deprecated,
search_keywords,
secrets_schema,
self,
summary,
tags,
type
FROM pagerduty.workflow_integrations.integrations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available Workflow Integrations.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations.read`&lt;br /&gt;

```sql
SELECT
id,
name,
domain_name,
package_name,
application,
configuration_schema,
created_at,
created_by,
description,
entitled,
html_url,
icon_svg,
is_deprecated,
search_keywords,
secrets_schema,
self,
summary,
tags,
type
FROM pagerduty.workflow_integrations.integrations
WHERE limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND include_deprecated = '{{ include_deprecated }}'
;
```
</TabItem>
</Tabs>
