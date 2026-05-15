"use client";

import { motion } from "framer-motion";
import HeroPrism from "./HeroPrism";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  tag: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function HeroSection({
  tag,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/40 to-white">
      <HeroPrism />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">{tag}</span>
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => router.push("/products")}
              className="ios-glass-btn px-8 py-4 bg-primary text-white font-semibold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              {ctaPrimary}
            </button>
            <button
              onClick={() => router.push("/about")}
              className="ios-glass-btn px-8 py-4 bg-background/50 backdrop-blur-sm border border-border text-foreground font-semibold text-lg hover:bg-accent/10 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {ctaSecondary}
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}