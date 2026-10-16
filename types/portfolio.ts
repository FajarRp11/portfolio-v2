export type ThemeMode = "system" | "light" | "dark";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  architecture: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  organization?: string;
  company?: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}

export interface StatItem {
  id: string;
  figure: string;
  caption: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  ariaLabel: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface NavSectionItem {
  id: string;
  label: string;
  href: string;
}
