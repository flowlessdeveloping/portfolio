import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CvService } from '../../service/cvData.service';
import { SearchService } from '../../service/search.service';
import { HighlightPipe } from '../../shared/highlight.pipe';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HighlightPipe,
    IconComponent,
    RevealDirective,
    SectionHeaderComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly cv = inject(CvService);
  private readonly search = inject(SearchService);

  readonly dict = this.cv.dict;
  readonly query = this.search.query;

  readonly items = computed(() =>
    this.cv
      .projects()
      .filter((project) =>
        this.search.matches(
          project.title,
          project.description,
          project.technologies
        )
      )
  );
}
