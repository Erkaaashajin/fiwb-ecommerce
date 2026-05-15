"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function NotFoundPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <div className="text-6xl font-black text-primary mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-black mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-8 max-w-md">{t("description")}</p>
        <a href={`/${params.locale}`} className="ios-glass-btn inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20">
          {t("goHome")}
        </a>
      </motion.div>
    </div>
  );
}