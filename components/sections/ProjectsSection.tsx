"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="stream-section"
      aria-labelledby="projects-section-heading"
    >
      <h2 id="projects-section-heading" className="mobile-section-header">
        PROJECTS
      </h2>

      <div className="projects-list">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
