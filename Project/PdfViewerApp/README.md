# PDF Viewer Pro

A powerful and customizable PDF viewer application built with Angular. This application provides a rich user interface for viewing PDF documents with advanced features like theme switching, rotation, zooming, and a fully toggleable toolbar system.

## Features

- **Split-Screen Layout**: A modern interface with a dedicated controls panel on the left and the PDF viewer on the right.
- **Theme Support**: Seamlessly switch between **Light** and **Dark** modes for comfortable reading in any environment.
- **Comprehensive Toolbar Control**: Toggle the visibility of every major toolbar control including:
    - Sidebar
    - Find / Search
    - Paging (Next/Prev)
    - Zoom (In/Out/Auto)
    - Presentation Mode
    - Open File
    - Print & Download
    - Secondary Toolbar (Overflow menu)
    - Rotate (Clockwise/Counter-clockwise)
    - Hand Tool & Text Selection
- **High-Fidelity Rendering**: Powered by `ngx-extended-pdf-viewer` for accurate and fast PDF rendering.

## Technical Details

This project is built using **Angular 21** and leverages modern Angular features such as **Standalone Components**.

### Key Components
- **`App` Component**: The main entry point that orchestrates the layout and state. It handles the logic for:
    - Toggling themes (CSS class manipulation).
    - Managing the state of all toolbar buttons via boolean flags.
    - Handling PDF rotation logic.

### Architecture
The application follows a straightforward architecture where the state is managed locally within the main component. `FormsModule` is used for two-way binding of the toggle switches to the application state, which is then passed down to the `ngx-extended-pdf-viewer` component.

## Libraries Used

The project relies on the following key libraries:

- **[Angular](https://angular.io/)** (^21.0.0): The core framework.
- **[ngx-extended-pdf-viewer](https://pdfviewer.net/)** (^25.6.0): The robust PDF viewer library that wraps PDF.js for Angular.
- **TypeScript** (~5.9.2): For type-safe development.

## How to Run

### Prerequisites
Ensure you have **Node.js** installed on your machine.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:

```bash
npm install
```

### Development Server

Run the application in development mode:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```
