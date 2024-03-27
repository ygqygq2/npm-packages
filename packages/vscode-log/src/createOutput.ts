import { Output } from "./types";
import { LogOutputChannel } from "vscode";

export function createOutput(window: { createOutputChannel: Function }, title: string): Output {
  const channel: LogOutputChannel = window.createOutputChannel(title, { log: true });

  const createLogFunction = (logFunction: Function) => {
    return (...args: any[]) => {
      logFunction(...args);
    };
  };

  const output = {
    trace: createLogFunction(channel.trace),
    debug: createLogFunction(channel.debug),
    info: createLogFunction(channel.info),
    warn: createLogFunction(channel.warn),
    error: createLogFunction(channel.error),
  };

  return output;
}
