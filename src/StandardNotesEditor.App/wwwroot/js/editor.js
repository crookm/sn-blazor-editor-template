class Editor {
    static editorKit;
    static content = "";

    static editorKitDelegate = {
        setEditorRawText: (text) => {
            console.log('asssss', text);
            Editor.setEditorRawText(text);
        },
        clearUndoHistory: () => {
        },
        getElementsBySelector: () => [],
    };

    static initialize() {
        console.log("init in js");
        Editor.editorKit = new vendor.EditorKit(Editor.editorKitDelegate, {mode: 'plaintext', supportsFileSafe: false});
        console.log('done', Editor.editorKit);
    }
    
    static getEditorRawText(){
        return this.content;
    }

    static setEditorRawText(text) {
        console.log("setting content");
        this.content = text;
        // DotNet.invokeMethod("StandardNotesEditor.App", 'setRawContent');
    }

    static saveNote(text) {
        try {
            console.log('will save', text);
            Editor.editorKit.onEditorValueChanged(text);
            console.log('done saving', Editor.editorKit);
        } catch (e) {
            console.error('error saving note', e);
        }
    }
}

window.Editor = Editor;
window.Editor.initialize();
