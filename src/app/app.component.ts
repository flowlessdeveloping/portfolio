import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, ToolbarComponent, CurriculumVitaeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';

  setTitle(title: string) {
    this.title = title;
  }
}
