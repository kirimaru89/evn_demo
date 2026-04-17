import Link from "next/link";
import { ButtonHTMLAttributes, CSSProperties } from "react";

type ActionTone = "default" | "danger";
type ActionIcon = "view" | "edit" | "delete" | "toggle";

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20l4.5-1 9.2-9.2a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13.5 7.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 4h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 7l.7 11a2 2 0 0 0 2 1.9h4.6a2 2 0 0 0 2-1.9L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 11v5M14 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ToggleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function getIcon(icon: ActionIcon) {
  if (icon === "view") return <EyeIcon />;
  if (icon === "edit") return <PencilIcon />;
  if (icon === "toggle") return <ToggleIcon />;
  return <TrashIcon />;
}

function getToneStyle(tone: ActionTone): CSSProperties {
  if (tone === "danger") {
    return {
      color: "var(--color-danger)",
      border: "1px solid rgba(220,38,38,.16)",
      background: "#fff"
    };
  }

  return {
    color: "var(--color-text)",
    border: "1px solid rgba(148,163,184,.22)",
    background: "#fff"
  };
}

const actionBaseStyle: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 999,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color .18s ease, color .18s ease, border-color .18s ease"
};

export function TableActionGroup({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "inline-flex", gap: 6, justifyContent: "flex-end", flexWrap: "wrap" }}>{children}</div>;
}

export function ActionIconLink({
  href,
  label,
  icon,
  tone = "default"
}: {
  href: string;
  label: string;
  icon: ActionIcon;
  tone?: ActionTone;
}) {
  return (
    <Link href={href} title={label} aria-label={label} style={{ ...actionBaseStyle, ...getToneStyle(tone) }}>
      {getIcon(icon)}
    </Link>
  );
}

export function ActionIconButton({
  label,
  icon,
  tone = "default",
  style,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon: ActionIcon;
  tone?: ActionTone;
}) {
  return (
    <button title={label} aria-label={label} style={{ ...actionBaseStyle, ...getToneStyle(tone), ...style }} {...props}>
      {getIcon(icon)}
    </button>
  );
}
