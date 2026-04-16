import { AppShell } from "@/components/app-shell";
import { TndtDetailView } from "@/components/tndt/views";
import { getTndtRecord, getTndtSection } from "@/lib/tndt-data";
import { notFound } from "next/navigation";

export default async function TndtSectionDetailPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getTndtSection(section);
  const record = getTndtRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM TẠO DOANH THU" subtitle={`Chi tiết ${sectionData.shortTitle}`}>
      <TndtDetailView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
