[**@ygqygq2/vscode-log v0.0.3**](../README.md)

***

[@ygqygq2/vscode-log](../globals.md) / createErrorCodeMessages

# Function: createErrorCodeMessages()

> **createErrorCodeMessages**(`userEnum`, `customMessages`, `extensionPrefix?`): `object`

Defined in: [packages/vscode-log/src/createErrorCodeMessages.ts:11](https://github.com/ygqygq2/npm-packages/blob/c1788575af46f29aa40c8afbf25632104d9eca97/packages/vscode-log/src/createErrorCodeMessages.ts#L11)

create error code messages

## Parameters

### userEnum

additional error code enum

### customMessages

[`ErrorCodeMessage`](../type-aliases/ErrorCodeMessage.md)

custom error messages

### extensionPrefix?

`string`

extension prefix

## Returns

`object`

error code messages object

### errorCodeEnum

> **errorCodeEnum**: *typeof* [`ErrorCode`](../-internal-/enumerations/ErrorCode.md) & `object`

### errorCodeMessages

> **errorCodeMessages**: [`ErrorCodeMessage`](../type-aliases/ErrorCodeMessage.md)
