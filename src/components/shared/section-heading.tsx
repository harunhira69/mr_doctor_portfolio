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
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          isCentered && "justify-center",
        )}
      >
        <span
          className="h-px w-9 bg-clinical-gold"
          aria-hidden="true"
        />

        <p className="editorial-eyebrow text-clinical-teal">
          {eyebrow}
        </p>
      </div>

      <h2
        className={cn(
          "editorial-title mt-4 text-[clamp(2rem,4.2vw,3.8rem)] font-bold leading-[1.1] text-clinical-ink",
          isCentered && "mx-auto",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[0.98rem] leading-8 text-muted-foreground sm:text-lg",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}