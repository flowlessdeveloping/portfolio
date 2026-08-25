import { Dictionary, Lang } from '../model/i18n.model';
import { Experiences } from '../model/experiences.model';

const LOCALES: Record<Lang, string> = { en: 'en-GB', it: 'it-IT' };

/** Parses an ISO `yyyy-mm-dd` string as a local date (no timezone shift). */
export function parseIso(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** "Nov 2023" / "nov 2023". */
export function formatMonthYear(iso: string, lang: Lang): string {
  const label = parseIso(iso).toLocaleDateString(LOCALES[lang], {
    month: 'short',
    year: 'numeric',
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** Whole months between two dates, floored at 0. */
export function monthsBetween(start: Date, end: Date): number {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }
  return Math.max(0, months);
}

/** Months spent in a role; open-ended roles are measured up to `now`. */
export function experienceMonths(
  exp: Pick<Experiences, 'start' | 'end'>,
  now = new Date()
): number {
  return monthsBetween(parseIso(exp.start), exp.end ? parseIso(exp.end) : now);
}

/** "2 yrs 9 mos", "11 mos", "1 yr". */
export function formatDuration(totalMonths: number, dict: Dictionary): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? dict.duration.year : dict.duration.years}`);
  }
  if (months > 0 || years === 0) {
    parts.push(
      `${months} ${months === 1 ? dict.duration.month : dict.duration.months}`
    );
  }
  return parts.join(' ');
}

/**
 * Full years of professional experience, measured from the earliest role to
 * today. Derived so it never goes stale.
 */
export function yearsOfExperience(
  experiences: Experiences[],
  now = new Date()
): number {
  if (!experiences.length) {
    return 0;
  }
  const earliest = experiences.reduce(
    (min, exp) => (exp.start < min ? exp.start : min),
    experiences[0].start
  );
  return Math.floor(monthsBetween(parseIso(earliest), now) / 12);
}
