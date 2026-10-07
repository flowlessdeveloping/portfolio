export interface ProfileLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  location: string;
  phone: string;
  phoneHref: string;
  links: ProfileLink[];
}

/** Language-neutral identity. Localised copy lives in introduction.model.ts. */
export const profile: Profile = {
  name: 'Davide Valenti',
  location: 'Palermo, Italy',
  phone: '+39 329 534 3049',
  phoneHref: 'tel:+393295343049',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davide-valenti-95b7a1133/',
      icon: 'link',
    },
  ],
};
