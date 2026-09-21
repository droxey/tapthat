import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-base border-2 border-border bg-accent px-2.5 py-1 text-sm font-bold tracking-tight text-accent-foreground shadow-shadow",
        className,
      )}
    >
      TAPTHAT
    </span>
  );
}

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("inline-flex", className)} aria-label="TapThat home">
      <Wordmark />
    </Link>
  );
}
