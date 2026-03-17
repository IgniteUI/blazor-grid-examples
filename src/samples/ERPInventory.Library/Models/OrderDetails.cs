using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class OrderDetails
{
    [JsonPropertyName("country")]
    public string? Country { get; set; }

    [JsonPropertyName("city")]
    public string? City { get; set; }

    [JsonPropertyName("zipCode")]
    public int ZipCode { get; set; }

    [JsonPropertyName("streetName")]
    public string? StreetName { get; set; }

    [JsonPropertyName("streetNumber")]
    public string? StreetNumber { get; set; }
}
