"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FooterSectionProps {
  locale: string;
}

const NAV_SECTIONS = [
  { title: "Shop", links: [{ label: "All Products", href: "/products" }, { label: "New Arrivals", href: "/products" }, { label: "Best Sellers", href: "/products" }] },
  { title: "Company", links: [{ label: "About Us", href: "/about" }, { label: "Our Story", href: "/about" }, { label: "Contact", href: "/contact" }] },
  { title: "Support", links: [{ label: "FAQ", href: "/faq" }, { label: "Shipping", href: "/faq" }, { label: "Returns", href: "/faq" }] },
];

export default function FooterSection({ locale }: FooterSectionProps) {
  return (
    <footer className="border-t border-border/20 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs font-black">F</span>
              </div>
              <span className="text-lg font-bold text-foreground">FIWB</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Modern essentials for everyday style.</p>
          </div>
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h4 className="text-sm font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={`/${locale}${link.href}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FIWB. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/terms`} className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href={`/${locale}/privacy`} className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}