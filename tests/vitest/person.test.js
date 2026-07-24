import { describe, it, expect } from "vitest";
import { getPerson } from "../../src/person.js";

describe("getPerson()", () => {

    it("returns person object", () => {

        expect(getPerson()).toEqual({
            name: "Nikhil",
            age: 22
        });

    });

});