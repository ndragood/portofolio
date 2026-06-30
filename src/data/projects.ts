import type { Project } from "@/types";

export const allProjects: Project[] = [
  {
    id: "1",
    slug: "top-up-website",
    title: "Top Up Website",
    description:
      "A responsive web-based top-up platform for purchasing game credits and digital vouchers with a clean user interface and smooth checkout flow.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "in-progress",
    href: "/projects/top-up-website",
    overview:
      "A front-end web application that simulates a digital top-up marketplace where users can browse game titles, select voucher denominations, and proceed through a checkout flow. The site features a responsive layout, dynamic product filtering, and a cart system built entirely with vanilla JavaScript.",
    problem:
      "Many top-up platforms have cluttered, ad-heavy interfaces that make it difficult for users to quickly find and purchase the credits they need. The user experience is often sacrificed for monetization, leading to confusing navigation and slow page loads.",
    solution:
      "Designed and built a clean, mobile-first top-up interface using semantic HTML, modular CSS with custom properties for theming, and vanilla JavaScript for interactivity. Implemented features like category filtering, denomination selection, and a lightweight cart system with localStorage persistence.",
    lessonsLearned:
      "Strengthened my understanding of responsive design principles and CSS Grid/Flexbox layouts. Learned how to manage application state with vanilla JavaScript and localStorage without relying on frameworks. Gained experience building accessible, user-friendly e-commerce interfaces.",
  },
  {
    id: "2",
    slug: "catat-uang",
    title: "Catat Uang",
    description:
      "A mobile financial management app built with Flutter and Firebase for tracking income, expenses, and budgets with real-time data sync.",
    stack: ["Dart", "Flutter", "Firebase"],
    status: "completed",
    href: "/projects/catat-uang",
    overview:
      "Catat Uang is a cross-platform mobile application for personal finance management. Users can record daily transactions, categorize spending, set monthly budgets, and view analytics dashboards — all synced in real-time through Firebase Firestore.",
    problem:
      "Existing finance tracking apps are either too complex for casual users or too simplistic to provide meaningful insights. Students and young professionals need a tool that is intuitive enough for daily use while offering useful visualizations of spending patterns.",
    solution:
      "Built a Flutter application with a clean Material Design interface. Implemented Firebase Authentication for secure login, Firestore for real-time transaction storage, and custom chart widgets for visualizing monthly spending by category. Added budget alerts that notify users when they approach their set limits.",
    lessonsLearned:
      "Gained hands-on experience with Flutter's widget system and state management patterns. Learned how to structure Firestore collections for efficient querying and real-time updates. Understood the importance of offline-first design patterns for mobile apps.",
  },
  {
    id: "3",
    slug: "srm-mini-project",
    title: "SRM Mini Project",
    description:
      "A security risk management tool combining network analysis with a real-time monitoring dashboard for identifying and tracking potential threats.",
    stack: ["Wireshark", "Python", "Next.js", "WebSockets"],
    status: "completed",
    href: "/projects/srm-mini-project",
    overview:
      "A Security Risk Management (SRM) proof-of-concept that integrates network packet capture analysis with a real-time web dashboard. The tool captures and processes network traffic using Python, identifies potential security risks based on configurable rules, and streams findings to a Next.js dashboard via WebSockets.",
    problem:
      "Security risk assessment in small-to-medium networks often lacks real-time visibility. Teams rely on periodic manual audits using separate tools for capture, analysis, and reporting — creating gaps where threats can go unnoticed between assessment cycles.",
    solution:
      "Built a Python backend that wraps tshark for continuous packet capture, extracts protocol statistics and anomaly indicators per time window, and pushes updates over WebSocket to a Next.js frontend. The dashboard shows real-time charts for protocol distribution, flagged connections, and risk severity levels.",
    lessonsLearned:
      "Working with real-time data streams taught me about backpressure handling and efficient state updates in React. Learned how to use tshark's ring buffer mode for memory-safe continuous capture. Gained practical understanding of SRM frameworks and how to translate risk metrics into actionable dashboards.",
  },
  {
    id: "4",
    slug: "tixcrowd",
    title: "TixCrowd",
    description:
      "A system for event ticketing and venue management with real-time seat allocation, QR-code validation, and an organizer dashboard.",
    stack: ["Go", "Next.js", "JavaScript"],
    status: "in-progress",
    href: "/projects/tixcrowd",
    overview:
      "TixCrowd is a full-stack event ticketing platform that enables organizers to create events, manage venues with seat maps, and sell tickets online. Attendees can browse events, purchase tickets, and receive QR-coded e-tickets for contactless check-in at the venue.",
    problem:
      "Small-to-medium event organizers often lack access to affordable, customizable ticketing systems. Most existing platforms charge high fees, offer limited venue management tools, and do not provide real-time occupancy tracking — making it difficult to manage crowd flow effectively.",
    solution:
      "Designed a Go backend with RESTful APIs for event CRUD, ticket purchasing, and QR code generation. Built a Next.js frontend with an organizer dashboard featuring real-time ticket sales analytics, venue seat map management, and an attendee-facing event discovery page with filtering and search capabilities.",
    lessonsLearned:
      "Gained experience building concurrent, performant APIs with Go's goroutines and channels. Learned how to design database schemas for complex seat allocation logic. Understood the challenges of real-time inventory management and preventing race conditions in ticket purchasing.",
  },
  {
    id: "5",
    slug: "cryptography-quantum",
    title: "Cryptography Quantum",
    description:
      "A research-driven project exploring post-quantum cryptographic algorithms and their implementation for securing communications against quantum computing threats.",
    stack: ["Python", "Cryptography", "Research"],
    status: "completed",
    href: "/projects/cryptography-quantum",
    overview:
      "An academic research project that explores the impact of quantum computing on current cryptographic standards and implements proof-of-concept demonstrations of post-quantum cryptographic algorithms including lattice-based and hash-based schemes.",
    problem:
      "Current widely-used cryptographic algorithms like RSA and ECC are vulnerable to attacks from sufficiently powerful quantum computers using Shor's algorithm. Organizations need to understand and prepare for the transition to quantum-resistant cryptographic standards.",
    solution:
      "Conducted a comprehensive literature review of NIST post-quantum candidates. Implemented Python demonstrations of lattice-based encryption (CRYSTALS-Kyber) and hash-based signatures (SPHINCS+) to compare performance characteristics. Created a technical report analyzing migration strategies for existing systems.",
    lessonsLearned:
      "Deepened understanding of both classical and post-quantum cryptographic primitives. Learned about the computational complexity assumptions underlying lattice-based schemes. Gained experience writing technical research papers and presenting complex security concepts to non-specialist audiences.",
  },
];

/** Top 3 projects shown on the homepage. */
export const featuredProjects = allProjects.slice(0, 3);
