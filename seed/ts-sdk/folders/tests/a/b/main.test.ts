/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedApiClient } from "../../../src/Client";

const client = new SeedApiClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("B", () => {
    test("constructor", () => {
        expect(client.a.b).toBeDefined();
    });
});