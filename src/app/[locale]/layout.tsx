import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { AuthProvider } from "@/lib/auth/AuthContext";
import { ApolloWrapper } from "@/lib/apollo/provider";
import "../globals.css";

export const metadata: Metadata = {
  title: "FIWB - Modern Essentials",
  description: "Curated premium fashion essentials blending comfort with sophistication.",
};

export function generateStaticParams() {
  return [
    { locale: "mn" },
    { locale: "en" },
    { locale: "ja" },
    { locale: "ko" },
    { locale: "zh" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <SmoothScrollProvider>
            <NextIntlClientProvider messages={messages}>
              <AuthProvider>
                <ApolloWrapper>{children}</ApolloWrapper>
              </AuthProvider>
            </NextIntlClientProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
