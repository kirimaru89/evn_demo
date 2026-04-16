import { AppShell } from "@/components/app-shell";
import { TndtFormView } from "@/components/tndt/views";
import { getTndtSection } from "@/lib/tndt-data";
import { notFound } from "next/navigation";

export default async function TndtSectionNewPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getTndtSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM TẠO DOANH THU" subtitle={`Tạo mới ${data.shortTitle}`}>
      <TndtFormView sectionSlug={section} />
    </AppShell>
  );
}
