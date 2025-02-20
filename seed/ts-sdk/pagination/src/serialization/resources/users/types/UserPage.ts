/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedPagination from "../../../../api";
import * as core from "../../../../core";
import { UserListContainer } from "./UserListContainer";

export const UserPage: core.serialization.ObjectSchema<serializers.UserPage.Raw, SeedPagination.UserPage> =
    core.serialization.object({
        data: UserListContainer,
        next: core.serialization.string().optional(),
    });

export declare namespace UserPage {
    interface Raw {
        data: UserListContainer.Raw;
        next?: string | null;
    }
}
