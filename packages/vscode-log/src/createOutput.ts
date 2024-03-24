import { formatLog } from "./formatLog";
import { Output } from "./types";

export function createOutput(window: { createOutputChannel: Function }, title: string): Output {
  const channel = window.createOutputChannel(title, { log: true });
  const output = {
    info: (...args: any[]) => {
      channel.info(formatLog(...args));
    },
    error: (...args: any[]) => {
      channel.error(formatLog(...args));
    },
  };
  return output;
}
