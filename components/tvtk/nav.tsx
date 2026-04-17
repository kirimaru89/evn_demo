"use client";

import { usePathname } from "next/navigation";
import { tvtkSections } from "@/lib/tvtk-data";
import { ModuleTabs } from "../ui/module-tabs";

export function TvtkModuleNav() {
  const pathname = usePathname();

  return (
    <ModuleTabs
      items={tvtkSections.map((section) => {
        const href = `/tvtk/${section.slug}`;
        return {
          key: section.slug,
          label: section.shortTitle,
          href,
          active: pathname === href || pathname.startsWith(`${href}/`)
        };
      })}
    />
  );
}
