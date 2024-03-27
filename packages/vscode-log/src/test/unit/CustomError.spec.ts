import { expect, describe, it, vi, beforeEach } from "vitest";
import { createErrorCodeMessages, CustomError, ErrorCodeMessage  } from "../..";

describe("CustomError", () => {
  let errorCodeEnum: { [key: string]: string };
  let errorCodeMessages: ErrorCodeMessage;

  enum CustomErrorCode {
    GitNotInit = 1000,
  }

  const gitCustomErrorCodeMessage: ErrorCodeMessage = {
    [CustomErrorCode.GitNotInit]: "Git repository not initialized",
  };

  beforeEach(() => {
    const result = createErrorCodeMessages(CustomErrorCode, gitCustomErrorCodeMessage);
    errorCodeEnum = result.errorCodeEnum;
    errorCodeMessages = result.errorCodeMessages;
    CustomError.configure(errorCodeMessages);
  });

  it("should create an instance with error code", () => {
    const code = errorCodeEnum.GitNotInit as unknown as number;
    const message = errorCodeMessages[code];
    const error = new CustomError(code);

    expect(error.code).toBe(code);
    expect(error.message).toBe(message);
    expect(error.originalError).toBeUndefined();
  });

  it("should create an instance with error code and Error object", () => {
    const code = errorCodeEnum.GitNotInit as unknown as number;
    const message = errorCodeMessages[code];
    const originalError = new Error("Original error");

    const error = new CustomError(code, originalError);

    expect(error.code).toBe(code);
    expect(error.message).toBe(`${message}`);
    expect(error.originalError).toBe(originalError);
  });

  it("should create an instance with error code and multiple arguments", () => {
    const code = errorCodeEnum.GitNotInit as unknown as number;
    const message = errorCodeMessages[code];
    const arg1 = "Argument 1";
    const arg2 = "Argument 2";
    const originalError = new Error("Original error");

    const error = new CustomError(code, arg1, arg2, originalError);

    expect(error.code).toBe(code);
    expect(error.message).toBe(`${message}${arg1}, ${arg2}`);
    expect(error.originalError).toBe(originalError);
  });
});
