import type { Project } from "@/types";

export const allProjects: Project[] = [
  {
    id: "2",
    slug: "catat-uang",
    title: "Catat Uang",
    subtitle: "CROSS-PLATFORM MOBILE DEVELOPMENT | DATABASE DESIGN",
    image: "/projects/catat-uang.png",
    highlights: ["Real-Time Sync", "Firebase Auth", "Budget Alerts", "Analytics Dashboard"],
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
    title: "SRM Audit System",
    subtitle: "SECURITY RISK MANAGEMENT | AUDIT COMPLIANCE",
    image: "/projects/srm-mini-project.png",
    highlights: ["ISO/IEC 27001", "Asset Inventory", "Risk Scoring", "Audit Checklist"],
    description:
      "A comprehensive Security Risk Management & Audit Checklist generator mapped to ISO/IEC 27001 compliance standards.",
    stack: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS"],
    status: "completed",
    href: "/projects/srm-mini-project",
    overview:
      "An automated compliance and audit checklist generation system that allows organizations to register assets, identify vulnerabilities, auto-calculate risk scores, and generate ISO/IEC 27001 compliant audit controls.",
    problem:
      "Organizations often struggle with manual compliance tracking and managing spreadsheets for risk assessments, leading to inconsistencies and missing controls during formal ISO 27001 audits.",
    solution:
      "Developed a centralized application using Next.js and Prisma that maps asset vulnerabilities directly to ISO/IEC 27001 controls. The system automates risk scoring based on the CIA triad and dynamically generates tailored audit checklists.",
    lessonsLearned:
      "Deepened my understanding of ISO/IEC 27001 compliance frameworks and risk modeling. Gained hands-on experience designing relational database schemas with Prisma to handle complex mappings between assets, vulnerabilities, and security controls.",
  },
  {
    id: "4",
    slug: "crowdflow",
    title: "CrowdFlow",
    subtitle: "FULL STACK WEB DEVELOPMENT | VENUE MANAGEMENT",
    image: "/projects/crowdflow.png",
    highlights: ["Ticketing System", "QR Validation", "Seat Allocation", "Organizer Dashboard"],
    description:
      "A system for event ticketing and venue management with real-time seat allocation, QR-code validation, and an organizer dashboard.",
    stack: ["Go", "Next.js", "JavaScript"],
    status: "in-progress",
    href: "/projects/crowdflow",
    overview:
      "CrowdFlow is a full-stack event ticketing platform that enables organizers to create events, manage venues with seat maps, and sell tickets online. Attendees can browse events, purchase tickets, and receive QR-coded e-tickets for contactless check-in at the venue.",
    problem:
      "Small-to-medium event organizers often lack access to affordable, customizable ticketing systems. Most existing platforms charge high fees, offer limited venue management tools, and do not provide real-time occupancy tracking — making it difficult to manage crowd flow effectively.",
    solution:
      "Designed a Go backend with RESTful APIs for event CRUD, ticket purchasing, and QR code generation. Built a Next.js frontend with an organizer dashboard featuring real-time ticket sales analytics, venue seat map management, and an attendee-facing event discovery page with filtering and search capabilities.",
    lessonsLearned:
      "Gained experience building concurrent, performant APIs with Go's goroutines and channels. Learned how to design database schemas for complex seat allocation logic. Understood the challenges of real-time inventory management and preventing race conditions in ticket purchasing.",
  },
  {
    id: "5",
    slug: "soc-siem-system",
    title: "SOC and SIEM System",
    subtitle: "SECURITY OPERATIONS | LOG AGGREGATION",
    image: "/projects/soc-siem-system.png",
    highlights: ["eBPF Traffic Mirroring", "ML Anomaly Detection", "Real-Time Alerting", "OpenSearch Pipeline"],
    description:
      "A high-performance Security Operations Center (SOC) and SIEM pipeline built for scalable threat detection and centralized log analysis.",
    stack: ["OpenSearch", "Kafka", "Fluent Bit", "Vector", "eBPF", "Slack API"],
    status: "completed",
    href: "/projects/soc-siem-system",
    overview:
      "A comprehensive SOC and SIEM system built to ingest, process, and analyze security events at scale. It utilizes Fluent Bit and Apache Kafka for reliable data ingestion, Vector/Logstash for enrichment, and OpenSearch for robust indexing and visualization.",
    problem:
      "Modern networks generate massive volumes of log data. Traditional security monitoring setups often struggle to ingest and process this data in real time, lacking the ability to apply machine learning or handle rapid threat alerting efficiently.",
    solution:
      "Implemented a high-throughput data pipeline routing traffic mirrored via eBPF (Cilium Tetragon) into Apache Kafka. Data is parsed and enriched before indexing in OpenSearch 2.x. Set up OpenSearch Dashboards for visualization, leveraged the k-NN plugin for ML-based anomaly detection, and integrated Slack webhooks for instant alerting.",
    lessonsLearned:
      "Gained deep expertise in constructing scalable data pipelines and managing streaming architectures with Kafka. Learned how to leverage eBPF for low-overhead traffic mirroring and applied machine learning techniques directly within OpenSearch for advanced threat hunting.",
  },
];

/** Top 3 projects shown on the homepage. */
export const featuredProjects = allProjects.slice(0, 3);
