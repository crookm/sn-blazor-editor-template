using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using StandardNotesEditor.App;
using StandardNotesEditor.App.Contracts;
using StandardNotesEditor.App.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddSingleton<INoteService, NoteService>();

await builder.Build().RunAsync();