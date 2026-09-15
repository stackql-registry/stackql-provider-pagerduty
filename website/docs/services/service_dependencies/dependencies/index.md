--- 
title: dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - dependencies
  - service_dependencies
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

Creates, updates, deletes, gets or lists a <code>dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.service_dependencies.dependencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate"><CopyableCode code="associate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Create new dependencies between two services.&lt;br /&gt;&lt;br /&gt;Business services model capabilities that span multiple technical services and that may be owned by several different teams.&lt;br /&gt;&lt;br /&gt;A service can have a maximum of 2,000 dependencies with a depth limit of 100. If the limit is reached, the API will respond with an error.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disassociate"><CopyableCode code="disassociate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Disassociate dependencies between two services.&lt;br /&gt;&lt;br /&gt;Business services model capabilities that span multiple technical services and that may be owned by several different teams.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="associate"
    values={[
        { label: 'associate', value: 'associate' },
        { label: 'disassociate', value: 'disassociate' }
    ]}
>
<TabItem value="associate">

Create new dependencies between two services.&lt;br /&gt;&lt;br /&gt;Business services model capabilities that span multiple technical services and that may be owned by several different teams.&lt;br /&gt;&lt;br /&gt;A service can have a maximum of 2,000 dependencies with a depth limit of 100. If the limit is reached, the API will respond with an error.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
EXEC pagerduty.service_dependencies.dependencies.associate 
@@json=
'{
"relationships": "{{ relationships }}"
}'
;
```
</TabItem>
<TabItem value="disassociate">

Disassociate dependencies between two services.&lt;br /&gt;&lt;br /&gt;Business services model capabilities that span multiple technical services and that may be owned by several different teams.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
EXEC pagerduty.service_dependencies.dependencies.disassociate 
@@json=
'{
"relationships": "{{ relationships }}"
}'
;
```
</TabItem>
</Tabs>
