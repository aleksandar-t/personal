import type { TechnicalProject } from "./types";

export const engineeringProfile = {
  title: "Engineering",
  subtitle: "Systems that can be understood, owned, and changed.",
  summary:
    "Aleksandar is an experienced software engineer, architect, technical lead, and mentor with more than 15 years of software engineering experience.",
  profileUrl: "https://www.linkedin.com/in/aleksandartomovski/",
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
  publicNote:
    "The public engineering page is intentionally focused on professional experience, technical judgment, leadership, and architecture. Personal products stay off this page until they are ready to be shown.",
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

export const technicalProjects: TechnicalProject[] = [];
