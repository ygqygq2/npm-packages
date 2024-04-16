[@ygqygq2/vscode-log - v0.0.3](README.md) / Exports

# @ygqygq2/vscode-log - v0.0.3

## Table of contents

### Modules

- [\<internal\>](modules/internal_.md)

### Classes

- [CustomError](classes/CustomError.md)
- [Logger](classes/Logger.md)

### Type Aliases

- [ErrorCodeMessage](modules.md#errorcodemessage)

### Functions

- [createErrorCodeMessages](modules.md#createerrorcodemessages)
- [createOutput](modules.md#createoutput)

## Type Aliases

### ErrorCodeMessage

Ƭ **ErrorCodeMessage**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[packages/vscode-log/src/types.ts:1](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/types.ts#L1)

## Functions

### createErrorCodeMessages

▸ **createErrorCodeMessages**(`userEnum`, `customMessages`, `extensionPrefix?`): `Object`

create error code messages

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userEnum` | `Object` | additional error code enum |
| `customMessages` | [`ErrorCodeMessage`](modules.md#errorcodemessage) | custom error messages |
| `extensionPrefix?` | `string` | extension prefix |

#### Returns

`Object`

error code messages object

| Name | Type |
| :------ | :------ |
| `errorCodeEnum` | typeof [`ErrorCode`](enums/internal_.ErrorCode.md) & \{ `[key: string]`: `any`;  } |
| `errorCodeMessages` | [`ErrorCodeMessage`](modules.md#errorcodemessage) |

#### Defined in

[packages/vscode-log/src/createErrorCodeMessages.ts:11](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/createErrorCodeMessages.ts#L11)

___

### createOutput

▸ **createOutput**(`window`, `title`): [`Output`](modules/internal_.md#output)

#### Parameters

| Name | Type |
| :------ | :------ |
| `window` | `Object` |
| `window.createOutputChannel` | `Function` |
| `title` | `string` |

#### Returns

[`Output`](modules/internal_.md#output)

#### Defined in

[packages/vscode-log/src/createOutput.ts:4](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/createOutput.ts#L4)
