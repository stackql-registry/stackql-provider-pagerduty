--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.services.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_integration"
    values={[
        { label: 'get_service_integration', value: 'get_service_integration' }
    ]}
>
<TabItem value="get_service_integration">

The integration that was requested.

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
    <td>The name of this integration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time when this integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="email_filter_mode" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration. May override email_incident_creation</td>
</tr>
<tr>
    <td><CopyableCode code="email_filters" /></td>
    <td><code>array</code></td>
    <td>Specify for generic_email_inbound_integration.</td>
</tr>
<tr>
    <td><CopyableCode code="email_incident_creation" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration</td>
</tr>
<tr>
    <td><CopyableCode code="email_parsers" /></td>
    <td><code>array</code></td>
    <td>Specify for generic_email_inbound_integration.</td>
</tr>
<tr>
    <td><CopyableCode code="email_parsing_fallback" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="integration_email" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration. Must be set to an email address @your-subdomain.pagerduty.com</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_service_integration"><CopyableCode code="get_service_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an integration belonging to a service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_service_integration"><CopyableCode code="create_service_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__integration"><code>data__integration</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new integration belonging to a Service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#update_service_integration"><CopyableCode code="update_service_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an integration belonging to a Service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_service_integration"><CopyableCode code="_get_service_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an integration belonging to a service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The integration ID on the service.</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_integration"
    values={[
        { label: 'get_service_integration', value: 'get_service_integration' }
    ]}
>
<TabItem value="get_service_integration">

Get details about an integration belonging to a service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
name,
created_at,
email_filter_mode,
email_filters,
email_incident_creation,
email_parsers,
email_parsing_fallback,
html_url,
integration_email,
self,
service,
summary,
type,
vendor
FROM pagerduty.services.integrations
WHERE id = '{{ id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_integration"
    values={[
        { label: 'create_service_integration', value: 'create_service_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_integration">

Create a new integration belonging to a Service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
INSERT INTO pagerduty.services.integrations (
data__integration,
id,
Accept,
Content-Type
)
SELECT 
'{{ integration }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
integration
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: integrations
  props:
    - name: id
      value: string
      description: Required parameter for the integrations resource.
    - name: integration
      value: object
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
    defaultValue="update_service_integration"
    values={[
        { label: 'update_service_integration', value: 'update_service_integration' },
        { label: '_get_service_integration', value: '_get_service_integration' }
    ]}
>
<TabItem value="update_service_integration">

Update an integration belonging to a Service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.services.integrations.update_service_integration 
@id='{{ id }}' --required, 
@integration_id='{{ integration_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"integration": "{{ integration }}"
}'
;
```
</TabItem>
<TabItem value="_get_service_integration">

Get details about an integration belonging to a service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.services.integrations._get_service_integration 
@id='{{ id }}' --required, 
@integration_id='{{ integration_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
</Tabs>
