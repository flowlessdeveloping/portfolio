import { Injectable, computed, effect, signal } from '@angular/core';
import { Dictionary, Lang, dictionaries } from '../model/i18n.model';
import { introductionData } from '../model/introduction.model';
import { experiencesDataEn, experiencesDataIt } from '../model/experiences.model';
import { certificationsData } from '../model/certifications.model';
import { projectsDataEn, projectsDataIt } from '../model/projects.model';
import { coreStack, skillGroups } from '../model/skills.model';
import { profile } from '../model/profile.model';
import { yearsOfExperience } from '../shared/date.util';

const LANG_KEY = 'cv.lang';

function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === 'en' || stored === 'it' ? stored : null;
  } catch {
    return null;
  }
}

function detectLang(): Lang {
  const stored = readStoredLang();
  if (stored) {
    return stored;
  }
  return navigator?.language?.toLowerCase().startsWith('it') ? 'it' : 'en';
}

@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly _lang = signal<Lang>(detectLang());

  readonly lang = this._lang.asReadonly();
  readonly dict = computed<Dictionary>(() => dictionaries[this._lang()]);

  readonly profile = profile;
  readonly skillGroups = skillGroups;
  readonly coreStack = coreStack;
  readonly certifications = certificationsData;

  readonly introduction = computed(() => introductionData[this._lang()]);

  readonly experiences = computed(() =>
    this._lang() === 'it' ? experiencesDataIt : experiencesDataEn
  );

  readonly projects = computed(() =>
    this._lang() === 'it' ? projectsDataIt : projectsDataEn
  );

  /** Headline figures, all derived from the data above. */
  readonly stats = computed(() => {
    const experiences = this.experiences();
    const technologies = new Set<string>();
    for (const exp of experiences) {
      for (const tech of exp.technologies) {
        technologies.add(tech.toLowerCase());
      }
    }
    for (const project of this.projects()) {
      for (const tech of project.technologies) {
        technologies.add(tech.toLowerCase());
      }
    }

    return {
      years: yearsOfExperience(experiences),
      companies: experiences.length,
      technologies: technologies.size,
      certifications: this.certifications.length,
    };
  });

  constructor() {
    effect(() => {
      const lang = this._lang();
      document.documentElement.lang = lang;
      document.title = this.introduction().title;
      try {
        localStorage.setItem(LANG_KEY, lang);
      } catch {
        /* storage unavailable (private mode) - the language still applies */
      }
    });
  }

  setLanguage(lang: Lang): void {
    this._lang.set(lang);
  }

  toggleLanguage(): void {
    this._lang.update((lang) => (lang === 'en' ? 'it' : 'en'));
  }
}
