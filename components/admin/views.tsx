"use client";

import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";
import { AdminModuleNav } from "./nav";
import { StatusBadge } from "./status";
import {
  auditLogs,
  departments,
  findAuditLogById,
  findDepartmentById,
  findMaterialCategoryById,
  findRoleById,
  findUserById,
  materialCategories,
  permissionGroups,
  roleRecords,
  roles,
  users
} from "@/lib/mock-data";
import { Breadcrumbs, PageHeader } from "@/components/page-header";
import { FilterToolbar } from "@/components/filter-toolbar";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { ConfirmModal, DetailList } from "@/components/ui/modal";
import { PaginationBar, usePagination } from "@/components/ui/pagination";
import { ActionIconButton, ActionIconLink, TableActionGroup } from "@/components/ui/action-icons";
import { DataTable } from "@/components/ui/table";

function Stack({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 16 }}>{children}</div>;
}

function PaginationNote() {
  return null;
}

export function UsersListView() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("Tất cả");
  const [modalUser, setModalUser] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return users.filter((record) => {
      const matchesKeyword =
        !keyword ||
        [record.code, record.name, record.email, record.department].some((value) =>
          value.toLowerCase().includes(keyword.toLowerCase())
        );
      const matchesStatus = status === "Tất cả" || record.status === status;
      return matchesKeyword && matchesStatus;
    });
  }, [keyword, status]);
  const pagination = usePagination(filtered, 20);
  const pageRows = pagination.slice(page);

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", "Người dùng"]} />
      <AdminModuleNav />
      <PageHeader
        title="ADM-01 Người dùng"
        description="Danh sách người dùng, lọc nhanh theo từ khóa và trạng thái."
        actions={
          <ButtonLink href="/admin/users/new">Tạo mới</ButtonLink>
        }
      />
      <FilterToolbar>
        <Field label="Từ khóa">
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Mã, tên, email..." />
        </Field>
        <Field label="Trạng thái">
          <Select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>Tất cả</option>
            <option>Mới</option>
            <option>Đang hoạt động</option>
            <option>Vô hiệu hóa</option>
          </Select>
        </Field>
        <Field label="Bộ lọc">
          <Select defaultValue="Toàn bộ">
            <option>Toàn bộ</option>
            <option>Quản trị hệ thống</option>
            <option>Chuyên viên</option>
            <option>Kế toán</option>
          </Select>
        </Field>
        <Field label="Ngày tạo">
          <Input type="date" defaultValue="2026-04-16" />
        </Field>
      </FilterToolbar>
      <DataTable
        columns={["Mã", "Tên / mô tả", "Đơn vị", "Ngày tạo", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <TableActionGroup key={record.id}>
            <ActionIconLink href={`/admin/users/${record.id}/edit`} icon="edit" label="Chỉnh sửa" />
            <ActionIconButton
              icon="toggle"
              label={record.status === "Vô hiệu hóa" ? "Kích hoạt" : "Vô hiệu hóa"}
              onClick={() => setModalUser(record.id)}
            />
          </TableActionGroup>
        ))}
        rows={pageRows.map((record) => [
          <strong key="code">{record.code}</strong>,
          <div key="name" style={{ display: "grid", gap: 4 }}>
            <span>{record.name}</span>
            <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.email}</span>
          </div>,
          <div key="department">
            <div>{record.department}</div>
            <div style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.title}</div>
          </div>,
          record.createdAt,
          <StatusBadge key="status" value={record.status} />
        ])}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={filtered.length} />
      <ConfirmModal
        open={Boolean(modalUser)}
        title="Bạn có chắc chắn thực hiện thao tác này?"
        description="Đây là popup xác nhận vô hiệu hóa hoặc kích hoạt người dùng theo ADM-04."
        confirmLabel="Đồng ý"
        onCancel={() => setModalUser(null)}
        onConfirm={() => setModalUser(null)}
      />
    </Stack>
  );
}

export function UserFormView({ userId }: { userId?: string }) {
  const user = userId ? findUserById(userId) : undefined;
  const isEdit = Boolean(user);

  return (
    <Stack>
      <Breadcrumbs
        items={["Home", "Quản lý user và phân quyền", "Người dùng", isEdit ? "Chỉnh sửa người dùng" : "Tạo mới người dùng"]}
      />
      <AdminModuleNav />
      <PageHeader title={isEdit ? "ADM-03 Chỉnh sửa người dùng" : "ADM-02 Tạo mới người dùng"} />
      <Card style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          <Field label="Tên người dùng" required>
            <Input defaultValue={user?.name ?? ""} />
          </Field>
          <Field label="Email" required>
            <Input defaultValue={user?.email ?? ""} type="email" />
          </Field>
          <Field label="Số điện thoại">
            <Input defaultValue={user?.phone ?? ""} type="tel" />
          </Field>
          <Field label="Đơn vị / Phòng ban" required>
            <Select defaultValue={user?.department ?? departments[0].name}>
              {departments.map((record) => (
                <option key={record.id}>{record.name}</option>
              ))}
            </Select>
          </Field>
          <Field label="Chức vụ">
            <Input defaultValue={user?.title ?? ""} />
          </Field>
          <Field label="Role" required>
            <Select defaultValue={user?.role ?? roles[0]}>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </Select>
          </Field>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 20 }}>
          <ButtonLink href="/admin/users" variant="secondary">
            Hủy
          </ButtonLink>
          <ButtonLink href="/admin/users">Lưu</ButtonLink>
        </div>
      </Card>
    </Stack>
  );
}

