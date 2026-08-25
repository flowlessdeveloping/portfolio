import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const THEME_KEY = 'cv.theme';

function detectTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<Theme>(detectTheme());
  readonly theme = this._theme.asReadonly();

  constructor() {
    effect(() => {
      const theme = this._theme();
      document.documentElement.dataset['theme'] = theme;
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch {
        /* ignore */
      }
    });
  }

  toggle(): void {
    this._theme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }
}
