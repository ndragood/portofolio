"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, ExternalLink, Github, Layers } from "lucide-react";
import { allProjects } from "@/data/projects";
import type { Project, ProjectStatus } from "@/types";

type Filter = "all" | ProjectStatus;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "in-progress" },
  { label: "Archived", value: "archived" },
];

export function ProjectsSection() {
  const [active, setActive] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === active);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            Security tools, analysis pipelines, and platforms I&apos;ve built to
            sharpen my skills and solve real-world problems.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:border-line/80 hover:shadow-lg"
            >
              {/* Image Header */}
              {project.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-void/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {project.subtitle && (
                  <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                    {project.subtitle}
                  </p>
                )}

                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-8 flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-mono text-sm text-ink-faint">
            No projects match that filter.
          </p>
        )}
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 md:p-12 lg:p-24">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Left Side - Image */}
              <div className="relative h-64 w-full shrink-0 border-b border-line bg-void/50 md:h-auto md:w-5/12 md:border-b-0 md:border-r">
                {selectedProject.image && (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover md:object-contain p-0 md:p-8"
                  />
                )}
              </div>

              {/* Right Side - Details */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-md p-2 text-ink-muted transition-colors hover:bg-line/50 hover:text-ink md:right-6 md:top-6"
                >
                  <X className="h-5 w-5" />
                </button>

                {selectedProject.subtitle && (
                  <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary pr-8">
                    {selectedProject.subtitle}
                  </p>
                )}

                <h3 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-6 text-base leading-relaxed text-ink-muted">
                  {selectedProject.overview || selectedProject.description}
                </p>

                {/* Key Highlights */}
                {selectedProject.highlights && (
                  <div className="mt-8">
                    <h4 className="font-display text-lg font-semibold text-ink border-b border-line pb-2 mb-4">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="mt-8">
                  <h4 className="font-display text-lg font-semibold text-ink border-b border-line pb-2 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-void transition-opacity hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-line/50"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
