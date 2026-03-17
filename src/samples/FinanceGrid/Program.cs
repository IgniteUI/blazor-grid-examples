using FinanceGrid.Components;
using FinanceGrid.Library.Services;
using IgniteUI.Blazor.Controls;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Register IgniteUI Blazor
builder.Services.AddIgniteUIBlazor();

// Register HttpClient for FinancialService
builder.Services.AddHttpClient<FinancialService>();

// Register custom services
builder.Services.AddScoped<FinancialService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
}

app.UseAntiforgery();
app.UseStaticFiles();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddAdditionalAssemblies(typeof(FinanceGrid.Library.FinanceGridComponent).Assembly);

app.Run();
