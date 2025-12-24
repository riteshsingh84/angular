import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, TimePickerComponent, MatSlideToggleModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  // styles merged into global styles.scss
})
export class App {
  protected title = 'timepicker-poc';
  constructor(private config: ConfigService, private overlay: OverlayContainer) {
    this.format12h = this.config.getFormat12h();
    this.allowManualInput = this.config.getAllowManualInput();
    this.minTime = this.config.getMin();
    this.maxTime = this.config.getMax();
    this.openOnInputClick = this.config.getOpenOnInputClick();
    this.themeMode = this.config.getThemeMode();
    this.themeColor = this.config.getThemeColor();
    this.applyThemeClass();
  }

  format12h!: boolean;
  allowManualInput!: boolean;
  selectedTime = '';
  minTime!: string;
  maxTime!: string;
  openOnInputClick!: boolean;
  themeMode!: 'light' | 'dark';
  themeColor!: 'primary' | 'accent' | 'warn';

  onTimeChange(time: string) {
    this.selectedTime = time;
  }

  onFormatChange(val: '12' | '24') {
    this.config.setFormat12h(val === '12');
    this.format12h = this.config.getFormat12h();
  }

  onManualInputChange(v: boolean) {
    this.config.setAllowManualInput(v);
    this.allowManualInput = this.config.getAllowManualInput();
  }

  onMinChange(v: string) {
    this.config.setMin(v);
    this.minTime = this.config.getMin();
  }

  onMaxChange(v: string) {
    this.config.setMax(v);
    this.maxTime = this.config.getMax();
  }

  onOpenOnInputClickChange(v: boolean) {
    this.config.setOpenOnInputClick(v);
    this.openOnInputClick = this.config.getOpenOnInputClick();
  }

  onThemeModeChange(v: 'light' | 'dark') {
    this.config.setThemeMode(v);
    this.themeMode = this.config.getThemeMode();
    this.applyThemeClass();
  }

  onThemeColorChange(v: 'primary' | 'accent' | 'warn') {
    this.config.setThemeColor(v);
    this.themeColor = this.config.getThemeColor();
  }

  private applyThemeClass() {
    const darkClass = 'app-dark-theme';
    const container = this.overlay.getContainerElement();
    if (this.themeMode === 'dark') {
      document.body.classList.add(darkClass);
      container.classList.add(darkClass);
    } else {
      document.body.classList.remove(darkClass);
      container.classList.remove(darkClass);
    }
  }
}
