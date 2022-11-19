using Microsoft.JSInterop;

namespace StandardNotesEditor.App;

public static class ContentManager
{
    private static string _content = string.Empty;

    public static event EventHandler? ContentChanged;
    
    [JSInvokable(identifier: "setRawContent")]
    public static void SetRawContent(string content)
    {
        _content = content;
        OnContentChanged();
    }

    public static string GetRawContent() => _content;

    private static void OnContentChanged()
    {
        ContentChanged?.Invoke(null, EventArgs.Empty);
    }
}