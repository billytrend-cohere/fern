# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedUnknownAsAny, SeedUnknownAsAny

from .utilities import validate_response


async def test_post(client: SeedUnknownAsAny, async_client: AsyncSeedUnknownAsAny) -> None:
    expected_response = [{"key": "value"}]
    response = client.unknown.post(request={"key": "value"})
    validate_response(response, expected_response)

    async_response = await async_client.unknown.post(request={"key": "value"})
    validate_response(async_response, expected_response)