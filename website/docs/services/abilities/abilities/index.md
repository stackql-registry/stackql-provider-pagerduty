--- 
title: abilities
hide_title: false
hide_table_of_contents: false
keywords:
  - abilities
  - abilities
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

Creates, updates, deletes, gets or lists an <code>abilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="abilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.abilities.abilities" /></td></tr>
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

An array of ability names.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td></td>
    <td>List all of your account's abilities, by name.&lt;br /&gt;&lt;br /&gt;"Abilities" describes your account's capabilities by feature name. For example `"teams"`.&lt;br /&gt;&lt;br /&gt;An ability may be available to your account based on things like your pricing plan or account state.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `abilities.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#check"><CopyableCode code="check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Test whether your account has a given ability.&lt;br /&gt;&lt;br /&gt;"Abilities" describes your account's capabilities by feature name. For example `"teams"`.&lt;br /&gt;&lt;br /&gt;An ability may be available to your account based on things like your pricing plan or account state.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `abilities.read`&lt;br /&gt;</td>
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

List all of your account's abilities, by name.&lt;br /&gt;&lt;br /&gt;"Abilities" describes your account's capabilities by feature name. For example `"teams"`.&lt;br /&gt;&lt;br /&gt;An ability may be available to your account based on things like your pricing plan or account state.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `abilities.read`&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.abilities.abilities
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check"
    values={[
        { label: 'check', value: 'check' }
    ]}
>
<TabItem value="check">

Test whether your account has a given ability.&lt;br /&gt;&lt;br /&gt;"Abilities" describes your account's capabilities by feature name. For example `"teams"`.&lt;br /&gt;&lt;br /&gt;An ability may be available to your account based on things like your pricing plan or account state.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `abilities.read`&lt;br /&gt;

```sql
EXEC pagerduty.abilities.abilities.check 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
