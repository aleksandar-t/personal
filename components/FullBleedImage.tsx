import Image from "next/image";
import type { VisualAsset } from "@/content/types";

type FullBleedImageProps = {
  image: VisualAsset;
  priority?: boolean;
  className?: string;
};

export function FullBleedImage({
  image,
  priority = false,
  className,
}: FullBleedImageProps) {
  return (
    <figure className={`image-stage ${className ?? ""}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 92vw"
        className="image-stage__image"
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
