// This file was auto-generated by Fern from our API Definition.

package api

type GetAllUsersRequest struct {
	XEndpointHeader string   `header:"X-Endpoint-Header"`
	Tag             int      `query:"tag"`
	Limit           []*int   `query:"limit"`
	Filter          *string  `query:"filter"`
	Series          []string `query:"series"`
}