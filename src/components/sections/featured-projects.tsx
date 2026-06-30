"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { TiltCard } from "@/components/ui/tilt-card";

const statusLabel: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

export function FeaturedProjects() {
  return (
    <section id="featured-projects" aria-labelledby="featured-projects-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="featured-projects-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="hidden font-mono text-xs uppercase tracking-wide text-secondary hover:underline sm:inline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-secondary/40">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wide ${
                        project.status === "completed" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {statusLabel[project.status]}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-line px-2 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-primary hover:underline"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 block text-center font-mono text-xs uppercase tracking-wide text-secondary hover:underline sm:hidden"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
