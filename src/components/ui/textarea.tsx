import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
