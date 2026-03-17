using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class DeliveryDetails
{
    [JsonPropertyName("dateOrdered")]
    public string? DateOrdered { get; set; }

    [JsonPropertyName("dateShipped")]
    public string? DateShipped { get; set; }

    [JsonPropertyName("dateDelivered")]
    public string? DateDelivered { get; set; }
}
