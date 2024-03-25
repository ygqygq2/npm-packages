import { createOutput } from "./createOutput";
import { CustomError } from "./CustomError";
import { formatLog } from "./formatLog";
import { Output } from "./types";

/**
 * 单实例类
 */
export class Logger {
  static output: Output;
  private static instance: Logger;
  private constructor() {
    // 私有构造函数
  }

  /**
   * 配置日志输出
   * @param window vscode.window
   * @param title vscode output channel title
   */
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

  private static createLogFunction(level: keyof Output) {
    return (...args: any[]) => {
      Logger.output?.[level]?.(formatLog(...args));
    };
  }

  public trace = Logger.createLogFunction("trace");
  public debug = Logger.createLogFunction("debug");
  public info = Logger.createLogFunction("info");
  public warn = Logger.createLogFunction("warn");
  public error = Logger.createLogFunction("error");

  /**
   * throw error
   * @param error custom error
   */
  public throw(error: CustomError) {
    this.handleError(error);
    throw error;
  }

  /**
   * output error
   * @param error custom error
   */
  public handleError(error: CustomError) {
    if (error.originalError instanceof Error) {
      Logger?.output?.error?.(error.originalError?.message);
    }
    Logger?.output?.error?.(error.message);
  }
}
