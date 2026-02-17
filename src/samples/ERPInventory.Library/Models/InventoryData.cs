using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class InventoryData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }
    
    [JsonPropertyName("productName")]
    public string? ProductName { get; set; }
    
    [JsonPropertyName("category")]
    public string? Category { get; set; }
    
    [JsonPropertyName("sku")]
    public string? Sku { get; set; }
    
    [JsonPropertyName("quantity")]
    public int Quantity { get; set; }
    
    [JsonPropertyName("unitPrice")]
    public double UnitPrice { get; set; }
    
    [JsonPropertyName("totalValue")]
    public double TotalValue { get; set; }
    
    [JsonPropertyName("supplier")]
    public string? Supplier { get; set; }
    
    [JsonPropertyName("warehouse")]
    public string? Warehouse { get; set; }
    
    [JsonPropertyName("status")]
    public string? Status { get; set; }
    
    [JsonPropertyName("lastUpdated")]
    public DateTime LastUpdated { get; set; }
}
