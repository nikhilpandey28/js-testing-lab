import { describe, test, expect, jest } from "@jest/globals";
import { notifyUser } from "../../src/notifier.js";

describe("notifyUser()", () => {
  test("calls callback with Welcome", () => {
    const mock = jest.fn();

    notifyUser(mock);

    expect(mock).toHaveBeenCalledWith("Welcome");
  });
});