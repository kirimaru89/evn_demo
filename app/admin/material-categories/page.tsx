import { AppShell } from "@/components/app-shell";
import { MaterialCategoriesListView } from "@/components/admin/views";

export default function MaterialCategoriesPage() {
  return (
    <AppShell title="Quản lý user và phân quyền" subtitle="Danh mục vật tư">
      <MaterialCategoriesListView />
    </AppShell>
  );
}
