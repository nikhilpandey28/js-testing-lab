import { describe, it, expect } from "vitest";
import { capitalize } from "../../src/capitalize.js";

describe("capitalize()", () => {

    it("capitalizes first letter", () => {

        expect(capitalize("hello")).toBe("Hello");

    });

    it("works with one letter", () => {

        expect(capitalize("a")).toBe("A");

    });

});