import { AppShell } from "@/components/app-shell";
import { DepartmentsListView } from "@/components/admin/views";

export default function DepartmentsPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Đơn vị / phòng ban">
      <DepartmentsListView />
    </AppShell>
  );
}
