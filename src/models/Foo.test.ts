import { describe, it } from "node:test";
import assert from "node:assert";

import { Foo } from "./Foo.ts";

describe("Foo model", () => {
    it("names the foo", () => {
        const result = new Foo();
        result.name = "testing";

        assert.deepEqual(result, { name: "testing" });
    });
});
