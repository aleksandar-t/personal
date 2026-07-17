import type { TechnicalProject } from "./types";

export const engineeringProfile = {
  title: "Engineering",
  subtitle: "Systems that can be understood, owned, and changed.",
  summary:
    "Aleksandar's engineering work is anchored in more than 15 years of senior software engineering, C#/.NET backend development, architecture, technical leadership, mentoring, and production ownership. The public recommendations around the work point to dedication, professionalism, deep technical knowledge, deadline orientation, analytical thinking, energy, and the ability to manage people through difficult delivery.",
  profileUrl: "https://www.linkedin.com/in/aleksandartomovski/",
  practices: [
    "Senior and principal .NET engineering",
    "Technical leadership, team leadership, and delivery ownership",
    "Backend architecture and distributed systems",
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
    "Analytical problem solving under deadlines",
    "Ownership of existing or inherited systems",
    "Incremental modernization over unnecessary rewrites",
  ],
  publicNote:
    "The engineering profile is built around systems that have to survive real product pressure: APIs, data, integrations, messaging, deployments, monitoring, reviews, releases, and teams that need clear technical direction.",
};

export const engineeringPrinciples = [
  {
    title: "Backend architecture",
    text: "C#/.NET services, REST APIs, domain boundaries, EF Core, SQL, external integrations, and codebases that need to stay readable after the first delivery push.",
  },
  {
    title: "Cloud delivery",
    text: "Azure delivery, CI/CD, release discipline, environment configuration, logging, monitoring, and the operational work that keeps production predictable.",
  },
  {
    title: "Data and messaging",
    text: "SQL modeling, Redis caching, RabbitMQ and Azure Service Bus workflows, asynchronous processing, and failure paths that cannot be left vague.",
  },
  {
    title: "Modernization",
    text: "Improving inherited systems incrementally: separating concerns, adding tests, replacing fragile paths, and choosing steady refactoring over unnecessary rewrites.",
  },
  {
    title: "Team leadership",
    text: "Mentoring engineers, interviewing, code review, engineering standards, and helping teams make consistent decisions under deadline pressure.",
  },
  {
    title: "Product delivery",
    text: "Translating business pressure into technical choices: scope, trade-offs, sequencing, stakeholder clarity, and delivery that still respects the system.",
  },
];

export const technicalProjects: TechnicalProject[] = [];
