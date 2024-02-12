// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/error-discrimination/fixtures/core"
)

type OrganizationNotFoundErrorBody struct {
	RequestedOrganizationId string `json:"requestedOrganizationId" url:"requestedOrganizationId"`

	_rawJSON json.RawMessage
}

func (o *OrganizationNotFoundErrorBody) UnmarshalJSON(data []byte) error {
	type unmarshaler OrganizationNotFoundErrorBody
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = OrganizationNotFoundErrorBody(value)
	o._rawJSON = json.RawMessage(data)
	return nil
}

func (o *OrganizationNotFoundErrorBody) String() string {
	if len(o._rawJSON) > 0 {
		if value, err := core.StringifyJSON(o._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type UserNotFoundErrorBody struct {
	RequestedUserId string `json:"requestedUserId" url:"requestedUserId"`

	_rawJSON json.RawMessage
}

func (u *UserNotFoundErrorBody) UnmarshalJSON(data []byte) error {
	type unmarshaler UserNotFoundErrorBody
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UserNotFoundErrorBody(value)
	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UserNotFoundErrorBody) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}