--- 
title: enablements
hide_title: false
hide_table_of_contents: false
keywords:
  - enablements
  - services
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

Creates, updates, deletes, gets or lists an <code>enablements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enablements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.services.enablements" /></td></tr>
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

The list of feature enablement settings for the service.

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the specified product addon is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="feature" /></td>
    <td><code>string</code></td>
    <td>The name of the product addon whose set of features will be enabled or disabled. (example: aiops)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the feature enablement was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>An array of warnings related to this feature enablement. Only present if warning conditions are met.</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>List all feature enablement settings for a service. Currently, only the `aiops` enablement is supported.&lt;br /&gt;&lt;br /&gt;For any account with the AIOps product addon, every service will have AIOps features enabled by default.&lt;br /&gt;&lt;br /&gt;**Warning conditions**:&lt;br /&gt;- If the account is not entitled to use AIOps features, a warning will be returned alongside the enablement data.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-feature_name"><code>feature_name</code></a>, <a href="#parameter-enablement"><code>enablement</code></a></td>
    <td></td>
    <td>Update the feature enablement setting for a specific product addon on a service. This setting controls enabling or disabling the set of features contained within the addon.&lt;br /&gt;Currently, only `aiops` is supported as a valid feature enablement.&lt;br /&gt;&lt;br /&gt;**Warning conditions**:&lt;br /&gt;- If the account is not entitled to use AIOps features, the setting will be updated, but a warning will be returned.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
<tr id="parameter-feature_name">
    <td><CopyableCode code="feature_name" /></td>
    <td><code>string</code></td>
    <td>The feature enablement identifier, typically the name of the product addon. Currently only `aiops` is supported.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
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

List all feature enablement settings for a service. Currently, only the `aiops` enablement is supported.&lt;br /&gt;&lt;br /&gt;For any account with the AIOps product addon, every service will have AIOps features enabled by default.&lt;br /&gt;&lt;br /&gt;**Warning conditions**:&lt;br /&gt;- If the account is not entitled to use AIOps features, a warning will be returned alongside the enablement data.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
enabled,
feature,
updated_at,
warnings
FROM pagerduty.services.enablements
WHERE id = '{{ id }}' -- required
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

Update the feature enablement setting for a specific product addon on a service. This setting controls enabling or disabling the set of features contained within the addon.&lt;br /&gt;Currently, only `aiops` is supported as a valid feature enablement.&lt;br /&gt;&lt;br /&gt;**Warning conditions**:&lt;br /&gt;- If the account is not entitled to use AIOps features, the setting will be updated, but a warning will be returned.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
UPDATE pagerduty.services.enablements
SET 
enablement = '{{ enablement }}'
WHERE 
id = '{{ id }}' --required
AND feature_name = '{{ feature_name }}' --required
AND enablement = '{{ enablement }}' --required
RETURNING
enablement;
```
</TabItem>
</Tabs>
