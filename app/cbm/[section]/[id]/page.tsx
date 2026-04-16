import { AppShell } from "@/components/app-shell";
import { CbmDetailView } from "@/components/cbm/views";
import { getCbmRecord, getCbmSection } from "@/lib/cbm-data";
import { notFound } from "next/navigation";

export default async function CbmSectionDetailPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getCbmSection(section);
  const record = getCbmRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM CBM" subtitle={`Chi tiết ${sectionData.shortTitle}`}>
      <CbmDetailView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
