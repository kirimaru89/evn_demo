"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { CbmModuleNav } from "./nav";
import { Breadcrumbs, PageHeader } from "@/components/page-header";
import { FilterToolbar } from "@/components/filter-toolbar";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { ConfirmModal, DetailList } from "@/components/ui/modal";
import { PaginationBar, usePagination } from "@/components/ui/pagination";
import { DataTable } from "@/components/ui/table";
import { StatusBadge } from "@/components/admin/status";
import {
  cbmSections,
  getCbmAvailableActions,
  getCbmNextStatus,
  getCbmRecord,
  getCbmSection,
  getCbmTimeline,
  type CbmField,
  type CbmRecord,
  type CbmSection
} from "@/lib/cbm-data";

function Stack({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 16 }}>{children}</div>;
}

function getStorageKey(sectionSlug: string) {
  return `cbm-section:${sectionSlug}`;
}

function useSectionRecords(section: CbmSection) {
  const [records, setRecords] = useState<CbmRecord[]>(section.records);

  useEffect(() => {
    const raw = window.localStorage.getItem(getStorageKey(section.slug));
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as CbmRecord[];
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

function updateRecordInCollection(records: CbmRecord[], updatedRecord: CbmRecord) {
  return records.map((record) => (record.id === updatedRecord.id ? updatedRecord : record));
}

function renderField(field: CbmField, value?: string, readOnly?: boolean) {
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

  return <Input type={field.type === "date" ? "date" : "text"} defaultValue={value ?? ""} readOnly={readOnly} />;
}

function deriveRecordTitle(section: CbmSection, values: Record<string, string>) {
  return values.planName || values.reportName || values.assetName || `Hồ sơ ${section.shortTitle}`;
}

function deriveRecordSubtitle(values: Record<string, string>) {
  return values.planInfo || values.reportType || values.assessment || values.notes || undefined;
}

export function CbmListView({ sectionSlug }: { sectionSlug: string }) {
  const section = getCbmSection(sectionSlug);
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("Tất cả");
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình CBM.</Card>;
  }

  const { records, setRecords } = useSectionRecords(section);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesKeyword =
        !keyword ||
        [record.code, record.title, record.assetName, record.assetCode, record.unit].some((value) =>
          value.toLowerCase().includes(keyword.toLowerCase())
        );
      const matchesStatus = status === "Tất cả" || record.status === status;
      return matchesKeyword && matchesStatus;
    });
  }, [keyword, records, status]);

  const pagination = usePagination(filteredRecords, 20);
  const pageRows = pagination.slice(page);
  const deleteRecord = deleteRecordId ? records.find((record) => record.id === deleteRecordId) : null;

  return (
    <Stack>
      <Breadcrumbs items={section.breadcrumb.split(" > ")} />
      <CbmModuleNav />
      <PageHeader
        title={`${section.codeRange} ${section.title}`}
        description={section.description}
        actions={<ButtonLink href={`/cbm/${section.slug}/new`}>Tạo mới</ButtonLink>}
      />
      <FilterToolbar>
        <Field label="Từ khóa">
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Tên, mã thiết bị, mã hồ sơ..." />
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
            <option>Đơn vị thực hiện</option>
            <option>Đơn vị quản lý</option>
          </Select>
        </Field>
        <Field label="Ngày tạo / thực hiện">
          <Input type="date" />
        </Field>
      </FilterToolbar>
      <DataTable
        columns={["Mã", "Tên hồ sơ", "Thiết bị", "Đơn vị thực hiện", "Ngày thực hiện", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <div key={record.id} style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <ButtonLink href={`/cbm/${section.slug}/${record.id}`} variant="secondary">
              Xem chi tiết
            </ButtonLink>
            <ButtonLink href={`/cbm/${section.slug}/${record.id}/edit`} variant="secondary">
              Chỉnh sửa
            </ButtonLink>
            <Button variant="danger" onClick={() => setDeleteRecordId(record.id)}>
              Xóa
            </Button>
          </div>
        ))}
        rows={pageRows.map((record) => [
          <strong key="code">{record.code}</strong>,
          <div key="title" style={{ display: "grid", gap: 4 }}>
            <span>{record.title}</span>
            {record.subtitle ? <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.subtitle}</span> : null}
          </div>,
          <div key="asset" style={{ display: "grid", gap: 4 }}>
            <span>{record.assetName}</span>
            <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.assetCode}</span>
          </div>,
          record.unit,
          record.executionDate,
          <StatusBadge key="status" value={record.status} />
        ])}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={filteredRecords.length} />
      <ConfirmModal
        open={Boolean(deleteRecordId)}
        title={`${section.deleteCode} Xác nhận xóa`}
        description={
          deleteRecord
            ? `Xác nhận xóa hồ sơ ${deleteRecord.code} thuộc nhóm ${section.shortTitle.toLowerCase()}.`
            : `Xác nhận xóa hồ sơ ${section.shortTitle.toLowerCase()}.`
        }
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

