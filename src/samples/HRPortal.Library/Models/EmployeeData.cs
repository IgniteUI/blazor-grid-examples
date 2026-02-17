using System.Text.Json.Serialization;

namespace HRPortal.Library.Models;

public class EmployeeData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }
    
    [JsonPropertyName("name")]
    public string? Name { get; set; }
    
    [JsonPropertyName("title")]
    public string? Title { get; set; }
    
    [JsonPropertyName("department")]
    public string? Department { get; set; }
    
    [JsonPropertyName("salary")]
    public double Salary { get; set; }
    
    [JsonPropertyName("hireDate")]
    public DateTime HireDate { get; set; }
    
    [JsonPropertyName("status")]
    public string? Status { get; set; }
    
    [JsonPropertyName("manager")]
    public string? Manager { get; set; }
    
    [JsonPropertyName("location")]
    public string? Location { get; set; }
    
    [JsonPropertyName("performance")]
    public double Performance { get; set; }
}
