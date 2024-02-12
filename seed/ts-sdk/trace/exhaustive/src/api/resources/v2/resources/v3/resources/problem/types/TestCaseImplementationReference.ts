/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../../..";

export type TestCaseImplementationReference =
    | SeedTrace.v2.v3.TestCaseImplementationReference.TemplateId
    | SeedTrace.v2.v3.TestCaseImplementationReference.Implementation
    | SeedTrace.v2.v3.TestCaseImplementationReference._Unknown;

export declare namespace TestCaseImplementationReference {
    interface TemplateId extends _Utils {
        type: "templateId";
        value: SeedTrace.v2.v3.TestCaseTemplateId;
    }

    interface Implementation extends SeedTrace.v2.v3.TestCaseImplementation, _Utils {
        type: "implementation";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.v2.v3.TestCaseImplementationReference._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        templateId: (value: SeedTrace.v2.v3.TestCaseTemplateId) => _Result;
        implementation: (value: SeedTrace.v2.v3.TestCaseImplementation) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const TestCaseImplementationReference = {
    templateId: (
        value: SeedTrace.v2.v3.TestCaseTemplateId
    ): SeedTrace.v2.v3.TestCaseImplementationReference.TemplateId => {
        return {
            value: value,
            type: "templateId",
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseImplementationReference.TemplateId,
                visitor: SeedTrace.v2.v3.TestCaseImplementationReference._Visitor<_Result>
            ) {
                return SeedTrace.v2.v3.TestCaseImplementationReference._visit(this, visitor);
            },
        };
    },

    implementation: (
        value: SeedTrace.v2.v3.TestCaseImplementation
    ): SeedTrace.v2.v3.TestCaseImplementationReference.Implementation => {
        return {
            ...value,
            type: "implementation",
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseImplementationReference.Implementation,
                visitor: SeedTrace.v2.v3.TestCaseImplementationReference._Visitor<_Result>
            ) {
                return SeedTrace.v2.v3.TestCaseImplementationReference._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.v2.v3.TestCaseImplementationReference._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseImplementationReference._Unknown,
                visitor: SeedTrace.v2.v3.TestCaseImplementationReference._Visitor<_Result>
            ) {
                return SeedTrace.v2.v3.TestCaseImplementationReference._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.v2.v3.TestCaseImplementationReference,
        visitor: SeedTrace.v2.v3.TestCaseImplementationReference._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "templateId":
                return visitor.templateId(value.value);
            case "implementation":
                return visitor.implementation(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;