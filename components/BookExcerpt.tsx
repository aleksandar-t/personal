type BookExcerptProps = {
  lines: string[];
};

export function BookExcerpt({ lines }: BookExcerptProps) {
  return (
    <div className="book-excerpt">
      {lines.map((line, index) => (
        <figure className="book-quote" key={line}>
          <blockquote>
            <p>{line}</p>
          </blockquote>
          <figcaption>
            One Honest Conversation <span aria-hidden="true">/</span> excerpt{" "}
            {index + 1}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
