import { describe, it, expect } from "vitest";
import { divide } from "../../src/calculator.js";

describe("divide()", () => {

    it("divides numbers", () => {

        expect(divide(10,2)).toBe(5);

    });

});