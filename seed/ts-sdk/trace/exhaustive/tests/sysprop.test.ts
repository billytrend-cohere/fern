/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../src/api";
import { SeedTraceClient } from "../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("Sysprop", () => {
    test("setNumWarmInstances", async () => {
        const response = await client.sysprop.setNumWarmInstances(SeedTrace.Language.Java, 1);
        expect(response).toEqual(undefined);
    });

    test("getNumWarmInstances", async () => {
        const response = await client.sysprop.getNumWarmInstances();
        expect(response).toEqual({ JAVA: 1 });
    });
});
