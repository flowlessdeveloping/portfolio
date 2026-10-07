import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'pin'
  | 'phone'
  | 'linkedin'
  | 'external'
  | 'search'
  | 'close'
  | 'chevron-up'
  | 'chevron-down'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'globe'
  | 'printer'
  | 'arrow-up'
  | 'award'
  | 'code'
  | 'dns'
  | 'storage'
  | 'verified'
  | 'rocket_launch'
  | 'groups'
  | 'handyman'
  | 'briefcase';

/**
 * Inline stroke icons. Kept in-app rather than pulling an icon font so the
 * page has no blocking font request and icons inherit `currentColor`.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) { @case ('phone') {
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
      />
      } @case ('pin') {
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
      } @case ('linkedin') {
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
      } @case ('external') {
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      } @case ('search') {
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      } @case ('close') {
      <path d="M18 6 6 18M6 6l12 12" />
      } @case ('chevron-up') {
      <path d="m18 15-6-6-6 6" />
      } @case ('chevron-down') {
      <path d="m6 9 6 6 6-6" />
      } @case ('menu') {
      <path d="M4 6h16M4 12h16M4 18h16" />
      } @case ('sun') {
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
      } @case ('moon') {
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      } @case ('globe') {
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
      } @case ('printer') {
      <path d="M6 9V3h12v6" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
      } @case ('arrow-up') {
      <path d="M12 19V5M5 12l7-7 7 7" />
      } @case ('award') {
      <circle cx="12" cy="9" r="6" />
      <path d="M15.5 14.5 17 22l-5-3-5 3 1.5-7.5" />
      } @case ('code') {
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      } @case ('dns') {
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01" />
      } @case ('storage') {
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      } @case ('verified') {
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.2 1.2 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"
      />
      <path d="m9 12 2 2 4-4" />
      } @case ('rocket_launch') {
      <path
        d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9 0Z"
      />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2Z"
      />
      <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0" />
      <path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
      } @case ('groups') {
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      } @case ('handyman') {
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z"
      />
      } @case ('briefcase') {
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      } } </svg
    >
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex: none;
        line-height: 0;
      }
    `,
  ],
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(18);
}
