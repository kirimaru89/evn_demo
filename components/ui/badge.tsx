import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";

const toneStyles: Record<BadgeTone, CSSProperties> = {
  neutral: { background: "#E2E8F0", color: "#334155" },
  info: { background: "var(--color-info-bg)", color: "var(--color-info)" },
  success: { background: "var(--color-success-bg)", color: "var(--color-success)" },
  warning: { background: "var(--color-warning-bg)", color: "var(--color-warning)" },
  danger: { background: "var(--color-danger-bg)", color: "var(--color-danger)" }
};

export function Badge({
  className,
  tone = "neutral",
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
}) {
  return (
    <span
      className={cn(className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 24,
        padding: "0 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        ...toneStyles[tone],
        ...style
      }}
      {...props}
    />
  );
}
