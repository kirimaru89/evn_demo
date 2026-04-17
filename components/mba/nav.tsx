"use client";

import { usePathname } from "next/navigation";
import { mbaSections } from "@/lib/mba-data";
import { ModuleTabs } from "../ui/module-tabs";

export function MbaModuleNav() {
  const pathname = usePathname();

  return (
    <ModuleTabs
      items={mbaSections.map((section) => {
        const href = `/mba/${section.slug}`;
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
