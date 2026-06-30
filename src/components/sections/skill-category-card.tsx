import { ShieldAlert, Network, Code2, Server, Layers, type LucideIcon } from "lucide-react";
import type { SkillCategory, SkillLevel } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "shield-alert": ShieldAlert,
  network: Network,
  "code-2": Code2,
  server: Server,
  layers: Layers,
};

const levelLabel: Record<SkillLevel, string> = {
  1: "Beginner",
  2: "Familiar",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

function LevelMeter({ level }: { level: SkillLevel }) {
  return (
    <span
      className="flex items-center gap-1"
      role="img"
      aria-label={`Proficiency: ${levelLabel[level]}`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`h-1.5 w-3 rounded-sm ${i < level ? "bg-primary" : "bg-line"}`}
        />
      ))}
    </span>
  );
}

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon] ?? ShieldAlert;

  return (
    <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
        <h2 className="font-display text-lg font-semibold text-ink">{category.title}</h2>
      </div>

      <ul className="mt-5 divide-y divide-line">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-ink">{item.name}</span>
            <LevelMeter level={item.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}