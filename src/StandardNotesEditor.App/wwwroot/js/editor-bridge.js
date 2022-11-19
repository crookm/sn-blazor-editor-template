class EditorBridge {
    #editorKit;
    #editorKitDelegate = {
        setEditorRawText: (text) => this.#setRawContent(text)
    };

    #rawContent = "";

    constructor(mode) {
        this.#editorKit = new vendor.EditorKit(
            this.#editorKitDelegate, {
                mode, supportsFileSafe: false
            });
    }

    #setRawContent(text) {
        this.#rawContent = text;
    }

    getRawContent() {
        return this.#rawContent;
    }

    saveNote(text) {
        try {
            this.#setRawContent(text);
            this.#editorKit.onEditorValueChanged(text);
        } catch (e) {
            console.error("error saving note", e);
        }
    }
}

window.EditorBridge = new EditorBridge("plaintext");
