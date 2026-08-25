import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CvService } from '../service/cvData.service';
import { IconComponent } from '../shared/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly cv = inject(CvService);

  readonly dict = this.cv.dict;
  readonly profile = this.cv.profile;
  readonly intro = this.cv.introduction;
  readonly year = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
