/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SafeAndUnsafeString {
    /** this name might overlap with reserved keywords of the language being generated */
    unsafeName: string;
    /** this name will NOT overlap with reserved keywords of the language being generated */
    safeName: string;
}