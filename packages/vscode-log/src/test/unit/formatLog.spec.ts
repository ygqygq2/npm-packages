import { describe, expect, it } from "vitest";
import { formatLog } from "../../formatLog";

describe("formatLog", () => {
  it("should format log with multiple arguments", () => {
    const result = formatLog("Hello", { name: "John" }, 42);
    expect(result).toBe('Hello {"name":"John"} 42');
  });

  it("should format log with single argument", () => {
    const result = formatLog("Hello");
    expect(result).toBe("Hello");
  });

  it("should format log with no arguments", () => {
    const result = formatLog();
    expect(result).toBe("");
  });

  it("should format log with undefined arguments", () => {
    const result = formatLog(undefined, "World", undefined);
    expect(result).toBe("World");
  });

  it("should format log with null arguments", () => {
    const result = formatLog(null, "World", null);
    expect(result).toBe("null World null");
  });
});
