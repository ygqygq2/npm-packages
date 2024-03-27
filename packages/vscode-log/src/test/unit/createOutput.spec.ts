import { beforeEach, describe, expect, it, vi } from "vitest";
import { createOutput } from "../../createOutput";

describe("createOutput", () => {
  let window: { createOutputChannel: Function };
  let title: string;

  beforeEach(() => {
    const consoleFunction = (message: string) => {
      console.log(message);
    };
    window = {
      createOutputChannel: vi.fn().mockReturnValue({
        trace: consoleFunction,
        debug: consoleFunction,
        info: consoleFunction,
        warn: consoleFunction,
        error: consoleFunction,
      }),
    };
    title = "Test Output";
  });

  it("should create an output channel with the given title", () => {
    createOutput(window, title);

    expect(window.createOutputChannel).toHaveBeenCalledWith(title, { log: true });
  });

  it("should return an object with trace, debug, info, warn, and error functions", () => {
    const output = createOutput(window, title);

    expect(output).toEqual({
      trace: expect.any(Function),
      debug: expect.any(Function),
      info: expect.any(Function),
      warn: expect.any(Function),
      error: expect.any(Function),
    });
  });

  it("should call the corresponding log function when trace is called", () => {
    const logFunction = vi.fn();
    window.createOutputChannel = vi.fn().mockReturnValue({
      trace: logFunction,
      debug: logFunction,
      info: logFunction,
      warn: logFunction,
      error: logFunction,
    });

    const output = createOutput(window, title);

    output.info("Trace message");

    expect(logFunction).toHaveBeenCalledWith("Trace message");
  });
});
