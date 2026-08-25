import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Wraps every occurrence of `query` in `<mark class="hit">`.
 *
 * The source text is HTML-escaped before the marks are injected, so the
 * `bypassSecurityTrustHtml` below can only ever emit our own markup.
 */
@Pipe({ name: 'highlight', standalone: true })
export class HighlightPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined, query: string): SafeHtml {
    if (!value) {
      return '';
    }

    const escaped = escapeHtml(value);
    const term = query?.trim();
    if (!term) {
      return escaped;
    }

    const marked = escaped.replace(
      new RegExp(`(${escapeRegExp(escapeHtml(term))})`, 'gi'),
      '<mark class="hit">$1</mark>'
    );
    return this.sanitizer.bypassSecurityTrustHtml(marked);
  }
}
