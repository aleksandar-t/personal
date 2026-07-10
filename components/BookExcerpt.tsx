type BookExcerptProps = {
  lines: string[];
};

export function BookExcerpt({ lines }: BookExcerptProps) {
  return (
    <div className="book-excerpt">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
