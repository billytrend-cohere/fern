/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Users } from "./api/resources/users/client/Client";

export declare namespace SeedPaginationClient {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedPaginationClient {
    constructor(protected readonly _options: SeedPaginationClient.Options) {}

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }
}
