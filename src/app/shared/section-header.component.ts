import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

/** Shared heading block so every section keeps the same rhythm. */
@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head" [appReveal]="0">
      <p class="eyebrow head__eyebrow">
        <span class="head__index">{{ index() }}</span>
        {{ eyebrow() }}
      </p>
      <h2 class="head__title" [id]="titleId()">{{ title() }}</h2>
      @if (lead()) {
      <p class="head__lead">{{ lead() }}</p>
      }
    </header>
  `,
  styles: [
    `
      .head {
        max-width: 62ch;
        margin-bottom: clamp(28px, 4vw, 44px);
      }

      .head__eyebrow {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .head__index {
        color: var(--accent);
      }

      .head__index::after {
        content: "";
        display: inline-block;
        width: 28px;
        height: 1px;
        margin-left: 10px;
        vertical-align: middle;
        background: var(--border-strong);
      }

      .head__title {
        margin-top: 12px;
        font-size: clamp(1.7rem, 3.6vw, 2.4rem);
        font-weight: 750;
      }

      .head__lead {
        margin-top: 12px;
        color: var(--text-muted);
        font-size: 0.98rem;
      }
    `,
  ],
})
export class SectionHeaderComponent {
  readonly index = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>('');
  readonly titleId = input<string>('');
}
