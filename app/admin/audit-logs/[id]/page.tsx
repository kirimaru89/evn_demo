import { AppShell } from "@/components/app-shell";
import { AuditLogDetailView } from "@/components/admin/views";

export default async function AuditLogDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Chi tiết nhật ký hệ thống">
      <AuditLogDetailView id={id} />
    </AppShell>
  );
}
