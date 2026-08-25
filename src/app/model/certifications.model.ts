export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  /** Skill groups (see skills.model.ts) this credential backs. */
  topics: string[];
}

/**
 * Certification titles are issued in English and are not translated, so a
 * single language-neutral list is enough.
 */
export const certificationsData: Certification[] = [
  {
    title: 'Front-End JavaScript Frameworks: Angular',
    issuer: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/JGEWSGF6WAN8',
    topics: ['Angular', 'TypeScript'],
  },
  {
    title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
    issuer: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/78F2T7GMVW2W',
    topics: ['HTML', 'CSS'],
  },
];
