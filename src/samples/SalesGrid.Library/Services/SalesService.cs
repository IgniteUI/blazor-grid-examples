using System.Text.Json;
using SalesGrid.Library.Models;

namespace SalesGrid.Library.Services;

public class SalesService
{
    private readonly HttpClient _httpClient;
    private const string DataUrl = "https://www.infragistics.com/grid-examples-data/data/sales/sales.json";

    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public List<SalesData> Data { get; private set; } = new();
    public event Action? OnDataChanged;

    public SalesService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task LoadDataAsync()
    {
        try
        {
            var jsonText = await _httpClient.GetStringAsync(DataUrl);
            Data = JsonSerializer.Deserialize<List<SalesData>>(jsonText, options) ?? new();
            
            // Calculate derived fields
            foreach (var record in Data)
            {
                record.Profit = Math.Round(record.Value - (record.Value * record.Discount), 2);
            }

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
            // Simulate live data updates - randomly adjust amount and recalculate
            var volatility = 0.05;
            var rnd = Math.Round(Random.Shared.NextDouble(), 2);
            var changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
            {
                changePercent -= 2 * volatility;
            }

            var changeAmount = dataRow.Amount * changePercent;
            dataRow.Amount = Math.Max(1, dataRow.Amount + changeAmount);
            
            dataRow.Value = Math.Round(dataRow.Amount * GetRandomPrice(), 2);
            dataRow.Profit = Math.Round(dataRow.Value - (dataRow.Value * dataRow.Discount), 2);
        }

        OnDataChanged?.Invoke();
    }

    private double GetRandomPrice()
    {
        return 50 + (Random.Shared.NextDouble() * 450); // Random price between 50 and 500
    }
}
