import { SocialLink, NavSectionItem } from "@/types/portfolio";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/FajarRp11",
    ariaLabel: "GitHub Profile",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kurnia-fajar-rahyudi-putra",
    ariaLabel: "LinkedIn Profile",
    icon: "linkedin",
  },
];

export const NAV_SECTIONS: NavSectionItem[] = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
];
