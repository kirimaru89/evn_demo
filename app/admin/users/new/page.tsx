import { AppShell } from "@/components/app-shell";
import { UserFormView } from "@/components/admin/views";

export default function NewUserPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Tạo mới người dùng">
      <UserFormView />
    </AppShell>
  );
}
