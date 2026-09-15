--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.workflow_integrations.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_integration', value: 'list_by_integration' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The Workflow Integration Connection requested.

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
    <td>The name given to the connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The integration ID that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>array</code></td>
    <td>The app IDs for this connection</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration for this connection (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the connection was created</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user who created this connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id_label" /></td>
    <td><code>string</code></td>
    <td>The label of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this connection is the default connection for this integration</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="secrets" /></td>
    <td><code>string</code></td>
    <td>The secrets for this connection. This will always be `null` on a response so that secrets are not leaked. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the service that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams whose managers are allowed to use or edit this connection</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_integration">

A paginated list of Workflow Integration Connections.

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
    <td>The name given to the connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The integration ID that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>array</code></td>
    <td>The app IDs for this connection</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration for this connection (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the connection was created</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user who created this connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id_label" /></td>
    <td><code>string</code></td>
    <td>The label of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this connection is the default connection for this integration</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="secrets" /></td>
    <td><code>string</code></td>
    <td>The secrets for this connection. This will always be `null` on a response so that secrets are not leaked. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the service that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams whose managers are allowed to use or edit this connection</td>
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

A paginated list of Workflow Integration Connections.

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
    <td>The name given to the connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The integration ID that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>array</code></td>
    <td>The app IDs for this connection</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration for this connection (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the connection was created</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user who created this connection</td>
</tr>
<tr>
    <td><CopyableCode code="external_id_label" /></td>
    <td><code>string</code></td>
    <td>The label of the external system that this connection is used to connect to</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this connection is the default connection for this integration</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="secrets" /></td>
    <td><code>string</code></td>
    <td>The secrets for this connection. This will always be `null` on a response so that secrets are not leaked. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the service that this connection is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams whose managers are allowed to use or edit this connection</td>
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
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get details about a Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list_by_integration"><CopyableCode code="list_by_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>List all Workflow Integration Connections for a specific Workflow Integration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>List all Workflow Integration Connections.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-secrets"><code>secrets</code></a></td>
    <td></td>
    <td>Create a new Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-secrets"><code>secrets</code></a></td>
    <td></td>
    <td>Update an existing Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;</td>
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
    <td>The ID of the Workflow Integration</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter Integrations by partial name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_integration', value: 'list_by_integration' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details about a Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;

```sql
SELECT
id,
name,
external_id,
integration_id,
apps,
configuration,
created_at,
created_by,
external_id_label,
health,
html_url,
is_default,
scopes,
secrets,
self,
service_url,
summary,
teams,
type
FROM pagerduty.workflow_integrations.connections
WHERE integration_id = '{{ integration_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_by_integration">

List all Workflow Integration Connections for a specific Workflow Integration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;

```sql
SELECT
id,
name,
external_id,
integration_id,
apps,
configuration,
created_at,
created_by,
external_id_label,
health,
html_url,
is_default,
scopes,
secrets,
self,
service_url,
summary,
teams,
type
FROM pagerduty.workflow_integrations.connections
WHERE integration_id = '{{ integration_id }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND name = '{{ name }}'
;
```
</TabItem>
<TabItem value="list">

List all Workflow Integration Connections.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.read`&lt;br /&gt;

```sql
SELECT
id,
name,
external_id,
integration_id,
apps,
configuration,
created_at,
created_by,
external_id_label,
health,
html_url,
is_default,
scopes,
secrets,
self,
service_url,
summary,
teams,
type
FROM pagerduty.workflow_integrations.connections
WHERE limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a new Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.workflow_integrations.connections (
name,
service_url,
external_id,
external_id_label,
scopes,
is_default,
configuration,
secrets,
teams,
apps,
integration_id
)
SELECT 
'{{ name }}' /* required */,
'{{ service_url }}',
'{{ external_id }}',
'{{ external_id_label }}',
'{{ scopes }}',
{{ is_default }},
'{{ configuration }}',
'{{ secrets }}' /* required */,
'{{ teams }}',
'{{ apps }}',
'{{ integration_id }}'
RETURNING
id,
name,
external_id,
integration_id,
apps,
configuration,
created_at,
created_by,
external_id_label,
health,
html_url,
is_default,
scopes,
secrets,
self,
service_url,
summary,
teams,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: integration_id
      value: "{{ integration_id }}"
      description: Required parameter for the connections resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name given to the connection
    - name: service_url
      value: "{{ service_url }}"
      description: |
        The URL of the service that this connection is associated with
    - name: external_id
      value: "{{ external_id }}"
      description: |
        The ID of the external system that this connection is used to connect to
    - name: external_id_label
      value: "{{ external_id_label }}"
      description: |
        The label of the external system that this connection is used to connect to
    - name: scopes
      value:
        - "{{ scopes }}"
    - name: is_default
      value: {{ is_default }}
      description: |
        Whether or not this connection is the default connection for this integration
    - name: configuration
      value: "{{ configuration }}"
      description: |
        The configuration for this connection.
        The configuration schema is defined in the Workflow Integration's \`configuration_schema\` property.
        It is dynamic based on the specific Workflow Integration.
        (opaque JSON object)
    - name: secrets
      value: "{{ secrets }}"
      description: |
        The secrets for this connection.
        The secrets schema is defined in the Workflow Integration's \`secrets_schema\` property.
        It is dynamic based on the specific Workflow Integration.
        This field is write-only and will always be \`null\` on a response so that secrets are not leaked.
        (opaque JSON object)
    - name: teams
      description: |
        The teams whose managers are allowed to use or edit this connection
      value:
        - team_id: "{{ team_id }}"
          type: "{{ type }}"
    - name: apps
      description: |
        The app IDs for this connection
      value:
        - app_id: "{{ app_id }}"
          type: "{{ type }}"
`}</CodeBlock>

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

Update an existing Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;

```sql
UPDATE pagerduty.workflow_integrations.connections
SET 
name = '{{ name }}',
service_url = '{{ service_url }}',
external_id = '{{ external_id }}',
external_id_label = '{{ external_id_label }}',
scopes = '{{ scopes }}',
is_default = {{ is_default }},
configuration = '{{ configuration }}',
secrets = '{{ secrets }}',
teams = '{{ teams }}',
apps = '{{ apps }}'
WHERE 
integration_id = '{{ integration_id }}' --required
AND id = '{{ id }}' --required
AND name = '{{ name }}' --required
AND secrets = '{{ secrets }}' --required
RETURNING
id,
name,
external_id,
integration_id,
apps,
configuration,
created_at,
created_by,
external_id_label,
health,
html_url,
is_default,
scopes,
secrets,
self,
service_url,
summary,
teams,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a Workflow Integration Connection.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `workflow_integrations:connections.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.workflow_integrations.connections
WHERE integration_id = '{{ integration_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
