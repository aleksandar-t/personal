import Image from "next/image";
import type { VisualAsset } from "@/content/types";

type FilmStillsProps = {
  stills: VisualAsset[];
};

export function FilmStills({ stills }: FilmStillsProps) {
  return (
    <div className="still-grid">
      {stills.map((still) => (
        <figure key={still.src}>
          <Image
            src={still.src}
            alt={still.alt}
            width={still.width}
            height={still.height}
            sizes="(max-width: 800px) 100vw, 33vw"
          />
          {still.caption ? <figcaption>{still.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
