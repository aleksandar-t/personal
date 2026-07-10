import Link from "next/link";
import type { TechnicalProject } from "@/content/types";

type TechnicalProjectSummaryProps = {
  project: TechnicalProject;
};

export function TechnicalProjectSummary({
  project,
}: TechnicalProjectSummaryProps) {
  return (
    <article className="technical-project">
      <div>
        <p className="eyebrow">Product study</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
      </div>

      <dl>
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Product idea</dt>
          <dd>{project.productIdea}</dd>
        </div>
        <div>
          <dt>Technical direction</dt>
          <dd>
            <ul className="inline-list">
              {project.technicalDirection.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Architectural principle</dt>
          <dd>{project.architecturalPrinciple}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
      </dl>

      <div className="project-links">
        {project.links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
