import { createOutput } from "./createOutput";
import { CustomError } from "./CustomError";
import { Output } from "./types";

export class Logger {
  static output: Output;
  private static instance: Logger;
  private constructor() {
    // 私有构造函数
  }

  static configure(
    window: {
      createOutputChannel: Function;
    },
    title: string
  ): void {
    Logger.output = createOutput(window, title);
  }

  static getInstance(): Logger {
    return Logger.instance || (Logger.instance = new Logger());
  }

  public info(message: string) {
    Logger.output?.info?.(message);
  }

  public error(message: string) {
    Logger.output?.error?.(message);
  }

  public throw(error: CustomError) {
    this.handleError(error);
    throw error;
  }

  public handleError(error: CustomError) {
    if (error.originalError instanceof Error) {
      Logger?.output?.error?.(error.originalError?.message);
    }
    Logger?.output?.error?.(error.message);
  }
}
