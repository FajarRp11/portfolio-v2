import React from "react";
import { Experience } from "@/types/portfolio";
import { TagChip } from "@/components/ui/TagChip";
import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const organization = experience.organization || experience.company;

  const headerContent = (
    <>
      <span className="experience-role-text">
        {experience.role}
        {organization && (
          <span className="experience-organization"> · {organization}</span>
        )}
      </span>
      <ArrowUpRight size={15} className="arrow-external" aria-hidden="true" />
    </>
  );

  return (
    <div className="experience-card">
      <div className="experience-time">{experience.period}</div>
      <div className="experience-info">
        <h3 className="experience-role">{headerContent}</h3>
        <p className="experience-desc">{experience.description}</p>
        <div className="tag-cloud">
          {experience.technologies.map((tech) => (
            <TagChip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
