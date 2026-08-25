export type Lang = 'en' | 'it';

/**
 * Every piece of UI copy lives here so templates stay free of inline
 * `lang === 'it' ? ... : ...` ternaries.
 */
export interface Dictionary {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    certifications: string;
    openMenu: string;
    closeMenu: string;
  };
  actions: {
    exploreExperience: string;
    print: string;
    printTitle: string;
    liveDemo: string;
    verify: string;
    showMore: string;
    showLess: string;
    backToTop: string;
    toggleTheme: string;
    toggleLanguage: string;
    search: string;
    clearSearch: string;
    prevMatch: string;
    nextMatch: string;
  };
  stats: {
    years: string;
    companies: string;
    technologies: string;
    certifications: string;
  };
  sections: {
    skillsEyebrow: string;
    skillsTitle: string;
    skillsLead: string;
    coreStack: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceLead: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsLead: string;
    certificationsEyebrow: string;
    certificationsTitle: string;
    certificationsLead: string;
  };
  experience: {
    responsibilities: string;
    stack: string;
    tools: string;
    present: string;
    current: string;
  };
  search: {
    placeholder: string;
    empty: string;
    emptyHint: string;
    hiddenBySearch: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    getInTouch: string;
  };
  duration: {
    year: string;
    years: string;
    month: string;
    months: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    actions: {
      exploreExperience: 'Explore experience',
      print: 'Download CV',
      printTitle: 'Open the print dialog to save this page as a PDF',
      liveDemo: 'Live demo',
      verify: 'Verify',
      showMore: 'Show all',
      showLess: 'Show less',
      backToTop: 'Back to top',
      toggleTheme: 'Toggle colour theme',
      toggleLanguage: 'Switch language',
      search: 'Search',
      clearSearch: 'Clear search',
      prevMatch: 'Previous match',
      nextMatch: 'Next match',
    },
    stats: {
      years: 'Years of experience',
      companies: 'Companies',
      technologies: 'Technologies',
      certifications: 'Certifications',
    },
    sections: {
      skillsEyebrow: 'Toolkit',
      skillsTitle: 'Skills & technologies',
      skillsLead:
        'Grouped by what I actually use them for. Everything listed here comes from the roles below.',
      coreStack: 'Core stack',
      experienceEyebrow: 'Career',
      experienceTitle: 'Professional experience',
      experienceLead:
        'From backend APIs to frontend architecture and team leadership, across product teams and banking and telco consulting.',
      projectsEyebrow: 'Showcase',
      projectsTitle: 'Personal projects',
      projectsLead: 'Things I build outside of client work.',
      certificationsEyebrow: 'Learning',
      certificationsTitle: 'Certifications',
      certificationsLead: 'Verified credentials, linked to their issuer.',
    },
    experience: {
      responsibilities: 'Key responsibilities',
      stack: 'Stack',
      tools: 'Tools & workflow',
      present: 'Present',
      current: 'Current',
    },
    search: {
      placeholder: 'Search skills, roles, companies...',
      empty: 'No matches',
      emptyHint: 'Try a technology, a company or a role.',
      hiddenBySearch: 'hidden by the current search',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Angular.',
      getInTouch: 'Get in touch',
    },
    duration: { year: 'yr', years: 'yrs', month: 'mo', months: 'mos' },
  },
  it: {
    nav: {
      about: 'Profilo',
      skills: 'Competenze',
      experience: 'Esperienza',
      projects: 'Progetti',
      certifications: 'Certificazioni',
      openMenu: 'Apri il menu',
      closeMenu: 'Chiudi il menu',
    },
    actions: {
      exploreExperience: 'Esplora esperienze',
      print: 'Scarica il CV',
      printTitle: 'Apri la stampa per salvare questa pagina come PDF',
      liveDemo: 'Vai al sito',
      verify: 'Verifica',
      showMore: 'Mostra tutto',
      showLess: 'Mostra meno',
      backToTop: 'Torna su',
      toggleTheme: 'Cambia tema',
      toggleLanguage: 'Cambia lingua',
      search: 'Cerca',
      clearSearch: 'Cancella la ricerca',
      prevMatch: 'Risultato precedente',
      nextMatch: 'Risultato successivo',
    },
    stats: {
      years: 'Anni di esperienza',
      companies: 'Aziende',
      technologies: 'Tecnologie',
      certifications: 'Certificazioni',
    },
    sections: {
      skillsEyebrow: 'Competenze',
      skillsTitle: 'Skill e tecnologie',
      skillsLead:
        "Raggruppate per ambito d'uso. Tutto ciò che trovi qui deriva dai ruoli elencati sotto.",
      coreStack: 'Stack principale',
      experienceEyebrow: 'Carriera',
      experienceTitle: 'Esperienza professionale',
      experienceLead:
        'Dalle API backend all’architettura frontend fino alla guida del team, tra progetti di prodotto e consulenza bancaria e telco.',
      projectsEyebrow: 'Showcase',
      projectsTitle: 'Progetti personali',
      projectsLead: 'Cosa costruisco fuori dal lavoro per i clienti.',
      certificationsEyebrow: 'Formazione',
      certificationsTitle: 'Certificazioni',
      certificationsLead: 'Credenziali verificabili, con link agli enti.',
    },
    experience: {
      responsibilities: 'Responsabilità principali',
      stack: 'Stack',
      tools: 'Strumenti e workflow',
      present: 'Presente',
      current: 'In corso',
    },
    search: {
      placeholder: 'Cerca competenze, ruoli, aziende...',
      empty: 'Nessun risultato',
      emptyHint: 'Prova con una tecnologia, un’azienda o un ruolo.',
      hiddenBySearch: 'nascosti dalla ricerca attuale',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      builtWith: 'Realizzato con Angular.',
      getInTouch: 'Contattami',
    },
    duration: { year: 'anno', years: 'anni', month: 'mese', months: 'mesi' },
  },
};
