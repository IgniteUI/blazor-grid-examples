using System.Text.Json.Serialization;

namespace ERPInventory.Library.Models;

public class DataPoint
{
    [JsonPropertyName("unitsSold")]
    public int UnitsSold { get; set; }
}
