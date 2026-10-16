import React from "react";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="stream-section"
      aria-labelledby="experience-section-heading"
    >
      <h2 id="experience-section-heading" className="mobile-section-header">
        EXPERIENCE
      </h2>

      <div className="experience-list">
        {EXPERIENCE_DATA.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
