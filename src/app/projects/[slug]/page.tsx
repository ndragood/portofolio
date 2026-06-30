"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  FileText,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Wrench,
} from "lucide-react";
import { allProjects } from "@/data/projects";

const statusLabel: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          All Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-8"
      >
        <span
          className={`font-mono text-xs uppercase tracking-wide ${
            project.status === "completed" ? "text-primary" : "text-secondary"
          }`}
        >
          {statusLabel[project.status]}
        </span>

        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {project.description}
        </p>

        {/* Tech stack */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line px-3 py-1.5 font-mono text-xs text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Action links */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm font-medium text-ink transition-colors hover:border-secondary hover:text-secondary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-medium text-void transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Divider */}
      <hr className="my-12 border-line" />

      {/* Content sections */}
      <div className="space-y-12">
        {/* Overview */}
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <FileText className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-ink">
              Overview
            </h2>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.overview}
            </p>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.05 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <AlertTriangle className="h-4.5 w-4.5 text-critical" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-ink">
              The Problem
            </h2>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-7 border-l-2 border-l-critical">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.problem}
            </p>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <Lightbulb className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-ink">
              The Solution
            </h2>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-7 border-l-2 border-l-primary">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* Tech Stack breakdown */}
        <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.15 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <Wrench className="h-4.5 w-4.5 text-secondary" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-ink">
              Technologies Used
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.stack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center justify-center rounded-lg border border-line bg-surface px-4 py-3 font-mono text-sm text-ink transition-colors hover:border-primary/40"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.2 }}>
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen className="h-4.5 w-4.5 text-secondary" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-ink">
              Lessons Learned
            </h2>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.lessonsLearned}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom navigation */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-16 pt-8 border-t border-line"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to all projects
        </Link>
      </motion.div>
    </section>
  );
}
