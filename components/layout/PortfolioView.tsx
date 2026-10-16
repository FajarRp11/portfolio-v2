"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/layout/Footer";

export function PortfolioView() {
  const [activeSection, setActiveSection] = useState<string>("about");

  // IntersectionObserver scrollspy to sync active navigation state
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-layout">
        {/* Left Column: Sticky Header, Nav & Socials */}
        <Sidebar activeSection={activeSection} />

        {/* Right Column: Scrollable Content Stream */}
        <main id="main-content" className="content-stream">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
