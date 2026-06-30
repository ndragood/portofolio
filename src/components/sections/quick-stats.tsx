"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/stats";

function CountUp({ value, duration = 1200 }: { value: number; duration?: number }) {
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
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export function QuickStats() {
  return (
    <section aria-labelledby="quick-stats-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="quick-stats-heading" className="sr-only">
          Quick stats
        </h2>

        <dl className="mx-auto grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col gap-3 bg-surface px-5 py-7"
              >
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <dt className="order-2 font-mono text-xs uppercase tracking-wide text-ink-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
