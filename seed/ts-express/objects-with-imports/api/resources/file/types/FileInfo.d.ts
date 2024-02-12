/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * @example
 *     SeedObjectsWithImports.FileInfo.Regular
 *
 * @example
 *     SeedObjectsWithImports.FileInfo.Directory
 */
export declare type FileInfo = 
/**
 * A regular file (e.g. foo.txt). */
"REGULAR"
/**
 * A directory (e.g. foo/). */
 | "DIRECTORY";
export declare const FileInfo: {
    readonly Regular: "REGULAR";
    readonly Directory: "DIRECTORY";
};