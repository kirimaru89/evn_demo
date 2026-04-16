"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/field";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background:
          "radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 24%), linear-gradient(180deg, #f8fafc 0%, #edf4ff 100%)"
      }}
    >
      <div style={{ width: "min(1120px, 100%)", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 24 }}>
        <Card
          style={{
            padding: 36,
            background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
            color: "white",
            display: "grid",
            gap: 24
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#93c5fd", textTransform: "uppercase" }}>EVN NPC</div>
            <h1 style={{ margin: "12px 0 0", fontFamily: "Lexend, sans-serif", fontSize: 34, lineHeight: 1.15 }}>
              Hệ thống quản lý đa dịch vụ MSM
            </h1>
            <p style={{ margin: "12px 0 0", fontSize: 16, color: "rgba(255,255,255,.78)", maxWidth: 560 }}>
              Cổng làm việc tập trung cho vận hành nghiệp vụ, kiểm soát quy trình và điều phối phê duyệt theo từng phân hệ.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
            {[
              "Một ngôn ngữ giao diện thống nhất cho toàn bộ phân hệ",
              "Tối ưu cho bảng dữ liệu, form nghiệp vụ và quy trình duyệt",
              "Theo dõi trạng thái hồ sơ, vai trò và audit log rõ ràng",
              "Thiết kế light enterprise, dễ đọc trong thời gian sử dụng dài"
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: 16,
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.06)"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 32 }}>
          <div style={{ display: "grid", gap: 20 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-primary-700)", textTransform: "uppercase" }}>
                Đăng nhập hệ thống
              </div>
              <h2 style={{ margin: "8px 0 0", fontFamily: "Lexend, sans-serif", fontSize: 28 }}>DN-01 Đăng nhập</h2>
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
