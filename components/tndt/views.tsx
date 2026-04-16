"use client";

import { ReactNode, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TndtModuleNav } from "./nav";
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
  getTndtActionCode,
  getTndtAvailableActions,
  getTndtDeleteCode,
  getTndtFieldLabel,
  getTndtNextStatus,
  getTndtRecord,
  getTndtSection,
  getTndtTimeline,
  tndtSections,
  type TndtField,
  type TndtRecord,
  type TndtSection
} from "@/lib/tndt-data";

function Stack({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 16 }}>{children}</div>;
}

function getStorageKey(sectionSlug: string) {
  return `tndt-section:${sectionSlug}`;
}

function useSectionRecords(section: TndtSection) {
  const [records, setRecords] = useState<TndtRecord[]>(section.records);

  useEffect(() => {
    const raw = window.localStorage.getItem(getStorageKey(section.slug));
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as TndtRecord[];
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

function updateRecordInCollection(records: TndtRecord[], updatedRecord: TndtRecord) {
  return records.map((record) => (record.id === updatedRecord.id ? updatedRecord : record));
}

function deriveRecordTitle(section: TndtSection, values: Record<string, string>) {
  return values.quotationName || values.planName || values.advanceName || values.proposalName || values.taskName || values.linkedContract || values.customerName || `Hồ sơ ${section.shortTitle}`;
}

function deriveRecordSubtitle(values: Record<string, string>) {
  return values.requestContent || values.description || values.reason || values.notes || values.progressNote || values.scope || undefined;
}

function getRecordPartner(values: Record<string, string>) {
  return values.customerName || values.linkedContract || values.linkedRequest || values.linkedQuotation || "Chưa cập nhật";
}

function getRecordUnit(values: Record<string, string>) {
  return values.executionUnit || values.assignedUnit || values.inspectionUnit || "Chưa cập nhật";
}

function getRecordDate(values: Record<string, string>) {
  return values.receivedDate || values.quotationDate || values.planDate || values.requestDate || values.proposalDate || values.startDate || values.updatedDate || values.createdDate || new Date().toISOString().slice(0, 10);
}

function renderField(field: TndtField, value?: string, readOnly?: boolean) {
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

function getListColumns(section: TndtSection) {
  if (section.slug === "quotations") return ["Mã báo giá", "Tên báo giá", "Khách hàng", "Giá trị", "Trạng thái"];
  if (section.slug === "internal-patth") return ["Mã PATTH", "Tên phương án", "Báo giá", "Đơn vị", "Trạng thái"];
  if (section.slug === "advance-requests") return ["Mã tạm ứng", "Tên đề nghị", "HĐ liên kết", "Giá trị", "Trạng thái"];
  if (section.slug === "expense-proposals") return ["Mã tờ trình", "Tên đề xuất", "HĐ liên kết", "Giá trị", "Trạng thái"];
  if (section.slug === "tasks") return ["Mã giao việc", "Tên giao việc", "Đơn vị thực hiện", "Ngày bắt đầu", "Trạng thái"];
  if (section.slug === "progress-management") return ["Mã tiến độ", "Hợp đồng", "% HT", "Đơn vị", "Trạng thái"];
  if (section.slug === "settlement-dossiers") return ["Mã hồ sơ", "Hợp đồng", "Giá trị QT", "Đơn vị", "Trạng thái"];
  if (section.slug === "contract-management") return ["Mã HĐ", "Tên hợp đồng", "Khách hàng", "Ngày ký", "Trạng thái"];
  if (section.slug === "debts") return ["Mã công nợ", "Hợp đồng", "Khách hàng", "Đáo hạn", "Tình trạng"];
  return ["Mã yêu cầu", "Tên hồ sơ", "Khách hàng", "Ngày", "Trạng thái"];
}

function getListRow(section: TndtSection, record: TndtRecord) {
  if (section.slug === "quotations") {
    return [<strong key="code">{record.code}</strong>, record.title, record.values.customerName, record.values.quotationValue, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "internal-patth") {
    return [<strong key="code">{record.code}</strong>, record.title, record.values.linkedQuotation, record.unit, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "advance-requests") {
    return [<strong key="code">{record.code}</strong>, record.title, record.values.linkedContract, record.values.advanceValue, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "expense-proposals") {
    return [<strong key="code">{record.code}</strong>, record.title, record.values.linkedContract, record.values.expenseValue, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "tasks") {
    return [<strong key="code">{record.code}</strong>, record.title, record.values.assignedUnit, record.values.startDate, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "progress-management") {
    return [<strong key="code">{record.code}</strong>, record.values.linkedContract, `${record.values.progressPercent}%`, record.unit, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "settlement-dossiers") {
    return [<strong key="code">{record.code}</strong>, record.values.linkedContract, record.values.settlementValue, record.unit, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "contract-management") {
    return [<strong key="code">{record.code}</strong>, record.values.contractName, record.values.customerName, record.values.signDate, <StatusBadge key="status" value={record.status} />];
  }

  if (section.slug === "debts") {
    return [<strong key="code">{record.code}</strong>, record.values.contractName, record.values.customerName, record.values.dueDate, <StatusBadge key="status" value={record.values.debtStatus ?? record.status} />];
  }

  return [
    <strong key="code">{record.code}</strong>,
    <div key="title" style={{ display: "grid", gap: 4 }}>
      <span>{record.title}</span>
      {record.subtitle ? <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.subtitle}</span> : null}
    </div>,
    record.partner,
    record.date,
    <StatusBadge key="status" value={record.status} />
  ];
}

function getActionDescription(record: TndtRecord, action: string) {
  return `Xác nhận thao tác "${action}" cho hồ sơ ${record.code}.`;
}

function getDeleteDescription(section: TndtSection, record?: TndtRecord | null) {
  return record ? `Xác nhận xóa hồ sơ ${record.code} thuộc nhóm ${section.shortTitle.toLowerCase()}.` : `Xác nhận xóa hồ sơ trong nhóm ${section.shortTitle.toLowerCase()}.`;
}

function getAttachments(record: TndtRecord) {
  return record.values.attachments ? [record.values.attachments, `${record.code}-appendix.docx`] : [];
}

function AttachmentPreview({
  open,
  record,
  onClose
}: {
  open: boolean;
  record: TndtRecord;
  onClose: () => void;
}) {
  return (
    <ModalFrame open={open} width="min(720px, 100%)">
      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600 }}>Preview file đính kèm</div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Popup preview giữ đúng pattern modal cho hồ sơ {record.code}.</div>
          </div>
          <Button variant="secondary" onClick={onClose}>
            Đóng
          </Button>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {getAttachments(record).map((attachment) => (
            <Card key={attachment} style={{ padding: 16, background: "var(--color-bg-subtle)" }}>
              <div style={{ fontWeight: 700 }}>{attachment}</div>
              <div style={{ color: "var(--color-text-muted)", fontSize: 14, marginTop: 6 }}>Tài liệu mô phỏng gồm hồ sơ chính và phụ lục liên quan.</div>
            </Card>
          ))}
        </div>
      </div>
    </ModalFrame>
  );
}

export function TndtListView({ sectionSlug }: { sectionSlug: string }) {
  const section = getTndtSection(sectionSlug);
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);
  const [status, setStatus] = useState("Tất cả");
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [, startTransition] = useTransition();

  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình TN doanh thu.</Card>;
  }

  const { records, setRecords } = useSectionRecords(section);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesKeyword =
        !deferredKeyword ||
        [record.code, record.title, record.subtitle, record.partner, record.unit, ...Object.values(record.values)]
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
      <TndtModuleNav />
      <PageHeader title={`${section.codeRange} ${section.title}`} description={section.description} actions={!section.readOnly && section.createCode ? <ButtonLink href={`/tndt/${section.slug}/new`}>Tạo mới</ButtonLink> : undefined} />
      <FilterToolbar>
        <Field label="Từ khóa">
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Mã, tên hồ sơ, khách hàng, hợp đồng..." />
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
            <option>Khách hàng</option>
            <option>Đơn vị thực hiện</option>
            <option>Hợp đồng liên kết</option>
          </Select>
        </Field>
        <Field label="Ngày">
          <Input type="date" />
        </Field>
      </FilterToolbar>
      <DataTable
        columns={getListColumns(section)}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <div key={record.id} style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
            {section.detailCode ? (
              <ButtonLink href={`/tndt/${section.slug}/${record.id}`} variant="secondary">
                Xem chi tiết
              </ButtonLink>
            ) : null}
            {!section.readOnly && section.editCode ? (
              <ButtonLink href={`/tndt/${section.slug}/${record.id}/edit`} variant="secondary">
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
        title={`${getTndtDeleteCode(section)} Xác nhận xóa`}
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

export function TndtFormView({ sectionSlug, recordId }: { sectionSlug: string; recordId?: string }) {
  const section = getTndtSection(sectionSlug);
  if (!section || !section.fields) {
    return <Card style={{ padding: 20 }}>Không tìm thấy form TN doanh thu.</Card>;
  }

  const currentSection = section;
  const currentFields = currentSection.fields ?? [];
  const { records, setRecords } = useSectionRecords(currentSection);
  const router = useRouter();
  const record = recordId ? records.find((item) => item.id === recordId) ?? getTndtRecord(sectionSlug, recordId) : undefined;
  const isEdit = Boolean(record);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;

    const nextRecord: TndtRecord = {
      id: record?.id ?? `${currentSection.slug}-${crypto.randomUUID()}`,
      code: record?.code ?? `${currentSection.shortTitle.replaceAll(" ", "").toUpperCase()}-${String(records.length + 1).padStart(3, "0")}`,
      title: deriveRecordTitle(currentSection, values),
      subtitle: deriveRecordSubtitle(values),
      partner: getRecordPartner(values),
      unit: getRecordUnit(values),
      date: getRecordDate(values),
      status: record?.status ?? currentSection.statusOptions[0],
      values
    };

    setRecords(isEdit ? updateRecordInCollection(records, nextRecord) : [nextRecord, ...records]);
    router.push(`/tndt/${currentSection.slug}`);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`]} />
      <TndtModuleNav />
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
            <ButtonLink href={`/tndt/${currentSection.slug}`} variant="secondary">
              Hủy
            </ButtonLink>
            <Button type="submit">Lưu</Button>
          </div>
        </form>
      </Card>
    </Stack>
  );
}

export function TndtDetailView({ sectionSlug, recordId }: { sectionSlug: string; recordId: string }) {
  const section = getTndtSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ TN doanh thu.</Card>;
  }

  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const record = records.find((item) => item.id === recordId) ?? getTndtRecord(sectionSlug, recordId);
  const [confirmAction, setConfirmAction] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!record) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ TN doanh thu.</Card>;
  }

  const currentRecord = record;
  const availableActions = getTndtAvailableActions(currentSection, currentRecord.status);
  const timeline = getTndtTimeline(currentSection, currentRecord);

  function applyAction(action: string) {
    const nextStatus = getTndtNextStatus(currentSection, currentRecord.status, action);
    const updatedRecord = { ...currentRecord, status: nextStatus };
    setRecords(updateRecordInCollection(records, updatedRecord));
    setConfirmAction(null);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), `Xem chi tiết ${currentSection.shortTitle}`]} />
      <TndtModuleNav />
      <PageHeader title={`${currentSection.detailCode ?? currentSection.codeRange} ${currentSection.title}`} description="Chi tiết hồ sơ, workflow xử lý và tài liệu liên quan của TN doanh thu." />
      <Card style={{ padding: 20, display: "grid", gap: 16 }}>
        <DetailList
          items={[
            { label: "Mã hồ sơ", value: currentRecord.code },
            { label: "Trạng thái", value: <StatusBadge value={currentRecord.status} /> },
            { label: "Tiêu đề", value: currentRecord.title },
            { label: "Đối tác / liên kết", value: currentRecord.partner },
            { label: "Đơn vị", value: currentRecord.unit },
            { label: "Ngày", value: currentRecord.date }
          ]}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {Object.entries(currentRecord.values).map(([key, value]) => (
            <Field key={key} label={getTndtFieldLabel(currentSection, key)}>
              {renderField({ key, label: key, type: /^\d{4}-\d{2}-\d{2}$/.test(value) ? "date" : /^\d+$/.test(value) ? "number" : "text" }, value, true)}
            </Field>
          ))}
        </div>
        {getAttachments(currentRecord).length ? (
          <Card style={{ padding: 16, background: "var(--color-bg-subtle)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 700 }}>Tài liệu đính kèm</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{getAttachments(currentRecord).join(", ")}</div>
              </div>
              <Button variant="secondary" onClick={() => setPreviewOpen(true)}>
                Preview file
              </Button>
            </div>
          </Card>
        ) : null}
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
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {availableActions.map((label) => (
              <Button key={label} variant={label.includes("Từ chối") || label.includes("không chấp thuận") ? "danger" : "primary"} onClick={() => setConfirmAction(label)}>
                {label}
              </Button>
            ))}
          </div>
        ) : null}
        <div>
          <ButtonLink href={`/tndt/${currentSection.slug}`} variant="secondary">
            Quay lại danh sách
          </ButtonLink>
        </div>
      </Card>
      <ConfirmModal
        open={Boolean(confirmAction)}
        title={`${getTndtActionCode(currentSection, confirmAction ?? "")} ${confirmAction ?? ""}`}
        description={confirmAction ? getActionDescription(currentRecord, confirmAction) : ""}
        confirmLabel="Đồng ý"
        onCancel={() => setConfirmAction(null)}
        onConfirm={() => confirmAction && applyAction(confirmAction)}
      />
      <AttachmentPreview open={previewOpen} record={currentRecord} onClose={() => setPreviewOpen(false)} />
    </Stack>
  );
}

export function TndtOverviewView() {
  return (
    <Stack>
      <TndtModuleNav />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {tndtSections.map((section) => (
          <Card key={section.slug} style={{ padding: 20, display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", color: "var(--color-text-soft)", fontWeight: 700 }}>{section.codeRange}</div>
              <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600, marginTop: 6 }}>{section.title}</div>
            </div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 15 }}>{section.description}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
              <StatusBadge value={section.records[0]?.status ?? "Mới"} />
              <ButtonLink href={`/tndt/${section.slug}`} variant="secondary">
                Mở nhóm màn
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Stack>
  );
}
