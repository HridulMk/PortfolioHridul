type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ index, label, title, lede }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-widest text-muted">
        {index} — {label}
      </p>
      <h2 className="mt-4 font-serif text-title text-ink">{title}</h2>
      {lede ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
