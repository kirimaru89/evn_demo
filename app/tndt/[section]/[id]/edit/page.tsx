import { AppShell } from "@/components/app-shell";
import { TndtFormView } from "@/components/tndt/views";
import { getTndtRecord, getTndtSection } from "@/lib/tndt-data";
import { notFound } from "next/navigation";

export default async function TndtSectionEditPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getTndtSection(section);
  const record = getTndtRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM TẠO DOANH THU" subtitle={`Chỉnh sửa ${sectionData.shortTitle}`}>
      <TndtFormView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
