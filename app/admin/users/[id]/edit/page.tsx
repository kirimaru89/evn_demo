import { AppShell } from "@/components/app-shell";
import { UserFormView } from "@/components/admin/views";

export default async function EditUserPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Chỉnh sửa người dùng">
      <UserFormView userId={id} />
    </AppShell>
  );
}
