import { AppShell } from "@/components/app-shell";
import { UsersListView } from "@/components/admin/views";

export default function UsersPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Người dùng">
      <UsersListView />
    </AppShell>
  );
}
