/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const SingleUnionTypeProperty: core.serialization.ObjectSchema<
    serializers.SingleUnionTypeProperty.Raw,
    FernIr.SingleUnionTypeProperty
> = core.serialization.objectWithoutOptionalProperties({
    name: core.serialization.lazyObject(async () => (await import("../../..")).NameAndWireValue),
    type: core.serialization.lazy(async () => (await import("../../..")).TypeReference),
});

export declare namespace SingleUnionTypeProperty {
    interface Raw {
        name: serializers.NameAndWireValue.Raw;
        type: serializers.TypeReference.Raw;
    }
}