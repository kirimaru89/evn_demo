"use client";

import { ReactNode } from "react";
import { Button } from "./button";
import { Card } from "./card";

export function ModalFrame({
  open,
  children,
  width = "min(560px, 100%)"
}: {
  open: boolean;
  children: ReactNode;
  width?: string;
}) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 23, 42, .32)",
        display: "grid",
        placeItems: "center",
        padding: 24,
        zIndex: 50
      }}
    >
      <Card style={{ width, padding: 24 }}>{children}</Card>
    </div>
  );
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel,
  onCancel,
  onConfirm
}: {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <ModalFrame open={open} width="min(480px, 100%)">
      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600 }}>{title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 15 }}>{description}</div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <Button variant="secondary" onClick={onCancel}>
            Hủy
          </Button>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </ModalFrame>
  );
}

export function DetailList({ items }: { items: Array<{ label: string; value: ReactNode }> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            padding: 14,
            background: "var(--color-bg-subtle)",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(148,163,184,.18)"
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-soft)", textTransform: "uppercase" }}>
            {item.label}
          </div>
          <div style={{ marginTop: 6, fontSize: 15 }}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}
