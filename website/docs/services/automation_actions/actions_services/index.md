--- 
title: actions_services
hide_title: false
hide_table_of_contents: false
keywords:
  - actions_services
  - automation_actions
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

Creates, updates, deletes, gets or lists an <code>actions_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>actions_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.actions_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_actions_action_service_association"
    values={[
        { label: 'get_automation_actions_action_service_association', value: 'get_automation_actions_action_service_association' },
        { label: 'get_automation_actions_action_service_associations', value: 'get_automation_actions_action_service_associations' }
    ]}
>
<TabItem value="get_automation_actions_action_service_association">

Service reference

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
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_automation_actions_action_service_associations">

An array of service references

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
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
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
    <td><a href="#get_automation_actions_action_service_association"><CopyableCode code="get_automation_actions_action_service_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets the details of a Automation Action / service relation</td>
</tr>
<tr>
    <td><a href="#get_automation_actions_action_service_associations"><CopyableCode code="get_automation_actions_action_service_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets all service references associated with an Automation Action</td>
</tr>
<tr>
    <td><a href="#create_automation_action_service_assocation"><CopyableCode code="create_automation_action_service_assocation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__service"><code>data__service</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Associate an Automation Action with a service<br /></td>
</tr>
<tr>
    <td><a href="#delete_automation_action_service_association"><CopyableCode code="delete_automation_action_service_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Disassociate an Automation Action from a service<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_action_service_associations"><CopyableCode code="_get_automation_actions_action_service_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets all service references associated with an Automation Action</td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_action_service_association"><CopyableCode code="_get_automation_actions_action_service_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Gets the details of a Automation Action / service relation</td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The service ID</td>
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
    defaultValue="get_automation_actions_action_service_association"
    values={[
        { label: 'get_automation_actions_action_service_association', value: 'get_automation_actions_action_service_association' },
        { label: 'get_automation_actions_action_service_associations', value: 'get_automation_actions_action_service_associations' }
    ]}
>
<TabItem value="get_automation_actions_action_service_association">

Gets the details of a Automation Action / service relation

```sql
SELECT
id,
html_url,
self,
summary,
type
FROM pagerduty.automation_actions.actions_services
WHERE id = '{{ id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_automation_actions_action_service_associations">

Gets all service references associated with an Automation Action

```sql
SELECT
id,
html_url,
self,
summary,
type
FROM pagerduty.automation_actions.actions_services
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_action_service_assocation"
    values={[
        { label: 'create_automation_action_service_assocation', value: 'create_automation_action_service_assocation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_action_service_assocation">

Associate an Automation Action with a service<br />

```sql
INSERT INTO pagerduty.automation_actions.actions_services (
data__service,
id,
Accept,
Content-Type
)
SELECT 
'{{ service }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: actions_services
  props:
    - name: id
      value: string
      description: Required parameter for the actions_services resource.
    - name: service
      value: object
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
    defaultValue="delete_automation_action_service_association"
    values={[
        { label: 'delete_automation_action_service_association', value: 'delete_automation_action_service_association' }
    ]}
>
<TabItem value="delete_automation_action_service_association">

Disassociate an Automation Action from a service<br />

```sql
DELETE FROM pagerduty.automation_actions.actions_services
WHERE id = '{{ id }}' --required
AND service_id = '{{ service_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_automation_actions_action_service_associations"
    values={[
        { label: '_get_automation_actions_action_service_associations', value: '_get_automation_actions_action_service_associations' },
        { label: '_get_automation_actions_action_service_association', value: '_get_automation_actions_action_service_association' }
    ]}
>
<TabItem value="_get_automation_actions_action_service_associations">

Gets all service references associated with an Automation Action

```sql
EXEC pagerduty.automation_actions.actions_services._get_automation_actions_action_service_associations 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_automation_actions_action_service_association">

Gets the details of a Automation Action / service relation

```sql
EXEC pagerduty.automation_actions.actions_services._get_automation_actions_action_service_association 
@id='{{ id }}' --required, 
@service_id='{{ service_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
