[@ygqygq2/vscode-log - v0.0.3](../README.md) / [Exports](../modules.md) / CustomError

# Class: CustomError

Custom Error

## Hierarchy

- `Error`

  ↳ **`CustomError`**

## Table of contents

### Constructors

- [constructor](CustomError.md#constructor)

### Properties

- [cause](CustomError.md#cause)
- [code](CustomError.md#code)
- [message](CustomError.md#message)
- [name](CustomError.md#name)
- [originalError](CustomError.md#originalerror)
- [stack](CustomError.md#stack)
- [errorCodeMessages](CustomError.md#errorcodemessages)
- [prepareStackTrace](CustomError.md#preparestacktrace)
- [stackTraceLimit](CustomError.md#stacktracelimit)

### Methods

- [captureStackTrace](CustomError.md#capturestacktrace)
- [configure](CustomError.md#configure)

## Constructors

### constructor

• **new CustomError**(`code`, `...args`): [`CustomError`](CustomError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ErrorCode`](../enums/internal_.ErrorCode.md) |
| `...args` | `unknown`[] |

#### Returns

[`CustomError`](CustomError.md)

#### Overrides

Error.constructor

#### Defined in

[packages/vscode-log/src/CustomError.ts:12](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/CustomError.ts#L12)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: [`ErrorCode`](../enums/internal_.ErrorCode.md)

#### Defined in

[packages/vscode-log/src/CustomError.ts:9](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/CustomError.ts#L9)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### originalError

• **originalError**: `unknown`

#### Defined in

[packages/vscode-log/src/CustomError.ts:10](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/CustomError.ts#L10)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078

___

### errorCodeMessages

▪ `Static` **errorCodeMessages**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `900` | `undefined` \| `string` |
| `901` | `undefined` \| `string` |
| `902` | `undefined` \| `string` |

#### Defined in

[packages/vscode-log/src/CustomError.ts:8](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/CustomError.ts#L8)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: [`CallSite`](../interfaces/internal_.CallSite.md)[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | [`CallSite`](../interfaces/internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:21

___

### configure

▸ **configure**(`errorCodeMessages`): `void`

configure error code messages

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCodeMessages` | `Object` | error code messages object |
| `errorCodeMessages.900` | `undefined` \| `string` | - |
| `errorCodeMessages.901` | `undefined` \| `string` | - |
| `errorCodeMessages.902` | `undefined` \| `string` | - |

#### Returns

`void`

#### Defined in

[packages/vscode-log/src/CustomError.ts:33](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/CustomError.ts#L33)
