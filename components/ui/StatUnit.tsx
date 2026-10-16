import React from "react";
import { StatItem } from "@/types/portfolio";

interface StatUnitProps {
  stat: StatItem;
  showDivider?: boolean;
}

export function StatUnit({ stat, showDivider = false }: StatUnitProps) {
  return (
    <>
      <div className="stat-unit">
        <span className="stat-figure">{stat.figure}</span>
        <span className="stat-caption">{stat.caption}</span>
      </div>
      {showDivider && <div className="stat-divider" aria-hidden="true" />}
    </>
  );
}
