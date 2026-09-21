import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
