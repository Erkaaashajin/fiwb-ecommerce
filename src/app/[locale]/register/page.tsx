"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import FooterSection from "@/components/FooterSection";

export default function RegisterPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = useTranslations("Register");
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); router.push(`/${locale}/`); }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-orange-500 flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight">FIWB</h1>
            <p className="text-sm text-muted-foreground">{t("createAccount")}</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">{t("fullName")}</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">{t("email")}</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">{t("password")}</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" />
              </div>
              <button type="submit" disabled={isLoading} className="ios-glass-btn w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-primary/20">
                {isLoading ? t("creating") : t("createAccount")}
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground">{t("alreadyHaveAccount")}{" "}<a href={`/${locale}/login`} className="text-primary hover:underline font-medium">{t("signIn")}</a></p>
          </div>
        </motion.div>
      </main>
      <FooterSection locale={locale} />
    </div>
  );
}