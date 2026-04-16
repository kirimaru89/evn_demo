import { AppShell } from "@/components/app-shell";
import { DepartmentFormView } from "@/components/admin/views";

export default async function EditDepartmentPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Chỉnh sửa đơn vị">
      <DepartmentFormView id={id} />
    </AppShell>
  );
}
