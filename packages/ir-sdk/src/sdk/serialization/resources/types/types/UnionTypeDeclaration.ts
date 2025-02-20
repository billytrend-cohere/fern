/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const UnionTypeDeclaration: core.serialization.ObjectSchema<
    serializers.UnionTypeDeclaration.Raw,
    FernIr.UnionTypeDeclaration
> = core.serialization.objectWithoutOptionalProperties({
    discriminant: core.serialization.lazyObject(async () => (await import("../../..")).NameAndWireValue),
    extends: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).DeclaredTypeName)
    ),
    types: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).SingleUnionType)
    ),
    baseProperties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ObjectProperty)
    ),
});

export declare namespace UnionTypeDeclaration {
    interface Raw {
        discriminant: serializers.NameAndWireValue.Raw;
        extends: serializers.DeclaredTypeName.Raw[];
        types: serializers.SingleUnionType.Raw[];
        baseProperties: serializers.ObjectProperty.Raw[];
    }
}
