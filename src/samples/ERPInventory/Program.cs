using ERPInventory.Components;
using ERPInventory.Library.Services;
using IgniteUI.Blazor.Controls;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Register IgniteUI Blazor
builder.Services.AddIgniteUIBlazor();

// Register HttpClient for InventoryService
builder.Services.AddHttpClient<InventoryService>();

// Register custom services
builder.Services.AddScoped<InventoryService>();

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
    .AddAdditionalAssemblies(typeof(ERPInventory.Library.ERPInventoryComponent).Assembly);

app.Run();
