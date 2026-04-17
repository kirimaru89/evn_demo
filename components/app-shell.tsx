"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { appModules } from "@/lib/mock-data";
import { Card } from "./ui/card";

const notifications = [
  {
    id: "notif-1",
    title: "Hồ sơ quyết toán TVTK chờ duyệt",
    detail: "HSQT-021 đang chờ phê duyệt tại phân hệ Tư vấn thiết kế.",
    time: "5 phút trước",
    unread: true
  },
  {
    id: "notif-2",
    title: "Biên bản CBM cần theo dõi",
    detail: "BCCBM-036 có kết quả Không đạt, cần xem lại báo cáo gần nhất.",
    time: "18 phút trước",
    unread: true
  },
  {
    id: "notif-3",
    title: "Đề nghị tạm ứng đã duyệt",
    detail: "DNTU-001 đã được phê duyệt và chờ trình ký số.",
    time: "1 giờ trước",
    unread: false
  }
] as const;

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4a4 4 0 0 0-4 4v1.47c0 .7-.19 1.38-.55 1.98L6 14h12l-1.45-2.55A3.97 3.97 0 0 1 16 9.47V8a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 17a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

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
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  const unreadCount = useMemo(() => notifications.filter((item) => item.unread).length, []);

  function isModuleActive(href: string) {
    if (!href || href === "#") return false;
    if (href === "/home") return pathname === "/home";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!notificationRef.current?.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    }

    if (notificationsOpen) {
      document.addEventListener("mousedown", handlePointerDown);
    }

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [notificationsOpen]);

  return (
    <div data-shell-root style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "var(--sidebar-width) minmax(0, 1fr)" }}>
      <aside
        data-shell-sidebar
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
        <div data-shell-brand>
          <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 22, fontWeight: 700 }}>MSM</div>
          <div data-shell-brand-copy style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.72)" }}>
            Hệ thống quản lý đa dịch vụ
          </div>
        </div>
        <nav data-shell-nav style={{ display: "grid", gap: 8 }}>
          {appModules.map((module) => (
            <Link
              key={module.name}
              href={module.disabled ? "#" : module.href}
              data-shell-nav-item
              data-active={isModuleActive(module.href) ? "true" : "false"}
              style={{
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                background: isModuleActive(module.href) ? "rgba(37,99,235,.24)" : "transparent",
                border: isModuleActive(module.href) ? "1px solid rgba(147,197,253,.38)" : "1px solid rgba(255,255,255,.08)",
                opacity: module.disabled ? 0.6 : 1
              }}
            >
              <div data-shell-nav-title style={{ fontWeight: 700 }}>{module.name}</div>
              <div data-shell-nav-copy style={{ marginTop: 4, fontSize: 12, color: "rgba(255,255,255,.7)" }}>
                {module.description}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      <div style={{ minWidth: 0 }}>
        <header
          data-shell-header
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
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>{title}</div>
          </div>
          <div data-shell-user style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div ref={notificationRef} style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setNotificationsOpen((current) => !current)}
                data-notification-trigger
                aria-label="Mở thông báo"
                aria-expanded={notificationsOpen}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,.24)",
                  background: "#fff",
                  color: "var(--color-text)",
                  display: "grid",
                  placeItems: "center",
                  position: "relative"
                }}
              >
                <BellIcon />
                {unreadCount ? (
                  <span
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -2,
                      minWidth: 18,
                      height: 18,
                      borderRadius: 999,
                      padding: "0 5px",
                      background: "var(--color-danger)",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "grid",
                      placeItems: "center"
                    }}
                  >
                    {unreadCount}
                  </span>
                ) : null}
              </button>
              {notificationsOpen ? (
                <Card
                  data-shell-notifications
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    right: 0,
                    width: 360,
                    maxWidth: "min(360px, calc(100vw - 24px))",
                    padding: 10,
                    zIndex: 30,
                    display: "grid",
                    gap: 6
                  }}
                >
                  <div data-notification-head style={{ padding: 10, display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 16, fontWeight: 700 }}>Thông báo</div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: 13 }}>Các hồ sơ cần theo dõi gần nhất</div>
                    </div>
                    <button
                      type="button"
                      data-notification-summary
                      style={{
                        border: "1px solid rgba(37,99,235,.12)",
                        background: "var(--color-primary-50)",
                        color: "var(--color-primary-700)",
                        fontWeight: 700,
                        fontSize: 13,
                        borderRadius: 999,
                        padding: "6px 10px"
                      }}
                    >
                      {unreadCount} chưa đọc
                    </button>
                  </div>
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      data-notification-item
                      data-unread={item.unread ? "true" : "false"}
                      style={{
                        padding: 12,
                        borderRadius: "var(--radius-md)",
                        background: item.unread ? "var(--color-primary-50)" : "var(--color-bg-subtle)",
                        border: item.unread ? "1px solid rgba(37,99,235,.14)" : "1px solid rgba(148,163,184,.12)",
                        display: "grid",
                        gap: 6,
                        transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{item.title}</div>
                        <span
                          data-notification-dot
                          style={{
                            marginTop: 2,
                            width: 8,
                            height: 8,
                            borderRadius: 999,
                            background: item.unread ? "var(--color-primary-700)" : "rgba(148,163,184,.48)",
                            flex: "0 0 auto"
                          }}
                        />
                      </div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: 13 }}>{item.detail}</div>
                      <div style={{ color: "var(--color-text-soft)", fontSize: 12 }}>{item.time}</div>
                    </div>
                  ))}
                </Card>
              ) : null}
          </div>
            <Card data-shell-user-card style={{ padding: "8px 12px", background: "#eff6ff", color: "#1d4ed8" }}>
              Nguyễn Đức Minh
            </Card>
            <Link href="/login" data-shell-logout style={{ fontWeight: 600, color: "var(--color-primary-700)" }}>
              Đăng xuất
            </Link>
          </div>
        </header>

        <main data-shell-main style={{ padding: 24, display: "grid", gap: 20 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
