/**
 * Skills taxonomy.
 *
 * IMPORTANT: this file adds no new skills. Every entry below is a term that
 * already appears in `experiences.model.ts` (a `technologies` / `tools` entry
 * or a `responsibilities` line), in `projects.model.ts`, or in
 * `certifications.model.ts`. It only groups those scattered, duplicated terms
 * into readable categories. When an experience gains a new technology, add it
 * to the matching group here too.
 */

export interface SkillGroup {
  id: string;
  /** Material icon name. */
  icon: string;
  label: { en: string; it: string };
  skills: string[];
}

/**
 * The stack of the current role (Elca Spa, 2023 -> present), surfaced first.
 * Mirrors the `technologies` of the first entry in `experiencesDataEn`.
 */
export const coreStack: string[] = [
  'Angular',
  'React',
  'TypeScript',
  'NgRx',
  'HTML',
  'CSS',
  'Java',
  'Electron Framework',
  'Cypress',
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    icon: 'code',
    label: { en: 'Frontend', it: 'Frontend' },
    // Sources: Elca, GPI, Arancia-ict, Lookout technologies + Offrice project.
    skills: [
      'Angular',
      'Angular 2+',
      'AngularJs',
      'React',
      'TypeScript',
      'HTML',
      'CSS',
      'NgRx',
      'Ionic Framework',
      'Electron Framework',
      'Xframes',
    ],
  },
  {
    id: 'backend',
    icon: 'dns',
    label: { en: 'Backend & APIs', it: 'Backend & API' },
    // Sources: GFT / Arancia-ict technologies, Elca and GPI responsibilities.
    skills: [
      'Java',
      'Spring Framework',
      'Spring Boot',
      'C#',
      'RESTful APIs',
      'OpenAPI',
      'Maven',
    ],
  },
  {
    id: 'data',
    icon: 'storage',
    label: { en: 'Data', it: 'Dati' },
    // Sources: Arancia-ict / GFT technologies + Offrice project.
    skills: ['SQL', 'Oracle', 'Firebase'],
  },
  {
    id: 'testing',
    icon: 'verified',
    label: { en: 'Testing & Quality', it: 'Test & Qualità' },
    // Sources: Elca technologies + responsibilities, GFT technologies.
    skills: ['Cypress', 'Jest', 'JUnit', 'Code review'],
  },
  {
    id: 'delivery',
    icon: 'rocket_launch',
    label: { en: 'CI/CD & Delivery', it: 'CI/CD & Delivery' },
    // Sources: tools lists across Elca, GPI, Arancia-ict.
    skills: [
      'Jenkins',
      'GitLab CI',
      'Git',
      'Bitbucket',
      'Subversion (SVN)',
      'YAML',
      'Google Cloud Platform',
    ],
  },
  {
    id: 'leadership',
    icon: 'groups',
    label: { en: 'Leadership & Practices', it: 'Leadership & Metodo' },
    // Sources: responsibilities at Elca and GPI + "Agile development" tool entry.
    skills: [
      'Team leadership',
      'Mentoring',
      'Technical interviewing',
      'Technical speaking',
      'Agile development',
    ],
  },
  {
    id: 'toolbox',
    icon: 'handyman',
    label: { en: 'Toolbox', it: 'Strumenti' },
    // Sources: tools lists across every experience.
    skills: [
      'IntelliJ IDEA',
      'Visual Studio Code',
      'Eclipse',
      'Chrome DevTools',
      'Postman',
      'Figma',
      'Jira',
      'Trello',
      'Notion',
      'Slack',
    ],
  },
];
