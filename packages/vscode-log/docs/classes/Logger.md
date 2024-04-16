[@ygqygq2/vscode-log - v0.0.3](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

单实例类

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [debug](Logger.md#debug)
- [error](Logger.md#error)
- [info](Logger.md#info)
- [trace](Logger.md#trace)
- [warn](Logger.md#warn)
- [instance](Logger.md#instance)
- [output](Logger.md#output)

### Methods

- [handleError](Logger.md#handleerror)
- [throw](Logger.md#throw)
- [configure](Logger.md#configure)
- [createLogFunction](Logger.md#createlogfunction)
- [getInstance](Logger.md#getinstance)

## Constructors

### constructor

• **new Logger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Defined in

[packages/vscode-log/src/Logger.ts:12](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L12)

## Properties

### debug

• **debug**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:41](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L41)

___

### error

• **error**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:44](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L44)

___

### info

• **info**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:42](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L42)

___

### trace

• **trace**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:40](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L40)

___

### warn

• **warn**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:43](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L43)

___

### instance

▪ `Static` `Private` **instance**: [`Logger`](Logger.md)

#### Defined in

[packages/vscode-log/src/Logger.ts:11](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L11)

___

### output

▪ `Static` **output**: [`Output`](../modules/internal_.md#output)

#### Defined in

[packages/vscode-log/src/Logger.ts:10](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L10)

## Methods

### handleError

▸ **handleError**(`error`): `void`

output error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`CustomError`](CustomError.md) | custom error |

#### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:59](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L59)

___

### throw

▸ **throw**(`error`): `void`

throw error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`CustomError`](CustomError.md) | custom error |

#### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:50](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L50)

___

### configure

▸ **configure**(`window`, `title`): `void`

配置日志输出

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `window` | `Object` | vscode.window |
| `window.createOutputChannel` | `Function` | - |
| `title` | `string` | vscode output channel title |

#### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:21](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L21)

___

### createLogFunction

▸ **createLogFunction**(`level`): (...`args`: `any`[]) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | keyof [`Output`](../modules/internal_.md#output) |

#### Returns

`fn`

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/vscode-log/src/Logger.ts:34](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L34)

___

### getInstance

▸ **getInstance**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Defined in

[packages/vscode-log/src/Logger.ts:30](https://github.com/ygqygq2/npm-packages/blob/f3307567327fc0cddcc8f2d68a7f0b2ba3f8fefc/packages/vscode-log/src/Logger.ts#L30)
