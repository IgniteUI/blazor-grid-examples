using System.Text.Json.Serialization;

namespace HRPortal.Library.Models;

public class EmployeeData
{
    [JsonPropertyName("ID")]
    public int Id { get; set; }

    [JsonPropertyName("ParentID")]
    public int? ParentId { get; set; }

    [JsonPropertyName("Name")]
    public string? Name { get; set; }

    [JsonPropertyName("JobTitle")]
    public string? Title { get; set; }

    [JsonPropertyName("Department")]
    public string? Department { get; set; }

    [JsonPropertyName("GrossSalary")]
    public double Salary { get; set; }

    [JsonPropertyName("HireDate")]
    public DateTime HireDate { get; set; }

    [JsonPropertyName("Status")]
    public string? Status { get; set; }

    [JsonPropertyName("Manager")]
    public string? Manager { get; set; }

    [JsonPropertyName("Location")]
    public string? Location { get; set; }

    [JsonPropertyName("Performance")]
    public double? Performance { get; set; }

    [JsonPropertyName("Picture")]
    public string? Picture { get; set; }

    [JsonPropertyName("Employees")]
    public List<EmployeeData>? Employees { get; set; }
}
