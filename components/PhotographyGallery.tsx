"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Artwork } from "@/content/types";

type PhotographyGalleryProps = {
  artworks: Artwork[];
};

export function PhotographyGallery({ artworks }: PhotographyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : artworks[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? 0 : (current + 1) % artworks.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? 0
            : (current - 1 + artworks.length) % artworks.length,
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [artworks.length, selectedIndex]);

  return (
    <>
      <div className="gallery-grid">
        {artworks.map((artwork, index) => (
          <figure
            className="gallery-item"
            data-orientation={
              artwork.height > artwork.width
                ? "portrait"
                : artwork.height === artwork.width
                  ? "square"
                  : "landscape"
            }
            key={artwork.src}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open ${artwork.title}`}
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </button>
            <figcaption>
              <span>{artwork.title}</span>
              <small>{artwork.caption}</small>
            </figcaption>
          </figure>
        ))}
      </div>

      {selected ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} image viewer`}
        >
          <button
            className="lightbox__close"
            type="button"
            onClick={() => setSelectedIndex(null)}
          >
            Close
          </button>
          <button
            className="lightbox__nav"
            type="button"
            onClick={() =>
              setSelectedIndex((current) =>
                current === null
                  ? 0
                  : (current - 1 + artworks.length) % artworks.length,
              )
            }
          >
            Previous
          </button>
          <figure className="lightbox__figure">
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              sizes="90vw"
            />
            <figcaption>
              <strong>{selected.title}</strong>
              <span>{selected.caption}</span>
              {selected.metadata ? <small>{selected.metadata}</small> : null}
            </figcaption>
          </figure>
          <button
            className="lightbox__nav"
            type="button"
            onClick={() =>
              setSelectedIndex((current) =>
                current === null ? 0 : (current + 1) % artworks.length,
              )
            }
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
