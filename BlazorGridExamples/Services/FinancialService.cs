using System.Net.Http.Json;
using System.Text.Json;
using BlazorGridExamples.Models;

namespace BlazorGridExamples.Services;

public class FinancialService
{
    private readonly HttpClient _httpClient;
    private const string DataUrl = "https://www.infragistics.com/grid-examples-data/data/finance/finance.json";

    public List<FinancialData> Data { get; private set; } = new();
    public event Action? OnDataChanged;

    public FinancialService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task LoadDataAsync()
    {
        try
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            Data = await _httpClient.GetFromJsonAsync<List<FinancialData>>(DataUrl, options) ?? new();
            
            // Calculate derived fields
            var totalPortfolioInvestment = Data.Sum(x => x.Value!.BoughtPrice * x.Positions);
            
            foreach (var record in Data)
            {
                if (record.Value != null)
                {
                    record.ProfitLossValue = CalculateProfitLossValue(
                        record.Value.CurrentPrice,
                        record.Value.BoughtPrice,
                        record.Positions);
                    
                    record.ProfitLossPercentage = CalculateProfitLossPercentage(
                        record.ProfitLossValue,
                        record.Value.BoughtPrice,
                        record.Positions);
                    
                    var totalInitialInvestment = record.Value.BoughtPrice * record.Positions;
                    record.Allocation = Math.Round(totalInitialInvestment / totalPortfolioInvestment, 4);
                    record.MarketValue = Math.Round(record.Value.CurrentPrice * record.Positions, 2);
                    record.InitialPrice = record.Value.CurrentPrice;
                    record.DailyPercentageChange = 0;
                }
            }

            OnDataChanged?.Invoke();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading data: {ex.Message}");
        }
    }

    public void UpdateAllPrices()
    {
        foreach (var dataRow in Data)
        {
            if (dataRow.Value == null) continue;

            var randomizedData = RandomizeData(dataRow);
            dataRow.Value.CurrentPrice = randomizedData.NewPrice;
            dataRow.ProfitLossValue = randomizedData.ProfitLossValue;
            dataRow.ProfitLossPercentage = randomizedData.ProfitLossPercentage;
            dataRow.MarketValue = randomizedData.MarketValue;
            dataRow.DailyPercentageChange = randomizedData.DailyPercentageChange;
        }

        OnDataChanged?.Invoke();
    }

    private double CalculateProfitLossValue(double currentPrice, double boughtPrice, int positions)
    {
        var profitLossValue = (currentPrice - boughtPrice) * positions;
        return Math.Round(profitLossValue, 2);
    }

    private double CalculateProfitLossPercentage(double profitLossValue, double boughtPrice, int positions)
    {
        var totalInitialInvestment = boughtPrice * positions;
        var profitLossPercentage = profitLossValue / totalInitialInvestment;
        return Math.Round(profitLossPercentage, 4);
    }

    private double CalculateDailyPercentageChange(double initialPrice, double finalPrice)
    {
        var priceDifference = finalPrice - initialPrice;
        return (priceDifference / initialPrice) * 100;
    }

    private (double NewPrice, double ProfitLossValue, double ProfitLossPercentage, double MarketValue, double DailyPercentageChange) 
        RandomizeData(FinancialData dataRow)
    {
        if (dataRow.Value == null)
            return (0, 0, 0, 0, 0);

        var rnd = Math.Round(Random.Shared.NextDouble(), 2);
        var volatility = 0.01;

        var changePercent = 2 * volatility * rnd;
        if (changePercent > volatility)
        {
            changePercent -= 2 * volatility;
        }

        var changeAmount = dataRow.Value.CurrentPrice * (changePercent / 100);
        var newPrice = Math.Round(dataRow.Value.CurrentPrice + changeAmount, 2);
        var newProfitLossValue = CalculateProfitLossValue(newPrice, dataRow.Value.BoughtPrice, dataRow.Positions);
        var newProfitLossPercentage = CalculateProfitLossPercentage(newProfitLossValue, dataRow.Value.BoughtPrice, dataRow.Positions);
        var newMarketValue = Math.Round(newPrice * dataRow.Positions, 2);
        var newDailyPercentage = CalculateDailyPercentageChange(dataRow.InitialPrice, newPrice);

        return (newPrice, newProfitLossValue, newProfitLossPercentage, newMarketValue, newDailyPercentage);
    }
}
