"use client";

import { ReactNode, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TvtkModuleNav } from "./nav";
import { Breadcrumbs, PageHeader } from "@/components/page-header";
import { FilterToolbar } from "@/components/filter-toolbar";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { ConfirmModal, DetailList, ModalFrame } from "@/components/ui/modal";
import { PaginationBar, usePagination } from "@/components/ui/pagination";
import { DataTable } from "@/components/ui/table";
import { StatusBadge } from "@/components/admin/status";
import {
  getTvtkActionCode,
  getTvtkAttachments,
  getTvtkAvailableActions,
  getTvtkDeleteCode,
  getTvtkDetailMetrics,
  getTvtkFieldLabel,
  getTvtkNextStatus,
  getTvtkRecord,
  getTvtkSection,
  getTvtkTimeline,
  tvtkSections,
  type TvtkField,
  type TvtkRecord,
  type TvtkSection
} from "@/lib/tvtk-data";

function Stack({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 16 }}>{children}</div>;
}

function getStorageKey(sectionSlug: string) {
  return `tvtk-section:${sectionSlug}`;
}

function useSectionRecords(section: TvtkSection) {
  const [records, setRecords] = useState<TvtkRecord[]>(section.records);

  useEffect(() => {
    const raw = window.localStorage.getItem(getStorageKey(section.slug));
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as TvtkRecord[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setRecords(parsed);
      }
    } catch {
      window.localStorage.removeItem(getStorageKey(section.slug));
    }
  }, [section.slug]);

  useEffect(() => {
    window.localStorage.setItem(getStorageKey(section.slug), JSON.stringify(records));
  }, [records, section.slug]);

  return { records, setRecords };
}

function updateRecordInCollection(records: TvtkRecord[], updatedRecord: TvtkRecord) {
  return records.map((record) => (record.id === updatedRecord.id ? updatedRecord : record));
}

function deriveRecordTitle(section: TvtkSection, values: Record<string, string>) {
  return (
    values.dossierName ||
    values.planName ||
    values.projectName ||
    values.contractName ||
    values.linkedContract ||
    `Hồ sơ ${section.shortTitle}`
  );
}

function deriveRecordSubtitle(values: Record<string, string>) {
  return values.description || values.progressContent || values.notes || values.designType || values.acceptanceType || values.projectType || undefined;
}

function getRecordUnit(values: Record<string, string>) {
  return values.managementUnit || values.executionUnit || values.reviewUnit || values.consultingUnit || values.author || "Chưa cập nhật";
}

function getRecordDate(values: Record<string, string>) {
  return values.planDate || values.signDate || values.acceptanceDate || values.createdDate || new Date().toISOString().slice(0, 10);
}

function getListColumns(section: TvtkSection) {
  if (section.slug === "design-dossiers") {
    return ["Mã hồ sơ", "Tên hồ sơ", "Dự án", "Loại thiết kế", "Trạng thái"];
  }

  if (section.slug === "progress-minutes") {
    return ["Mã biên bản", "Dự án", "Đợt theo dõi", "Người lập", "Trạng thái"];
  }

  if (section.slug === "settlement-dossiers") {
    return ["Mã hồ sơ", "Dự án", "Hợp đồng", "Giá trị quyết toán", "Trạng thái"];
  }

  if (section.slug === "consulting-revenue") {
    return ["Mã bảng", "Dự án", "Đơn vị tư vấn", "Đã thanh toán", "Còn lại"];
  }

  if (section.slug === "consulting-debts") {
    return ["Mã công nợ", "Hợp đồng", "Đơn vị tư vấn", "Đáo hạn", "Tình trạng"];
  }

  if (section.slug === "contract-management") {
    return ["Mã hợp đồng", "Tên hợp đồng", "Dự án", "Ngày ký", "Trạng thái"];
  }

  return ["Mã", "Tên hồ sơ", "Đơn vị", "Ngày", "Trạng thái"];
}

