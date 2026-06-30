"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* ── Detect which section is currently in view on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // navbar height + some buffer

      // If near top, it's hero
      if (scrollY < offset) {
        setActiveSection("hero");
        return;
      }

      // Walk sections bottom-up: the last one whose top has passed the offset wins
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - offset <= scrollY) {
          current = id;
        }
      }

      // If scrolled to the very bottom, activate last section
      if (window.innerHeight + scrollY >= document.body.scrollHeight - 40) {
        current = SECTION_IDS[SECTION_IDS.length - 1] ?? current;
      }

      setActiveSection(current);
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth-scroll to an anchor and close the mobile menu ── */
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    },
    []
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="group flex items-center gap-2 font-display text-base font-semibold tracking-tight text-ink"
        >
          <span>{siteConfig.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-end md:flex">
          <ul className="flex items-center gap-7 mr-8">
            {siteConfig.nav.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              // Skip Contact in normal list to make it a button
              if (item.label === "Contact") return null;
              
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={cn(
                      "font-mono text-[13px] uppercase tracking-wide transition-colors font-semibold",
                      isActive
                        ? "text-primary"
                        : "text-ink-muted hover:text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="rounded-full bg-primary px-5 py-2.5 font-mono text-sm font-bold text-void transition-opacity hover:opacity-90 uppercase tracking-wide"
            >
              Contact Me
            </a>
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line bg-void transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {siteConfig.nav.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "block rounded px-2 py-2.5 font-mono text-sm uppercase tracking-wide",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-ink-muted hover:bg-surface hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
