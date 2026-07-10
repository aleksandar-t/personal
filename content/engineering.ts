import type { TechnicalProject } from "./types";

export const engineeringProfile = {
  title: "Engineering",
  subtitle: "Systems that can be understood, owned, and changed.",
  summary:
    "Aleksandar is an experienced software engineer, architect, technical lead, mentor, and product builder with more than 15 years of software engineering experience.",
  practices: [
    "Senior and Principal .NET engineering",
    "Technical leadership and team leadership",
    "Backend and distributed systems",
    "Clean Architecture, SOLID, and pragmatic domain-driven design",
    "C#, .NET, ASP.NET Core, and EF Core",
    "REST APIs and external integrations",
    "Authentication and authorization",
    "Redis and distributed caching",
    "RabbitMQ and Azure Service Bus",
    "SQL and data modeling",
    "Azure and cloud delivery",
    "CI/CD and production releases",
    "Performance, reliability, logging, monitoring, and resilience",
    "Mentoring, interviewing, code review, and engineering standards",
    "Ownership of existing or inherited systems",
    "Incremental modernization over unnecessary rewrites",
  ],
};

export const engineeringPrinciples = [
  {
    title: "Architecture",
    text: "Structure is useful only when it makes future change calmer, clearer, and less theatrical.",
  },
  {
    title: "Reliability",
    text: "Production systems deserve boring confidence: logs that speak, failures that degrade, and boundaries that hold.",
  },
  {
    title: "Product understanding",
    text: "The system has to serve the real user journey, not only the diagram that looks elegant in isolation.",
  },
  {
    title: "Leadership",
    text: "Technical leadership is partly judgment, partly communication, and partly creating conditions where others can think well.",
  },
  {
    title: "Ownership",
    text: "Inherited systems are not insults. They are conversations already in progress.",
  },
  {
    title: "Building for change",
    text: "The best abstraction is not the cleverest one. It is the one that keeps its promise when the product moves.",
  },
];

export const technicalProjects: TechnicalProject[] = [
  {
    name: "SnipTap",
    summary:
      "An offline-first Android productivity application for reusable snippets, templates, clipboard workflows, categories, and local-first usage.",
    problem:
      "People repeat small pieces of text and workflow patterns across devices, apps, and contexts, but most tools either overcomplicate the habit or depend too heavily on connectivity.",
    productIdea:
      "A fast, local-first snippet companion that treats reusable text as a private, structured productivity layer.",
    technicalDirection: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "MVVM",
      "Coroutines and Flow",
      "Google Play Billing",
    ],
    architecturalPrinciple:
      "Local-first behavior should feel immediate, private, and dependable before any premium or connected layer exists.",
    status: "Current status placeholder. Replace with public release state when ready.",
    links: [
      { label: "Source placeholder", href: "#sniptap-source", placeholder: true },
      { label: "Demo placeholder", href: "#sniptap-demo", placeholder: true },
    ],
  },
  {
    name: "BoredOnPlane",
    summary:
      "An offline-first flight companion with games, journaling, calm exercises, trip planning, and private invite-only Cabin Chat using nearby device communication.",
    problem:
      "Flights often remove connectivity, comfort, and context at the same time. A companion app should still feel useful when the network disappears.",
    productIdea:
      "A calm, private, local-first travel companion designed for offline operation and thoughtful moments during flight.",
    technicalDirection: [
      "Offline-first app architecture",
      "Local storage",
      "Nearby device communication",
      "Private invite-only Cabin Chat",
      "Games, journaling, exercises, and trip planning modules",
    ],
    architecturalPrinciple:
      "Privacy and offline operation are product values, not fallback modes.",
    status: "Current status placeholder. Replace with store or release information when public.",
    links: [
      { label: "Product page placeholder", href: "#boredonplane-product", placeholder: true },
      { label: "Demo placeholder", href: "#boredonplane-demo", placeholder: true },
    ],
  },
  {
    name: "Aporeon",
    summary:
      "An interview-preparation platform focused on complete interview simulation rather than isolated coding questions.",
    problem:
      "Interview preparation often trains fragments: a question, a quiz, or a coding prompt. Real interviews combine architecture, communication, judgment, and pressure.",
    productIdea:
      "A platform for full simulation across .NET, backend architecture, APIs, databases, cloud, DevOps, distributed systems, leadership, and behavioral interviews.",
    technicalDirection: [
      ".NET and backend interview paths",
      "Architecture and systems scenarios",
      "Cloud, DevOps, and distributed-systems topics",
      "Leadership and behavioral simulation",
    ],
    architecturalPrinciple:
      "Preparation should model the whole conversation, not just the easiest part to score.",
    status: "Current status placeholder. Replace with launch or waitlist information.",
    links: [
      { label: "Waitlist placeholder", href: "#aporeon-waitlist", placeholder: true },
      { label: "Demo placeholder", href: "#aporeon-demo", placeholder: true },
    ],
  },
  {
    name: "Vidartio",
    summary:
      "A creator-focused mobile application for camera-based product presentation, overlays, gesture-triggered experiences, reusable templates, and recording/export workflows.",
    problem:
      "Creators need repeatable presentation formats without turning every product video into a manual editing session.",
    productIdea:
      "A mobile creation tool where templates, camera overlays, gestures, and exports support polished product presentation.",
    technicalDirection: [
      "Camera-first mobile workflow",
      "Reusable visual templates",
      "Gesture-triggered experiences",
      "Recording and export pipeline",
      "Creator-focused interaction design",
    ],
    architecturalPrinciple:
      "Creative tools should reduce friction without flattening the creator's voice.",
    status: "Current status placeholder. Replace with release state when ready.",
    links: [
      { label: "Product placeholder", href: "#vidartio-product", placeholder: true },
      { label: "Demo placeholder", href: "#vidartio-demo", placeholder: true },
    ],
  },
  {
    name: "Tomovium API Core",
    summary:
      "A reusable backend foundation intended to support multiple applications with shared infrastructure.",
    problem:
      "Multiple products often rebuild the same foundation: accounts, billing, entitlement checks, configuration, logging, and integration seams.",
    productIdea:
      "A shared backend core that gives future applications a reliable starting point without leaking product-specific assumptions into the foundation.",
    technicalDirection: [
      "Accounts and authentication",
      "Billing and entitlements",
      "AI provider integration",
      "Remote configuration",
      "Logging",
      "Rate limiting",
      "Installation registration",
      "Offline-first synchronization support",
    ],
    architecturalPrinciple:
      "Shared infrastructure should make products faster to build while keeping each product free to become itself.",
    status: "Current status placeholder. Replace with repository, package, or internal-use note.",
    links: [
      { label: "Architecture note placeholder", href: "#api-core-note", placeholder: true },
      { label: "Source placeholder", href: "#api-core-source", placeholder: true },
    ],
  },
];
