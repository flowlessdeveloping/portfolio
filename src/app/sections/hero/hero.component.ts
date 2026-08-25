import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CvService } from '../../service/cvData.service';
import { SearchService } from '../../service/search.service';
import { HighlightPipe } from '../../shared/highlight.pipe';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HighlightPipe, IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private readonly cv = inject(CvService);
  private readonly search = inject(SearchService);

  readonly profile = this.cv.profile;
  readonly dict = this.cv.dict;
  readonly intro = this.cv.introduction;
  readonly stats = this.cv.stats;
  readonly query = this.search.query;

  /** The role currently held, used for the "now at" line. */
  readonly currentRole = computed(
    () => this.cv.experiences().find((exp) => exp.end === null) ?? null
  );

  readonly statItems = computed(() => {
    const stats = this.stats();
    const labels = this.dict().stats;
    return [
      { value: `${stats.years}+`, label: labels.years },
      { value: `${stats.companies}`, label: labels.companies },
      { value: `${stats.technologies}`, label: labels.technologies },
      { value: `${stats.certifications}`, label: labels.certifications },
    ];
  });

  print(): void {
    window.print();
  }
}
