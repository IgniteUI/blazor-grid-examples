using System.Text.Json.Serialization;

namespace SalesGrid.Library.Models;

public class SalesData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }
    
    [JsonPropertyName("product")]
    public string? Product { get; set; }
    
    [JsonPropertyName("salesPerson")]
    public string? SalesPerson { get; set; }
    
    [JsonPropertyName("amount")]
    public double Amount { get; set; }
    
    [JsonPropertyName("value")]
    public double Value { get; set; }
    
    [JsonPropertyName("discount")]
    public double Discount { get; set; }
    
    [JsonPropertyName("profit")]
    public double Profit { get; set; }
    
    [JsonPropertyName("status")]
    public string? Status { get; set; }
    
    [JsonPropertyName("region")]
    public string? Region { get; set; }
    
    [JsonPropertyName("date")]
    public DateTime Date { get; set; }
}
