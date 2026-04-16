"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { appModules } from "@/lib/mock-data";
import { Card } from "./ui/card";

export function AppShell({
  title,
  subtitle: _subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  function isModuleActive(href: string) {
    if (!href || href === "#") return false;
    if (href === "/home") return pathname === "/home";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "var(--sidebar-width) minmax(0, 1fr)" }}>
      <aside
        style={{
          borderRight: "1px solid rgba(148,163,184,.2)",
          background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
          color: "white",
          padding: 20,
          display: "grid",
          alignContent: "start",
          gap: 20
        }}
      >
        <div>
          <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 22, fontWeight: 700 }}>MSM</div>
          <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.72)" }}>Hệ thống quản lý đa dịch vụ</div>
        </div>
        <nav style={{ display: "grid", gap: 8 }}>
          {appModules.map((module) => (
            <Link
              key={module.name}
              href={module.disabled ? "#" : module.href}
              style={{
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                background: isModuleActive(module.href) ? "rgba(37,99,235,.24)" : "transparent",
                border: isModuleActive(module.href) ? "1px solid rgba(147,197,253,.38)" : "1px solid rgba(255,255,255,.08)",
                opacity: module.disabled ? 0.6 : 1
              }}
            >
              <div style={{ fontWeight: 700 }}>{module.name}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: "rgba(255,255,255,.7)" }}>{module.description}</div>
            </Link>
          ))}
        </nav>
      </aside>

      <div style={{ minWidth: 0 }}>
        <header
          style={{
            height: "var(--topbar-height)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottom: "1px solid rgba(148,163,184,.2)",
            background: "rgba(255,255,255,.85)",
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: 0,
            zIndex: 10
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: "var(--color-text-soft)", textTransform: "uppercase", fontWeight: 700 }}>
              Enterprise Gateway
            </div>
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>{title}</div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Card style={{ padding: "8px 12px", background: "#eff6ff", color: "#1d4ed8" }}>Nguyễn Đức Minh</Card>
            <Link href="/login" style={{ fontWeight: 600, color: "var(--color-primary-700)" }}>
              Đăng xuất
            </Link>
          </div>
        </header>

        <main style={{ padding: 24, display: "grid", gap: 20 }}>{children}</main>
      </div>
    </div>
  );
}
