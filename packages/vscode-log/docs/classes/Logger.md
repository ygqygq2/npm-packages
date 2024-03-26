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

packages/vscode-log/src/Logger.ts:12

## Properties

### debug()

> **debug**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

packages/vscode-log/src/Logger.ts:41

***

### error()

> **error**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

packages/vscode-log/src/Logger.ts:44

***

### info()

> **info**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

packages/vscode-log/src/Logger.ts:42

***

### trace()

> **trace**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

packages/vscode-log/src/Logger.ts:40

***

### warn()

> **warn**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Source

packages/vscode-log/src/Logger.ts:43

***

### instance

> **`static`** **`private`** **instance**: [`Logger`](Logger.md)

#### Source

packages/vscode-log/src/Logger.ts:11

***

### output

> **`static`** **output**: [`Output`](../-internal-/type-aliases/Output.md)

#### Source

packages/vscode-log/src/Logger.ts:10

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

packages/vscode-log/src/Logger.ts:59

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

packages/vscode-log/src/Logger.ts:50

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

packages/vscode-log/src/Logger.ts:21

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

packages/vscode-log/src/Logger.ts:34

***

### getInstance()

> **`static`** **getInstance**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Source

packages/vscode-log/src/Logger.ts:30
