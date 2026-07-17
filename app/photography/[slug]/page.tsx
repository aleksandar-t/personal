import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FullBleedImage } from "@/components/FullBleedImage";
import { NewTabLink } from "@/components/NewTabLink";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import { getPhotoCollection, photoCollections } from "@/content/photography";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photoCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getPhotoCollection(slug);

  if (!collection) {
    return {
      title: "Photography collection",
    };
  }

  return {
    title: collection.title,
    description: collection.subtitle,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getPhotoCollection(slug);

  if (!collection) {
    notFound();
  }

  const currentIndex = photoCollections.findIndex((item) => item.slug === slug);
  const previous =
    photoCollections[
      (currentIndex - 1 + photoCollections.length) % photoCollections.length
    ];
  const next = photoCollections[(currentIndex + 1) % photoCollections.length];

  return (
    <>
      <section className="page-hero content-band collection-hero">
        <div>
          <p className="eyebrow">Photography collection</p>
          <h1>{collection.title}</h1>
          <p>{collection.subtitle}</p>
        </div>
        <div className="collection-intro">
          {collection.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {collection.context ? <p>{collection.context}</p> : null}
        </div>
      </section>

      <section className="content-band">
        <FullBleedImage image={collection.hero} priority />
      </section>

      <section className="content-band">
        <PhotographyGallery artworks={collection.artworks} />
      </section>

      <nav className="collection-nav" aria-label="Collection navigation">
        <NewTabLink href={`/photography/${previous.slug}`}>
          Previous: {previous.title}
        </NewTabLink>
        <NewTabLink href="/photography">All photography</NewTabLink>
        <NewTabLink href={`/photography/${next.slug}`}>
          Next: {next.title}
        </NewTabLink>
      </nav>
    </>
  );
}
