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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>abilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>abilities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.abilities.abilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_abilities"
    values={[
        { label: 'list_abilities', value: 'list_abilities' }
    ]}
>
<TabItem value="list_abilities">

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
<tr>
    <td><CopyableCode code="ability_name" /></td>
    <td><code>string</code></td>
    <td>A single ability, as a name.</td>
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
    <td><a href="#list_abilities"><CopyableCode code="list_abilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List all of your account's abilities, by name.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_abilities"><CopyableCode code="_list_abilities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List all of your account's abilities, by name.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_ability"><CopyableCode code="get_ability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Test whether your account has a given ability.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_abilities"
    values={[
        { label: 'list_abilities', value: 'list_abilities' }
    ]}
>
<TabItem value="list_abilities">

List all of your account's abilities, by name.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br />

```sql
SELECT
ability_name
FROM pagerduty.abilities.abilities
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_abilities"
    values={[
        { label: '_list_abilities', value: '_list_abilities' },
        { label: 'get_ability', value: 'get_ability' }
    ]}
>
<TabItem value="_list_abilities">

List all of your account's abilities, by name.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br />

```sql
EXEC pagerduty.abilities.abilities._list_abilities 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_ability">

Test whether your account has a given ability.<br /><br />"Abilities" describes your account's capabilities by feature name. For example `"teams"`.<br /><br />An ability may be available to your account based on things like your pricing plan or account state.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#abilities)<br /><br />Scoped OAuth requires: `abilities.read`<br />

```sql
EXEC pagerduty.abilities.abilities.get_ability 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
