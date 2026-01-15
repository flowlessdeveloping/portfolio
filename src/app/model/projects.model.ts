export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl?: string;
}

export const projectsDataEn: Project[] = [
  {
    title: 'Offrice',
    description:
      'A web application developed to share food and information among colleagues in the office, fostering collaboration and community.',
    technologies: ['Ionic', 'Angular', 'Firebase'],
    link: 'https://offrice.web.app/',
  },
];

export const projectsDataIt: Project[] = [
  {
    title: 'Offrice',
    description:
      'Una web app sviluppata per condividere cibo e informazioni tra colleghi in ufficio, favorendo la collaborazione e la community.',
    technologies: ['Ionic', 'Angular', 'Firebase'],
    link: 'https://offrice.web.app/',
  },
];
