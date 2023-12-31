# Standard Notes Blazor Editor Template

This template repository contains the framework for building a [Standard Notes](https://standardnotes.com) editor
using [Blazor WebAssembly](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor), a .NET web application framework.

## Getting started

### Requirements

* .NET 8 SDK
* Node v20+ (LTS)

To get started with this repo, fork or click the 'use template' button at the top of the [Github page](https://github.com/crookm/sn-blazor-editor-template) to create a copy for you
to modify.

Modify the extension definition in the file `src/StandardNotesEditor.App/wwwroot/ext.json` to suit your project (identifier, name, and version will likely need to be adjusted).

Build and run the `StandardNotesEditor.App` project, and browse to `http://localhost:5207` to see a limited preview outside of the Standard Notes app. To view within the app,
browse to `settings > plugins > install custom plugin` (at the bottom of the list). Input the address `http://localhost:5207/ext.json` into the input box and click install. When
editing a note, selecting an editor should display your new extension in the list.

Depending on how your editor is storing data, you may wish to change `plaintext` to `html` or `json` on L36 of `src/StandardNotesEditor.App/frontend/src/index.js`.

### Notable files

* `src/StandardNotesEditor.App/Pages/Index.razor`
    * Contains the editor elements and the trigger to save the note content

* `src/StandardNotesEditor.App/Services/NoteService.cs`
    * Contains the code which bridges between .NET and JS

* `src/StandardNotesEditor.App/frontend/src/index.js`
    * Contains the code which interacts with the Standard Notes editor API

* `src/StandardNotesEditor.App/frontend/src/stylesheet.scss`
    * Contains the global styles for the application, including the Standard Notes stylekit

* `src/StandardNotesEditor.App/wwwroot/ext.json`
    * Contains the definition of the Standard Notes extension, which will need to be modified to suit your project

## Publishing

Please refer to the [Standard Notes documentation](https://docs.standardnotes.com/extensions/publishing) for information about publishing your editor.

## Contributing

Contributions to this project are welcome, please create an issue to propose any changes before opening a pull request.

Note that all changes must be licensed under the AGPL-3.0 license, as this project integrates with the Standard Notes APIs and SDKs, which make use of this license.