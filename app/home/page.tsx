"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { ModuleTabs } from "@/components/ui/module-tabs";
import { Field, Select } from "@/components/ui/field";
import { FilterToolbar } from "@/components/filter-toolbar";
import { Button } from "@/components/ui/button";
import { appModules } from "@/lib/mock-data";
import { dashboardFilterOptions, dashboardSections, type DashboardChart, type DashboardKpi, type DashboardSection, type DashboardTabId } from "@/lib/dashboard-data";

function KpiCard({ item }: { item: DashboardKpi }) {
  const toneColor =
    item.tone === "positive" ? "#166534" : item.tone === "warning" ? "#b45309" : "var(--color-text-muted)";
  const toneBackground =
    item.tone === "positive" ? "rgba(34,197,94,.12)" : item.tone === "warning" ? "rgba(245,158,11,.14)" : "rgba(148,163,184,.12)";

  return (
    <Card
      style={{
        padding: 18,
        display: "grid",
        gap: 10,
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        minHeight: 136
      }}
    >
      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--color-text-soft)", fontWeight: 700 }}>{item.label}</div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 28, fontWeight: 700, color: "#0f172a" }}>{item.value}</div>
        {item.delta ? (
          <div
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              background: toneBackground,
              color: toneColor,
              fontSize: 12,
              fontWeight: 700,
              textAlign: "right"
            }}
          >
            {item.delta}
          </div>
        ) : null}
      </div>
      {typeof item.progress === "number" ? (
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ height: 10, borderRadius: 999, background: "rgba(148,163,184,.18)", overflow: "hidden" }}>
            <div
              style={{
                width: `${item.progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #1d4ed8 0%, #22c55e 100%)",
                borderRadius: 999
              }}
            />
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>Hoàn thành {item.progress}% kế hoạch năm</div>
        </div>
      ) : null}
    </Card>
  );
}

function LineChartCard({ chart }: { chart: Extract<DashboardChart, { type: "line" }> }) {
  const max = Math.max(...chart.series.flatMap((serie) => serie.values));
  const width = 360;
  const height = 180;

  function buildPath(values: number[]) {
    return values
      .map((value, index) => {
        const x = (index / Math.max(values.length - 1, 1)) * width;
        const y = height - (value / max) * (height - 16) - 8;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  }

  return (
    <Card style={{ padding: 20, display: "grid", gap: 16 }}>
      <div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>{chart.title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 4 }}>{chart.subtitle}</div>
      </div>
      <div style={{ padding: 16, borderRadius: "var(--radius-md)", background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)", border: "1px solid rgba(148,163,184,.16)" }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: 220, overflow: "visible" }}>
          {[0.25, 0.5, 0.75, 1].map((mark) => (
            <line key={mark} x1="0" x2={width} y1={height - mark * (height - 16) - 8} y2={height - mark * (height - 16) - 8} stroke="rgba(148,163,184,.25)" strokeDasharray="4 4" />
          ))}
          {chart.series.map((serie) => (
            <g key={serie.name}>
              <path d={buildPath(serie.values)} fill="none" stroke={serie.color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              {serie.values.map((value, index) => {
                const x = (index / Math.max(serie.values.length - 1, 1)) * width;
                const y = height - (value / max) * (height - 16) - 8;
                return <circle key={`${serie.name}-${index}`} cx={x} cy={y} r="4" fill={serie.color} />;
              })}
            </g>
          ))}
        </svg>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${chart.labels.length}, 1fr)`, gap: 8, marginTop: 8, fontSize: 12, color: "var(--color-text-soft)" }}>
          {chart.labels.map((label) => (
            <div key={label} style={{ textAlign: "center" }}>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {chart.series.map((serie) => (
          <div key={serie.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-text-muted)" }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: serie.color }} />
            {serie.name}
          </div>
        ))}
      </div>
    </Card>
  );
}

function DonutChartCard({ chart }: { chart: Extract<DashboardChart, { type: "donut" }> }) {
  const total = chart.segments.reduce((sum, segment) => sum + segment.value, 0);
  const gradient = chart.segments
    .reduce<{ color: string; start: number; end: number }[]>((acc, segment) => {
      const start = acc.length ? acc[acc.length - 1].end : 0;
      const end = start + (segment.value / total) * 100;
      acc.push({ color: segment.color, start, end });
      return acc;
    }, [])
    .map((part) => `${part.color} ${part.start}% ${part.end}%`)
    .join(", ");

  return (
    <Card style={{ padding: 20, display: "grid", gap: 18 }}>
      <div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>{chart.title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 4 }}>{chart.subtitle}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: 20, alignItems: "center" }}>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: `conic-gradient(${gradient})`,
            position: "relative",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 28,
              borderRadius: "50%",
              background: "#fff",
              display: "grid",
              placeItems: "center",
              textAlign: "center"
            }}
          >
            <div>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 28, fontWeight: 700, color: "#0f172a" }}>{total}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-soft)", textTransform: "uppercase" }}>Tổng tỷ trọng</div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {chart.segments.map((segment) => (
            <div key={segment.label} style={{ display: "grid", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: segment.color }} />
                  <span style={{ fontWeight: 600 }}>{segment.label}</span>
                </div>
                <span style={{ color: "var(--color-text-muted)" }}>{segment.value}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "rgba(148,163,184,.16)", overflow: "hidden" }}>
                <div style={{ width: `${segment.value}%`, height: "100%", background: segment.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function BarChartCard({ chart }: { chart: Extract<DashboardChart, { type: "bar" }> }) {
  return (
    <Card style={{ padding: 20, display: "grid", gap: 16 }}>
      <div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>{chart.title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 4 }}>{chart.subtitle}</div>
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {chart.items.map((item) => (
          <div key={item.label} style={{ display: "grid", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
              <div style={{ fontWeight: 600 }}>{item.label}</div>
              <div style={{ color: "var(--color-text-muted)" }}>{item.helper ?? `${item.value}%`}</div>
            </div>
            <div style={{ height: 12, borderRadius: 999, background: "rgba(148,163,184,.16)", overflow: "hidden" }}>
              <div style={{ width: `${item.value}%`, height: "100%", background: item.color, borderRadius: 999 }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function StackedChartCard({ chart }: { chart: Extract<DashboardChart, { type: "stacked" }> }) {
  return (
    <Card style={{ padding: 20, display: "grid", gap: 18 }}>
      <div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>{chart.title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 4 }}>{chart.subtitle}</div>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {chart.rows.map((row) => {
          const total = row.segments.reduce((sum, segment) => sum + segment.value, 0);
          return (
            <div key={row.label} style={{ display: "grid", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontWeight: 700 }}>{row.label}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: 13 }}>{total} hồ sơ</div>
              </div>
              <div style={{ display: "flex", height: 14, overflow: "hidden", borderRadius: 999, background: "rgba(148,163,184,.12)" }}>
                {row.segments.map((segment) => (
                  <div key={segment.label} style={{ width: `${(segment.value / total) * 100}%`, background: segment.color }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--color-text-muted)" }}>
                {row.segments.map((segment) => (
                  <div key={segment.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: segment.color }} />
                    {segment.label}: {segment.value}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function DashboardChartCard({ chart }: { chart: DashboardChart }) {
  if (chart.type === "line") return <LineChartCard chart={chart} />;
  if (chart.type === "donut") return <DonutChartCard chart={chart} />;
  if (chart.type === "bar") return <BarChartCard chart={chart} />;
  return <StackedChartCard chart={chart} />;
}

function DataBlock({ table }: { table: DashboardSection["tables"][number] }) {
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ padding: 20, borderBottom: "1px solid rgba(148,163,184,.18)", display: "grid", gap: 4 }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>{table.title}</div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{table.subtitle}</div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 780 }}>
          <thead style={{ background: "#f8fafc" }}>
            <tr>
              {table.columns.map((column) => (
                <th
                  key={column}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: "var(--color-text-soft)",
                    borderBottom: "1px solid rgba(148,163,184,.18)"
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index} style={{ borderBottom: "1px solid rgba(148,163,184,.14)" }}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ padding: "14px 16px", fontSize: 14, verticalAlign: "top" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<DashboardTabId>("overview");
  const [draftFilters, setDraftFilters] = useState({
    year: "2026",
    period: "Tất cả",
    unit: "Tất cả",
    extra: "Tất cả"
  });
  const [appliedFilters, setAppliedFilters] = useState(draftFilters);

  const currentSection = useMemo(() => dashboardSections.find((section) => section.id === tab) ?? dashboardSections[0], [tab]);

  const extraLabel =
    tab === "tndt" ? "Loại dịch vụ" : tab === "mba" ? "Trạng thái" : tab === "cbm" ? "Loại thiết bị" : tab === "tvtk" ? "Loại dự án" : "Đơn vị";

  const extraOptions =
    tab === "tndt"
      ? dashboardFilterOptions.serviceTypes
      : tab === "mba"
        ? dashboardFilterOptions.statuses
        : tab === "cbm"
          ? dashboardFilterOptions.assetTypes
          : tab === "tvtk"
            ? dashboardFilterOptions.projectTypes
            : dashboardFilterOptions.units;

  return (
    <AppShell title="Dashboard Portal MSM" subtitle="MSM-01 .. MSM-05. Dashboard tổng quan và dashboard chuyên sâu theo từng phân hệ.">
      <div style={{ display: "grid", gap: 18 }}>
        <Breadcrumbs items={["Home", "Dashboard Portal MSM"]} />

        <ModuleTabs items={dashboardSections.map((section) => ({ key: section.id, label: `${section.code} · ${section.title}`, active: section.id === tab, onClick: () => setTab(section.id) }))} />

        <FilterToolbar>
          <Field label="Năm">
            <Select value={draftFilters.year} onChange={(event) => setDraftFilters((current) => ({ ...current, year: event.target.value }))}>
              {dashboardFilterOptions.years.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </Field>
          <Field label="Quý / Tháng">
            <Select value={draftFilters.period} onChange={(event) => setDraftFilters((current) => ({ ...current, period: event.target.value }))}>
              {dashboardFilterOptions.periods.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </Field>
          <Field label="Đơn vị">
            <Select value={draftFilters.unit} onChange={(event) => setDraftFilters((current) => ({ ...current, unit: event.target.value }))}>
              {dashboardFilterOptions.units.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </Field>
          <Field label={extraLabel}>
            <Select value={draftFilters.extra} onChange={(event) => setDraftFilters((current) => ({ ...current, extra: event.target.value }))}>
              {extraOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </Field>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => setAppliedFilters(draftFilters)}>Áp dụng</Button>
          </div>
        </FilterToolbar>

        <div style={{ display: "grid", gap: 6 }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>
            {currentSection.code} · {currentSection.title}
          </div>
          <div style={{ color: "var(--color-text-muted)", fontSize: 15 }}>{currentSection.subtitle}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {currentSection.kpis.map((item) => (
            <KpiCard key={item.label} item={item} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {currentSection.charts.map((chart) => (
            <DashboardChartCard key={chart.title} chart={chart} />
          ))}
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          {currentSection.tables.map((table) => (
            <DataBlock key={table.title} table={table} />
          ))}
        </div>

        <Card style={{ padding: 18, display: "grid", gap: 12, background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
          <div>
            <div style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, color: "#0f172a" }}>Truy cập nhanh phân hệ</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 4 }}>Rút gọn lối vào báo cáo và màn nghiệp vụ theo từng phân hệ.</div>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {appModules.map((module) => (
              <Link
                key={module.name}
                href={module.disabled ? "#" : module.href}
                style={{
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(148,163,184,.22)",
                  background: module.disabled ? "#f8fafc" : "#fff",
                  color: "inherit",
                  opacity: module.disabled ? 0.7 : 1,
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: 12,
                  alignItems: "center"
                }}
              >
                <div style={{ display: "grid", gap: 2, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>{module.name}</div>
                  <div
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {module.description}
                  </div>
                </div>
                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: module.disabled ? "rgba(148,163,184,.12)" : "var(--color-primary-50)",
                    color: module.disabled ? "var(--color-text-soft)" : "var(--color-primary-700)",
                    border: module.disabled ? "1px solid rgba(148,163,184,.12)" : "1px solid rgba(37,99,235,.16)",
                    fontSize: 13,
                    fontWeight: 700
                  }}
                >
                  Mở report
                </span>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
