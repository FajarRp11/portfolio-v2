# Fajar Rahyu — Portfolio v2 (Next.js)

Clean, modular rewrite of the portfolio using Next.js App Router, React 19, TypeScript, and modern component architecture.

## Project Structure

```text
portfolio-v2/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens, layout architecture, dark mode
│   ├── layout.tsx           # Root layout with fonts, metadata, ThemeProvider
│   └── page.tsx             # Main entry point mounting PortfolioView
├── components/
│   ├── layout/
│   │   ├── Footer.tsx       # Portfolio footer
│   │   └── PortfolioView.tsx# Responsive container & scrollspy controller
│   ├── providers/
│   │   └── ThemeProvider.tsx# Theme context (system/dark/light) with persistence
│   ├── sections/
│   │   ├── AboutSection.tsx # Bio, core tech tags, stats strip
│   │   ├── ExperienceCard.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetailModal.tsx # Accessible modal dialog
│   │   └── ProjectsSection.tsx
│   ├── sidebar/
│   │   ├── InpageNav.tsx    # Scrollspy navigation with animated indicators
│   │   ├── Sidebar.tsx      # Desktop sticky sidebar / mobile header
│   │   ├── SidebarHeader.tsx# Name, title, tagline
│   │   ├── SocialLinksRow.tsx # Social icons, copy-to-clipboard button
│   │   └── ThemeSwitch.tsx  # Theme toggle pill
│   └── ui/
│       ├── Icons.tsx        # SVG icons (GitHub, LinkedIn, Twitter, Email, etc.)
│       ├── Modal.tsx        # Generic accessible dialog with escape key & focus lock
│       ├── StatUnit.tsx     # Reusable metric statistic unit
│       └── TagChip.tsx      # Reusable badge tag chip
├── data/
│   ├── experience.ts        # Work experience items
│   ├── profile.ts           # Bio, name, tagline, core technologies
│   ├── projects.ts          # Project showcase data
│   ├── socials.ts           # Social links & nav sections
│   └── stats.ts             # Highlights and metrics
├── types/
│   └── portfolio.ts         # TypeScript interfaces
└── public/
    └── favicon.svg
```

## Features

- **Next.js App Router**: Server-rendered baseline with optimized client boundaries.
- **Accessible Interactions**: Keyboard-navigable cards (`Enter`/`Space`), Escape key modal dismissal, focus management.
- **Scrollspy Navigation**: Synchronized active section indicator line using `IntersectionObserver`.
- **Dynamic Theming**: System/Dark/Light theme switcher with `localStorage` persistence and no flash of unstyled content.
- **Modular Data Layer**: Content separated from UI components for effortless updates.
