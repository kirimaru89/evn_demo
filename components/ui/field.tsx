import { CSSProperties, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

function baseFieldStyle(): CSSProperties {
  return {
    width: "100%",
    height: 40,
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--color-border)",
    background: "white",
    color: "var(--color-text)",
    padding: "0 12px"
  };
}

export function Field({
  label,
  required,
  helper,
  children
}: {
  label: string;
  required?: boolean;
  helper?: string;
  children: ReactNode;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>
        {label}
        {required ? <span style={{ color: "var(--color-danger)" }}> *</span> : null}
      </span>
      {children}
      {helper ? <span style={{ fontSize: 12, color: "var(--color-text-soft)" }}>{helper}</span> : null}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ ...baseFieldStyle(), ...(props.style ?? {}) }} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={{ ...baseFieldStyle(), ...(props.style ?? {}) }} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      style={{
        ...baseFieldStyle(),
        minHeight: 108,
        height: "auto",
        padding: "10px 12px",
        resize: "vertical",
        ...(props.style ?? {})
      }}
    />
  );
}
