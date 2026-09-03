import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex w-fit items-center justify-center gap-1.5",
    "whitespace-nowrap",
    "rounded-full",
    "border",
    "px-3 py-1.5",
    "text-[11px] font-bold leading-none",
    "transition-colors",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-clinical-teal/15",
          "bg-clinical-mint",
          "text-clinical-teal-dark",
        ].join(" "),

        outline: [
          "border-clinical-ink/12",
          "bg-white/70",
          "text-clinical-ink/70",
        ].join(" "),

        dark: [
          "border-white/10",
          "bg-clinical-ink",
          "text-white",
        ].join(" "),

        gold: [
          "border-clinical-gold/20",
          "bg-[#f5eddf]",
          "text-[#805f2d]",
        ].join(" "),

        success: [
          "border-[#2d8a65]/15",
          "bg-[#e7f5ed]",
          "text-[#24694f]",
        ].join(" "),

        muted: [
          "border-clinical-ink/8",
          "bg-clinical-ink/[0.035]",
          "text-muted-foreground",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };