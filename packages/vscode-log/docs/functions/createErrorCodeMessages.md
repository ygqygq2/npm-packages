**@ygqygq2/vscode-log v0.0.3** • [Readme](../README.md) \| [API](../globals.md)

***

[@ygqygq2/vscode-log v0.0.3](../README.md) / createErrorCodeMessages

# Function: createErrorCodeMessages()

> **createErrorCodeMessages**(`userEnum`, `customMessages`, `extensionPrefix`?): `Object`

create error code messages

## Parameters

• **userEnum**

additional error code enum

• **customMessages**: [`ErrorCodeMessage`](../type-aliases/ErrorCodeMessage.md)

custom error messages

• **extensionPrefix?**: `string`

extension prefix

## Returns

`Object`

error code messages object

### errorCodeEnum

> **errorCodeEnum**: *typeof* [`ErrorCode`](../-internal-/enumerations/ErrorCode.md) & `Object`

### errorCodeMessages

> **errorCodeMessages**: [`ErrorCodeMessage`](../type-aliases/ErrorCodeMessage.md)

## Source

packages/vscode-log/src/createErrorCodeMessages.ts:11
