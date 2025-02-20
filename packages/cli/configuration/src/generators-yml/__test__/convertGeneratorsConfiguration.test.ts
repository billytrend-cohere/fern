/* eslint-disable jest/no-conditional-expect */
import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { convertGeneratorsConfiguration } from "../convertGeneratorsConfiguration";

describe("convertGeneratorsConfiguration", () => {
    it("local-file-system allows absolute download path", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of("/path/to/repo/fern/api/generators.yml"),
            rawGeneratorsConfiguration: {
                groups: {
                    group1: {
                        generators: [
                            {
                                name: "generator-name",
                                version: "0.0.1",
                                output: {
                                    location: "local-file-system",
                                    path: "/path/to/output"
                                }
                            }
                        ]
                    }
                }
            }
        });

        expect(converted.groups[0]?.generators[0]?.absolutePathToLocalOutput).toEqual("/path/to/output");
    });

    it("local-file-system resolves relative download path", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of("/path/to/repo/fern/api/generators.yml"),
            rawGeneratorsConfiguration: {
                groups: {
                    group1: {
                        generators: [
                            {
                                name: "generator-name",
                                version: "0.0.1",
                                output: {
                                    location: "local-file-system",
                                    path: "../../output"
                                }
                            }
                        ]
                    }
                }
            }
        });

        expect(converted.groups[0]?.generators[0]?.absolutePathToLocalOutput).toEqual("/path/to/repo/output");
    });

    it("MIT license", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of("/path/to/repo/fern/api/generators.yml"),
            rawGeneratorsConfiguration: {
                groups: {
                    group1: {
                        generators: [
                            {
                                name: "generator-name",
                                version: "0.0.1",
                                github: {
                                    repository: "fern-api/fern",
                                    license: "MIT"
                                }
                            }
                        ]
                    }
                }
            }
        });

        expect(converted.groups[0]?.generators[0]?.outputMode?.type).toEqual("githubV2");
    });

    it("Apache-2.0 license", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of("/path/to/repo/fern/api/generators.yml"),
            rawGeneratorsConfiguration: {
                groups: {
                    group1: {
                        generators: [
                            {
                                name: "generator-name",
                                version: "0.0.1",
                                github: {
                                    repository: "fern-api/fern",
                                    license: "Apache-2.0"
                                }
                            }
                        ]
                    }
                }
            }
        });

        expect(converted.groups[0]?.generators[0]?.outputMode?.type).toEqual("githubV2");
    });

    it("Custom license", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of(__filename),
            rawGeneratorsConfiguration: {
                groups: {
                    group1: {
                        generators: [
                            {
                                name: "generator-name",
                                version: "0.0.1",
                                github: {
                                    repository: "fern-api/fern",
                                    license: {
                                        custom: "testdata/LICENSE"
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        });

        expect(converted.groups[0]?.generators[0]?.outputMode?.type).toEqual("githubV2");
    });

    it("Maven URL", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of(__filename),
            rawGeneratorsConfiguration: {
                groups: {
                    "stage:java": {
                        generators: [
                            {
                                name: "fernapi/fern-java-sdk",
                                version: "0.8.8-rc0",
                                config: {
                                    "package-prefix": "com.test.sdk"
                                },
                                output: {
                                    location: "maven",
                                    coordinate: "com.test:sdk",
                                    url: "https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/",
                                    username: "username",
                                    password: "password",
                                    signature: {
                                        keyId: "keyId",
                                        password: "password",
                                        secretKey: "secretKey"
                                    }
                                },
                                github: {
                                    repository: "fern-api/github-app-test"
                                }
                            }
                        ]
                    }
                }
            }
        });

        const output = converted.groups[0]?.generators[0]?.outputMode;
        expect(output?.type).toEqual("githubV2");
        if (output?.type === "githubV2") {
            const publishInfo = output.githubV2.publishInfo;
            expect(publishInfo?.type).toEqual("maven");
            if (publishInfo?.type === "maven") {
                expect(publishInfo.registryUrl).toEqual(
                    "https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/"
                );
            }
        }
    });

    it("License Metadata", async () => {
        const converted = await convertGeneratorsConfiguration({
            absolutePathToGeneratorsConfiguration: AbsoluteFilePath.of(__filename),
            rawGeneratorsConfiguration: {
                groups: {
                    "stage:java": {
                        generators: [
                            {
                                name: "fernapi/fern-java-sdk",
                                version: "0.8.8-rc0",
                                config: {
                                    "package-prefix": "com.test.sdk"
                                },
                                metadata: {
                                    license: "MIT"
                                },
                                github: {
                                    repository: "fern-api/github-app-test"
                                }
                            }
                        ]
                    }
                }
            }
        });
        const output = converted.groups[0]?.generators[0]?.outputMode;
        expect(output?.type).toEqual("githubV2");
        if (output?.type === "githubV2") {
            expect(output.githubV2.license?.type === "basic" && output.githubV2.license.id === "MIT").toEqual(true);
        }
    });
});
