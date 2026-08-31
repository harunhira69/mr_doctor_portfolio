import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[82rem] px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}