export function RolesListView() {
  const [modalRole, setModalRole] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pagination = usePagination(roleRecords, 20);
  const pageRows = pagination.slice(page);

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", "Role"]} />
      <AdminModuleNav />
      <PageHeader
        title="ADM-05 Role & phân quyền"
        description="Danh sách role, mô tả phạm vi áp dụng và trạng thái."
        actions={
          <ButtonLink href="/admin/roles/new">Tạo mới</ButtonLink>
        }
      />
      <DataTable
        columns={["Mã", "Tên / mô tả", "Đơn vị", "Ngày tạo", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <TableActionGroup key={record.id}>
            <ActionIconLink href={`/admin/roles/${record.id}/edit`} icon="edit" label="Chỉnh sửa" />
            <ActionIconButton icon="delete" tone="danger" label="Xóa" onClick={() => setModalRole(record.id)} />
          </TableActionGroup>
        ))}
        rows={pageRows.map((record) => [
          <strong key="code">{record.code}</strong>,
          <div key="name" style={{ display: "grid", gap: 4 }}>
            <span>{record.name}</span>
            <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{record.description}</span>
          </div>,
          record.scope,
          record.createdAt,
          <StatusBadge key="status" value={record.status} />
        ])}
      />
      <ConfirmModal
        open={Boolean(modalRole)}
        title="Bạn có chắc chắn xóa role?"
        description="Đây là popup xác nhận xóa role theo ADM-08."
        confirmLabel="Đồng ý"
        onCancel={() => setModalRole(null)}
        onConfirm={() => setModalRole(null)}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={roleRecords.length} />
    </Stack>
  );
}

export function RoleFormView({ roleId }: { roleId?: string }) {
  const role = roleId ? findRoleById(roleId) : undefined;
  const isEdit = Boolean(role);

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", "Role", isEdit ? "Chỉnh sửa role & phân quyền" : "Tạo mới role & phân quyền"]} />
      <AdminModuleNav />
      <PageHeader title={isEdit ? "ADM-07 Chỉnh sửa role & phân quyền" : "ADM-06 Tạo mới role & phân quyền"} />
      <Card style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          <Field label="Mã role" required>
            <Input defaultValue={role?.code ?? ""} />
          </Field>
          <Field label="Tên role" required>
            <Input defaultValue={role?.name ?? ""} />
          </Field>
          <Field label="Mô tả">
            <Textarea defaultValue={role?.description ?? ""} />
          </Field>
          <Field label="Phân hệ áp dụng" required>
            <Select defaultValue={role?.scope ?? "Toàn hệ thống"}>
              <option>Toàn hệ thống</option>
              <option>Phân hệ nghiệp vụ</option>
              <option>Audit + tra cứu</option>
            </Select>
          </Field>
          <Field label="Danh sách quyền" required>
            <div style={{ display: "grid", gap: 8, border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: 12 }}>
              {permissionGroups.map((permission) => (
                <label key={permission} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input type="checkbox" defaultChecked={role?.permissions.includes(permission) ?? false} />
                  {permission}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Ghi chú">
            <Textarea defaultValue={role?.note ?? ""} />
          </Field>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 20 }}>
          <ButtonLink href="/admin/roles" variant="secondary">
            Hủy
          </ButtonLink>
          <ButtonLink href="/admin/roles">Lưu</ButtonLink>
        </div>
      </Card>
    </Stack>
  );
}

type SimpleMode = "department" | "material";

function SimpleCatalogList({ mode }: { mode: SimpleMode }) {
  const isDepartment = mode === "department";
  const records: Array<(typeof departments)[number] | (typeof materialCategories)[number]> = isDepartment
    ? departments
    : materialCategories;
  const [page, setPage] = useState(1);
  const pagination = usePagination(records, 20);
  const pageRows = pagination.slice(page);
  const base = isDepartment ? "/admin/departments" : "/admin/material-categories";
  const title = isDepartment ? "ADM-09 Đơn vị / phòng ban" : "ADM-12 Danh mục vật tư";

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", isDepartment ? "Đơn vị / phòng ban" : "Danh mục vật tư"]} />
      <AdminModuleNav />
      <PageHeader
        title={title}
        actions={
          <ButtonLink href={`${base}/new`}>Tạo mới</ButtonLink>
        }
      />
      <DataTable
        columns={["Mã", "Tên / mô tả", "Đơn vị", "Ngày tạo", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <TableActionGroup key={record.id}>
            <ActionIconLink href={`${base}/${record.id}/edit`} icon="edit" label="Chỉnh sửa" />
          </TableActionGroup>
        ))}
        rows={pageRows.map((record) => [
          <strong key="code">{record.code}</strong>,
          <span key="name">{record.name}</span>,
          isDepartment ? (record as (typeof departments)[number]).parent : (record as (typeof materialCategories)[number]).unit,
          record.createdAt,
          <StatusBadge key="status" value={record.status} />
        ])}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={records.length} />
    </Stack>
  );
}

