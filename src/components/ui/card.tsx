import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow",
        className,
      )}
      {...props}
    />
  );
}
