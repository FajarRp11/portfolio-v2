"use client";

import React, { useState } from "react";
import { SOCIAL_LINKS } from "@/data/socials";
import { PROFILE_DATA } from "@/data/profile";
import { Mail } from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/Icons";
import Link from "next/link";

export function SocialLinksRow() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GitHubIcon size={20} />;
      case "linkedin":
        return <LinkedInIcon size={20} />;
      case "twitter":
        return <TwitterIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="social-links-row">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="social-icon-btn"
          aria-label={link.ariaLabel}
          title={link.name}
        >
          {renderIcon(link.icon)}
        </Link>
      ))}

      {/* Copy Email Button */}
      <button
        type="button"
        onClick={copyEmail}
        className="social-icon-btn email-copy-btn"
        aria-label="Copy Email"
        title={copied ? "Email Copied!" : `Copy ${PROFILE_DATA.email}`}
      >
        <Mail size={20} />
        {copied && <span className="copy-tooltip">Copied!</span>}
      </button>

      {/* Theme Switch Pill */}
      <ThemeSwitch />
    </div>
  );
}
