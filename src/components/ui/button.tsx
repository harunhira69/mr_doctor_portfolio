import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "rounded-full",
    "text-sm font-semibold",
    "transition-all duration-300",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-clinical-teal/40",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-clinical-teal text-white",
          "shadow-[0_10px_28px_rgb(13_118_110_/_15%)]",
          "hover:-translate-y-0.5",
          "hover:bg-clinical-teal-dark",
          "hover:shadow-[0_14px_34px_rgb(13_118_110_/_21%)]",
        ].join(" "),

        secondary: [
          "bg-clinical-mint text-clinical-ink",
          "hover:-translate-y-0.5",
          "hover:bg-[#d9ebe6]",
        ].join(" "),

        outline: [
          "border border-clinical-ink/15",
          "bg-white/60 text-clinical-ink",
          "hover:-translate-y-0.5",
          "hover:border-clinical-teal/40",
          "hover:bg-white",
          "hover:text-clinical-teal",
        ].join(" "),

        ghost: [
          "bg-transparent text-clinical-ink/70",
          "hover:bg-clinical-mint/70",
          "hover:text-clinical-ink",
        ].join(" "),

        link: [
          "h-auto rounded-none",
          "bg-transparent p-0",
          "text-clinical-teal",
          "underline-offset-4",
          "hover:text-clinical-teal-dark",
          "hover:underline",
        ].join(" "),

        dark: [
          "bg-clinical-ink text-white",
          "shadow-[0_10px_28px_rgb(8_47_52_/_14%)]",
          "hover:-translate-y-0.5",
          "hover:bg-[#0d454b]",
          "hover:shadow-[0_14px_34px_rgb(8_47_52_/_20%)]",
        ].join(" "),

        gold: [
          "bg-clinical-gold text-white",
          "hover:-translate-y-0.5",
          "hover:bg-[#a57735]",
        ].join(" "),
      },

      size: {
        default: "min-h-11 px-5",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-12 px-6 text-[0.95rem]",
        xl: "min-h-14 px-7 text-base",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };