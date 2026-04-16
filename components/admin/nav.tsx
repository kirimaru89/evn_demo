"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "../ui/card";

const items = [
  { label: "Người dùng", href: "/admin/users" },
  { label: "Role & phân quyền", href: "/admin/roles" },
  { label: "Đơn vị / phòng ban", href: "/admin/departments" },
  { label: "Danh mục vật tư", href: "/admin/material-categories" },
  { label: "Nhật ký hệ thống", href: "/admin/audit-logs" }
];

export function AdminModuleNav() {
  const pathname = usePathname();

  return (
    <Card style={{ padding: 8 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "10px 14px",
                borderRadius: "var(--radius-md)",
                border: active ? "1px solid rgba(37,99,235,.32)" : "1px solid rgba(148,163,184,.22)",
                background: active ? "#dbeafe" : "#f8fafc",
                color: active ? "#1d4ed8" : "var(--color-text)",
                fontWeight: 600
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
