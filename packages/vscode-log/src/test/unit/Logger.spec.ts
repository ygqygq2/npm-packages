import { expect, describe, it, vi, beforeEach } from "vitest";
import { createErrorCodeMessages, CustomError, ErrorCodeMessage, Logger } from "../..";

describe("Logger", () => {
  let logger: Logger;
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
    logger = Logger.getInstance();
  });

  describe("handleError", () => {
    it("should handle error with original error message", () => {
      const code = errorCodeEnum.GitNotInit as unknown as number;
      const error = new CustomError(code);
      console.log(logger.handleError(error));
      expect(() => logger.handleError(error)).not.toThrow();
    });

    it("should handle error with custom error message", () => {
      const code = errorCodeEnum.GitNotInit as unknown as number;
      const error = new CustomError(code);
      logger.handleError(error);
    });
  });

  describe("throw", () => {
    it("should throw error with original error message", () => {
      const code = errorCodeEnum.GitNotInit as unknown as number;
      const error = new CustomError(code, new Error("Original error"));
      expect(() => logger.throw(error)).toThrow(error);
    });

    it("should throw error with custom error message", () => {
      const code = errorCodeEnum.GitNotInit as unknown as number;
      const error = new CustomError(code);

      expect(() => logger.throw(error)).toThrow(error);
    });
  });
});
