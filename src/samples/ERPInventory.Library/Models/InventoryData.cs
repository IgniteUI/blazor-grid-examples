using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class InventoryData
{
    [JsonPropertyName("sku")]
    public string? Sku { get; set; }

    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; set; }

    [JsonPropertyName("productName")]
    public string? ProductName { get; set; }

    [JsonPropertyName("category")]
    public string? Category { get; set; }

    [JsonPropertyName("rating")]
    public double Rating { get; set; }

    [JsonPropertyName("unitsSold")]
    public int UnitsSold { get; set; }

    [JsonPropertyName("grossPrice")]
    public double GrossPrice { get; set; }

    [JsonPropertyName("netPrice")]
    public double NetPrice { get; set; }

    [JsonPropertyName("totalNetProfit")]
    public double TotalNetProfit { get; set; }

    [JsonPropertyName("salesTrendData")]
    public List<DataPoint> SalesTrendData { get; set; } = new();

    [JsonPropertyName("orders")]
    public List<Order> Orders { get; set; } = new();
}
