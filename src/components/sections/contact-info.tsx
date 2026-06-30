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
    <div className="space-y-6">
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink-muted mb-4">Reach me directly</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-line bg-surface p-8 text-center transition-all hover:border-primary/50 hover:bg-void hover:shadow-[0_0_20px_rgba(0,255,178,0.1)]"
              >
                <div className="rounded-full bg-primary/10 p-4 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <span className="block font-display text-lg font-semibold text-ink">{label}</span>
                  <span className="mt-2 block font-mono text-xs text-ink-muted transition-colors group-hover:text-primary">
                    {value}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-line bg-surface p-6 justify-center">
        <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
        <p className="text-sm font-medium text-ink-muted">{siteConfig.location}</p>
      </div>
    </div>
  );
}
