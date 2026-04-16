import { AppShell } from "@/components/app-shell";
import { DepartmentFormView } from "@/components/admin/views";

export default function NewDepartmentPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Tạo mới đơn vị">
      <DepartmentFormView />
    </AppShell>
  );
}
