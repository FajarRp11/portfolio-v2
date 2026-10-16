import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { InpageNav } from "./InpageNav";
import { SocialLinksRow } from "./SocialLinksRow";

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <header className="sidebar-header">
      <div>
        <SidebarHeader />
        <InpageNav activeSection={activeSection} />
      </div>
      <div className="sidebar-bottom">
        <SocialLinksRow />
      </div>
    </header>
  );
}
