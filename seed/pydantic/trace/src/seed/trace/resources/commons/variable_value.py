# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .binary_tree_node_value import BinaryTreeNodeValue
from .binary_tree_value import BinaryTreeValue
from .doubly_linked_list_node_value import DoublyLinkedListNodeValue
from .doubly_linked_list_value import DoublyLinkedListValue
from .node_id import NodeId
from .singly_linked_list_node_value import SinglyLinkedListNodeValue
from .singly_linked_list_value import SinglyLinkedListValue


class VariableValue_IntegerValue(pydantic_v1.BaseModel):
    type: typing.Literal["integerValue"] = "integerValue"
    value: int


class VariableValue_BooleanValue(pydantic_v1.BaseModel):
    type: typing.Literal["booleanValue"] = "booleanValue"
    value: bool


class VariableValue_DoubleValue(pydantic_v1.BaseModel):
    type: typing.Literal["doubleValue"] = "doubleValue"
    value: float


class VariableValue_StringValue(pydantic_v1.BaseModel):
    type: typing.Literal["stringValue"] = "stringValue"
    value: str


class VariableValue_CharValue(pydantic_v1.BaseModel):
    type: typing.Literal["charValue"] = "charValue"
    value: str


class VariableValue_MapValue(MapValue):
    type: typing.Literal["mapValue"] = "mapValue"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableValue_ListValue(pydantic_v1.BaseModel):
    type: typing.Literal["listValue"] = "listValue"
    value: typing.List[VariableValue]


class VariableValue_BinaryTreeValue(BinaryTreeValue):
    type: typing.Literal["binaryTreeValue"] = "binaryTreeValue"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableValue_SinglyLinkedListValue(SinglyLinkedListValue):
    type: typing.Literal["singlyLinkedListValue"] = "singlyLinkedListValue"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableValue_DoublyLinkedListValue(DoublyLinkedListValue):
    type: typing.Literal["doublyLinkedListValue"] = "doublyLinkedListValue"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableValue_NullValue(pydantic_v1.BaseModel):
    type: typing.Literal["nullValue"] = "nullValue"


VariableValue = typing.Union[
    VariableValue_IntegerValue,
    VariableValue_BooleanValue,
    VariableValue_DoubleValue,
    VariableValue_StringValue,
    VariableValue_CharValue,
    VariableValue_MapValue,
    VariableValue_ListValue,
    VariableValue_BinaryTreeValue,
    VariableValue_SinglyLinkedListValue,
    VariableValue_DoublyLinkedListValue,
    VariableValue_NullValue,
]
from .key_value_pair import KeyValuePair  # noqa: E402
from .map_value import MapValue  # noqa: E402

VariableValue_MapValue.update_forward_refs(KeyValuePair=KeyValuePair, MapValue=MapValue, VariableValue=VariableValue)
VariableValue_ListValue.update_forward_refs(KeyValuePair=KeyValuePair, MapValue=MapValue, VariableValue=VariableValue)
