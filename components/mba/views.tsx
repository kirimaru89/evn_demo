"use client";

import { useRouter } from "next/navigation";
import { MbaModuleNav } from "./nav";
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
  getMbaAvailableActions,
  getMbaNextStatus,
  getMbaRecord,
  getMbaSection,
  getMbaTimeline,
  mbaSections,
  type MbaField,
  type MbaRecord,
  type MbaSection
} from "@/lib/mba-data";
import { ReactNode, useEffect, useMemo, useState } from "react";

function Stack({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 16 }}>{children}</div>;
}

function getStorageKey(sectionSlug: string) {
  return `mba-section:${sectionSlug}`;
}

function useSectionRecords(section: MbaSection) {
  const [records, setRecords] = useState<MbaRecord[]>(section.records);

  useEffect(() => {
    const raw = window.localStorage.getItem(getStorageKey(section.slug));
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as MbaRecord[];
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

function updateRecordInCollection(records: MbaRecord[], updatedRecord: MbaRecord) {
  return records.map((record) => (record.id === updatedRecord.id ? updatedRecord : record));
}

function deriveRecordTitle(section: MbaSection, values: Record<string, string>) {
  const preferred = [
    "title",
    "planName",
    "lotName",
    "materialInfo",
    "contractName",
    "projectCode",
    "contractCode",
    "requestType"
  ];

  for (const key of preferred) {
    if (values[key]) return values[key];
  }

  const firstTextField = section.fields.find((field) => ["text", "textarea"].includes(field.type) && values[field.key]);
  return firstTextField ? values[firstTextField.key] : `Hồ sơ ${section.shortTitle}`;
}

function deriveRecordSubtitle(values: Record<string, string>) {
  return (
    values.description ||
    values.damageDescription ||
    values.equipmentInfo ||
    values.progressInfo ||
    values.scope ||
    values.requestType ||
    undefined
  );
}

function renderField(field: MbaField, value?: string, readOnly?: boolean) {
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

  return <Input type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"} defaultValue={value ?? ""} readOnly={readOnly} />;
}

function recordListRows(section: MbaSection, records: MbaRecord[]) {
  return records.map((record) => [
    <strong key="code">{record.code}</strong>,
    <div key="title" style={{ display: "grid", gap: 4 }}>
      <span>{record.title}</span>
      {record.subtitle ? <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.subtitle}</span> : null}
    </div>,
    record.unit,
    record.date,
    <StatusBadge key="status" value={record.status} />
  ]);
}

function actionButtons(section: MbaSection, record: MbaRecord) {
  const base = `/mba/${section.slug}/${record.id}`;

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <ButtonLink href={base} variant="secondary">
        Xem chi tiết
      </ButtonLink>
      {section.editCode !== section.detailCode ? (
        <ButtonLink href={`${base}/edit`} variant="secondary">
          Chỉnh sửa
        </ButtonLink>
      ) : null}
    </div>
  );
}

export function MbaListView({ sectionSlug }: { sectionSlug: string }) {
  const section = getMbaSection(sectionSlug);
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("Tất cả");
  const [deleteRecordId, setDeleteRecordId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình MBA.</Card>;
  }

  const { records, setRecords } = useSectionRecords(section);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesKeyword =
        !keyword ||
        [record.code, record.title, record.subtitle, record.unit].filter(Boolean).some((value) =>
          value!.toLowerCase().includes(keyword.toLowerCase())
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
      <MbaModuleNav />
      <PageHeader
        title={`${section.codeRange} ${section.title}`}
        description={section.description}
        actions={<ButtonLink href={`/mba/${section.slug}/new`}>Tạo mới</ButtonLink>}
      />
      <FilterToolbar>
        <Field label="Từ khóa">
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder={`Tìm theo mã hoặc tên ${section.shortTitle.toLowerCase()}...`} />
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
            <option>Đơn vị yêu cầu</option>
            <option>Trạng thái</option>
          </Select>
        </Field>
        <Field label="Ngày tạo / xử lý">
          <Input type="date" />
        </Field>
      </FilterToolbar>

      <DataTable
        columns={["Mã", "Tên / mô tả", "Đơn vị", "Ngày", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <div key={record.id} style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
            {actionButtons(section, record)}
            {section.deletePopupCode ? (
              <Button variant="danger" onClick={() => setDeleteRecordId(record.id)}>
                Xóa
              </Button>
            ) : null}
          </div>
        ))}
        rows={recordListRows(section, pageRows)}
      />

      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={filteredRecords.length} />

      <ConfirmModal
        open={Boolean(deleteRecordId)}
        title={section.deletePopupCode ? `${section.deletePopupCode} Xác nhận xóa` : "Xác nhận xóa"}
        description={
          deleteRecord
            ? `Xác nhận xóa hồ sơ ${deleteRecord.code} của nhóm ${section.shortTitle.toLowerCase()}.`
            : `Thao tác này mô phỏng popup xác nhận xóa của ${section.shortTitle.toLowerCase()}.`
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

export function MbaFormView({ sectionSlug, recordId }: { sectionSlug: string; recordId?: string }) {
  const section = getMbaSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy nhóm màn hình MBA.</Card>;
  }
  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const router = useRouter();
  const record = recordId ? records.find((item) => item.id === recordId) ?? getMbaRecord(sectionSlug, recordId) : undefined;
  const isEdit = Boolean(recordId && record);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;

    const nextRecord: MbaRecord = {
      id: record?.id ?? `${currentSection.slug}-${Date.now()}`,
      code: record?.code ?? `${currentSection.shortTitle.slice(0, 3).toUpperCase()}-${String(records.length + 1).padStart(3, "0")}`,
      title: deriveRecordTitle(currentSection, values),
      subtitle: deriveRecordSubtitle(values),
      unit: values.executionUnit ?? values.requestUnit ?? values.managementUnit ?? values.reviewUnit ?? "Chưa cập nhật",
      date:
        values.planDate ??
        values.requestDate ??
        values.executionDate ??
        values.acceptanceDate ??
        values.proposalDate ??
        values.signDate ??
        new Date().toISOString().slice(0, 10),
      status: record?.status ?? currentSection.statusOptions[0] ?? "Mới",
      values
    };

    setRecords(isEdit ? updateRecordInCollection(records, nextRecord) : [nextRecord, ...records]);

    router.push(`/mba/${currentSection.slug}`);
  }

  return (
    <Stack>
      <Breadcrumbs items={[...currentSection.breadcrumb.split(" > "), isEdit ? `Chỉnh sửa ${currentSection.shortTitle}` : `Tạo mới ${currentSection.shortTitle}`]} />
      <MbaModuleNav />
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
                  <Input
                    name={field.key}
                    type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
                    defaultValue={record?.values[field.key] ?? ""}
                  />
                )}
              </Field>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
            <ButtonLink href={`/mba/${currentSection.slug}`} variant="secondary">
              Hủy
            </ButtonLink>
            <Button type="submit">Lưu</Button>
          </div>
        </form>
      </Card>
    </Stack>
  );
}

