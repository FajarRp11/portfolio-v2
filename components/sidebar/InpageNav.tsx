import { NAV_SECTIONS } from "@/data/socials";
import Link from "next/link";

interface InpageNavProps {
  activeSection: string;
}

export function InpageNav({ activeSection }: InpageNavProps) {
  return (
    <nav className="inpage-nav" aria-label="Page Sections">
      <ul className="nav-list">
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <Link
                href={section.href}
                className={`nav-item ${isActive ? "active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="nav-indicator" aria-hidden="true" />
                <span className="nav-label">{section.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
