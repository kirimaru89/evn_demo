import { AppShell } from "@/components/app-shell";
import { CbmFormView } from "@/components/cbm/views";
import { getCbmRecord, getCbmSection } from "@/lib/cbm-data";
import { notFound } from "next/navigation";

export default async function CbmSectionEditPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getCbmSection(section);
  const record = getCbmRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM CBM" subtitle={`Chỉnh sửa ${sectionData.shortTitle}`}>
      <CbmFormView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
