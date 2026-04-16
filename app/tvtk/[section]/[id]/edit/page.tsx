import { AppShell } from "@/components/app-shell";
import { TvtkFormView } from "@/components/tvtk/views";
import { getTvtkRecord, getTvtkSection } from "@/lib/tvtk-data";
import { notFound } from "next/navigation";

export default async function TvtkSectionEditPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getTvtkSection(section);
  const record = getTvtkRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ TƯ VẤN THIẾT KẾ" subtitle={`Chỉnh sửa ${sectionData.shortTitle}`}>
      <TvtkFormView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
