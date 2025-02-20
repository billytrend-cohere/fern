/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedExamplesClient } from "../src/Client";

const client = new SeedExamplesClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Service", () => {
    test("getMovie", async () => {
        const response = await client.service.getMovie("movie-c06a4ad7");
        expect(response).toEqual({
            id: "movie-c06a4ad7",
            prequel: "movie-cv9b914f",
            title: "The Boy and the Heron",
            from: "Hayao Miyazaki",
            rating: 8,
            type: "movie",
            tag: "tag-wf9as23d",
            metadata: {
                actors: ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                releaseDate: "2023-12-08",
                ratings: { rottenTomatoes: 97, imdb: 7.6 },
            },
        });
    });

    test("createMovie", async () => {
        const response = await client.service.createMovie({
            id: "movie-c06a4ad7",
            prequel: "movie-cv9b914f",
            title: "The Boy and the Heron",
            from: "Hayao Miyazaki",
            rating: 8,
            type: "movie",
            tag: "tag-wf9as23d",
            metadata: {
                actors: ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                releaseDate: "2023-12-08",
                ratings: {
                    rottenTomatoes: 97,
                    imdb: 7.6,
                },
            },
        });
        expect(response).toEqual("movie-c06a4ad7");
    });

    test("getMetadata", async () => {
        const response = await client.service.getMetadata({
            "X-API-Version": "0.0.1",
            shallow: false,
            tag: "development",
        });
        expect(response).toEqual({
            type: "html",
            extra: { version: "0.0.1", tenancy: "test" },
            tags: ["development", "public"],
            value: "<head>...</head>",
        });
    });
});
