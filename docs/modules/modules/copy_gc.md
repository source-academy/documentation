---
id: "copy_gc"
title: "Module: copy_gc"
sidebar_label: "copy_gc"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### allHeap

▸ **allHeap**(`newHeap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newHeap` | `number`[][] |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:28](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L28)

___

### doneShowRoot

▸ **doneShowRoot**(`heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:264](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L264)

___

### endFlip

▸ **endFlip**(`left`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:173](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L173)

___

### generateMemory

▸ **generateMemory**(): `void`

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:36](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L36)

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
| `get_from_memory_matrix` | () => [`draw_line`](painter.md#draw_line) |
| `get_from_space` | () => `number` |
| `get_memory_heap` | () => [`draw_line`](painter.md#draw_line) |
| `get_memory_size` | () => `number` |
| `get_roots` | () => `number`[] |
| `get_row_size` | () => `number` |
| `get_slots` | () => `number`[] |
| `get_tags` | () => [`draw_line`](painter.md#draw_line)[] |
| `get_to_memory_matrix` | () => [`draw_line`](painter.md#draw_line) |
| `get_to_space` | () => `number` |
| `get_types` | () => `String`[] |
| `toReplString` | () => `string` |

#### Defined in

[copy_gc/index.ts:465](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L465)

___

### initialize\_memory

▸ **initialize_memory**(`memorySize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memorySize` | `number` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:95](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L95)

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

[copy_gc/index.ts:23](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L23)

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

[copy_gc/index.ts:304](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L304)

___

### newCommand

▸ **newCommand**(`type`, `toSpace`, `fromSpace`, `left`, `right`, `sizeLeft`, `sizeRight`, `heap`, `description`, `firstDesc`, `lastDesc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `toSpace` | `any` |
| `fromSpace` | `any` |
| `left` | `any` |
| `right` | `any` |
| `sizeLeft` | `any` |
| `sizeRight` | `any` |
| `heap` | `any` |
| `description` | `any` |
| `firstDesc` | `any` |
| `lastDesc` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:103](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L103)

___

### newCopy

▸ **newCopy**(`left`, `right`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:151](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L151)

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

[copy_gc/index.ts:325](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L325)

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

[copy_gc/index.ts:243](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L243)

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

[copy_gc/index.ts:223](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L223)

___

### resetFromSpace

▸ **resetFromSpace**(`fromSpace`, `heap`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromSpace` | `any` |
| `heap` | `any` |

#### Returns

`number`[]

#### Defined in

[copy_gc/index.ts:74](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L74)

___

### resetRoots

▸ **resetRoots**(): `void`

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:201](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L201)

___

### scanFlip

▸ **scanFlip**(`left`, `right`, `scan`, `free`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `scan` | `any` |
| `free` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:346](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L346)

___

### showRoots

▸ **showRoots**(`left`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:283](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L283)

___

### startFlip

▸ **startFlip**(`toSpace`, `fromSpace`, `heap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toSpace` | `any` |
| `fromSpace` | `any` |
| `heap` | `any` |

#### Returns

`void`

#### Defined in

[copy_gc/index.ts:205](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L205)

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

[copy_gc/index.ts:195](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L195)

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

[copy_gc/index.ts:389](https://github.com/source-academy/modules/blob/813a8eed/src/bundles/copy_gc/index.ts#L389)
