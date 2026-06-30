"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ParticleGrid } from "@/components/ui/particle-grid";
import { GlitchText } from "@/components/ui/glitch-text";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line bg-grid-faint"
      style={{ backgroundSize: "32px 32px" }}
    >
      {/* Interactive particle network background */}
      <ParticleGrid />

      {/* Radial glow accent — softens the particle effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-sm uppercase tracking-[0.2em] text-secondary"
        >
          <GlitchText text={siteConfig.role} />
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          <GlitchText text={siteConfig.name} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-5 max-w-2xl text-balance text-base font-medium leading-relaxed text-ink-muted sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium uppercase tracking-wide text-void transition-transform hover:translate-x-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
