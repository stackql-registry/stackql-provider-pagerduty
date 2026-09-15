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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.services.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td>Specify for generic_email_inbound_integration. May override email_incident_creation (all-email, or-rules-email, and-rules-email)</td>
</tr>
<tr>
    <td><CopyableCode code="email_filters" /></td>
    <td><code>array</code></td>
    <td>Specify for generic_email_inbound_integration.</td>
</tr>
<tr>
    <td><CopyableCode code="email_incident_creation" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration (on_new_email, on_new_email_subject, only_if_no_open_incidents, use_rules)</td>
</tr>
<tr>
    <td><CopyableCode code="email_parsers" /></td>
    <td><code>array</code></td>
    <td>Specify for generic_email_inbound_integration.</td>
</tr>
<tr>
    <td><CopyableCode code="email_parsing_fallback" /></td>
    <td><code>string</code></td>
    <td>Specify for generic_email_inbound_integration. (open_new_incident, discard)</td>
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
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an integration belonging to a service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td></td>
    <td>Create a new integration belonging to a Service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td></td>
    <td>Update an integration belonging to a Service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get details about an integration belonging to a service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

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
AND include[] = '{{ include[] }}'
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

Create a new integration belonging to a Service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.services.integrations (
integration,
id
)
SELECT 
'{{ integration }}' /* required */,
'{{ id }}'
RETURNING
integration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the integrations resource.
    - name: integration
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        service:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        created_at: "{{ created_at }}"
        vendor:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        integration_email: "{{ integration_email }}"
        email_incident_creation: "{{ email_incident_creation }}"
        email_filter_mode: "{{ email_filter_mode }}"
        email_parsers:
          - action: "{{ action }}"
            match_predicate:
              type: "{{ type }}"
              matcher: "{{ matcher }}"
              part: "{{ part }}"
              children:
                - type: "{{ type }}"
                  matcher: "{{ matcher }}"
                  part: "{{ part }}"
                  children: "{{ children }}"
            value_extractors: "{{ value_extractors }}"
        email_parsing_fallback: "{{ email_parsing_fallback }}"
        email_filters:
          - subject_mode: "{{ subject_mode }}"
            subject_regex: "{{ subject_regex }}"
            body_mode: "{{ body_mode }}"
            body_regex: "{{ body_regex }}"
            from_email_mode: "{{ from_email_mode }}"
            from_email_regex: "{{ from_email_regex }}"
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

Update an integration belonging to a Service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
UPDATE pagerduty.services.integrations
SET 
integration = '{{ integration }}'
WHERE 
id = '{{ id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND integration = '{{ integration }}' --required
RETURNING
integration;
```
</TabItem>
</Tabs>
