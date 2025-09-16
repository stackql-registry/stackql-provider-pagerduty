--- 
title: technical_services
hide_title: false
hide_table_of_contents: false
keywords:
  - technical_services
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>technical_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>technical_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.service_dependencies.technical_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_technical_service_service_dependencies"
    values={[
        { label: 'get_technical_service_service_dependencies', value: 'get_technical_service_service_dependencies' }
    ]}
>
<TabItem value="get_technical_service_service_dependencies">

An array of service relationships.

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
    <td><CopyableCode code="dependent_service" /></td>
    <td><code>object</code></td>
    <td>The reference to the service that is dependent on the technical service.</td>
</tr>
<tr>
    <td><CopyableCode code="supporting_service" /></td>
    <td><code>object</code></td>
    <td>The reference to the service that supports the technical service.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_technical_service_service_dependencies"><CopyableCode code="get_technical_service_service_dependencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get all immediate dependencies of any technical service.<br />Technical services are also known as `services`.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_service_dependency"><CopyableCode code="create_service_dependency" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create new dependencies between two services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />A service can have a maximum of 2,000 dependencies with a depth limit of 100. If the limit is reached, the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_service_dependency"><CopyableCode code="delete_service_dependency" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Disassociate dependencies between two services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_technical_service_service_dependencies"><CopyableCode code="_get_technical_service_service_dependencies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get all immediate dependencies of any technical service.<br />Technical services are also known as `services`.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
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
    defaultValue="get_technical_service_service_dependencies"
    values={[
        { label: 'get_technical_service_service_dependencies', value: 'get_technical_service_service_dependencies' }
    ]}
>
<TabItem value="get_technical_service_service_dependencies">

Get all immediate dependencies of any technical service.<br />Technical services are also known as `services`.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
dependent_service,
supporting_service,
type
FROM pagerduty.service_dependencies.technical_services
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_dependency"
    values={[
        { label: 'create_service_dependency', value: 'create_service_dependency' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_dependency">

Create new dependencies between two services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />A service can have a maximum of 2,000 dependencies with a depth limit of 100. If the limit is reached, the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
INSERT INTO pagerduty.service_dependencies.technical_services (
data__relationships,
Accept,
Content-Type
)
SELECT 
'{{ relationships }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
relationships
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: technical_services
  props:
    - name: relationships
      value: array
      description: |
        List of all service dependencies to be created.
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_service_dependency"
    values={[
        { label: 'delete_service_dependency', value: 'delete_service_dependency' },
        { label: '_get_technical_service_service_dependencies', value: '_get_technical_service_service_dependencies' }
    ]}
>
<TabItem value="delete_service_dependency">

Disassociate dependencies between two services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.service_dependencies.technical_services.delete_service_dependency 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"relationships": "{{ relationships }}"
}'
;
```
</TabItem>
<TabItem value="_get_technical_service_service_dependencies">

Get all immediate dependencies of any technical service.<br />Technical services are also known as `services`.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.service_dependencies.technical_services._get_technical_service_service_dependencies 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
