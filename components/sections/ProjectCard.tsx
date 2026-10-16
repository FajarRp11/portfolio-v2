import React from "react";
import { Project } from "@/types/portfolio";
import { TagChip } from "@/components/ui/TagChip";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div
      className="project-card clickable"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-haspopup="dialog"
      aria-label={`View details for ${project.title}`}
    >
      <div className="project-year">{project.year}</div>
      <div className="project-info">
        <h3 className="project-title">
          {project.title}{" "}
          <ArrowUpRight
            size={15}
            className="arrow-external"
            aria-hidden="true"
          />
        </h3>
        <p className="project-desc">{project.shortDesc}</p>
        <div className="tag-cloud">
          {project.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
