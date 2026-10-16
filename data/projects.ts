import { Project } from "@/types/portfolio";

export const PROJECTS_DATA: Project[] = [
  {
    id: "good-invoice",
    title: "GoodInvoice",
    category: "Full-Stack SaaS",
    year: "2026",
    shortDesc:
      "SaaS invoice & billing platform with automated PDF generation, email delivery, and real-time payment tracking for small businesses.",
    fullDesc:
      "GoodInvoice is a production-ready billing SaaS built for freelancers and small businesses to manage clients, products, and invoices end-to-end. It features multi-currency support, automated overdue detection via cron jobs, and a revenue analytics dashboard.",
    features: [
      "Multi-tenant architecture with organization-based workspace isolation",
      "Automated PDF invoice generation stored on Cloudflare R2",
      "Email delivery via Resend with custom domain (SPF, DKIM, DMARC configured)",
      "Partial payment tracking with automatic PAID/OVERDUE status transitions",
      "Revenue analytics dashboard with 6-month trend chart and invoice status overview",
      "Dynamic currency formatting per organization (IDR, USD, SGD, and more)",
      "Daily cron job via Vercel for automated overdue invoice detection",
    ],
    architecture:
      "Built with Next.js App Router and Server Actions for the full-stack layer, Prisma ORM with Neon (serverless PostgreSQL) for data persistence, NextAuth v5 for authentication, Cloudflare R2 for file storage, and Resend for transactional email.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Cloudflare R2",
      "Resend",
      "NextAuth",
      "Shadcn/ui",
    ],
    liveUrl: "https://good-invoice.vercel.app",
    githubUrl: "https://github.com/FajarRp11/saas-invoice.git",
  },

  {
    id: "flowtask",
    title: "FlowTask",
    category: "Full-Stack Web Application",
    year: "2026",
    shortDesc:
      "A collaborative project management application with workspace organization, task assignments, and an interactive Kanban board with persistent drag-and-drop status updates.",
    fullDesc:
      "FlowTask is a project management application built to help teams organize their work and collaborate more effectively. The application features workspace-based organization, project management, task assignment, labels, and checklist items. Built with a Laravel REST API and a Next.js frontend, the project focuses on structured access control, maintainable architecture, and a practical user experience. Development is ongoing, with additional features and refinements planned.",
    features: [
      "JWT-based authentication with login, registration, and user profile retrieval",
      "Workspace management with member roles and access control",
      "Project management with configurable statuses and priorities",
      "Workspace and project membership management",
      "Task management with assignee support",
      "Interactive Kanban board with drag-and-drop task status updates persisted to the backend",
      "Task labels for categorization and organization",
      "Checklist items for breaking tasks into smaller actionable steps",
      "Policy-based authorization for project and task operations",
      "Responsive frontend with reusable UI components",
    ],
    architecture:
      "Built with Laravel as the backend REST API, PostgreSQL for relational data storage, and Next.js App Router with React and TypeScript for the frontend. The backend uses Laravel policies and role-based authorization patterns to control access to workspaces, projects, and tasks. The frontend uses Tailwind CSS, shadcn/ui, and TanStack Query for UI composition and server-state management.",
    tags: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "REST API",
      "JWT Authentication",
    ],
    liveUrl: "https://flowtask-fajarrahyu.vercel.app/",
    githubUrl: "https://github.com/FajarRp11/flowtask-frontend.git",
  },
];
