import { AppShell } from "@/components/app-shell";
import { RoleFormView } from "@/components/admin/views";

export default function NewRolePage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Tạo mới role & phân quyền">
      <RoleFormView />
    </AppShell>
  );
}
