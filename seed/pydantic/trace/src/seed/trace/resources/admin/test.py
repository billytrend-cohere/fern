# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class Test_And(pydantic_v1.BaseModel):
    type: typing.Literal["and"] = "and"
    value: bool


class Test_Or(pydantic_v1.BaseModel):
    type: typing.Literal["or"] = "or"
    value: bool


Test = typing.Union[Test_And, Test_Or]
