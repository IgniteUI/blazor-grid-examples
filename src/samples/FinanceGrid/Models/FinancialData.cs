namespace FinanceGrid.Models;

public class FinancialData
{
    public string? Id { get; set; }
    public string? HoldingName { get; set; }
    public PriceValue? Value { get; set; }
    public int Positions { get; set; }
    public double ProfitLossValue { get; set; }
    public double ProfitLossPercentage { get; set; }
    public double Allocation { get; set; }
    public double MarketValue { get; set; }
    public double InitialPrice { get; set; }
    public double DailyPercentageChange { get; set; }
}

public class PriceValue
{
    public double CurrentPrice { get; set; }
    public double BoughtPrice { get; set; }
}
