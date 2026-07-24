import { describe, test, expect } from "@jest/globals";
import { divide } from "../../src/calculator.js";

describe("divide()", () => {
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });
});