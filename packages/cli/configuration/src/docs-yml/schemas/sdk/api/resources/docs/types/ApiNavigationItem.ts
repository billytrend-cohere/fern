/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../..";

/**
 * Use the `layout` object to customize the order that your API endpoints
 * are displayed in the docs site.
 */
export type ApiNavigationItem =
    /**
     * This should be either an endpoint, websocket, webhook, or subpackage ID
     *  */
    | string
    /**
     * Keyed by subpackage ID, this object allows you to group endpoints and pages together.
     *  */
    | Record<string, FernDocsConfig.ApiNavigationItems>
    /**
     * This should be a markdown file that will be displayed in the API section.
     *  */
    | FernDocsConfig.PageConfiguration;