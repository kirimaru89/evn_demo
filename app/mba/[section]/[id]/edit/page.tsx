import { AppShell } from "@/components/app-shell";
import { MbaFormView } from "@/components/mba/views";
import { getMbaRecord, getMbaSection } from "@/lib/mba-data";
import { notFound } from "next/navigation";

export default async function MbaSectionEditPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;
  const sectionData = getMbaSection(section);
  const record = getMbaRecord(section, id);
  if (!sectionData || !record) notFound();

  return (
    <AppShell title="Phân hệ MBA" subtitle={`Chỉnh sửa ${sectionData.shortTitle}`}>
      <MbaFormView sectionSlug={section} recordId={id} />
    </AppShell>
  );
}
