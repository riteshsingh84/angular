import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, NgxMatTimepickerModule],
  styles: [`
    :host { display: block; }
    .full-width { width: 100%; }
  `],
  template: `
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Time</mat-label>
      <input
        matInput
        [readonly]="!allowManualInput"
        [ngxMatTimepicker]="picker"
        [format]="format12h ? 12 : 24"
        [min]="min"
        [max]="max"
        [disableClick]="disableClick"
        [formControl]="timeCtrl"
        [placeholder]="format12h ? 'hh:mm AM' : 'HH:mm'"
      />
      <ngx-mat-timepicker
        #picker
        [color]="color"
      ></ngx-mat-timepicker>
      <ngx-mat-timepicker-toggle matSuffix [for]="picker"></ngx-mat-timepicker-toggle>
    </mat-form-field>
  `,
})
export class TimePickerComponent {
  @Input() allowManualInput = true;
  @Input() format12h = true;
  @Input() min: string = '';
  @Input() max: string = '';
  @Input() disableClick: boolean = true;
  @Input() color: ThemePalette = 'primary';
  @Input() set value(val: string | null) {
    if (val !== null && val !== this.timeCtrl.value) {
      this.timeCtrl.setValue(val, { emitEvent: false });
    }
  }

  @Output() timeChange = new EventEmitter<string>();

  readonly timeCtrl = new FormControl<string>('');

  constructor() {
    this.timeCtrl.valueChanges.subscribe(v => {
      if (typeof v === 'string') {
        this.timeChange.emit(v);
      }
    });
  }
}
