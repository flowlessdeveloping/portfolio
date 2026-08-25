export interface ProfileLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  location: string;
  links: ProfileLink[];
}

/** Language-neutral identity. Localised copy lives in introduction.model.ts. */
export const profile: Profile = {
  name: 'Davide Valenti',
  location: 'Palermo, Italy',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davide-valenti-95b7a1133/',
      icon: 'link',
    },
  ],
};
