import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code-2",
    items: [
      { name: "Python", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Dart", level: 3 },
      { name: "Go", level: 2 },
      { name: "HTML/CSS", level: 4 },
      { name: "Bash", level: 3 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "layers",
    items: [
      { name: "Next.js", level: 3 },
      { name: "Flutter", level: 3 },
      { name: "React", level: 3 },
      { name: "Node.js", level: 2 },
      { name: "Firebase", level: 3 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "shield-alert",
    items: [
      { name: "Nmap", level: 4 },
      { name: "Wireshark", level: 3 },
      { name: "Burp Suite", level: 3 },
      { name: "Metasploit", level: 3 },
      { name: "Ghidra", level: 2 },
      { name: "Docker", level: 3 },
      { name: "Git", level: 4 },
    ],
  },
  {
    id: "platforms",
    title: "Platforms & OS",
    icon: "server",
    items: [
      { name: "Linux", level: 4 },
      { name: "Windows Server", level: 2 },
      { name: "Proxmox", level: 3 },
      { name: "Kali Linux", level: 4 },
    ],
  },
];