using System.Text.Json;
using FleetManagement.Library.Models;

namespace FleetManagement.Library.Services;

public class FleetService
{
    private readonly HttpClient _httpClient;
    private const string VehicleDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/vehicles.json";
    private const string DriversDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/drivers.json";
    private const string CostDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/cost.json";
    private const string MaintanenceDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/maintenance.json";
    private const string UtilizationDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/utilization.json";
    private const string TripHistoryDataUrl = "https://www.infragistics.com/grid-examples-data/data/fleet/trip_history.json";

    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public List<FleetData> Data { get; private set; } = new();
    public Dictionary<string, List<MaintenanceData>> MaintenanceData { get; private set; } = new();
    public event Action? OnDataChanged;

    public FleetService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task LoadDataAsync()
    {
        try
        {
            // Load vehicles data
            var vehicleJsonText = await _httpClient.GetStringAsync(VehicleDataUrl);
            Data = JsonSerializer.Deserialize<List<FleetData>>(vehicleJsonText, options) ?? new();

            // Load maintenance data
            try
            {
                var maintenanceJsonText = await _httpClient.GetStringAsync(MaintanenceDataUrl);
                var maintenanceList = JsonSerializer.Deserialize<List<MaintenanceData>>(maintenanceJsonText, options) ?? new();

                // Group maintenance records by vehicleId
                MaintenanceData = maintenanceList
                    .GroupBy(m => m.VehicleId ?? string.Empty)
                    .ToDictionary(g => g.Key, g => g.ToList());
            }
            catch
            {
                // Maintenance data is optional - continue if it fails
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
            // Simulate live data updates - randomly adjust mileage and fuel level
            var mileageIncrease = Random.Shared.NextDouble() * 5; // 0-5 miles increase
            dataRow.Mileage += Math.Round(mileageIncrease, 1);
            
            var fuelDecrease = Random.Shared.NextDouble() * 2; // 0-2% fuel decrease
            dataRow.FuelLevel = Math.Max(0, dataRow.FuelLevel - fuelDecrease);
            dataRow.FuelLevel = Math.Round(dataRow.FuelLevel, 1);
        }

        OnDataChanged?.Invoke();
    }

    public List<MaintenanceData> GetMaintenanceForVehicle(string? vehicleId)
    {
        if (string.IsNullOrEmpty(vehicleId) || !MaintenanceData.ContainsKey(vehicleId))
        {
            return new List<MaintenanceData>();
        }
        return MaintenanceData[vehicleId];
    }
}
