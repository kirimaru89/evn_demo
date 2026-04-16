import { AppShell } from "@/components/app-shell";
import { AuditLogsListView } from "@/components/admin/views";

export default function AuditLogsPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Nhật ký hệ thống">
      <AuditLogsListView />
    </AppShell>
  );
}
