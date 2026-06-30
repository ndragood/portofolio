import type { LucideIcon } from "lucide-react";

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
}

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  href: string;
  overview: string;
  problem: string;
  solution: string;
  lessonsLearned: string;
  image?: string;
  subtitle?: string;
  highlights?: string[];
  github?: string;
  demo?: string;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  items: SkillItem[];
}
