import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export function TerminalWindow({ title, children, className, bodyClassName }: TerminalWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-sm", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <p className="min-w-0 truncate font-mono text-xs text-muted-foreground">{title}</p>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

export function Cursor({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("terminal-cursor", className)} />;
}
