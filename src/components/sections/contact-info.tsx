import { Github, Linkedin, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

const channels = [
  { label: "GitHub", value: "github.com/ndragood", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/andrarizki", href: siteConfig.social.linkedin, icon: Linkedin },
  {
    label: "Email",
    value: siteConfig.social.email.replace("mailto:", ""),
    href: siteConfig.social.email,
    icon: Mail,
  },
  { label: "Instagram", value: "@ndragood", href: siteConfig.social.instagram, icon: Instagram },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-line bg-surface p-6">
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Reach me directly</h2>
        <ul className="mt-4 space-y-3">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-md px-2 py-2 -mx-2 transition-colors hover:bg-void"
              >
                <Icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                <span className="flex-1 text-sm text-ink">{label}</span>
                <span className="font-mono text-xs text-ink-muted group-hover:text-primary">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-line bg-surface p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
          <p className="text-sm text-ink-muted">{siteConfig.location}</p>
        </div>
      </div>
    </div>
  );
}
