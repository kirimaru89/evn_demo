"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mbaSections } from "@/lib/mba-data";
import { Card } from "../ui/card";

export function MbaModuleNav() {
  const pathname = usePathname();

  return (
    <Card style={{ padding: 8 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {mbaSections.map((section) => {
          const href = `/mba/${section.slug}`;
          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={section.slug}
              href={href}
              style={{
                padding: "10px 14px",
                borderRadius: "var(--radius-md)",
                border: active ? "1px solid rgba(37,99,235,.32)" : "1px solid rgba(148,163,184,.22)",
                background: active ? "#dbeafe" : "#f8fafc",
                color: active ? "#1d4ed8" : "var(--color-text)",
                fontWeight: 600
              }}
            >
              {section.shortTitle}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