function getListRow(section: TvtkSection, record: TvtkRecord) {
  if (section.slug === "design-dossiers") {
    return [
      <strong key="code">{record.code}</strong>,
      <div key="title" style={{ display: "grid", gap: 4 }}>
        <span>{record.title}</span>
        {record.subtitle ? <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.subtitle}</span> : null}
      </div>,
      record.values.projectName,
      record.values.designType,
      <StatusBadge key="status" value={record.status} />
    ];
  }

  if (section.slug === "progress-minutes") {
    return [
      <strong key="code">{record.code}</strong>,
      record.values.projectName,
      record.values.progressBatch,
      record.values.author,
      <StatusBadge key="status" value={record.status} />
    ];
  }

  if (section.slug === "settlement-dossiers") {
    return [
      <strong key="code">{record.code}</strong>,
      record.values.projectName,
      record.values.linkedContract,
      record.values.settlementValue,
      <StatusBadge key="status" value={record.status} />
    ];
  }

  if (section.slug === "consulting-revenue") {
    return [
      <strong key="code">{record.code}</strong>,
      record.values.projectName,
      record.values.consultingUnit,
      record.values.paidValue,
      record.values.remainingValue
    ];
  }

  if (section.slug === "consulting-debts") {
    return [
      <strong key="code">{record.code}</strong>,
      record.values.contractName,
      record.values.consultingUnit,
      record.values.dueDate,
      <StatusBadge key="status" value={record.values.debtStatus ?? record.status} />
    ];
  }

  if (section.slug === "contract-management") {
    return [
      <strong key="code">{record.code}</strong>,
      record.values.contractName,
      record.values.relatedProject,
      record.values.signDate,
      <StatusBadge key="status" value={record.status} />
    ];
  }

  return [
    <strong key="code">{record.code}</strong>,
    <div key="title" style={{ display: "grid", gap: 4 }}>
      <span>{record.title}</span>
      {record.subtitle ? <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.subtitle}</span> : null}
    </div>,
    record.unit,
    record.date,
    <StatusBadge key="status" value={record.status} />
  ];
}

function getDeleteDescription(section: TvtkSection, record?: TvtkRecord | null) {
  if (section.slug === "design-dossiers") {
    return `Xác nhận xóa hồ sơ thiết kế ${record?.code ?? ""} khỏi danh sách xử lý.`;
  }

  if (section.slug === "progress-minutes") {
    return `Xác nhận xóa biên bản tiến độ ${record?.code ?? ""} trước khi trình duyệt.`;
  }

  if (section.slug === "settlement-dossiers") {
    return `Xác nhận xóa hồ sơ quyết toán ${record?.code ?? ""} khỏi bộ hồ sơ quyết toán tư vấn.`;
  }

  return record
    ? `Xác nhận xóa hồ sơ ${record.code} thuộc nhóm ${section.shortTitle.toLowerCase()}.`
    : `Xác nhận xóa hồ sơ trong nhóm ${section.shortTitle.toLowerCase()}.`;
}

function getActionDescription(section: TvtkSection, record: TvtkRecord, action: string) {
  if (action === "Gửi thẩm tra") {
    return `Xác nhận gửi thẩm tra hồ sơ ${record.code} để chuyển sang bước rà soát tiếp theo.`;
  }

  if (action === "Gửi duyệt") {
    return `Xác nhận gửi duyệt hồ sơ ${record.code} để chờ phê duyệt chính thức.`;
  }

  if (action === "Trình ký số") {
    return `Xác nhận trình ký số cho hồ sơ ${record.code}.`;
  }

  if (action === "Ký số") {
    return `Xác nhận ký số hồ sơ ${record.code}.`;
  }

  if (action === "Duyệt") {
    return `Xác nhận phê duyệt hồ sơ ${record.code}.`;
  }

  return `Xác nhận từ chối hồ sơ ${record.code}.`;
}

