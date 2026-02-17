using System.Text.Json.Serialization;

namespace FleetManagement.Library.Models;

public class FleetData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }
    
    [JsonPropertyName("vehicleId")]
    public string? VehicleId { get; set; }
    
    [JsonPropertyName("make")]
    public string? Make { get; set; }
    
    [JsonPropertyName("model")]
    public string? Model { get; set; }
    
    [JsonPropertyName("year")]
    public int Year { get; set; }
    
    [JsonPropertyName("mileage")]
    public double Mileage { get; set; }
    
    [JsonPropertyName("fuelLevel")]
    public double FuelLevel { get; set; }
    
    [JsonPropertyName("status")]
    public string? Status { get; set; }
    
    [JsonPropertyName("driver")]
    public string? Driver { get; set; }
    
    [JsonPropertyName("location")]
    public string? Location { get; set; }
    
    [JsonPropertyName("lastService")]
    public DateTime LastService { get; set; }
    
    [JsonPropertyName("nextService")]
    public DateTime NextService { get; set; }
}
