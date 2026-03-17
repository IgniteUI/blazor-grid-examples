using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class Order
{
    [JsonPropertyName("orderId")]
    public int OrderId { get; set; }

    [JsonPropertyName("status")]
    public string? Status { get; set; }

    [JsonPropertyName("delivery")]
    public DeliveryDetails Delivery { get; set; } = new();

    [JsonPropertyName("orderInformation")]
    public OrderDetails OrderInformation { get; set; } = new();
}
