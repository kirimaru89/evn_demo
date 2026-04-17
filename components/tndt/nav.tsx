"use client";

import { usePathname } from "next/navigation";
import { tndtSections } from "@/lib/tndt-data";
import { ModuleTabs } from "../ui/module-tabs";

export function TndtModuleNav() {
  const pathname = usePathname();

  return (
    <ModuleTabs
      items={tndtSections.map((section) => {
        const href = `/tndt/${section.slug}`;
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
