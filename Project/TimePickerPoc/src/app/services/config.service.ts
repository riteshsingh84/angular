import { Injectable, effect, signal } from '@angular/core';

export interface TimePickerConfigSettings {
  format12h: boolean;
  allowManualInput: boolean;
  min?: string;
  max?: string;
  openOnInputClick?: boolean;
  themeMode?: 'light' | 'dark';
  themeColor?: 'primary' | 'accent' | 'warn';
}

const STORAGE_KEY = 'timepicker-config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  readonly config = signal<TimePickerConfigSettings>(this.load());

  constructor() {
    effect(() => {
      const value = this.config();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      } catch {
        // ignore storage errors
      }
    });
  }

  private load(): TimePickerConfigSettings {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          format12h: !!parsed.format12h,
          allowManualInput: parsed.allowManualInput !== false,
        };
      }
    } catch {
      // ignore parse errors and fall back to defaults
    }
    return {
      format12h: true,
      allowManualInput: true,
      min: '',
      max: '',
      openOnInputClick: false,
      themeMode: 'light',
      themeColor: 'primary',
    };
  }

  getFormat12h(): boolean {
    return this.config().format12h;
  }

  getAllowManualInput(): boolean {
    return this.config().allowManualInput;
  }

  setFormat12h(v: boolean): void {
    this.config.update(c => ({ ...c, format12h: v }));
  }

  setAllowManualInput(v: boolean): void {
    this.config.update(c => ({ ...c, allowManualInput: v }));
  }

  getMin(): string {
    return this.config().min ?? '00:00';
  }

  getMax(): string {
    return this.config().max ?? '23:59';
  }

  setMin(v: string): void {
    this.config.update(c => ({ ...c, min: v || '' }));
  }

  setMax(v: string): void {
    this.config.update(c => ({ ...c, max: v || '' }));
  }

  getOpenOnInputClick(): boolean {
    return !!this.config().openOnInputClick;
  }

  setOpenOnInputClick(v: boolean): void {
    this.config.update(c => ({ ...c, openOnInputClick: !!v }));
  }

  getThemeMode(): 'light' | 'dark' {
    return (this.config().themeMode ?? 'light');
  }

  setThemeMode(v: 'light' | 'dark'): void {
    this.config.update(c => ({ ...c, themeMode: v }));
  }

  getThemeColor(): 'primary' | 'accent' | 'warn' {
    const c = this.config().themeColor ?? 'primary';
    return (c === 'primary' || c === 'accent' || c === 'warn') ? c : 'primary';
  }

  setThemeColor(v: 'primary' | 'accent' | 'warn'): void {
    this.config.update(c => ({ ...c, themeColor: v }));
  }
}