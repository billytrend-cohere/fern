import { z } from "zod";

/**
 * @example
 * api: openapi.yml
 *
 * @example
 * api: asyncapi.yml
 */
export const APIDefinitionPathSchema = z.string().describe("Path to the OpenAPI, AsyncAPI or Fern Definition");

/**
 * @example
 * api:
 *  path: openapi.yml
 *  overrides: overrides.yml
 *
 * @example
 * api:
 *  path: asyncapi.yml
 *  overrides: overrides.yml
 */
export const APIDefintionWithOverridesSchema = z.object({
    path: APIDefinitionPathSchema,
    // TODO: Add support for pulling the API definition from another github repo
    // and from behind an authed URL. Right now this is for a basic cURL to get the def.
    origin: z
        .optional(z.string())
        .describe("The URL of the API definition origin, from which the file should be polled."),
    overrides: z.optional(z.string()).describe("Path to the OpenAPI or AsyncAPI overrides")
});

/**
 * @example
 * api:
 *  - path: openapi.yml
 *    overrides: overrides.yml
 *  - openapi.yml
 */
export const APIDefinitionList = z.array(z.union([APIDefinitionPathSchema, APIDefintionWithOverridesSchema]));

export const APIConfigurationSchema = z.union([
    APIDefinitionPathSchema,
    APIDefintionWithOverridesSchema,
    APIDefinitionList
]);

export type APIConfigurationSchema = z.infer<typeof APIConfigurationSchema>;
