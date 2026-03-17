using HRPortal.Components;
using HRPortal.Library.Services;
using IgniteUI.Blazor.Controls;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Register IgniteUI Blazor
builder.Services.AddIgniteUIBlazor();

// Register HttpClient for HRService
builder.Services.AddHttpClient<HRService>();

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
    .AddAdditionalAssemblies(typeof(HRPortal.Library.HRPortalComponent).Assembly);

app.Run();
