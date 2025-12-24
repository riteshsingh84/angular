# Timepicker POC (Angular 20, Zoneless)

Zoneless Angular 20 POC demonstrating a Material-styled time picker using `ngx-mat-timepicker`, with toggles for 12h/24h format and manual input.

## Quick Start

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Build

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Notes

- Zoneless change detection is enabled in `src/app/app.config.ts` using `provideZonelessChangeDetection()`.
- Only required Angular Material modules are imported in components.
- The `TimePickerComponent` is standalone and emits the selected time via `timeChange`.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
