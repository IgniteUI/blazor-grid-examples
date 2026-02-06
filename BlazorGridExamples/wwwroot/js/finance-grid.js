// Financial Grid JavaScript Interop

window.initializeFinanceGrid = function (dataJson) {
    const data = JSON.parse(dataJson);
    const grid = document.getElementById('financeGrid');
    
    if (!grid) {
        console.error('Grid element not found');
        return;
    }

    // Set the data
    grid.data = data;

    // Configure columns
    const columns = [
        {
            field: 'id',
            header: 'Symbol',
            width: '7%',
            minWidth: '68px'
        },
        {
            field: 'holdingName',
            header: 'Asset',
            width: '15%',
            minWidth: '100px',
            sortable: true
        },
        {
            field: 'value.currentPrice',
            header: 'Last Price',
            dataType: 'currency',
            width: '10%',
            minWidth: '80px'
        },
        {
            field: 'dailyPercentageChange',
            header: 'Change %',
            dataType: 'percent',
            width: '10%',
            minWidth: '85px'
        },
        {
            field: 'marketValue',
            header: 'Market Value',
            dataType: 'currency',
            width: '10%',
            minWidth: '100px'
        },
        {
            field: 'profitLossValue',
            header: 'NET Profit',
            dataType: 'currency',
            width: '10%',
            minWidth: '90px'
        },
        {
            field: 'profitLossPercentage',
            header: 'NET Profit %',
            dataType: 'percent',
            width: '12%',
            minWidth: '95px'
        },
        {
            field: 'allocation',
            header: 'Allocation',
            dataType: 'percent',
            width: '10%',
            minWidth: '85px'
        }
    ];

    // Clear existing columns
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Add columns to grid
    columns.forEach(colConfig => {
        const column = document.createElement('igc-column');
        column.field = colConfig.field;
        column.header = colConfig.header;
        column.width = colConfig.width;
        
        if (colConfig.minWidth) {
            column.minWidth = colConfig.minWidth;
        }
        
        if (colConfig.dataType) {
            column.dataType = colConfig.dataType;
        }
        
        if (colConfig.sortable) {
            column.sortable = true;
        }
        
        grid.appendChild(column);
    });
};

window.updateFinanceGridData = function (dataJson) {
    const data = JSON.parse(dataJson);
    const grid = document.getElementById('financeGrid');
    
    if (!grid) {
        console.error('Grid element not found');
        return;
    }

    // Update the grid data
    grid.data = data;
};
