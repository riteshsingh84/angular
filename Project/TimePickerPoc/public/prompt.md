You are an Angular Expert and UI/UX Architect.

Generate a complete Angular 20 (zoneless) application as a Proof of Concept (POC) for a Time Picker using the library:
https://github.com/tonysamperi/ngx-mat-timepicker.

Requirements:
1. Create a standalone component `TimePickerComponent` that:
   - Uses `ngx-mat-timepicker` for time selection.
   - Allows manual time input.
   - Supports both 12-hour and 24-hour formats.
   - Emits selected time via EventEmitter.
2. Application must:
   - Be zoneless (Angular 20+).
   - Import only necessary Angular Material modules (avoid full library).
   - Include dynamic configuration toggles for:
     - Time format (12h/24h)
     - Enable/disable manual input
     - Responsive design for mobile and desktop
Output:
  - Working Angular app with all features implemented
Ensure the code is ready to run after `npm install` and `ng serve`.