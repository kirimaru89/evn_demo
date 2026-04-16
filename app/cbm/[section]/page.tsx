import { AppShell } from "@/components/app-shell";
import { CbmListView } from "@/components/cbm/views";
import { getCbmSection } from "@/lib/cbm-data";
import { notFound } from "next/navigation";

export default async function CbmSectionPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getCbmSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM CBM" subtitle={data.description}>
      <CbmListView sectionSlug={section} />
    </AppShell>
  );
}
