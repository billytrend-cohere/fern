import { Logger } from "@fern-api/logger";
import { HttpError, SchemaId, StatusCode } from "@fern-api/openapi-ir-sdk";
import { TaskContext } from "@fern-api/task-context";
import { OpenAPIV3 } from "openapi-types";
import { SchemaParserContext } from "../../schema/SchemaParserContext";
import { getReferenceOccurrences } from "../../schema/utils/getReferenceOccurrences";
import { isReferenceObject } from "../../schema/utils/isReferenceObject";

export const PARAMETER_REFERENCE_PREFIX = "#/components/parameters/";
export const RESPONSE_REFERENCE_PREFIX = "#/components/responses/";
export const EXAMPLES_REFERENCE_PREFIX = "#/components/examples/";
export const REQUEST_BODY_REFERENCE_PREFIX = "#/components/requestBodies/";

export interface DiscriminatedUnionReference {
    discriminants: Set<string>;
    numReferences: number;
}

export abstract class AbstractOpenAPIV3ParserContext implements SchemaParserContext {
    public logger: Logger;
    public document: OpenAPIV3.Document;
    public taskContext: TaskContext;
    public authHeaders: Set<string>;
    public refOccurrences: Record<string, number>;
    public DUMMY: SchemaParserContext;

    constructor({
        document,
        taskContext,
        authHeaders
    }: {
        document: OpenAPIV3.Document;
        taskContext: TaskContext;
        authHeaders: Set<string>;
    }) {
        this.document = document;
        this.logger = taskContext.logger;
        this.taskContext = taskContext;
        this.authHeaders = authHeaders;
        this.refOccurrences = getReferenceOccurrences(document);
        this.DUMMY = this.getDummy();
    }

    public getNumberOfOccurrencesForRef(schema: OpenAPIV3.ReferenceObject): number {
        return this.refOccurrences[schema.$ref] ?? 0;
    }

    public resolveSchemaReference(schema: OpenAPIV3.ReferenceObject): OpenAPIV3.SchemaObject {
        // Step 1: Get keys
        const keys = schema.$ref
            .substring(2)
            .split("/")
            .map((key) => key.replace(/~1/g, "/"));

        // Step 2: Index recursively into the document with all the keys
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let resolvedSchema: any = this.document;
        for (const key of keys) {
            if (typeof resolvedSchema !== "object" || resolvedSchema == null) {
                throw new Error(`Failed to resolve ${schema.$ref}`);
            }
            resolvedSchema = resolvedSchema[key];
        }
        if (resolvedSchema == null) {
            throw new Error(`Failed to resolve ${schema.$ref}`);
        }

        // Step 3: If the result is another reference object, make a recursive call
        if (isReferenceObject(resolvedSchema)) {
            resolvedSchema = this.resolveSchemaReference(resolvedSchema);
        }

        // Step 4: If the result is a schema object, return it
        return resolvedSchema;
    }

    public resolveParameterReference(parameter: OpenAPIV3.ReferenceObject): OpenAPIV3.ParameterObject {
        if (
            this.document.components == null ||
            this.document.components.parameters == null ||
            !parameter.$ref.startsWith(PARAMETER_REFERENCE_PREFIX)
        ) {
            throw new Error(`Failed to resolve ${parameter.$ref}`);
        }
        const parameterKey = parameter.$ref.substring(PARAMETER_REFERENCE_PREFIX.length);
        const resolvedParameter = this.document.components.parameters[parameterKey];
        if (resolvedParameter == null) {
            throw new Error(`${parameter.$ref} is undefined`);
        }
        if (isReferenceObject(resolvedParameter)) {
            return this.resolveParameterReference(resolvedParameter);
        }
        return resolvedParameter;
    }

    public resolveRequestBodyReference(requestBody: OpenAPIV3.ReferenceObject): OpenAPIV3.RequestBodyObject {
        if (
            this.document.components == null ||
            this.document.components.requestBodies == null ||
            !requestBody.$ref.startsWith(REQUEST_BODY_REFERENCE_PREFIX)
        ) {
            throw new Error(`Failed to resolve ${requestBody.$ref}`);
        }
        const requestBodyKey = requestBody.$ref.substring(REQUEST_BODY_REFERENCE_PREFIX.length);
        const resolvedRequestBody = this.document.components.requestBodies[requestBodyKey];
        if (resolvedRequestBody == null) {
            throw new Error(`${requestBody.$ref} is undefined`);
        }
        if (isReferenceObject(resolvedRequestBody)) {
            return this.resolveRequestBodyReference(resolvedRequestBody);
        }
        return resolvedRequestBody;
    }

    public resolveResponseReference(response: OpenAPIV3.ReferenceObject): OpenAPIV3.ResponseObject {
        if (
            this.document.components == null ||
            this.document.components.responses == null ||
            !response.$ref.startsWith(RESPONSE_REFERENCE_PREFIX)
        ) {
            throw new Error(`Failed to resolve ${response.$ref}`);
        }
        const parameterKey = response.$ref.substring(RESPONSE_REFERENCE_PREFIX.length);
        const resolvedResponse = this.document.components.responses[parameterKey];
        if (resolvedResponse == null) {
            throw new Error(`${response.$ref} is undefined`);
        }
        if (isReferenceObject(resolvedResponse)) {
            return this.resolveResponseReference(resolvedResponse);
        }
        return resolvedResponse;
    }

    public resolveExampleReference(example: OpenAPIV3.ReferenceObject): OpenAPIV3.ExampleObject {
        if (
            this.document.components == null ||
            this.document.components.examples == null ||
            !example.$ref.startsWith(EXAMPLES_REFERENCE_PREFIX)
        ) {
            throw new Error(`Failed to resolve ${example.$ref}`);
        }
        const parameterKey = example.$ref.substring(EXAMPLES_REFERENCE_PREFIX.length);
        const resolvedExample = this.document.components.examples[parameterKey];
        if (resolvedExample == null) {
            throw new Error(`${example.$ref} is undefined`);
        }
        if (isReferenceObject(resolvedExample)) {
            return this.resolveExampleReference(resolvedExample);
        }
        return resolvedExample;
    }

    public abstract markSchemaAsReferencedByNonRequest(schemaId: SchemaId): void;

    public abstract markSchemaAsReferencedByRequest(schemaId: SchemaId): void;

    public abstract getReferencedSchemas(): Set<SchemaId>;

    public abstract getDummy(): SchemaParserContext;

    public abstract markSchemaForStatusCode(
        statusCode: number,
        schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
    ): void;

    public abstract markReferencedByDiscriminatedUnion(
        schema: OpenAPIV3.ReferenceObject,
        discrminant: string,
        times: number
    ): void;

    public abstract getReferencesFromDiscriminatedUnion(
        schema: OpenAPIV3.ReferenceObject
    ): DiscriminatedUnionReference | undefined;

    public abstract getErrors(): Record<StatusCode, HttpError>;

    public abstract excludeSchema(schemaId: SchemaId): void;

    public abstract isSchemaExcluded(schemaId: SchemaId): boolean;
}
