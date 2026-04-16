import { AppShell } from "@/components/app-shell";
import { CbmFormView } from "@/components/cbm/views";
import { getCbmSection } from "@/lib/cbm-data";
import { notFound } from "next/navigation";

export default async function CbmSectionNewPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getCbmSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM CBM" subtitle={`Tạo mới ${data.shortTitle}`}>
      <CbmFormView sectionSlug={section} />
    </AppShell>
  );
}
