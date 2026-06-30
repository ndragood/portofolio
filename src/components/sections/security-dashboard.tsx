"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, FileSearch, Bell, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DashboardStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
  accent: string;
  glowColor: string;
}

const dashboardStats: DashboardStat[] = [
  {
    id: "threats",
    label: "Threats Blocked",
    value: 1247,
    suffix: "",
    icon: ShieldCheck,
    accent: "text-primary",
    glowColor: "bg-primary/10",
  },
  {
    id: "logs",
    label: "Logs Processed",
    value: 48,
    suffix: "K",
    icon: FileSearch,
    accent: "text-secondary",
    glowColor: "bg-secondary/10",
  },
  {
    id: "alerts",
    label: "Alerts Reviewed",
    value: 326,
    suffix: "",
    icon: Bell,
    accent: "text-primary",
    glowColor: "bg-primary/10",
  },
  {
    id: "systems",
    label: "Systems Monitored",
    value: 14,
    suffix: "",
    icon: Monitor,
    accent: "text-secondary",
    glowColor: "bg-secondary/10",
  },
];

function AnimatedCounter({
  value,
  duration = 1400,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export function SecurityDashboard() {
  return (
    <section
      aria-labelledby="security-dashboard-heading"
      className="relative overflow-hidden border-b border-line"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-baseline justify-between"
        >
          <div>
            <h2
              id="security-dashboard-heading"
              className="font-display text-2xl font-semibold text-ink sm:text-3xl"
            >
              Security Dashboard
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Mock SOC metrics — a taste of the monitoring I build for.
            </p>
          </div>
          <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-faint sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary" />
            </span>
            Live sim
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {dashboardStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative rounded-lg border border-line bg-surface p-5 sm:p-6 transition-colors hover:border-primary/30"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-lg ${stat.glowColor} opacity-0 transition-opacity group-hover:opacity-100 blur-xl`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex rounded-md border border-line p-2 ${stat.glowColor}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${stat.accent}`}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                  </p>

                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scan line effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
        >
          <div className="animate-scan h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
