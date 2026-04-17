"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/field";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      data-login-page
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 16,
        background:
          "radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 24%), linear-gradient(180deg, #f8fafc 0%, #edf4ff 100%)"
      }}
    >
      <div data-login-layout style={{ width: "min(420px, 100%)" }}>
        <Card data-login-form-card style={{ padding: 28 }}>
          <div style={{ display: "grid", gap: 20 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-primary-700)", textTransform: "uppercase" }}>EVN NPC</div>
              <h1 data-login-form-title style={{ margin: "8px 0 0", fontFamily: "Lexend, sans-serif", fontSize: 28 }}>Đăng nhập hệ thống</h1>
              <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-muted)" }}>Truy cập cổng MSM bằng tài khoản nội bộ.</div>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <Field label="Tên đăng nhập" required helper="Nhập email hoặc mã nhân viên">
                <Input placeholder="vd: minh.nd@msm.local" type="email" autoComplete="email" />
              </Field>

              <Field label="Mật khẩu" required>
                <div style={{ position: "relative" }}>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    style={{ paddingRight: 84 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    style={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      height: 24,
                      padding: "0 10px",
                      borderRadius: 999,
                      border: "none",
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      fontWeight: 700
                    }}
                  >
                    {showPassword ? "Ẩn" : "Hiện"}
                  </button>
                </div>
              </Field>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--color-text-muted)" }}>
              <input type="checkbox" defaultChecked />
              Ghi nhớ đăng nhập
            </label>

            <ButtonLink href="/home" style={{ width: "100%" }}>
              Đăng nhập
            </ButtonLink>

            <div style={{ fontSize: 13, color: "var(--color-text-soft)" }}>Demo UI flow. Chưa kết nối xác thực backend.</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
