import { ErrorCode } from "./ErrorCode.enum";
import { ErrorCodeMessage } from "./types";

export function createErrorCodeMessages(
  userEnum: { [key: string]: any },
  customMessages: ErrorCodeMessage,
  extensionPrefix?: string
) {
  const defaultEnum = ErrorCode;
  const errorCodeEnum = Object.assign({}, defaultEnum, userEnum);

  const otherErrorCodeMessage = {
    [ErrorCode.GetCustomConfigFail]: `${extensionPrefix}Failed to get custom config.`,
    [ErrorCode.OpenDocumentFail]: `${extensionPrefix}Failed to open document: `,
    [ErrorCode.UnknownError]: `${extensionPrefix}Unknown error.`,
  };

  const errorCodeMessages: ErrorCodeMessage = {
    ...customMessages,
    ...otherErrorCodeMessage,
  };

  return { errorCodeEnum, errorCodeMessages };
}
