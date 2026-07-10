type EditorialQuoteProps = {
  lines: string[];
  attribution?: string;
  className?: string;
};

export function EditorialQuote({
  lines,
  attribution,
  className,
}: EditorialQuoteProps) {
  return (
    <figure className={`editorial-quote ${className ?? ""}`}>
      <blockquote>
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </blockquote>
      {attribution ? <figcaption>{attribution}</figcaption> : null}
    </figure>
  );
}
