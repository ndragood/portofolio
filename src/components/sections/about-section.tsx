"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            About Me
          </h2>
        </motion.div>

        {/* Profile + Bio */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Photo + Location */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col items-center gap-5 lg:items-start"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-xl border-2 border-line">
              <Image
                src="/profile.png"
                alt={aboutData.profileImageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"
              />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
              <MapPin className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
              {siteConfig.location}
            </div>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="space-y-5"
          >
            {aboutData.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {/* Career Goals */}
            {aboutData.careerGoals.length > 0 && (
              <div className="mt-6 rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-wide text-primary">
                    Career Goals
                  </span>
                </div>
                <div className="space-y-3">
                  {aboutData.careerGoals.map((goal, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-ink-muted"
                    >
                      {goal}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold text-ink">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {aboutData.education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-lg border border-line bg-surface p-6 pl-8 sm:p-7 sm:pl-10"
              >
                {/* Timeline accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-primary to-secondary"
                />

                <p className="font-mono text-xs uppercase tracking-wide text-secondary">
                  {edu.period}
                </p>
                <h4 className="mt-2 font-display text-base font-semibold text-ink sm:text-lg">
                  {edu.institution}
                </h4>
                <p className="mt-1 text-sm text-ink-muted">{edu.degree}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
