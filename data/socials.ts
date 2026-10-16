import { SocialLink, NavSectionItem } from "@/types/portfolio";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    ariaLabel: "GitHub Profile",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    ariaLabel: "LinkedIn Profile",
    icon: "linkedin",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    url: "https://twitter.com",
    ariaLabel: "Twitter Profile",
    icon: "twitter",
  },
];

export const NAV_SECTIONS: NavSectionItem[] = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
];
