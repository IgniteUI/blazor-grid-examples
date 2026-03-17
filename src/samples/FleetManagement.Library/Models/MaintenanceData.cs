using System.Text.Json.Serialization;

namespace FleetManagement.Library.Models;

public class MaintenanceData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }

    [JsonPropertyName("vehicleId")]
    public string? VehicleId { get; set; }

    [JsonPropertyName("date")]
    public DateTime Date { get; set; }

    [JsonPropertyName("type")]
    public string? Type { get; set; }

    [JsonPropertyName("description")]
    public string? Description { get; set; }

    [JsonPropertyName("cost")]
    public double Cost { get; set; }

    [JsonPropertyName("technician")]
    public string? Technician { get; set; }

    [JsonPropertyName("status")]
    public string? Status { get; set; }

    [JsonPropertyName("mileage")]
    public double Mileage { get; set; }
}
