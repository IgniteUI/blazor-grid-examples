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

**Technologies:** IgbGrid, IgniteUI.Blazor.Trial, Blazor Server

### 2. Sales Dashboard
**Port:** 5002 | **Status:** 🚧 Planned

Sales app example with summaries by region, product, and time periods.

**Technologies:** IgbPivotGrid (Planned)

### 3. HR Portal
**Port:** 5003 | **Status:** 🚧 Planned

Example featuring employee information management.

**Technologies:** IgbTreeGrid (Planned)

### 4. ERP/Inventory
**Port:** 5004 | **Status:** 🚧 Planned

Sample app for ERP/Inventory handling large data volumes.

**Technologies:** IgbHierarchicalGrid (Planned)

### 5. Fleet Management
**Port:** 5005 | **Status:** 🚧 Planned

Sample app for managing vehicle acquisition, operations, and maintenance.

**Technologies:** IgbGrid with Master-Detail (Planned)

## Project Architecture

### Main Navigation Application
The main application (`src/BlazorGridExamples`) provides:
- Horizontal tab navigation matching Angular examples
- Sample information display with Download button
- Theme/Mode switcher
- Fullscreen toggle
- iframe-based hosting of sample applications

### Sample Projects
Each sample is a standalone Blazor Server project that can be:
- Downloaded individually
- Run independently
- Modified without affecting other samples
- Deployed separately

## Download Samples

Individual samples can be downloaded directly from the navigation application using the Download button in each sample's info bar.

## Technology Stack

- **Blazor Server** - .NET 8.0
- **IgniteUI.Blazor.Trial** - v25.2.38
- **Bootstrap 5** - UI Framework
- **C#** - Backend logic and services

## License

This project is licensed under the MIT License.

## Related Projects

- [Angular Grid Examples](https://github.com/IgniteUI/angular-grid-examples) - The Angular version this project mirrors
- [Ignite UI for Blazor](https://www.infragistics.com/products/ignite-ui-blazor) - Official Ignite UI Blazor components

## Note

This project uses `IgniteUI.Blazor.Trial` package which includes trial watermark overlay. Commercial license required for production use.
