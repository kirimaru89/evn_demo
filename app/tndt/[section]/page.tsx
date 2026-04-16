import { AppShell } from "@/components/app-shell";
import { TndtListView } from "@/components/tndt/views";
import { getTndtSection } from "@/lib/tndt-data";
import { notFound } from "next/navigation";

export default async function TndtSectionPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getTndtSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ THÍ NGHIỆM TẠO DOANH THU" subtitle={data.description}>
      <TndtListView sectionSlug={section} />
    </AppShell>
  );
}
