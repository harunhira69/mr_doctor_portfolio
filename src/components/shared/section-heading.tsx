import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-3 text-sm font-bold tracking-wide text-[#0E6B65]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C2D35] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#61777B] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}