import { FolderGit2, Clock } from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  {
    id: "projects",
    label: "Projects Built",
    value: 5,
    suffix: "+",
    icon: FolderGit2,
  },
  {
    id: "years",
    label: "Years Learning IT",
    value: 3,
    icon: Clock,
  },
];
