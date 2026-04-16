import { ReactNode } from "react";

export function Breadcrumbs({ items }: { items: string[] }) {
  return <div style={{ fontSize: 13, color: "var(--color-text-soft)" }}>{items.join(" > ")}</div>;
}

export function PageHeader({
  title,
  description,
  actions
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
      <div>
        <h1 style={{ margin: 0, fontFamily: "Lexend, sans-serif", fontSize: 28, lineHeight: 1.25 }}>{title}</h1>
        {description ? <p style={{ margin: "8px 0 0", fontSize: 15, color: "var(--color-text-muted)" }}>{description}</p> : null}
      </div>
      {actions}
    </div>
  );
}
