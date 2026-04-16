import { AppShell } from "@/components/app-shell";
import { MaterialCategoryFormView } from "@/components/admin/views";

export default function NewMaterialCategoryPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Tạo mới danh mục vật tư">
      <MaterialCategoryFormView />
    </AppShell>
  );
}
