/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedQueryParameters from "../../../../api/index";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, SeedQueryParameters.User> =
    core.serialization.object({
        name: core.serialization.string(),
        tags: core.serialization.list(core.serialization.string()),
    });

export declare namespace User {
    interface Raw {
        name: string;
        tags: string[];
    }
}