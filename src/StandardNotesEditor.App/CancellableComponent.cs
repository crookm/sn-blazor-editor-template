using Microsoft.AspNetCore.Components;

namespace StandardNotesEditor.App;

public class CancellableComponent : ComponentBase, IDisposable
{
    private readonly CancellationTokenSource _cts = new();

    internal CancellationToken CancellationToken => _cts.Token;

    public void Dispose()
    {
        _cts.Cancel();
        _cts.Dispose();
    }
}