export function CbmFormView({ sectionSlug, recordId }: { sectionSlug: string; recordId?: string }) {
  const section = getCbmSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình CBM.</Card>;
  }

  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const router = useRouter();
  const record = recordId ? records.find((item) => item.id === recordId) ?? getCbmRecord(sectionSlug, recordId) : undefined;
  const isEdit = Boolean(record);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;

    const nextRecord: CbmRecord = {
      id: record?.id ?? `${currentSection.slug}-${Date.now()}`,
      code: record?.code ?? `${currentSection.slug.toUpperCase()}-${records.length + 1}`,
      title: deriveRecordTitle(currentSection, values),
      subtitle: deriveRecordSubtitle(values),
      assetName: values.assetName ?? "Thiết bị CBM",
      assetCode: values.assetCode ?? `CBM-ASSET-${records.length + 1}`,
      unit: values.executionUnit ?? values.managementUnit ?? "Chưa cập nhật",
      executionDate: values.executionDate ?? new Date().toISOString().slice(0, 10),
      status: record?.status ?? currentSection.statusOptions[0],
      values
    };

    setRecords(isEdit ? updateRecordInCollection(records, nextRecord) : [nextRecord, ...records]);
    router.push(`/cbm/${currentSection.slug}`);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`]} />
      <CbmModuleNav />
      <PageHeader title={`${isEdit ? currentSection.editCode : currentSection.createCode} ${isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`}`} />
      <Card style={{ padding: 20 }}>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {currentSection.fields.map((field) => (
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
                  <Input name={field.key} type={field.type === "date" ? "date" : "text"} defaultValue={record?.values[field.key] ?? ""} />
                )}
              </Field>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
            <ButtonLink href={`/cbm/${currentSection.slug}`} variant="secondary">
              Hủy
            </ButtonLink>
            <Button type="submit">Lưu</Button>
          </div>
        </form>
      </Card>
    </Stack>
  );
}

export function CbmDetailView({ sectionSlug, recordId }: { sectionSlug: string; recordId: string }) {
  const section = getCbmSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ CBM.</Card>;
  }

  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const record = records.find((item) => item.id === recordId) ?? getCbmRecord(sectionSlug, recordId);
  const [confirmAction, setConfirmAction] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!record) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ CBM.</Card>;
  }

  const currentRecord = record;
  const availableActions = getCbmAvailableActions(currentSection, currentRecord.status);
  const timeline = getCbmTimeline(currentSection, currentRecord);
  const attachmentValue = currentRecord.values.attachments;

  function applyAction(action: string) {
    const nextStatus = getCbmNextStatus(currentSection, currentRecord.status, action);
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
      <CbmModuleNav />
      <PageHeader title={`${currentSection.detailCode} ${currentSection.title}`} description="Chi tiết hồ sơ, file đính kèm và các bước phê duyệt của CBM." />
      <Card style={{ padding: 20, display: "grid", gap: 16 }}>
        <DetailList
          items={[
            { label: "Mã hồ sơ", value: currentRecord.code },
            { label: "Trạng thái", value: <StatusBadge value={currentRecord.status} /> },
            { label: "Tên hồ sơ", value: currentRecord.title },
            { label: "Tên thiết bị", value: currentRecord.assetName },
            { label: "Mã thiết bị", value: currentRecord.assetCode },
            { label: "Ngày thực hiện", value: currentRecord.executionDate }
          ]}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {currentSection.fields.map((field) => (
            <Field key={field.key} label={field.label} required={field.required}>
              {renderField(field, currentRecord.values[field.key], true)}
            </Field>
          ))}
        </div>
        {attachmentValue ? (
          <Card style={{ padding: 16, background: "var(--color-bg-subtle)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 700 }}>File đính kèm</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{attachmentValue}</div>
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
              <Button key={label} variant={label.includes("từ chối") ? "danger" : "primary"} onClick={() => setConfirmAction(label)}>
                {label}
              </Button>
            ))}
          </div>
        ) : null}
        <div>
          <ButtonLink href={`/cbm/${currentSection.slug}`} variant="secondary">
            Quay lại danh sách
          </ButtonLink>
        </div>
      </Card>
      <ConfirmModal
        open={Boolean(confirmAction)}
        title={`${currentSection.detailCode} - ${confirmAction}`}
        description={`Xác nhận thao tác "${confirmAction}" cho hồ sơ ${currentRecord.code}.`}
        confirmLabel="Đồng ý"
        onCancel={() => setConfirmAction(null)}
        onConfirm={() => confirmAction && applyAction(confirmAction)}
      />
      <ConfirmModal
        open={previewOpen}
        title="Preview file đính kèm"
        description={`Mô phỏng popup preview file cho hồ sơ ${currentRecord.code}: ${attachmentValue}`}
        confirmLabel="Đóng"
        onCancel={() => setPreviewOpen(false)}
        onConfirm={() => setPreviewOpen(false)}
      />
    </Stack>
  );
}