function renderField(field: TvtkField, value?: string, readOnly?: boolean) {
  if (field.type === "textarea") {
    return <Textarea defaultValue={value ?? ""} readOnly={readOnly} />;
  }

  if (field.type === "select") {
    return (
      <Select defaultValue={value ?? field.options?.[0] ?? ""} disabled={readOnly}>
        {(field.options ?? []).map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    );
  }

  return <Input type={field.type === "date" ? "date" : field.type === "number" ? "number" : "text"} defaultValue={value ?? ""} readOnly={readOnly} />;
}

function AttachmentPreview({
  open,
  title,
  attachments,
  onClose
}: {
  open: boolean;
  title: string;
  attachments: ReturnType<typeof getTvtkAttachments>;
  onClose: () => void;
}) {
  return (
    <ModalFrame open={open} width="min(760px, 100%)">
      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600 }}>{title}</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Popup preview hồ sơ theo đúng pattern màn hình popup trong spec.</div>
          </div>
          <Button variant="secondary" onClick={onClose}>
            Đóng
          </Button>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {attachments.map((attachment) => (
            <Card key={attachment.name} style={{ padding: 16, display: "grid", gap: 6, background: "var(--color-bg-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <strong>{attachment.name}</strong>
                <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{attachment.type}</span>
              </div>
              <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{attachment.note}</div>
            </Card>
          ))}
        </div>
      </div>
    </ModalFrame>
  );
}

function SectionTabs({
  tabs,
  activeTab,
  onChange
}: {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {tabs.map((tab) => {
        const active = tab === activeTab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            style={{
              border: "1px solid rgba(148,163,184,.22)",
              background: active ? "var(--color-primary-50)" : "#fff",
              color: active ? "var(--color-primary-700)" : "var(--color-text)",
              borderRadius: "999px",
              padding: "8px 14px",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

function DetailHighlight({
  title,
  items
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <Card style={{ padding: 16, display: "grid", gap: 12, background: "linear-gradient(180deg, rgba(248,250,252,.98), rgba(241,245,249,.92))" }}>
      <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
        {items.map((item) => (
          <div key={item.label} style={{ padding: 14, borderRadius: "var(--radius-md)", background: "#fff", border: "1px solid rgba(148,163,184,.18)" }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", color: "var(--color-text-soft)", fontWeight: 700 }}>{item.label}</div>
            <div style={{ marginTop: 6, fontWeight: 700 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function getSectionTabLabels(section: TvtkSection) {
  if (section.slug === "design-dossiers") return ["Bản vẽ", "Thuyết minh", "Thẩm tra"];
  if (section.slug === "progress-minutes") return ["Tiến độ", "Vướng mắc", "Hiện trường"];
  if (section.slug === "settlement-dossiers") return ["Tổng hợp", "Đối chiếu", "Phụ lục"];
  return ["Tổng quan"];
}

function getSectionWorkspace(section: TvtkSection, record: TvtkRecord, activeTab: string) {
  if (section.slug === "design-dossiers") {
    if (activeTab === "Bản vẽ") {
      return (
        <Stack>
          <DetailHighlight
            title="Bộ bản vẽ phát hành"
            items={[
              { label: "Loại thiết kế", value: record.values.designType ?? "-" },
              { label: "Dự án", value: record.values.projectName ?? "-" },
              { label: "Số bộ hồ sơ", value: "12 file chính" },
              { label: "Phiên bản", value: "Rev.02" }
            ]}
          />
          <Card style={{ padding: 16, display: "grid", gap: 10 }}>
            <div style={{ fontWeight: 700 }}>Danh mục bản vẽ</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>MB tổng thể trạm, mặt cắt tuyến cáp, sơ đồ nguyên lý, sơ đồ nhị thứ và thống kê vật tư đi kèm hồ sơ.</div>
          </Card>
        </Stack>
      );
    }

    if (activeTab === "Thuyết minh") {
      return (
        <Stack>
          <DetailHighlight
            title="Khối thuyết minh thiết kế"
            items={[
              { label: "Đơn vị tư vấn", value: record.values.consultingUnit ?? "-" },
              { label: "Ngày lập", value: record.values.createdDate ?? record.date },
              { label: "Khối lượng", value: "03 chương / 18 mục" },
              { label: "Trạng thái", value: record.status }
            ]}
          />
          <Card style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>Tóm tắt nội dung</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 8 }}>{record.values.notes || "Chưa cập nhật ghi chú thuyết minh."}</div>
          </Card>
        </Stack>
      );
    }

    return (
      <Stack>
        <DetailHighlight
          title="Phiếu thẩm tra nội bộ"
          items={[
            { label: "Đầu mối thẩm tra", value: "Ban Kỹ thuật" },
            { label: "Số lỗi mở", value: "04 lỗi" },
            { label: "Mức ưu tiên", value: "Cao" },
            { label: "Hạn xử lý", value: record.date }
          ]}
        />
        <Card style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Checklist rà soát</div>
          <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Kiểm tra tính đồng bộ giữa bản vẽ và thuyết minh, đối chiếu khối lượng, kiểm tra tiêu chuẩn áp dụng và cấu hình thiết bị chính.</div>
        </Card>
      </Stack>
    );
  }

  if (section.slug === "progress-minutes") {
    if (activeTab === "Tiến độ") {
      return (
        <Stack>
          <DetailHighlight
            title="Mốc tiến độ thực hiện"
            items={[
              { label: "Đợt theo dõi", value: record.values.progressBatch ?? "-" },
              { label: "Dự án", value: record.values.projectName ?? "-" },
              { label: "Người lập", value: record.values.author ?? "-" },
              { label: "Mức hoàn thành", value: "65%" }
            ]}
          />
          <Card style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>Nội dung theo dõi</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 8 }}>{record.values.progressContent || "Chưa cập nhật."}</div>
          </Card>
        </Stack>
      );
    }

    if (activeTab === "Vướng mắc") {
      return (
        <Stack>
          <DetailHighlight
            title="Danh sách vướng mắc"
            items={[
              { label: "Mặt bằng", value: "02 vị trí" },
              { label: "Thiết bị", value: "01 hạng mục chậm cấp" },
              { label: "Nhân lực", value: "Thiếu 01 tổ ca đêm" },
              { label: "Mức độ", value: "Trung bình" }
            ]}
          />
          <Card style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>Kết luận / kiến nghị</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 8 }}>{record.values.recommendation || "Chưa có kiến nghị bổ sung."}</div>
          </Card>
        </Stack>
      );
    }

    return (
      <Stack>
        <DetailHighlight
          title="Minh chứng hiện trường"
          items={[
            { label: "Ảnh hiện trường", value: "08 ảnh" },
            { label: "Biên bản kèm theo", value: record.code },
            { label: "Ngày kiểm tra", value: record.values.createdDate ?? record.date },
            { label: "Tổ giám sát", value: "Giám sát thi công" }
          ]}
        />
        <Card style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Mô tả ảnh và tài liệu</div>
          <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Lưu ảnh đào rãnh, hoàn trả mặt bằng, lắp đặt cáp và các điểm xung đột hiện trường để phục vụ đối chiếu tiến độ.</div>
        </Card>
      </Stack>
    );
  }

  if (section.slug === "settlement-dossiers") {
    if (activeTab === "Tổng hợp") {
      return (
        <Stack>
          <DetailHighlight
            title="Tổng hợp giá trị quyết toán"
            items={[
              { label: "Dự án", value: record.values.projectName ?? "-" },
              { label: "Hợp đồng", value: record.values.linkedContract ?? "-" },
              { label: "Giá trị quyết toán", value: record.values.settlementValue ?? "-" },
              { label: "Sai lệch", value: "-50.000.000" }
            ]}
          />
          <Card style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>Ghi chú hồ sơ</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 8 }}>{record.values.notes || "Chưa cập nhật."}</div>
          </Card>
        </Stack>
      );
    }

    if (activeTab === "Đối chiếu") {
      return (
        <Stack>
          <DetailHighlight
            title="Đối chiếu công nợ và thanh toán"
            items={[
              { label: "Đã thanh toán", value: "5.200.000.000" },
              { label: "Chờ thanh toán", value: "3.150.000.000" },
              { label: "Số đợt nghiệm thu", value: "03 đợt" },
              { label: "Biên bản đối chiếu", value: "Đã đủ" }
            ]}
          />
          <Card style={{ padding: 16, display: "grid", gap: 8 }}>
            <div style={{ fontWeight: 700 }}>Kiểm tra hồ sơ nguồn</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Đối chiếu giữa hợp đồng, phụ lục phát sinh, nghiệm thu và bảng công nợ để chuẩn bị trình duyệt quyết toán.</div>
          </Card>
        </Stack>
      );
    }

    return (
      <Stack>
        <DetailHighlight
          title="Phụ lục quyết toán"
          items={[
            { label: "Phụ lục khối lượng", value: "02 file" },
            { label: "Biên bản nghiệm thu", value: "03 file" },
            { label: "Đối chiếu công nợ", value: "01 file" },
            { label: "Phiên bản hồ sơ", value: "QT-02" }
          ]}
        />
        <Card style={{ padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Thành phần hồ sơ</div>
          <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 8 }}>Bao gồm phụ lục khối lượng, biên bản nghiệm thu, bảng đối chiếu công nợ, văn bản xác nhận giữa các bên và file tổng hợp quyết toán.</div>
        </Card>
      </Stack>
    );
  }

  return (
    <DetailHighlight
      title="Tổng quan hồ sơ"
      items={[
        { label: "Mã hồ sơ", value: record.code },
        { label: "Đơn vị", value: record.unit },
        { label: "Ngày", value: record.date },
        { label: "Trạng thái", value: record.status }
      ]}
    />
  );
}

export function TvtkListView({ sectionSlug }: { sectionSlug: string }) {
  const section = getTvtkSection(sectionSlug);
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);
  const [status, setStatus] = useState("Tất cả");
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [, startTransition] = useTransition();

  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình TVTK.</Card>;
  }

  const { records, setRecords } = useSectionRecords(section);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesKeyword =
        !deferredKeyword ||
        [record.code, record.title, record.subtitle, record.unit, ...Object.values(record.values)]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(deferredKeyword.toLowerCase()));
      const matchesStatus = status === "Tất cả" || record.status === status || record.values.debtStatus === status;
      return matchesKeyword && matchesStatus;
    });
  }, [deferredKeyword, records, status]);

  useEffect(() => {
    startTransition(() => setPage(1));
  }, [deferredKeyword, status, startTransition]);

  const pagination = usePagination(filteredRecords, 20);
  const pageRows = pagination.slice(page);
  const deleteRecord = deleteRecordId ? records.find((record) => record.id === deleteRecordId) : null;

  return (
    <Stack>
      <Breadcrumbs items={section.breadcrumb.split(" > ")} />
      <TvtkModuleNav />
      <PageHeader
        title={`${section.codeRange} ${section.title}`}
        description={section.description}
        actions={!section.readOnly && section.createCode ? <ButtonLink href={`/tvtk/${section.slug}/new`}>Tạo mới</ButtonLink> : undefined}
      />
      <FilterToolbar>
        <Field label="Từ khóa">
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Mã, tên hồ sơ, dự án, đơn vị..." />
        </Field>
        <Field label="Trạng thái">
          <Select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>Tất cả</option>
            {section.statusOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Select>
        </Field>
        <Field label="Bộ lọc">
          <Select defaultValue="Toàn bộ">
            <option>Toàn bộ</option>
            <option>Dự án</option>
            <option>Đơn vị thực hiện</option>
            <option>Loại hồ sơ</option>
          </Select>
        </Field>
        <Field label="Ngày / năm">
          <Input type="date" />
        </Field>
      </FilterToolbar>
      <DataTable
        columns={getListColumns(section)}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <div key={record.id} style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
            {section.detailCode ? (
              <ButtonLink href={`/tvtk/${section.slug}/${record.id}`} variant="secondary">
                Xem chi tiết
              </ButtonLink>
            ) : null}
            {!section.readOnly && section.editCode ? (
              <ButtonLink href={`/tvtk/${section.slug}/${record.id}/edit`} variant="secondary">
                Chỉnh sửa
              </ButtonLink>
            ) : null}
            {!section.readOnly && section.deleteCode ? (
              <Button variant="danger" onClick={() => setDeleteRecordId(record.id)}>
                Xóa
              </Button>
            ) : null}
          </div>
        ))}
        rows={pageRows.map((record) => getListRow(section, record))}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={filteredRecords.length} />
      <ConfirmModal
        open={Boolean(deleteRecordId)}
        title={`${getTvtkDeleteCode(section)} Xác nhận xóa`}
        description={getDeleteDescription(section, deleteRecord)}
        confirmLabel="Đồng ý"
        onCancel={() => setDeleteRecordId(null)}
        onConfirm={() => {
          setRecords(records.filter((record) => record.id !== deleteRecordId));
          setDeleteRecordId(null);
        }}
      />
    </Stack>
  );
}

