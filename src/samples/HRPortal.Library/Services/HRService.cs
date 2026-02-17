using System.Text.Json;
using HRPortal.Library.Models;

namespace HRPortal.Library.Services;

public class HRService
{
    private readonly HttpClient _httpClient;
    private const string DataUrl = "https://www.infragistics.com/grid-examples-data/data/hr/hr.json";

    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public List<EmployeeData> Data { get; private set; } = new();
    public event Action? OnDataChanged;

    public HRService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task LoadDataAsync()
    {
        try
        {
            var jsonText = await _httpClient.GetStringAsync(DataUrl);
            Data = JsonSerializer.Deserialize<List<EmployeeData>>(jsonText, options) ?? new();

            OnDataChanged?.Invoke();
        }
        catch (Exception)
        {
            // Failed to load data - Data list remains empty
        }
    }

    public void UpdateAllData()
    {
        foreach (var dataRow in Data)
        {
            // Simulate live data updates - randomly adjust performance scores
            var volatility = 0.02;
            var rnd = Math.Round(Random.Shared.NextDouble(), 2);
            var changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
            {
                changePercent -= 2 * volatility;
            }

            var changeAmount = dataRow.Performance * changePercent;
            dataRow.Performance = Math.Max(0, Math.Min(5.0, dataRow.Performance + changeAmount));
            dataRow.Performance = Math.Round(dataRow.Performance, 2);
        }

        OnDataChanged?.Invoke();
    }
}
