import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { STATS_DATA } from "@/data/stats";
import { TagChip } from "@/components/ui/TagChip";
import { StatUnit } from "@/components/ui/StatUnit";

export function AboutSection() {
  return (
    <section
      id="about"
      className="stream-section"
      aria-labelledby="about-section-heading"
    >
      <h2 id="about-section-heading" className="mobile-section-header">
        ABOUT
      </h2>

      <div className="narrative-body">
        <p>
          I’m a web developer with{" "}
          <strong className="text-highlight">
            1+ year of professional experience
          </strong>
          . I focus on building websites and web applications that are easy to
          use, well-structured, and maintainable.
        </p>

        <p>
          With experience using technologies like{" "}
          <strong className="text-highlight">Laravel</strong>,{" "}
          <strong className="text-highlight">React</strong>, and{" "}
          <strong className="text-highlight">Next.js</strong>, I care deeply about
          code quality, performance, and user experience—making sure every
          product feels solid both on the frontend and backend.
        </p>

        <p>
          Whether building responsive landing pages, CRUD dashboards, or
          integrating third-party APIs, I focus on writing clear code that teams
          can maintain without headaches. I’m comfortable collaborating with
          designers, participating in code reviews, and shipping iterations
          rapidly.
        </p>
      </div>

      {/* Core Tech Stack */}
      <div className="section-stack-block">
        <span className="stack-block-title">Core Technologies</span>
        <div className="tag-cloud" aria-label="Core Technologies">
          {PROFILE_DATA.coreTechnologies.map((tech) => (
            <TagChip key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Reference Stats Strip */}
      <div className="reference-stats-strip">
        {STATS_DATA.map((stat, idx) => (
          <StatUnit
            key={stat.id}
            stat={stat}
            showDivider={idx < STATS_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
