import { AppShell } from "@/components/app-shell";
import { MbaListView } from "@/components/mba/views";
import { getMbaSection } from "@/lib/mba-data";
import { notFound } from "next/navigation";

export default async function MbaSectionPage({
  params
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = getMbaSection(section);
  if (!data) notFound();

  return (
    <AppShell title="Phân hệ MBA" subtitle={data.description}>
      <MbaListView sectionSlug={section} />
    </AppShell>
  );
}
