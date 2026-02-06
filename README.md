# Blazor Grid Examples

Discover Blazor examples created with Ignite UI components. Explore advanced data grids and high-performance rendering, see real implementations, and learn best practices you can apply to your own apps.

## Home Page
<img src="https://github.com/user-attachments/assets/3bc77b88-8ca2-4c7c-a0a3-2ec77ac127b5" alt="Blazor Grid Examples Home" width="800" />

## Financial Portfolio Example
<img src="https://github.com/user-attachments/assets/97399246-b791-46aa-8de0-7de6afdad9d3" alt="Financial Portfolio Grid" width="800" />

An example app showing assets, profit, and loss analyses with live data updates. Features a high-performance data grid with:
- Real-time price updates every 3 seconds
- Color-coded profit/loss indicators
- Sortable columns
- Responsive design
- NET Profit calculations
- Portfolio allocation tracking

## Getting Started

### Prerequisites
- .NET 8.0 SDK or later
- Node.js and npm (for building web components)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IgniteUI/blazor-grid-examples.git
cd blazor-grid-examples
```

2. Install npm dependencies:
```bash
npm install
```

3. Build and run the Blazor application:
```bash
cd BlazorGridExamples
dotnet run
```

4. Open your browser and navigate to `http://localhost:5096`

## Examples

### Financial Portfolio
**Route:** `/finance-grid`

A Blazor example displaying a financial portfolio with live market data simulation. Demonstrates:
- Data binding and updates
- Conditional styling (profit/loss colors)
- Percentage and currency formatting
- Auto-refresh functionality

### Sales Dashboard
**Route:** `/sales-grid` *(Coming Soon)*

Sales app example with summaries by region, product, and time periods.

### HR Portal  
**Route:** `/hr-portal` *(Coming Soon)*

Example featuring employee information management.

### ERP/Inventory
**Route:** `/erp-hgrid` *(Coming Soon)*

Sample app for ERP/Inventory handling large data volumes.

### Fleet Management
**Route:** `/fleet-management` *(Coming Soon)*

Sample app for managing vehicle acquisition, operations, and maintenance.

## Technology Stack

- **Blazor Server** - .NET 8.0
- **Bootstrap 5** - UI Framework
- **Ignite UI Web Components** - Grid components
- **C#** - Backend logic and services

## Project Structure

```
blazor-grid-examples/
├── BlazorGridExamples/           # Main Blazor application
│   ├── Components/
│   │   ├── Pages/                # Razor pages/components
│   │   │   ├── Home.razor
│   │   │   ├── FinanceGrid.razor
│   │   │   └── ...
│   │   └── Layout/               # Layout components
│   ├── Models/                   # Data models
│   ├── Services/                 # Business logic services
│   ├── wwwroot/                  # Static files
│   │   ├── data/                 # JSON data files
│   │   └── js/                   # JavaScript files
│   └── Program.cs                # Application entry point
├── package.json                  # npm dependencies
└── README.md
```

## Features

- ✅ Real-time data updates
- ✅ Responsive grid layout
- ✅ Color-coded profit/loss indicators
- ✅ Currency and percentage formatting
- ✅ Clean, modern UI
- ✅ Bootstrap integration
- 🚧 Advanced filtering (coming soon)
- 🚧 Column sorting (coming soon)
- 🚧 Export functionality (coming soon)

## License

This project is licensed under the MIT License.

## Related Projects

- [Angular Grid Examples](https://github.com/IgniteUI/angular-grid-examples) - The Angular version this project is based on
- [Ignite UI for Blazor](https://www.infragistics.com/products/ignite-ui-blazor) - Official Ignite UI Blazor components

