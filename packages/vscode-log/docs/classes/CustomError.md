**@ygqygq2/vscode-log v0.0.3** • [Readme](../README.md) \| [API](../globals.md)

***

[@ygqygq2/vscode-log v0.0.3](../README.md) / CustomError

# Class: CustomError

Custom Error

## Extends

- `Error`

## Constructors

### new CustomError(code, args)

> **new CustomError**(`code`, ...`args`): [`CustomError`](CustomError.md)

#### Parameters

• **code**: [`ErrorCode`](../-internal-/enumerations/ErrorCode.md)

• ...**args**: `unknown`[]

#### Returns

[`CustomError`](CustomError.md)

#### Overrides

`Error.constructor`

#### Source

packages/vscode-log/src/CustomError.ts:12

## Properties

### cause?

> **`optional`** **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### code

> **code**: [`ErrorCode`](../-internal-/enumerations/ErrorCode.md)

#### Source

packages/vscode-log/src/CustomError.ts:9

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

***

### originalError

> **originalError**: `unknown`

#### Source

packages/vscode-log/src/CustomError.ts:10

***

### stack?

> **`optional`** **stack**: `string`

#### Inherited from

`Error.stack`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### errorCodeMessages

> **`static`** **errorCodeMessages**: `Object` = `{}`

#### 900

> **900**: `undefined` \| `string`

#### 901

> **901**: `undefined` \| `string`

#### 902

> **902**: `undefined` \| `string`

#### Source

packages/vscode-log/src/CustomError.ts:8

***

### prepareStackTrace()?

> **`static`** **`optional`** **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: [`CallSite`](../-internal-/interfaces/CallSite.md)[]

#### Returns

`any`

#### Inherited from

`Error.prepareStackTrace`

#### Source

node\_modules/.pnpm/@types+node@20.11.24/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> **`static`** **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Source

node\_modules/.pnpm/@types+node@20.11.24/node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Source

node\_modules/.pnpm/@types+node@20.11.24/node\_modules/@types/node/globals.d.ts:21

***

### configure()

> **`static`** **configure**(`errorCodeMessages`): `void`

configure error code messages

#### Parameters

• **errorCodeMessages**

error code messages object

• **errorCodeMessages\.900**: `undefined` \| `string`

• **errorCodeMessages\.901**: `undefined` \| `string`

• **errorCodeMessages\.902**: `undefined` \| `string`

#### Returns

`void`

#### Source

packages/vscode-log/src/CustomError.ts:33
