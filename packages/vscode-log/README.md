# vscode-log

## Usage

`vscode-log` is a package that allows you to easily log messages in Visual Studio Code. Here's how you can use it:

1. Install the `@ygqygq2/vscode-log` package by running the following command in your terminal:

```bash
npm install @ygqygq2/vscode-log
```

2. Import the `@ygqygq2/vscode-log` module and configure, create and get the logger instance as follows:

```javascript
import { ErrorCodeMessage, Logger, CustomError } from "@ygqygq2/vscode-log";

enum CustomErrorCode {
  // Git 相关错误 (1000 - 1009)
  GitNotInit = 1000,
  GitGetUserNameFail = 1001,
  GitGetUserEmailFail = 1002,
  GitGetBirthtimeFail = 1003,
  MissingUserNameEmail = 1004,
  ShouldSetUserName = 1005,
  ShouldSetUserEmail = 1006
}

const customErrorCodeMessages: ErrorCodeMessage = {
  ...gitCustomErrorCodeMessage
};

const { errorCodeEnum, errorCodeMessages } = createErrorCodeMessages(
  CustomErrorCode,
  customErrorCodeMessages,
);

const logger = new Logger();
CustomError.configure(errorCodeMessages);
Logger.configure(vscode.window, "Test Channel");
const logger = Logger.getInstance();
```

3. Start logging messages using the available log levels:

```javascript
logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");

logger.handleError(new CustomError(errorCodeEnum.GitNotInit, error));
logger.throw(new CustomError(errorCodeEnum.GitNotInit, error));
```

4. View the logged messages in the Visual Studio Code output panel. Open the output panel by going to `View -> Output` or by pressing `Ctrl+Shift+U`.

For more information on the available methods and options, please refer to the [API documentation](https://github.com/ygqygq2/npm-packages/tree/main/packages/vscode-log/docs).

## License

This project is licensed under the MIT License.
