import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("Contact");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{t("contact")}</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">{t("getInTouch")}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t("contactDesc")}</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-2xl font-black tracking-tight mb-4">{t("letUsKnow")}</motion.h3>
                <p className="text-muted-foreground leading-relaxed">{t("weRespond")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg></div>
                  <div><p className="text-sm font-medium text-foreground">{t("email")}</p><p className="text-sm text-muted-foreground">info@fiwb.mn</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                  <div><p className="text-sm font-medium text-foreground">{t("phone")}</p><p className="text-sm text-muted-foreground">+976 7777 7777</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                  <div><p className="text-sm font-medium text-foreground">{t("address")}</p><p className="text-sm text-muted-foreground">Ulaanbaatar, Mongolia</p></div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 rounded-2xl overflow-hidden bg-muted border border-border aspect-video">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-primary/40 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <p className="text-sm text-muted-foreground">Map — Ulaanbaatar, Mongolia</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <FooterSection locale={params.locale} />
    </div>
  );
}