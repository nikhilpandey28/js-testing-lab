import { describe, test, expect } from "@jest/globals";
import { sum } from "../../src/sum.js";

describe("sum()", () => {
  test("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});