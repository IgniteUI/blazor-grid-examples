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
                record.TotalValue = Math.Round(record.Quantity * record.UnitPrice, 2);
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
            // Simulate live data updates - randomly adjust quantity
            var volatility = 0.05;
            var rnd = Math.Round(Random.Shared.NextDouble(), 2);
            var changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
            {
                changePercent -= 2 * volatility;
            }

            var changeAmount = dataRow.Quantity * changePercent;
            var newQuantity = dataRow.Quantity + (int)Math.Round(changeAmount);
            dataRow.Quantity = Math.Max(0, newQuantity);
            
            dataRow.TotalValue = Math.Round(dataRow.Quantity * dataRow.UnitPrice, 2);
            dataRow.LastUpdated = DateTime.Now;
        }

        OnDataChanged?.Invoke();
    }
}