export function MbaDetailView({ sectionSlug, recordId }: { sectionSlug: string; recordId: string }) {
  const section = getMbaSection(sectionSlug);
  if (!section) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ MBA.</Card>;
  }
  const currentSection = section;
  const { records, setRecords } = useSectionRecords(currentSection);
  const record = records.find((item) => item.id === recordId) ?? getMbaRecord(sectionSlug, recordId);
  const [confirmAction, setConfirmAction] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!record) {
    return <Card style={{ padding: 20 }}>Không tìm thấy hồ sơ MBA.</Card>;
  }
  const currentRecord = record;

  const availableActions = getMbaAvailableActions(currentSection, currentRecord.status);
  const timeline = getMbaTimeline(currentSection, currentRecord);
  const attachmentValue = currentRecord.values.attachments || currentRecord.values.relatedDocs || currentRecord.values.warrantyDocs;

  function applyAction(action: string) {
    const nextStatus = getMbaNextStatus(currentSection, currentRecord.status, action);
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
      <MbaModuleNav />
      <PageHeader title={`${currentSection.detailCode} ${currentSection.title}`} description="Chi tiết hồ sơ và nhóm hành động theo trạng thái quy trình." />
      <Card style={{ padding: 20, display: "grid", gap: 16 }}>
        <DetailList
          items={[
            { label: "Mã hồ sơ", value: record.code },
            { label: "Trạng thái", value: <StatusBadge value={currentRecord.status} /> },
            { label: "Tiêu đề", value: currentRecord.title },
            { label: "Đơn vị", value: currentRecord.unit },
            { label: "Ngày xử lý", value: currentRecord.date }
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
                <div style={{ fontWeight: 700 }}>Tài liệu / file đính kèm</div>
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
          <ButtonLink href={`/mba/${section.slug}`} variant="secondary">
            Quay lại danh sách
          </ButtonLink>
        </div>
      </Card>
      <ConfirmModal
        open={Boolean(confirmAction)}
        title={`${currentSection.detailCode} - ${confirmAction}`}
        description={`Xác nhận thao tác "${confirmAction}" cho hồ sơ ${currentRecord.code}. Đây là mô phỏng popup duyệt / gửi duyệt / ký số của phân hệ.`}
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

export function MbaOverviewView() {
  return (
    <Stack>
      <MbaModuleNav />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {mbaSections.map((section) => (
          <Card key={section.slug} style={{ padding: 20, display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", color: "var(--color-text-soft)", fontWeight: 700 }}>{section.codeRange}</div>
              <div style={{ fontFamily: "Lexend, sans-serif", fontSize: 20, fontWeight: 600, marginTop: 6 }}>{section.title}</div>
            </div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 15 }}>{section.description}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
              <StatusBadge value={section.records[0]?.status ?? "Mới"} />
              <ButtonLink href={`/mba/${section.slug}`} variant="secondary">
                Mở nhóm màn
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Stack>
  );
}
