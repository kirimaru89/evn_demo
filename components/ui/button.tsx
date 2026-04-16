import Link from "next/link";
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "var(--color-primary-700)",
    color: "#fff",
    border: "1px solid var(--color-primary-700)"
  },
  secondary: {
    background: "#fff",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-primary-700)",
    border: "1px solid transparent"
  },
  danger: {
    background: "#fff",
    color: "var(--color-danger)",
    border: "1px solid rgba(220,38,38,.2)"
  }
};

export function Button({
  className,
  style,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(className)}
      style={{
        height: 40,
        padding: "0 16px",
        borderRadius: "var(--radius-md)",
        fontSize: 14,
        fontWeight: 600,
        transition: "background-color .18s ease, color .18s ease, border-color .18s ease",
        ...variantStyles[variant],
        ...style
      }}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  style
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  style?: CSSProperties;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        padding: "0 16px",
        borderRadius: "var(--radius-md)",
        fontSize: 14,
        fontWeight: 600,
        transition: "background-color .18s ease, color .18s ease, border-color .18s ease",
        ...variantStyles[variant],
        ...style
      }}
    >
      {children}
    </Link>
  );
}
