// Minimal root layout — locale-specific layout in [locale]/layout.tsx handles html/body.
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import "lenis/dist/lenis.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {children}
        <Toaster />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}