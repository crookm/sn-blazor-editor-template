namespace StandardNotesEditor.App.Contracts;

public interface INoteService
{
    /// <summary>
    /// Saves the specified content to the note.
    /// </summary>
    /// <param name="content">The content to save</param>
    /// <param name="token">A cancellation token</param>
    Task SaveAsync(string content, CancellationToken token = default);
    
    /// <summary>
    /// Loads any existing content from the note.
    /// </summary>
    /// <param name="token">A cancellation token</param>
    /// <returns>The existing content of the note</returns>
    Task<string> LoadAsync(CancellationToken token = default);
}