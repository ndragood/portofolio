"use client";

import { featuredSkills } from "@/data/skills";

/* Split skills into two rows for opposite-direction scrolling */
const mid = Math.ceil(featuredSkills.length / 2);
const rowA = featuredSkills.slice(0, mid);
const rowB = featuredSkills.slice(mid);

function MarqueeRow({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof featuredSkills;
  direction?: "left" | "right";
  speed?: number;
}) {
  /* Duplicate the list so the second copy seamlessly follows the first */
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent sm:w-24" />

      <div
        className={`flex w-max gap-4 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {doubled.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.id}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-line/60 bg-surface px-5 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-surface-raised hover:shadow-[0_0_20px_rgba(0,255,178,0.08)]"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-secondary"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-sm font-medium text-ink">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FeaturedSkills() {
  return (
    <section
      aria-labelledby="featured-skills-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="featured-skills-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Tech Stack
          </h2>
          <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            {featuredSkills.length} / loaded
          </span>
        </div>
      </div>

      {/* Marquee rows — full-bleed, outside the container */}
      <div className="flex flex-col gap-4 pb-16">
        <MarqueeRow items={rowA} direction="left" speed={35} />
        <MarqueeRow items={rowB} direction="right" speed={40} />
      </div>
    </section>
  );
}
