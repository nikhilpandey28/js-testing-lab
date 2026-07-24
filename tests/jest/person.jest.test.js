import { describe, test, expect } from "@jest/globals";
import { getPerson } from "../../src/person.js";

describe("getPerson()", () => {
  test("returns the expected object", () => {
    expect(getPerson()).toEqual({
      name: "Nikhil",
      age: 22,
    });
  });
});