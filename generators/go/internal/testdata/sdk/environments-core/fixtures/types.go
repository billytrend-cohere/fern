// This file was auto-generated by Fern from our API Definition.

package api

import (
	fmt "fmt"
)

type Environments string

const (
	EnvironmentsInside  Environments = "Inside"
	EnvironmentsOutside Environments = "Outside"
)

func NewEnvironmentsFromString(s string) (Environments, error) {
	switch s {
	case "Inside":
		return EnvironmentsInside, nil
	case "Outside":
		return EnvironmentsOutside, nil
	}
	var t Environments
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (e Environments) Ptr() *Environments {
	return &e
}