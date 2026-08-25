import { Pipe, PipeTransform } from '@angular/core';

export interface LeadIn {
  /** The "Label:" part, or null when the line has no label. */
  lead: string | null;
  rest: string;
}

/**
 * Responsibility lines are authored as "Label: detail". Splitting on the first
 * colon lets the label be emphasised so the list can be skimmed.
 * Only splits when the label is short enough to actually read as a label.
 */
@Pipe({ name: 'leadIn', standalone: true })
export class LeadInPipe implements PipeTransform {
  transform(value: string): LeadIn {
    const index = value.indexOf(':');
    if (index < 0 || index > 70) {
      return { lead: null, rest: value };
    }
    return {
      lead: value.slice(0, index),
      rest: value.slice(index + 1).trim(),
    };
  }
}
