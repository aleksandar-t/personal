import Image from "next/image";
import type { HomeWorld } from "@/content/types";
import { MotionReveal } from "./MotionReveal";
import { NewTabLink } from "./NewTabLink";

type ProjectFeatureProps = {
  world: HomeWorld;
  index: number;
};

export function ProjectFeature({ world, index }: ProjectFeatureProps) {
  return (
    <MotionReveal
      className="world-feature"
      delay={index * 0.05}
    >
      <div className="world-feature__image">
        <Image
          src={world.image.src}
          alt={world.image.alt}
          width={world.image.width}
          height={world.image.height}
          sizes="(max-width: 900px) 100vw, 48vw"
        />
      </div>
      <div className="world-feature__copy">
        <p className="eyebrow">{world.eyebrow}</p>
        <h3>{world.title}</h3>
        <p>{world.description}</p>
        <p className="feature-note">{world.featured}</p>
        <NewTabLink className="text-link" href={world.href}>
          Enter {world.title.toLowerCase()}
        </NewTabLink>
      </div>
    </MotionReveal>
  );
}
