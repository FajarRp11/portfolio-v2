import React from "react";
import { PROFILE_DATA } from "@/data/profile";

export function SidebarHeader() {
  return (
    <div className="sidebar-top">
      <h1 className="developer-name">{PROFILE_DATA.name}</h1>
      <h2 className="developer-title">{PROFILE_DATA.title}</h2>
      <p className="developer-tagline">{PROFILE_DATA.tagline}</p>
    </div>
  );
}
