import { AppShell } from "@/components/app-shell";
import { TvtkFormView } from "@/components/tvtk/views";
import { getTvtkSection } from "@/lib/tvtk-data";
import { notFound } from "next/navigation";

export default async function TvtkSectionNewPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getTvtkSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ TƯ VẤN THIẾT KẾ" subtitle={`Tạo mới ${data.shortTitle}`}>
      <TvtkFormView sectionSlug={section} />
    </AppShell>
  );
}
