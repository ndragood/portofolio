import { SkillCategoryCard } from "@/components/sections/skill-category-card";
import { skillCategories } from "@/data/skills-categories";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-secondary">
          Capabilities
        </p>
        <h2
          id="skills-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Tools and concepts I use across security work, networking fundamentals,
          and the programming that ties it all together.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
