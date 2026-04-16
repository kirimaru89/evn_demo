import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      style={{
        background: "var(--color-surface)",
        border: "1px solid rgba(148,163,184,.28)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        ...style
      }}
      {...props}
    />
  );
}
