import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CvService } from '../../service/cvData.service';
import { SearchService } from '../../service/search.service';
import { HighlightPipe } from '../../shared/highlight.pipe';
import { IconComponent } from '../../shared/icon.component';
import { LeadInPipe } from '../../shared/lead-in.pipe';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import {
  experienceMonths,
  formatDuration,
  formatMonthYear,
} from '../../shared/date.util';

/** How many bullets are shown before the "Show all" toggle appears. */
const COLLAPSED_BULLETS = 4;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    HighlightPipe,
    IconComponent,
    LeadInPipe,
    RevealDirective,
    SectionHeaderComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  private readonly cv = inject(CvService);
  private readonly search = inject(SearchService);
  private readonly expanded = signal<ReadonlySet<string>>(new Set());

  readonly dict = this.cv.dict;
  readonly query = this.search.query;
  readonly isSearching = this.search.isActive;
  readonly collapsedBullets = COLLAPSED_BULLETS;

  readonly items = computed(() => {
    const lang = this.cv.lang();
    const dict = this.dict();

    return this.cv
      .experiences()
      .filter((exp) =>
        this.search.matches(
          exp.role,
          exp.company,
          exp.location,
          exp.technologies,
          exp.tools,
          exp.responsibilities
        )
      )
      .map((exp) => ({
        ...exp,
        from: formatMonthYear(exp.start, lang),
        to: exp.end
          ? formatMonthYear(exp.end, lang)
          : dict.experience.present,
        duration: formatDuration(experienceMonths(exp), dict),
        isCurrent: exp.end === null,
      }));
  });

  readonly hiddenCount = computed(
    () => this.cv.experiences().length - this.items().length
  );

  /** Search results are always fully expanded so no hit stays hidden. */
  isExpanded(id: string): boolean {
    return this.isSearching() || this.expanded().has(id);
  }

  toggle(id: string): void {
    this.expanded.update((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  visibleBullets(bullets: string[], id: string): string[] {
    return this.isExpanded(id) ? bullets : bullets.slice(0, COLLAPSED_BULLETS);
  }
}
