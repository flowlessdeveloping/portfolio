import { Component, OnInit, ElementRef } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CvService } from './service/cvData.service';
import { Experiences } from './model/experiences.model';
import { IntroductionModel } from './model/introduction.model';
import { Certification } from './model/certifications.model';
import { Project } from './model/projects.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FooterComponent,
    ToolbarComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  introduction!: IntroductionModel;
  experiences: Experiences[] = [];
  filteredExperiences: Experiences[] = [];
  certifications: Certification[] = [];
  filteredCertifications: Certification[] = [];
  projects: Project[] = [];
  filteredProjects: Project[] = [];

  searchText = '';
  matchCount = 0;
  currentMatchIndex = 0;
  currentLang: 'en' | 'it' = 'en';

  constructor(
    private cvService: CvService,
    private sanitizer: DomSanitizer,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.cvService
      .getIntroduction()
      .subscribe((data) => (this.introduction = data));
    this.cvService.getExperiences().subscribe((data) => {
      this.experiences = data;
      this.filterExperiences();
    });
    this.cvService.getCertifications().subscribe((data) => {
      this.certifications = data;
      this.filterCertifications();
    });
    this.cvService.getProjects().subscribe((data) => {
      this.projects = data;
      this.filterProjects();
    });
    this.initRevealObserver();
  }

  private initRevealObserver() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      setTimeout(() => {
        const elements = this.el.nativeElement.querySelectorAll('.reveal');
        elements.forEach((el: HTMLElement) => observer.observe(el));
      }, 1000);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSearch(text: string) {
    this.searchText = text;
    this.currentMatchIndex = 0;
    this.filterItems();

    // Use setTimeout to wait for the DOM to update with new highlights
    setTimeout(() => {
      this.updateMatchCount();
    }, 100);
  }

  onLanguageChange() {
    this.currentLang = this.currentLang === 'en' ? 'it' : 'en';
    this.cvService.setLanguage(this.currentLang);
  }

  nextMatch() {
    if (this.matchCount > 0) {
      this.currentMatchIndex = (this.currentMatchIndex + 1) % this.matchCount;
      this.jumpToMatch();
    }
  }

  prevMatch() {
    if (this.matchCount > 0) {
      this.currentMatchIndex =
        (this.currentMatchIndex - 1 + this.matchCount) % this.matchCount;
      this.jumpToMatch();
    }
  }

  private updateMatchCount() {
    const elements = document.querySelectorAll('.search-highlight');
    this.matchCount = elements.length;
    if (this.matchCount > 0) {
      this.jumpToMatch();
    }
  }

  private jumpToMatch() {
    const elements = document.querySelectorAll('.search-highlight');
    elements.forEach((el) => el.classList.remove('active-match'));

    if (elements[this.currentMatchIndex]) {
      const el = elements[this.currentMatchIndex] as HTMLElement;
      el.classList.add('active-match');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private filterItems() {
    this.filterExperiences();
    this.filterCertifications();
    this.filterProjects();
  }

  private filterExperiences() {
    if (!this.searchText) {
      this.filteredExperiences = this.experiences;
      return;
    }

    const text = this.searchText.toLowerCase();
    this.filteredExperiences = this.experiences.filter((exp) => {
      return (
        exp.role?.toLowerCase().includes(text) ||
        exp.company?.toLowerCase().includes(text) ||
        exp.technologies?.some((t) => t.toLowerCase().includes(text)) ||
        exp.tools?.some((t) => t.toLowerCase().includes(text)) ||
        exp.responsibilities?.some((r) => r.toLowerCase().includes(text))
      );
    });
  }

  private filterCertifications() {
    if (!this.searchText) {
      this.filteredCertifications = this.certifications;
      return;
    }

    const text = this.searchText.toLowerCase();
    this.filteredCertifications = this.certifications.filter((cert) => {
      return (
        cert.title.toLowerCase().includes(text) ||
        cert.issuer.toLowerCase().includes(text)
      );
    });
  }

  private filterProjects() {
    if (!this.searchText) {
      this.filteredProjects = this.projects;
      return;
    }

    const text = this.searchText.toLowerCase();
    this.filteredProjects = this.projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(text) ||
        project.description.toLowerCase().includes(text) ||
        project.technologies.some((t) => t.toLowerCase().includes(text))
      );
    });
  }

  highlight(content: string | undefined): SafeHtml {
    if (!content) return '';
    if (!this.searchText) return content;

    const regex = new RegExp(`(${this.searchText})`, 'gi');
    const highlighted = content.replace(
      regex,
      '<span class="search-highlight">$1</span>'
    );
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
