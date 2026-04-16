import { AppShell } from "@/components/app-shell";
import { MbaFormView } from "@/components/mba/views";
import { getMbaSection } from "@/lib/mba-data";
import { notFound } from "next/navigation";

export default async function MbaSectionNewPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getMbaSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ MBA" subtitle={`Tạo mới ${data.shortTitle}`}>
      <MbaFormView sectionSlug={section} />
    </AppShell>
  );
}
