# Blazor Grid Examples

Discover Blazor examples created with Ignite UI for Blazor. Explore advanced data grids, see real implementations, and learn best practices you can apply to your own apps.

## Repository Structure

```
blazor-grid-examples/
├── BlazorGridExamples.slnx        # Solution file
├── src/
│   ├── BlazorGridExamples/        # Main navigation/landing application
│   └── samples/                   # Individual sample projects
│       ├── FinanceGrid/           # Financial Portfolio sample
│       ├── SalesGrid/             # Sales Dashboard sample
│       ├── HRPortal/              # HR Portal sample
│       ├── ERPInventory/          # ERP/Inventory sample
│       └── FleetManagement/       # Fleet Management sample
└── README.md
```

## Getting Started

### Prerequisites
- .NET 8.0 SDK or later
- A code editor (Visual Studio, VS Code, or Rider)

### Running All Samples

To run all samples together with the navigation application:

1. Clone the repository:
```bash
git clone https://github.com/IgniteUI/blazor-grid-examples.git
cd blazor-grid-examples
```

2. Start each sample project in separate terminals:

**Terminal 1 - Main Navigation (Port 5000):**
```bash
cd src/BlazorGridExamples
dotnet run
```

**Terminal 2 - Finance Grid (Port 5001):**
```bash
cd src/samples/FinanceGrid
dotnet run
```

**Terminal 3 - Sales Grid (Port 5002):**
```bash
cd src/samples/SalesGrid
dotnet run
```

**Terminal 4 - HR Portal (Port 5003):**
```bash
cd src/samples/HRPortal
dotnet run
```

**Terminal 5 - ERP/Inventory (Port 5004):**
```bash
cd src/samples/ERPInventory
dotnet run
```

**Terminal 6 - Fleet Management (Port 5005):**
```bash
cd src/samples/FleetManagement
dotnet run
```

3. Open your browser and navigate to `http://localhost:5000`

### Running Individual Samples

Each sample can be run independently:

```bash
cd src/samples/FinanceGrid
dotnet run
```

Then navigate to `http://localhost:5001` (or the appropriate port for your sample).

## Available Samples

### 1. Financial Portfolio
**Port:** 5001 | **Status:** ✅ Implemented

A Blazor example displaying a financial portfolio with live market data simulation. Features:
- IgbGrid component with 8 columns
- Real-time price updates every 3 seconds
- Color-coded profit/loss indicators
- Sortable and filterable columns
- Currency and percentage formatting
- Uses Infragistics data endpoint: https://www.infragistics.com/grid-examples-data/data/finance/finance.json

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

### 2. Sales Dashboard
**Port:** 5002 | **Status:** ✅ Implemented

A Blazor example displaying sales data with live updates. Features:
- IgbGrid component with 10 columns (Product, Sales Person, Amount, Value, Discount, Profit, Status, Region, Date)
- Real-time data updates every 3 seconds
- Sortable and filterable columns
- Currency and percentage formatting
- Uses Infragistics data endpoint: https://www.infragistics.com/grid-examples-data/data/sales/sales.json

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

### 3. HR Portal
**Port:** 5003 | **Status:** ✅ Implemented

Example featuring employee information management with live performance tracking. Features:
- IgbGrid component with 10 columns (Name, Title, Department, Salary, Hire Date, Status, Manager, Location, Performance)
- Real-time performance score updates
- Sortable and filterable columns
- Date and number formatting
- Uses Infragistics data endpoint: https://www.infragistics.com/grid-examples-data/data/hr/hr.json

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

### 4. ERP/Inventory
**Port:** 5004 | **Status:** ✅ Implemented

Sample app for ERP/Inventory handling with real-time stock level monitoring. Features:
- IgbGrid component with 10 columns (Product Name, Category, SKU, Quantity, Unit Price, Total Value, Supplier, Warehouse, Status)
- Real-time quantity updates
- Automatic total value calculations
- Sortable and filterable columns
- Uses Infragistics data endpoint: https://www.infragistics.com/grid-examples-data/data/inventory/inventory.json

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

### 5. Fleet Management
**Port:** 5005 | **Status:** ✅ Implemented

Sample app for managing vehicle fleet with real-time tracking. Features:
- IgbGrid component with 10 columns (Vehicle ID, Make, Model, Year, Mileage, Fuel Level, Status, Driver, Location)
- Real-time mileage and fuel level updates
- Sortable and filterable columns
- Date and number formatting
- Uses Infragistics data endpoint: https://www.infragistics.com/grid-examples-data/data/fleet/fleet.json

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

## Project Architecture

### RCL (Razor Class Library) Architecture
Each sample follows a modular RCL architecture pattern:

**Library Projects (RCL):**
- `{SampleName}.Library/` - Reusable Razor Class Library containing:
  - `Models/` - Data models with JsonPropertyName attributes
  - `Services/` - HttpClient-based data services with live update logic
  - `{SampleName}Component.razor` - Main grid component
  - Dependencies: IgniteUI.Blazor.Trial, Microsoft.AspNetCore.Components.Web

**Standalone Projects:**
- `{SampleName}/` - Blazor Server application that:
  - References the RCL
  - Registers services and HttpClient
  - Hosts the component on the home page
  - Can be run independently or downloaded

**Benefits:**
- Component reusability across projects
- Clean separation of concerns
- Easy distribution and deployment
- Independent testing and development

### Main Navigation Application
The main application (`src/BlazorGridExamples`) currently provides:
- Horizontal tab navigation matching Angular examples
- Sample information display
- Theme/Mode switcher

Planned enhancements (not yet implemented in the UI):
- Download button for each sample
- Fullscreen toggle
- iframe-based hosting of sample applications

### Sample Projects
Each sample is a standalone Blazor Server project that can be:
- Run independently
- Modified without affecting other samples
- Deployed separately

## Download Samples

Support for downloading individual samples directly from the navigation application is planned but not yet implemented. For now, you can clone this repository and run each sample project from the `src/samples` folder.

## Technology Stack

- **Blazor Server** - .NET 8.0
- **IgniteUI.Blazor.Trial** - v25.2.38
- **Bootstrap 5** - UI Framework
- **C#** - Backend logic and services

## Data Sources

All samples use the same data endpoints as the Angular grid examples from https://www.infragistics.com/grid-examples-data. This ensures consistency between Blazor and Angular implementations.

Data endpoints:
- Finance: https://www.infragistics.com/grid-examples-data/data/finance/finance.json
- Sales: https://www.infragistics.com/grid-examples-data/data/sales/sales.json
- HR: https://www.infragistics.com/grid-examples-data/data/hr/hr.json
- Inventory: https://www.infragistics.com/grid-examples-data/data/inventory/inventory.json
- Fleet: https://www.infragistics.com/grid-examples-data/data/fleet/fleet.json

## License

This project is licensed under the MIT License.

## Related Projects

- [Angular Grid Examples](https://github.com/IgniteUI/angular-grid-examples) - The Angular version this project mirrors
- [Ignite UI for Blazor](https://www.infragistics.com/products/ignite-ui-blazor) - Official Ignite UI Blazor components

## Note

This project uses `IgniteUI.Blazor.Trial` package which includes trial watermark overlay. Commercial license required for production use.
