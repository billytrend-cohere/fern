using System.Text.Json.Serialization;

namespace SeedAudiences;

public class FilteredType
{
    [JsonPropertyName("public_property")]
    public List<string?> PublicProperty { get; init; }

    [JsonPropertyName("private_property")]
    public int PrivateProperty { get; init; }
}
