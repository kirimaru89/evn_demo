"use client";

import { usePathname } from "next/navigation";
import { cbmSections } from "@/lib/cbm-data";
import { ModuleTabs } from "../ui/module-tabs";

export function CbmModuleNav() {
  const pathname = usePathname();

  return (
    <ModuleTabs
      items={cbmSections.map((section) => {
        const href = `/cbm/${section.slug}`;
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
