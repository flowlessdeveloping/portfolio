import { Injectable, computed, effect, signal } from '@angular/core';

/**
 * Holds the live search query and owns navigation between the `<mark class="hit">`
 * nodes that `HighlightPipe` renders across the page.
 */
@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly _query = signal('');
  private readonly _matchCount = signal(0);
  private readonly _matchIndex = signal(0);
  private frame = 0;

  readonly query = this._query.asReadonly();
  readonly matchCount = this._matchCount.asReadonly();
  readonly matchIndex = this._matchIndex.asReadonly();

  /** Normalised term used by every section filter. */
  readonly term = computed(() => this._query().trim().toLowerCase());
  readonly isActive = computed(() => this.term().length > 0);

  constructor() {
    // Re-scan the DOM once Angular has rendered the new highlights.
    effect(() => {
      this._query();
      this.scheduleScan();
    });
  }

  setQuery(value: string): void {
    this._query.set(value);
    this._matchIndex.set(0);
  }

  clear(): void {
    this.setQuery('');
  }

  next(): void {
    const count = this._matchCount();
    if (count > 0) {
      this._matchIndex.set((this._matchIndex() + 1) % count);
      this.focusCurrent();
    }
  }

  previous(): void {
    const count = this._matchCount();
    if (count > 0) {
      this._matchIndex.set((this._matchIndex() - 1 + count) % count);
      this.focusCurrent();
    }
  }

  /** True when any of `values` contains the current term. */
  matches(...values: (string | string[] | undefined | null)[]): boolean {
    const term = this.term();
    if (!term) {
      return true;
    }
    return values.some((value) => {
      if (!value) {
        return false;
      }
      return Array.isArray(value)
        ? value.some((entry) => entry.toLowerCase().includes(term))
        : value.toLowerCase().includes(term);
    });
  }

  private scheduleScan(): void {
    if (typeof requestAnimationFrame === 'undefined') {
      return;
    }
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      this._matchCount.set(this.hits().length);
      if (this._matchCount() > 0) {
        this.focusCurrent(false);
      }
    });
  }

  private hits(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>('mark.hit'));
  }

  private focusCurrent(scroll = true): void {
    const hits = this.hits();
    hits.forEach((hit) => hit.classList.remove('is-active'));

    const current = hits[this._matchIndex()];
    if (!current) {
      return;
    }
    current.classList.add('is-active');
    if (scroll) {
      current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
