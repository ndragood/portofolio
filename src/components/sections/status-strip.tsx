"use client";

import { useEffect, useState } from "react";

interface StatusStripProps {
  className?: string;
}

function formatUptime(seconds: number) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${h}:${m}:${s}`;
}

/**
 * The page's signature motif: a slim live-status readout, styled after a
 * real SOC monitoring console rather than generic "hacker" decoration.
 * Counts session uptime client-side — purely cosmetic, no tracking.
 */
export function StatusStrip({ className }: StatusStripProps) {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setUptime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-ink-muted ${className ?? ""}`}
      role="status"
      aria-live="off"
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary" />
        </span>
        <span className="uppercase tracking-wider text-primary">Systems Nominal</span>
      </span>
      <span className="hidden sm:inline">|</span>
      <span className="hidden sm:inline">
        Session uptime <span className="text-ink">{formatUptime(uptime)}</span>
      </span>
      <span className="hidden md:inline">|</span>
      <span className="hidden md:inline">
        Last scan <span className="text-ink">2h ago</span>
      </span>
      <span className="hidden lg:inline">|</span>
      <span className="hidden items-center gap-1.5 lg:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-critical" aria-hidden="true" />
        <span className="text-critical">2 open advisories</span>
      </span>
    </div>
  );
}
