import { describe, expect, it } from "vitest";
import { encryptPassword } from "../../encrypt";

describe("encryptPassword", () => {
  it("should encrypt the password correctly", () => {
    const cryptoSecret = "mySecret";
    const password = "myPassword";
    const expectedHashedPassword = "65a6ab6ea2cd8b515d4018916274745dcd690ec827fd23a19dcc02911b2ae8ee";

    const hashedPassword = encryptPassword(cryptoSecret, password);

    expect(hashedPassword).toEqual(expectedHashedPassword);
  });
});