export function TvtkFormView({ sectionSlug, recordId }: { sectionSlug: string; recordId?: string }) {
  const section = getTvtkSection(sectionSlug);
  if (!section || !section.fields) {
    return <Card style={{ padding: 20 }}>Không tìm thấy form TVTK.</Card>;
  }

  const currentSection = section;
  const currentFields = currentSection.fields ?? [];
  const { records, setRecords } = useSectionRecords(currentSection);
  const router = useRouter();
  const record = recordId ? records.find((item) => item.id === recordId) ?? getTvtkRecord(sectionSlug, recordId) : undefined;
  const isEdit = Boolean(record);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;

    const nextRecord: TvtkRecord = {
      id: record?.id ?? `${currentSection.slug}-${crypto.randomUUID()}`,
      code: record?.code ?? `${currentSection.shortTitle.replaceAll(" ", "").toUpperCase()}-${String(records.length + 1).padStart(3, "0")}`,
      title: deriveRecordTitle(currentSection, values),
      subtitle: deriveRecordSubtitle(values),
      unit: getRecordUnit(values),
      date: getRecordDate(values),
      status: record?.status ?? currentSection.statusOptions[0],
      values
    };

    setRecords(isEdit ? updateRecordInCollection(records, nextRecord) : [nextRecord, ...records]);
    router.push(`/tvtk/${currentSection.slug}`);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`]} />
      <TvtkModuleNav />
      <PageHeader title={`${isEdit ? currentSection.editCode : currentSection.createCode} ${isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`}`} />
      <Card style={{ padding: 20 }}>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {currentFields.map((field) => (
              <Field key={field.key} label={field.label} required={field.required} helper={field.helper}>
                {field.type === "textarea" ? (
                  <Textarea name={field.key} defaultValue={record?.values[field.key] ?? ""} />
                ) : field.type === "select" ? (
                  <Select name={field.key} defaultValue={record?.values[field.key] ?? field.options?.[0] ?? ""}>
                    {(field.options ?? []).map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </Select>
                ) : (
                  <Input name={field.key} type={field.type === "date" ? "date" : field.type === "number" ? "number" : "text"} defaultValue={record?.values[field.key] ?? ""} />
                )}
              </Field>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
            <ButtonLink href={`/tvtk/${currentSection.slug}`} variant="secondary">
              Hủy
            </ButtonLink>
            <Button type="submit">Lưu</Button>
          </div>
        </form>
      </Card>
    </Stack>
  );
}

export function TvtkDetailView({ sectionSlug, recordId }: { sectionSlug: string; recordId: string }) {
  const section = getTvtkSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ TVTK.</Card>;
  }

  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const record = records.find((item) => item.id === recordId) ?? getTvtkRecord(sectionSlug, recordId);
  const [confirmAction, setConfirmAction] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!record) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ TVTK.</Card>;
  }

  const currentRecord = record;
  const availableActions = getTvtkAvailableActions(currentSection, currentRecord.status);
  const timeline = getTvtkTimeline(currentSection, currentRecord);
  const metrics = getTvtkDetailMetrics(currentSection, currentRecord);
  const attachments = getTvtkAttachments(currentSection, currentRecord);
  const sectionTabs = getSectionTabLabels(currentSection);
  const [activeTab, setActiveTab] = useState(sectionTabs[0] ?? "Tổng quan");

  useEffect(() => {
    setActiveTab(sectionTabs[0] ?? "Tổng quan");
  }, [currentSection.slug, currentRecord.id]);

  function applyAction(action: string) {
    const nextStatus = getTvtkNextStatus(currentSection, currentRecord.status, action);
    const updatedRecord = {
      ...currentRecord,
      status: nextStatus
    };
    setRecords(updateRecordInCollection(records, updatedRecord));
    setConfirmAction(null);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), `Xem chi tiết ${currentSection.shortTitle}`]} />
      <TvtkModuleNav />
      <PageHeader title={`${currentSection.detailCode ?? currentSection.codeRange} ${currentSection.title}`} description="Chi tiết hồ sơ, workflow xử lý và bộ tài liệu liên quan." />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(320px, .9fr)", gap: 16 }}>
        <Card style={{ padding: 20, display: "grid", gap: 16 }}>
          <DetailList
            items={[
              { label: "Mã hồ sơ", value: currentRecord.code },
              { label: "Trạng thái", value: <StatusBadge value={currentRecord.status} /> },
              { label: "Tiêu đề", value: currentRecord.title },
              { label: "Đơn vị", value: currentRecord.unit },
              { label: "Ngày", value: currentRecord.date }
            ]}
          />
          <DetailList items={metrics} />
          <SectionTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
          {getSectionWorkspace(currentSection, currentRecord, activeTab)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {Object.entries(currentRecord.values).map(([key, value]) => (
              <Field key={key} label={getTvtkFieldLabel(currentSection, key)}>
                {renderField({ key, label: key, type: value.match(/^\d{4}-\d{2}-\d{2}$/) ? "date" : "text" }, value, true)}
              </Field>
            ))}
          </div>
        </Card>
        <div style={{ display: "grid", gap: 16 }}>
          <Card style={{ padding: 16 }}>
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>Bộ tài liệu liên quan</div>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              {attachments.map((attachment) => (
                <div key={attachment.name} style={{ padding: 14, borderRadius: "var(--radius-md)", background: "var(--color-bg-subtle)" }}>
                  <div style={{ fontWeight: 700 }}>{attachment.name}</div>
                  <div style={{ color: "var(--color-text-soft)", fontSize: 13, marginTop: 4 }}>{attachment.type}</div>
                  <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 6 }}>{attachment.note}</div>
                </div>
              ))}
              {attachments.length ? (
                <Button variant="secondary" onClick={() => setPreviewOpen(true)}>
                  Preview file
                </Button>
              ) : null}
            </div>
          </Card>
          <Card style={{ padding: 16 }}>
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>Timeline xử lý</div>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              {timeline.map((item, index) => (
                <div key={`${item.title}-${index}`} style={{ display: "grid", gridTemplateColumns: "28px minmax(0, 1fr)", gap: 12, alignItems: "start" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background: "var(--color-primary-50)",
                      color: "var(--color-primary-700)",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.title}</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          {availableActions.length ? (
            <Card style={{ padding: 16, display: "grid", gap: 12 }}>
              <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 18, fontWeight: 600 }}>Workflow thao tác</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {availableActions.map((label) => (
                  <Button key={label} variant={label.includes("Từ chối") ? "danger" : "primary"} onClick={() => setConfirmAction(label)}>
                    {label}
                  </Button>
                ))}
              </div>
            </Card>
          ) : null}
        </div>
      </div>
      <div>
        <ButtonLink href={`/tvtk/${currentSection.slug}`} variant="secondary">
          Quay lại danh sách
        </ButtonLink>
      </div>
      <ConfirmModal
        open={Boolean(confirmAction)}
        title={`${getTvtkActionCode(currentSection, confirmAction ?? "")} ${confirmAction ?? ""}`}
        description={confirmAction ? getActionDescription(currentSection, currentRecord, confirmAction) : ""}
        confirmLabel="Đồng ý"
        onCancel={() => setConfirmAction(null)}
        onConfirm={() => confirmAction && applyAction(confirmAction)}
      />
      <AttachmentPreview open={previewOpen} title={`Preview tài liệu - ${currentRecord.code}`} attachments={attachments} onClose={() => setPreviewOpen(false)} />
    </Stack>
  );
}

export function TvtkOverviewView() {
  return (
    <Stack>
      <TvtkModuleNav />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {tvtkSections.map((section) => (
          <Card key={section.slug} style={{ padding: 20, display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", color: "var(--color-text-soft)", fontWeight: 700 }}>{section.codeRange}</div>
              <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600, marginTop: 6 }}>{section.title}</div>
            </div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 15 }}>{section.description}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
              <StatusBadge value={section.records[0]?.status ?? "Mới"} />
              <ButtonLink href={`/tvtk/${section.slug}`} variant="secondary">
                Mở nhóm màn
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Stack>
  );
}
