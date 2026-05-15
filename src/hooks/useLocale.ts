"use client";

import { usePathname } from "next/navigation";

export function useLocale(): string {
  const pathname = usePathname();
  const parts = pathname.split("/");
  return parts[1] || "mn";
}