"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { allProjects } from "@/data/projects";
import { TiltCard } from "@/components/ui/tilt-card";
import type { ProjectStatus } from "@/types";

type Filter = "all" | ProjectStatus;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "in-progress" },
  { label: "Archived", value: "archived" },
];

const statusLabel: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === active);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-secondary">
          Portfolio
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Security tools, analysis pipelines, and platforms I&apos;ve built to
          sharpen my skills and solve real-world problems.
        </p>
      </motion.div>

      {/* Filter bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-10 flex flex-wrap items-center gap-2"
      >
        <Layers className="mr-1 h-4 w-4 text-ink-faint" aria-hidden="true" />
        {filters.map((f) => {
          const isActive = active === f.value;
          const count =
            f.value === "all"
              ? allProjects.length
              : allProjects.filter((p) => p.status === f.value).length;

          if (f.value !== "all" && count === 0) return null;

          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-md border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                isActive
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-line text-ink-muted hover:border-secondary hover:text-secondary"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-60">{count}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Project grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <TiltCard className="h-full">
              <article className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-secondary/40">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wide ${
                      project.status === "completed"
                        ? "text-primary"
                        : project.status === "in-progress"
                        ? "text-secondary"
                        : "text-ink-faint"
                    }`}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>

                <h2 className="font-display text-lg font-semibold text-ink">
                  {project.title}
                </h2>

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
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-mono text-sm text-ink-faint">
          No projects match that filter.
        </p>
      )}
    </section>
  );
}
