using System.Text.Json.Serialization;

namespace FinanceGrid.Library.Models;

public class FinancialData
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }
    
    [JsonPropertyName("holdingName")]
    public string? HoldingName { get; set; }
    
    [JsonPropertyName("value")]
    public PriceValue? Value { get; set; }
    
    [JsonPropertyName("positions")]
    public int Positions { get; set; }
    
    [JsonPropertyName("profitLossValue")]
    public double ProfitLossValue { get; set; }
    
    [JsonPropertyName("profitLossPercentage")]
    public double ProfitLossPercentage { get; set; }
    
    [JsonPropertyName("allocation")]
    public double Allocation { get; set; }
    
    [JsonPropertyName("marketValue")]
    public double MarketValue { get; set; }
    
    [JsonPropertyName("initialPrice")]
    public double InitialPrice { get; set; }
    
    [JsonPropertyName("dailyPercentageChange")]
    public double DailyPercentageChange { get; set; }
}

public class PriceValue
{
    [JsonPropertyName("currentPrice")]
    public double CurrentPrice { get; set; }
    
    [JsonPropertyName("boughtPrice")]
    public double BoughtPrice { get; set; }
}
