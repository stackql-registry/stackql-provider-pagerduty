--- 
title: business_services
hide_title: false
hide_table_of_contents: false
keywords:
  - business_services
  - business_services
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

Creates, updates, deletes, gets or lists a <code>business_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>business_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.business_services.business_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_business_service"
    values={[
        { label: 'get_business_service', value: 'get_business_service' },
        { label: 'list_business_services', value: 'list_business_services' }
    ]}
>
<TabItem value="get_business_service">

The service business requested.

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
    <td>The name of the business service.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the business service.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="point_of_contact" /></td>
    <td><code>string</code></td>
    <td>The point of contact assigned to this service.</td>
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
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns the business service. (title: Team)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_business_services">

A paginated array of services.

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
    <td><a href="#get_business_service"><CopyableCode code="get_business_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_business_services"><CopyableCode code="list_business_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List existing Business Services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_business_service"><CopyableCode code="create_business_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />There is a limit of 5,000 business services per account. If the limit is reached, the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_business_service"><CopyableCode code="delete_business_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing Business Service.<br /><br />Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_business_services"><CopyableCode code="_list_business_services" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List existing Business Services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_business_service"><CopyableCode code="_get_business_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_business_service"><CopyableCode code="update_business_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing Business Service. NOTE that this endpoint also accepts the PATCH verb.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
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
    defaultValue="get_business_service"
    values={[
        { label: 'get_business_service', value: 'get_business_service' },
        { label: 'list_business_services', value: 'list_business_services' }
    ]}
>
<TabItem value="get_business_service">

Get details about an existing Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
name,
description,
html_url,
point_of_contact,
self,
summary,
team,
type
FROM pagerduty.business_services.business_services
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_business_services">

List existing Business Services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
*
FROM pagerduty.business_services.business_services
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_business_service"
    values={[
        { label: 'create_business_service', value: 'create_business_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_business_service">

Create a new Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />There is a limit of 5,000 business services per account. If the limit is reached, the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
INSERT INTO pagerduty.business_services.business_services (
data__business_service,
Accept,
Content-Type
)
SELECT 
'{{ business_service }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
business_service
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: business_services
  props:
    - name: business_service
      value: object
      description: |
        The Business Service to be created
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_business_service"
    values={[
        { label: 'delete_business_service', value: 'delete_business_service' }
    ]}
>
<TabItem value="delete_business_service">

Delete an existing Business Service.<br /><br />Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
DELETE FROM pagerduty.business_services.business_services
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_business_services"
    values={[
        { label: '_list_business_services', value: '_list_business_services' },
        { label: '_get_business_service', value: '_get_business_service' },
        { label: 'update_business_service', value: 'update_business_service' }
    ]}
>
<TabItem value="_list_business_services">

List existing Business Services.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.business_services.business_services._list_business_services 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
<TabItem value="_get_business_service">

Get details about an existing Business Service.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.business_services.business_services._get_business_service 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_business_service">

Update an existing Business Service. NOTE that this endpoint also accepts the PATCH verb.<br /><br />Business services model capabilities that span multiple technical services and that may be owned by several different teams.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#business-services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.business_services.business_services.update_business_service 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"business_service": "{{ business_service }}"
}'
;
```
</TabItem>
</Tabs>
