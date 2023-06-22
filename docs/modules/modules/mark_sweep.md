---
id: "mark_sweep"
title: "Module: mark_sweep"
sidebar_label: "mark_sweep"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### addRoots

▸ **addRoots**(`arr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:163](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L163)

___

### allHeap

▸ **allHeap**(`newHeap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newHeap` | `number`[][] |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:76](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L76)

___

### endGC

▸ **endGC**(`heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:255](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L255)

___

### generateMemory

▸ **generateMemory**(): `void`

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:23](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L23)

___

### init

▸ **init**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get_column_size` | () => `number` |
| `get_command` | () => [`draw_line`](painter.md#draw_line)[] |
| `get_flips` | () => `number`[] |
| `get_marked` | () => `number` |
| `get_memory_heap` | () => [`draw_line`](painter.md#draw_line) |
| `get_memory_matrix` | () => [`draw_line`](painter.md#draw_line) |
| `get_memory_size` | () => `number` |
| `get_roots` | () => `number`[] |
| `get_row_size` | () => `number` |
| `get_slots` | () => `number`[] |
| `get_tags` | () => [`draw_line`](painter.md#draw_line)[] |
| `get_types` | () => `String`[] |
| `get_unmarked` | () => `number` |
| `toReplString` | () => `string` |

#### Defined in

[mark_sweep/index.ts:333](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L333)

___

### initialize\_memory

▸ **initialize_memory**(`memorySize`, `nodeSize`, `marked`, `unmarked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memorySize` | `number` |
| `nodeSize` | `any` |
| `marked` | `any` |
| `unmarked` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:55](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L55)

___

### initialize\_tag

▸ **initialize_tag**(`allTag`, `types`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allTag` | `number`[] |
| `types` | `string`[] |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:71](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L71)

___

### newAssign

▸ **newAssign**(`res`, `left`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `any` |
| `left` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:227](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L227)

___

### newCommand

▸ **newCommand**(`type`, `left`, `right`, `sizeLeft`, `sizeRight`, `heap`, `description`, `firstDesc`, `lastDesc`, `queue?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `any` | `undefined` |
| `left` | `any` | `undefined` |
| `right` | `any` | `undefined` |
| `sizeLeft` | `any` | `undefined` |
| `sizeRight` | `any` | `undefined` |
| `heap` | `any` | `undefined` |
| `description` | `any` | `undefined` |
| `firstDesc` | `any` | `undefined` |
| `lastDesc` | `any` | `undefined` |
| `queue` | `any`[] | `[]` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:84](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L84)

___

### newGC

▸ **newGC**(`heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:249](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L249)

___

### newMark

▸ **newMark**(`left`, `heap`, `queue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `heap` | `any` |
| `queue` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:146](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L146)

___

### newNew

▸ **newNew**(`left`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:233](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L233)

___

### newPop

▸ **newPop**(`res`, `left`, `right`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `any` |
| `left` | `any` |
| `right` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:211](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L211)

___

### newPush

▸ **newPush**(`left`, `right`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:196](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L196)

___

### newSweep

▸ **newSweep**(`left`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:130](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L130)

___

### newUpdateSweep

▸ **newUpdateSweep**(`right`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:181](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L181)

___

### showRoot

▸ **showRoot**(`heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:169](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L169)

___

### showRoots

▸ **showRoots**(`heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:174](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L174)

___

### updateRoots

▸ **updateRoots**(`array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:49](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L49)

___

### updateSlotSegment

▸ **updateSlotSegment**(`tag`, `size`, `first`, `last`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `number` |
| `size` | `number` |
| `first` | `number` |
| `last` | `number` |

#### Returns

`void`

#### Defined in

[mark_sweep/index.ts:261](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/mark_sweep/index.ts#L261)
