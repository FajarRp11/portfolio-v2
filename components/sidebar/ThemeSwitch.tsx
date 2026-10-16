"use client";

import React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-switch-pill"
      aria-label={`Switch theme (Current: ${theme})`}
      title={`Theme: ${theme}`}
    >
      <span className="theme-mono">{theme}</span>
    </button>
  );
}
