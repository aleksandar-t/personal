import type { TechnicalProject } from "./types";

export const engineeringProfile = {
  title: "Engineering",
  subtitle: "Systems that can be understood, owned, and changed.",
  summary:
    "Aleksandar's public engineering story is anchored in senior software engineering, architecture, technical leadership, mentoring, and more than 15 years of building and owning production systems. The public signal is not a catalogue of side projects; it is a reputation for depth of knowledge, deadline-aware delivery, analytical thinking, professionalism, and the ability to help people move through difficult technical work.",
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
    "This page is deliberately scoped to the public professional profile: engineering judgment, leadership, mentoring, delivery, and production ownership. Personal products and experiments stay offstage until they are ready to be introduced on their own terms.",
};

export const engineeringPrinciples = [
  {
    title: "Architecture",
    text: "Structure is useful only when it makes future change calmer, clearer, and easier for other people to own.",
  },
  {
    title: "Reliability",
    text: "Production systems deserve boring confidence: logs that speak, failures that degrade, and boundaries that hold.",
  },
  {
    title: "Product understanding",
    text: "The system has to serve the real product journey, not only the diagram that looks elegant in isolation.",
  },
  {
    title: "Leadership",
    text: "Technical leadership is partly judgment, partly communication, and partly creating conditions where others can think clearly.",
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
