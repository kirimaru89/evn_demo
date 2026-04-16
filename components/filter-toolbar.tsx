import { ReactNode } from "react";
import { Card } from "./ui/card";

export function FilterToolbar({ children }: { children: ReactNode }) {
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, alignItems: "end" }}>
        {children}
      </div>
    </Card>
  );
}
