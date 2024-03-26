import { ErrorCode } from "./ErrorCode.enum";
import { formatLog } from "./formatLog";

/**
 * Custom Error
 */
export class CustomError extends Error {
  static errorCodeMessages: { [key in ErrorCode]?: string } = {};
  public code: ErrorCode;
  public originalError: Error | undefined | unknown;

  constructor(code: ErrorCode, ...args: unknown[]) {
    let errorMessage = CustomError?.errorCodeMessages[code] || "";

    const errorObj = args.find((arg) => arg instanceof Error) as Error | undefined;
    const otherArgs = args.filter((arg) => !(arg instanceof Error));

    if (args.length === 1 && typeof args[0] === "string") {
      errorMessage += args[0];
    } else {
      errorMessage += formatLog(otherArgs.join(", "));
    }

    super(errorMessage);
    this.code = code;
    this.originalError = errorObj;
  }

  /**
   * configure error code messages
   * @param errorCodeMessages error code messages object
   */
  static configure(errorCodeMessages: { [key in ErrorCode]?: string }): void {
    CustomError.errorCodeMessages = errorCodeMessages;
  }
}
