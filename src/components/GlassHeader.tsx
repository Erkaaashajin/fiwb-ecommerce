"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LANGUAGES = [
  { code: "mn", label: "MN" },
  { code: "en", label: "EN" },
  { code: "ja", label: "JP" },
  { code: "ko", label: "KO" },
  { code: "zh", label: "ZH" },
];

export default function GlassHeader() {
  const { theme, toggleTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const parts = pathname.split("/");
  const currentLang = parts[1] || "mn";

  const handleLangChange = (code: string) => {
    setLangOpen(false);
    const rest = parts.slice(2).join("/");
    router.push(`/${code}${rest ? "/" + rest : ""}`);
  };

  const isActive = (href: string) => {
    const target = href === "/" ? `/${currentLang}` : `/${currentLang}${href}`;
    return pathname === target;
  };

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-2xl border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${currentLang}`} className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-orange-500 rounded-full animate-pulse-subtle" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <span className="text-white font-black text-sm">F</span>
            </div>
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight hidden sm:block">FIWB</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${currentLang}${link.href === "/" ? "" : link.href}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button
              className="ios-glass-btn px-3 py-2 text-sm flex items-center gap-1.5"
              aria-label="Select language"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="hidden sm:inline text-xs">{LANGUAGES.find((l) => l.code === currentLang)?.label}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-popover border border-border rounded-lg shadow-xl py-1 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-accent transition-colors ${
                      currentLang === lang.code ? "bg-primary/10 text-primary font-semibold" : ""
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="ios-glass-btn p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <Link href={`/${currentLang}/cart`}>
            <button className="ios-glass-btn px-3 py-2 text-sm flex items-center gap-1.5 relative" aria-label="Cart">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </Link>

          <Link href={`/${currentLang}/login`}>
            <button className="ios-glass-btn px-3 py-2 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}