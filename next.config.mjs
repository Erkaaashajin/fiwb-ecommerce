import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT:
      process.env.NEXT_PUBLIC_ERXES_ENDPOINT ||
      "https://erdenesaikhanamarsanaa.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || "",
    NEXT_PUBLIC_ERXES_CMS_ID:
      process.env.NEXT_PUBLIC_ERXES_CMS_ID || "6a032337f584ac54c9ab7e62",
    ERXES_APP_TOKEN: process.env.ERXES_APP_TOKEN || "",
  },
};

export default withNextIntl(nextConfig);