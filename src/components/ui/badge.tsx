import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"span"> & { tone?: "muted" | "accent" | "solid" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-bold",
        tone === "muted" && "bg-secondary-background text-foreground",
        tone === "accent" && "bg-accent text-accent-foreground",
        tone === "solid" && "bg-main text-main-foreground",
        className,
      )}
      {...props}
    />
  );
}
