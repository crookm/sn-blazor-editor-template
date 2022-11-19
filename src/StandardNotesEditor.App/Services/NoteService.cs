using Microsoft.JSInterop;
using StandardNotesEditor.App.Contracts;

namespace StandardNotesEditor.App.Services;

public class NoteService : INoteService
{
    private readonly IJSRuntime _jsRuntime;

    public NoteService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task SaveAsync(string content, CancellationToken token = default) =>
        await _jsRuntime.InvokeVoidAsync("EditorBridge.saveNote", token, content);

    public async Task<string> LoadAsync(CancellationToken token = default) =>
        await _jsRuntime.InvokeAsync<string>("EditorBridge.getRawContent", token);
}