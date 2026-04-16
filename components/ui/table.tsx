import { ReactNode } from "react";
import { Card } from "./card";

export function DataTable({
  columns,
  rows,
  actions,
  actionCells
}: {
  columns: string[];
  rows: ReactNode[][];
  actions?: string;
  actionCells?: ReactNode[];
}) {
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 840 }}>
          <thead style={{ background: "#f8fafc" }}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--color-border)",
                    textAlign: "left",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-text-muted)"
                  }}
                >
                  {column}
                </th>
              ))}
              {actions ? (
                <th
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--color-border)",
                    textAlign: "right",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-text-muted)"
                  }}
                >
                  {actions}
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} style={{ borderBottom: "1px solid rgba(203,213,225,.72)" }}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ padding: "12px", fontSize: 14, verticalAlign: "top" }}>
                    {cell}
                  </td>
                ))}
                {actions ? (
                  <td style={{ padding: "12px", fontSize: 14, verticalAlign: "top", textAlign: "right" }}>
                    {actionCells?.[index]}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
