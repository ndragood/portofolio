"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "Email", href: siteConfig.social.email, icon: Mail },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
];

function BounceIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  const [bounce, setBounce] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative text-ink-muted transition-colors hover:text-primary"
      onMouseEnter={() => setBounce(true)}
      onAnimationEnd={() => setBounce(false)}
    >
      <Icon
        className={`h-5 w-5 ${bounce ? "animate-bounce-icon" : ""}`}
        aria-hidden="true"
      />
      {/* Glow ring on hover */}
      <span className="absolute -inset-2 -z-10 rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/10" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <BounceIcon href={href} label={label} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
