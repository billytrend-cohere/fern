# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .exception_info import ExceptionInfo
from .exception_v_2 import ExceptionV2


class ActualResult_Value(pydantic_v1.BaseModel):
    type: typing.Literal["value"] = "value"
    value: VariableValue


class ActualResult_Exception(ExceptionInfo):
    type: typing.Literal["exception"] = "exception"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class ActualResult_ExceptionV2(pydantic_v1.BaseModel):
    type: typing.Literal["exceptionV2"] = "exceptionV2"
    value: ExceptionV2


ActualResult = typing.Union[ActualResult_Value, ActualResult_Exception, ActualResult_ExceptionV2]
from ..commons.variable_value import VariableValue  # noqa: E402
