import { describe, it, expect, vi } from "vitest";
import { notifyUser } from "../../src/notifier.js";

describe("notifyUser()", () => {

    it("calls callback correctly", () => {

        const mock = vi.fn();

        notifyUser(mock);

        expect(mock).toHaveBeenCalledWith("Welcome");

    });

});