export interface IntroductionModel {
  /** Full page/document title. */
  title: string;
  /** Current job title, shown under the name. */
  role: string;
  /** Short positioning line, shown above the name. */
  tagline: string;
  description: string;
}

export const introductionData: Record<'en' | 'it', IntroductionModel> = {
  en: {
    title: 'Davide Valenti - Software Developer',
    role: 'Senior Frontend Developer',
    tagline: 'Angular & React specialist, full-stack capable',
    description:
      'I am a Senior Frontend Developer with a passion for creating scalable and user-friendly applications in Angular and React. While my focus is on frontend, I also have professional experience in Java backend development, allowing me to contribute across the stack and ensure seamless integration. I thrive on technical challenges, performance optimization, and delivering high-quality software solutions.',
  },
  it: {
    title: 'Davide Valenti - Sviluppatore Software',
    role: 'Senior Frontend Developer',
    tagline: 'Specialista Angular & React, con competenze full-stack',
    description:
      "Sono un Senior Frontend Developer con la passione per la creazione di applicazioni scalabili e user-friendly in Angular e React. Sebbene il mio focus sia sul frontend, ho anche esperienza professionale nello sviluppo backend Java, il che mi permette di contribuire su tutto lo stack e garantire un'integrazione senza soluzione di continuità. Mi appassionano le sfide tecniche, l'ottimizzazione delle prestazioni e la fornitura di soluzioni software di alta qualità.",
  },
};
