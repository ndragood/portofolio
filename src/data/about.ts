export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const aboutData = {
  bio: [
    "I'm a Cyber Security student based in Cikarang, West Java, with a strong focus on Security Operations, Network Security, and Ethical Hacking. My journey into cybersecurity started with a curiosity about how systems break and evolved into a passion for making them resilient.",
  ],

  careerGoals: [
    "My immediate goal is to secure a role in a Security Operations Center (SOC) as a Tier 1 Analyst, where I can apply my skills in log analysis, threat detection, and incident triage in a real-world environment.",
    "Long-term, I aim to specialize in Threat Hunting and Digital Forensics, contributing to proactive defense strategies and incident response for organizations.",
  ],

  education: [
    {
      id: "edu-1",
      institution: "President University",
      degree: "Bachelor of Computer Science — Cyber Security Concentration",
      period: "2023 — Present",
      description:
        "Focusing on network security, ethical hacking, and software development. Active in CTF competitions and security research projects.",
    },
  ] as Education[],

  journey: [
    {
      id: "j-1",
      year: "2020",
      title: "First Line of Code",
      description:
        "Started learning Python through online tutorials and immediately got hooked on scripting and automation.",
    },
    {
      id: "j-2",
      year: "2021",
      title: "Discovered Cyber Security",
      description:
        "Completed my first TryHackMe room and realized that security was the intersection of all the tech I loved — networks, Linux, and problem-solving.",
    },
    {
      id: "j-3",
      year: "2022",
      title: "First CTF Competition",
      description:
        "Participated in my first Capture The Flag event. Got destroyed, but learned more in 48 hours than in months of tutorials.",
    },
    {
      id: "j-4",
      year: "2023",
      title: "University & First Lab",
      description:
        "Enrolled in Computer Science with a Cyber Security focus. Set up a homelab with Proxmox, pfSense, and a SIEM stack for hands-on practice.",
    },
    {
      id: "j-5",
      year: "2024",
      title: "Building Real Tools",
      description:
        "Started building security tools — vulnerability scanners, log analyzers, and packet visualizers — to solve problems I encountered during CTF challenges and lab exercises.",
    },
  ] as JourneyMilestone[],

  profileImageAlt: "Profile photo of Andra Rizki Firmansyah",
};
