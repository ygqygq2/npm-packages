**@ygqygq2/vscode-log v0.0.3** • [Readme](../README.md) \| [API](../globals.md)

***

[@ygqygq2/vscode-log v0.0.3](../README.md) / Logger

# Class: Logger

单实例类

## Constructors

### new Logger()

> **`private`** **new Logger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Source

[packages/vscode-log/src/Logger.ts:12](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L12)

## Properties

### debug()

> **debug**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:41](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L41)

***

### error()

> **error**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:44](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L44)

***

### info()

> **info**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:42](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L42)

***

### trace()

> **trace**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:40](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L40)

***

### warn()

> **warn**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:43](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L43)

***

### instance

> **`static`** **`private`** **instance**: [`Logger`](Logger.md)

#### Source

[packages/vscode-log/src/Logger.ts:11](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L11)

***

### output

> **`static`** **output**: [`Output`](../-internal-/type-aliases/Output.md)

#### Source

[packages/vscode-log/src/Logger.ts:10](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L10)

## Methods

### handleError()

> **handleError**(`error`): `void`

output error

#### Parameters

• **error**: [`CustomError`](CustomError.md)

custom error

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:59](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L59)

***

### throw()

> **throw**(`error`): `void`

throw error

#### Parameters

• **error**: [`CustomError`](CustomError.md)

custom error

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:50](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L50)

***

### configure()

> **`static`** **configure**(`window`, `title`): `void`

配置日志输出

#### Parameters

• **window**

vscode.window

• **window\.createOutputChannel**: `Function`

• **title**: `string`

vscode output channel title

#### Returns

`void`

#### Source

[packages/vscode-log/src/Logger.ts:21](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L21)

***

### createLogFunction()

> **`static`** **`private`** **createLogFunction**(`level`): (...`args`) => `void`

#### Parameters

• **level**: keyof [`Output`](../-internal-/type-aliases/Output.md)

#### Returns

`Function`

> ##### Parameters
>
> • ...**args**: `any`[]
>
> ##### Returns
>
> `void`
>

#### Source

[packages/vscode-log/src/Logger.ts:34](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L34)

***

### getInstance()

> **`static`** **getInstance**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Source

[packages/vscode-log/src/Logger.ts:30](https://github.com/ygqygq2/npm-packages/blob/c91f153/packages/vscode-log/src/Logger.ts#L30)
