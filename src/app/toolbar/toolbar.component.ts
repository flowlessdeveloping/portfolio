import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CvService } from '../service/cvData.service';
import { SearchService } from '../service/search.service';
import { ThemeService } from '../service/theme.service';
import { IconComponent } from '../shared/icon.component';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class ToolbarComponent implements AfterViewInit, OnDestroy {
  private readonly cv = inject(CvService);
  private readonly themeService = inject(ThemeService);
  readonly search = inject(SearchService);

  private readonly searchInput =
    viewChild<ElementRef<HTMLInputElement>>('searchInput');
  private observer?: IntersectionObserver;

  readonly dict = this.cv.dict;
  readonly lang = this.cv.lang;
  readonly theme = this.themeService.theme;

  readonly scrolled = signal(false);
  readonly progress = signal(0);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('about');

  readonly navItems = computed<NavItem[]>(() => {
    const nav = this.dict().nav;
    return [
      { id: 'about', label: nav.about },
      { id: 'skills', label: nav.skills },
      { id: 'experience', label: nav.experience },
      { id: 'projects', label: nav.projects },
      { id: 'certifications', label: nav.certifications },
    ];
  });

  ngAfterViewInit(): void {
    this.onScroll();
    this.observeSections();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  onScroll(): void {
    const scrollTop = window.scrollY;
    const scrollable = document.body.scrollHeight - window.innerHeight;
    this.scrolled.set(scrollTop > 12);
    this.progress.set(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
  }

  /** Cmd/Ctrl+K focuses search, Escape leaves it. */
  onKeydown(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.focusSearch();
      return;
    }
    if (event.key === 'Escape') {
      this.menuOpen.set(false);
      if (this.search.query()) {
        this.search.clear();
        this.setInputValue('');
      }
    }
  }

  onSearchInput(value: string): void {
    this.search.setQuery(value);
  }

  clearSearch(): void {
    this.search.clear();
    this.setInputValue('');
    this.focusSearch();
  }

  navigate(id: string): void {
    this.menuOpen.set(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleLanguage(): void {
    this.cv.toggleLanguage();
  }

  private focusSearch(): void {
    this.searchInput()?.nativeElement.focus();
  }

  private setInputValue(value: string): void {
    const input = this.searchInput()?.nativeElement;
    if (input) {
      input.value = value;
    }
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    for (const item of this.navItems()) {
      const element = document.getElementById(item.id);
      if (element) {
        this.observer.observe(element);
      }
    }
  }
}
