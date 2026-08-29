type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </div>
  );
}
