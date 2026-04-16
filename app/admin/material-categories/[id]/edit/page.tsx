import { AppShell } from "@/components/app-shell";
import { MaterialCategoryFormView } from "@/components/admin/views";

export default async function EditMaterialCategoryPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Chỉnh sửa danh mục vật tư">
      <MaterialCategoryFormView id={id} />
    </AppShell>
  );
}
