using System.Text.Json;
using ERPInventory.Library.Models;

namespace ERPInventory.Library.Services;

public class InventoryService
{
    private readonly HttpClient _httpClient;
    private const string DataUrl = "https://www.infragistics.com/grid-examples-data/data/erp/products.json";

    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public List<InventoryData> Data { get; private set; } = new();
    public event Action? OnDataChanged;

    public InventoryService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task LoadDataAsync()
    {
        try
        {
            var jsonText = await _httpClient.GetStringAsync(DataUrl);
            Data = JsonSerializer.Deserialize<List<InventoryData>>(jsonText, options) ?? new();

            // Calculate derived fields
            foreach (var record in Data)
            {
                // Set unitsSold from last month's sales data
                if (record.SalesTrendData.Count > 0)
                {
                    record.UnitsSold = record.SalesTrendData[^1].UnitsSold;
                }

                // Calculate totalNetProfit
                record.TotalNetProfit = Math.Round(record.UnitsSold * record.NetPrice, 2);
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
            // Simulate live data updates - randomly adjust units sold
            var volatility = 0.05;
            var rnd = Math.Round(Random.Shared.NextDouble(), 2);
            var changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
            {
                changePercent -= 2 * volatility;
            }

            var changeAmount = dataRow.UnitsSold * changePercent;
            var newUnitsSold = dataRow.UnitsSold + (int)Math.Round(changeAmount);
            dataRow.UnitsSold = Math.Max(0, newUnitsSold);

            dataRow.TotalNetProfit = Math.Round(dataRow.UnitsSold * dataRow.NetPrice, 2);
        }

        OnDataChanged?.Invoke();
    }
}
