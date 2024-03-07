/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Union } from "./api/resources/union/client/Client";

export declare namespace SeedUnionsClient {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedUnionsClient {
    constructor(protected readonly _options: SeedUnionsClient.Options) {}

    protected _union: Union | undefined;

    public get union(): Union {
        return (this._union ??= new Union(this._options));
    }
}