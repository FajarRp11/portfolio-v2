"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { Modal } from "@/components/ui/Modal";
import { TagChip } from "@/components/ui/TagChip";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} titleId="modal-title">
      <div className="modal-header">
        <div className="modal-meta">
          <span className="modal-category">{project.category}</span>
          <span className="modal-dot" aria-hidden="true">
            •
          </span>
          <span className="modal-year">{project.year}</span>
        </div>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>

      <h2 id="modal-title" className="modal-title">
        {project.title}
      </h2>

      <div className="modal-tags">
        {project.tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>

      <div className="modal-body">
        <div className="modal-section">
          <h4 className="modal-section-title">Overview</h4>
          <p className="modal-section-text">{project.fullDesc}</p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Key Features & Deliverables</h4>
          <ul className="modal-feature-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="modal-feature-item">
                <span className="feature-bullet" aria-hidden="true">
                  ▹
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Architecture & Decisions</h4>
          <p className="modal-section-text">{project.architecture}</p>
        </div>
      </div>

      <div className="modal-footer">
        <div className="modal-action-links">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="modal-btn modal-btn-primary"
            >
              Visit Live Preview <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="modal-btn modal-btn-secondary"
            >
              Source Code <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          )}
        </div>
        <button type="button" className="modal-btn-text" onClick={onClose}>
          Close [Esc]
        </button>
      </div>
    </Modal>
  );
}
