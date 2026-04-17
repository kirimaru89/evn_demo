"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

type ModuleTabItem = {
  key: string;
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
};

export function ModuleTabs({ items }: { items: ModuleTabItem[] }) {
  return (
    <Card style={{ padding: 8 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {items.map((item) => {
          const contentStyle = {
            padding: "10px 14px",
            borderRadius: "var(--radius-md)",
            border: item.active ? "1px solid rgba(37,99,235,.32)" : "1px solid rgba(148,163,184,.22)",
            background: item.active ? "#dbeafe" : "#f8fafc",
            color: item.active ? "#1d4ed8" : "var(--color-text)",
            fontWeight: 600,
            cursor: "pointer"
          } as const;

          if (item.href) {
            return (
              <Link key={item.key} href={item.href} style={contentStyle}>
                {item.label}
              </Link>
            );
          }

          return (
            <button key={item.key} type="button" onClick={item.onClick} style={contentStyle}>
              {item.label}
            </button>
          );
        })}
      </div>
    </Card>
  );
}
