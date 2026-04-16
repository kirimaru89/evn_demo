import { AppShell } from "@/components/app-shell";
import { RolesListView } from "@/components/admin/views";

export default function RolesPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Role & phân quyền">
      <RolesListView />
    </AppShell>
  );
}
