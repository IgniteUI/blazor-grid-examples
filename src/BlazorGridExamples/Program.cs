using BlazorGridExamples.Components;
using FinanceGrid.Library.Services;
using SalesGrid.Library.Services;
using HRPortal.Library.Services;
using ERPInventory.Library.Services;
using FleetManagement.Library.Services;
using IgniteUI.Blazor.Controls;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Register IgniteUI Blazor
builder.Services.AddIgniteUIBlazor();

// Register HttpClient for all RCL services (except HRService which uses embedded data)
builder.Services.AddHttpClient<FinancialService>();
builder.Services.AddHttpClient<SalesService>();
builder.Services.AddScoped<HRService>();
builder.Services.AddHttpClient<InventoryService>();
builder.Services.AddHttpClient<FleetService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddAdditionalAssemblies(
        typeof(FinanceGrid.Library.FinanceGridComponent).Assembly,
        typeof(SalesGrid.Library.SalesGridComponent).Assembly,
        typeof(HRPortal.Library.HRPortalComponent).Assembly,
        typeof(ERPInventory.Library.ERPInventoryComponent).Assembly,
        typeof(FleetManagement.Library.FleetManagementComponent).Assembly
    );

app.Run();
