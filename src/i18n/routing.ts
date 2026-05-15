import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mn", "en", "ja", "ko", "zh"],
  defaultLocale: "mn",
});
