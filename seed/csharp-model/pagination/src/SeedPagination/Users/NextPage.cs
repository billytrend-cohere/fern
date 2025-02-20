using System.Text.Json.Serialization;

namespace SeedPagination;

public class NextPage
{
    [JsonPropertyName("page")]
    public int Page { get; init; }

    [JsonPropertyName("starting_after")]
    public string StartingAfter { get; init; }
}
