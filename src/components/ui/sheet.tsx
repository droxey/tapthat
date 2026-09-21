import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  side = "right",
  title,
  ...props
}: ComponentProps<typeof Dialog.Content> & {
  side?: "right" | "left";
  title: string;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay" />
      <Dialog.Content
        className={cn(
          "fixed top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-2 border-border bg-secondary-background p-6",
          side === "right" ? "right-0 border-l-4" : "left-0 border-r-4",
          className,
        )}
        {...props}
      >
        <div className="mb-8 flex items-center justify-between">
          <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
          <Dialog.Close asChild>
            <Button variant="outline" size="icon" aria-label="Close">
              <X className="size-4" />
            </Button>
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
