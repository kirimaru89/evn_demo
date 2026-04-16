import { AppShell } from "@/components/app-shell";
import { RoleFormView } from "@/components/admin/views";

export default async function EditRolePage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Chỉnh sửa role & phân quyền">
      <RoleFormView roleId={id} />
    </AppShell>
  );
}
