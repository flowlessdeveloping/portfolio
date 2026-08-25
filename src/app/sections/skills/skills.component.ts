import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CvService } from '../../service/cvData.service';
import { SearchService } from '../../service/search.service';
import { HighlightPipe } from '../../shared/highlight.pipe';
import { IconComponent, IconName } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    HighlightPipe,
    IconComponent,
    RevealDirective,
    SectionHeaderComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  private readonly cv = inject(CvService);
  private readonly search = inject(SearchService);

  readonly dict = this.cv.dict;
  readonly lang = this.cv.lang;
  readonly coreStack = this.cv.coreStack;
  readonly query = this.search.query;

  /**
   * Groups are kept, but their skills are narrowed to the search term so the
   * section answers "does he know X?" directly. Empty groups drop out.
   */
  readonly groups = computed(() => {
    const lang = this.lang();
    return this.cv.skillGroups
      .map((group) => ({
        id: group.id,
        icon: group.icon as IconName,
        label: group.label[lang],
        skills: group.skills.filter((skill) => this.search.matches(skill)),
      }))
      .filter((group) => group.skills.length > 0);
  });

  readonly visibleCore = computed(() =>
    this.coreStack.filter((skill) => this.search.matches(skill))
  );
}
