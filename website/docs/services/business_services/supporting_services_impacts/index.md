--- 
title: supporting_services_impacts
hide_title: false
hide_table_of_contents: false
keywords:
  - supporting_services_impacts
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

Creates, updates, deletes, gets or lists a <code>supporting_services_impacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>supporting_services_impacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.business_services.supporting_services_impacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_business_service_supporting_service_impacts"
    values={[
        { label: 'get_business_service_supporting_service_impacts', value: 'get_business_service_supporting_service_impacts' }
    ]}
>
<TabItem value="get_business_service_supporting_service_impacts">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="additional_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current impact status of the object</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The kind of object that has been impacted</td>
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
    <td><a href="#get_business_service_supporting_service_impacts"><CopyableCode code="get_business_service_supporting_service_impacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-additional_fields[]"><code>additional_fields[]</code></a>, <a href="#parameter-ids[]"><code>ids[]</code></a></td>
    <td>Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.<br />This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.<br /><br />The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.<br /><br />To get impact information about a specific set of Business Services, use the `ids[]` parameter on the `/business_services/impacts` endpoint.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
</tr>
<tr>
    <td><a href="#_get_business_service_supporting_service_impacts"><CopyableCode code="_get_business_service_supporting_service_impacts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-additional_fields[]"><code>additional_fields[]</code></a>, <a href="#parameter-ids[]"><code>ids[]</code></a></td>
    <td>Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.<br />This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.<br /><br />The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.<br /><br />To get impact information about a specific set of Business Services, use the `ids[]` parameter on the `/business_services/impacts` endpoint.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.</td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header with the value `business-impact-early-access`. Do not use this endpoint in production, as it may change!</td>
</tr>
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
<tr id="parameter-additional_fields[]">
    <td><CopyableCode code="additional_fields[]" /></td>
    <td><code>string</code></td>
    <td>Provides access to additional fields such as highest priority per business service and total impacted count</td>
</tr>
<tr id="parameter-ids[]">
    <td><CopyableCode code="ids[]" /></td>
    <td><code>string</code></td>
    <td>The IDs of the resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_business_service_supporting_service_impacts"
    values={[
        { label: 'get_business_service_supporting_service_impacts', value: 'get_business_service_supporting_service_impacts' }
    ]}
>
<TabItem value="get_business_service_supporting_service_impacts">

Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.<br />This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.<br /><br />The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.<br /><br />To get impact information about a specific set of Business Services, use the `ids[]` parameter on the `/business_services/impacts` endpoint.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
SELECT
id,
name,
additional_fields,
status,
type
FROM pagerduty.business_services.supporting_services_impacts
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
AND additional_fields[] = '{{ additional_fields[] }}'
AND ids[] = '{{ ids[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_business_service_supporting_service_impacts"
    values={[
        { label: '_get_business_service_supporting_service_impacts', value: '_get_business_service_supporting_service_impacts' }
    ]}
>
<TabItem value="_get_business_service_supporting_service_impacts">

Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.<br />This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.<br /><br />The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.<br /><br />To get impact information about a specific set of Business Services, use the `ids[]` parameter on the `/business_services/impacts` endpoint.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.

```sql
EXEC pagerduty.business_services.supporting_services_impacts._get_business_service_supporting_service_impacts 
@id='{{ id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}', 
@additional_fields[]='{{ additional_fields[] }}', 
@ids[]='{{ ids[] }}'
;
```
</TabItem>
</Tabs>