function SimpleCatalogForm({ mode, id }: { mode: SimpleMode; id?: string }) {
  const isDepartment = mode === "department";
  const record = isDepartment ? (id ? findDepartmentById(id) : undefined) : id ? findMaterialCategoryById(id) : undefined;
  const base = isDepartment ? "/admin/departments" : "/admin/material-categories";
  const title = isDepartment ? (record ? "ADM-11 Chỉnh sửa đơn vị" : "ADM-10 Tạo mới đơn vị") : record ? "ADM-14 Chỉnh sửa danh mục vật tư" : "ADM-13 Tạo mới danh mục vật tư";

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", isDepartment ? "Đơn vị / phòng ban" : "Danh mục vật tư", title]} />
      <AdminModuleNav />
      <PageHeader title={title} />
      <Card style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          <Field label="Mã" required>
            <Input defaultValue={record?.code ?? ""} />
          </Field>
          <Field label="Tên / Mô tả" required>
            <Input defaultValue={record?.name ?? ""} />
          </Field>
          <Field label={isDepartment ? "Đơn vị cha" : "Đơn vị tính"} required>
            <Input defaultValue={isDepartment ? (record as (typeof departments)[number] | undefined)?.parent ?? "" : (record as (typeof materialCategories)[number] | undefined)?.unit ?? ""} />
          </Field>
          <Field label="Trạng thái">
            <Select defaultValue={record?.status ?? (isDepartment ? "Đang hoạt động" : "Đang hoạt động")}>
              <option>Đang hoạt động</option>
              <option>{isDepartment ? "Vô hiệu hóa" : "Ngừng sử dụng"}</option>
            </Select>
          </Field>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 20 }}>
          <ButtonLink href={base} variant="secondary">
            Hủy
          </ButtonLink>
          <ButtonLink href={base}>Lưu</ButtonLink>
        </div>
      </Card>
    </Stack>
  );
}

export function DepartmentsListView() {
  return <SimpleCatalogList mode="department" />;
}

export function DepartmentFormView({ id }: { id?: string }) {
  return <SimpleCatalogForm mode="department" id={id} />;
}

export function MaterialCategoriesListView() {
  return <SimpleCatalogList mode="material" />;
}

export function MaterialCategoryFormView({ id }: { id?: string }) {
  return <SimpleCatalogForm mode="material" id={id} />;
}

export function AuditLogsListView() {
  const [page, setPage] = useState(1);
  const pagination = usePagination(auditLogs, 20);
  const pageRows = pagination.slice(page);
  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", "Nhật ký hệ thống"]} />
      <AdminModuleNav />
      <PageHeader title="ADM-15 Nhật ký hệ thống (audit log)" />
      <DataTable
        columns={["Hành động", "Người thực hiện", "Phân hệ", "Đối tượng", "Thời gian", "Trạng thái"]}
        actions="Thao tác"
        actionCells={pageRows.map((record) => (
          <TableActionGroup key={record.id}>
            <ActionIconLink href={`/admin/audit-logs/${record.id}`} icon="view" label="Xem chi tiết" />
          </TableActionGroup>
        ))}
        rows={pageRows.map((record) => [
          record.action,
          record.actor,
          record.module,
          record.target,
          record.createdAt,
          <StatusBadge key="status" value={record.status} />
        ])}
      />
      <PaginationBar page={page} totalPages={pagination.totalPages} onPageChange={setPage} pageSize={pagination.pageSize} totalItems={auditLogs.length} />
    </Stack>
  );
}

export function AuditLogDetailView({ id }: { id: string }) {
  const record = findAuditLogById(id);

  if (!record) {
    return <Card style={{ padding: 20 }}>Không tìm thấy bản ghi audit.</Card>;
  }

  return (
    <Stack>
      <Breadcrumbs items={["Home", "Quản lý user và phân quyền", "Nhật ký hệ thống", "Chi tiết"]} />
      <AdminModuleNav />
      <PageHeader title="ADM-16 Chi tiết nhật ký hệ thống" />
      <Card style={{ padding: 20, display: "grid", gap: 16 }}>
        <DetailList
          items={[
            { label: "Hành động", value: record.action },
            { label: "Người thực hiện", value: record.actor },
            { label: "Phân hệ", value: record.module },
            { label: "Đối tượng", value: record.target },
            { label: "Thời gian", value: record.createdAt },
            { label: "Trạng thái", value: <StatusBadge value={record.status} /> }
          ]}
        />
        <Field label="Mô tả chi tiết">
          <Textarea readOnly defaultValue={record.details} />
        </Field>
        <div>
          <ButtonLink href="/admin/audit-logs" variant="secondary">
            Quay lại
          </ButtonLink>
        </div>
      </Card>
    </Stack>
  );
}
