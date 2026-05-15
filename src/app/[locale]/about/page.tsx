import { motion } from "framer-motion";
import FooterSection from "@/components/FooterSection";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const t = (key: string) => messages[key] || key;
  return {
    title: t("About.aboutUs") || "About Us",
    description: t("About.aboutIntro") || "Learn more about our story.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = (key: string) => messages[key] || key;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
              {t("About.about")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              {t("About.aboutUs")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("About.aboutIntro")}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary">
                {t("About.ourStory")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                {t("About.storyTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("About.storyText1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("About.storyText2")}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-primary">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t("About.yearsExperience")}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t("About.happyCustomers")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img src="/clothes.png" alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-surface border-t border-border/20 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
                {t("About.values")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                {t("About.whatWeBelieve")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { titleKey: "quality", descKey: "qualityDesc" },
                { titleKey: "sustainability", descKey: "sustainabilityDesc" },
                { titleKey: "innovation", descKey: "innovationDesc" },
              ].map((v, i) => (
                <motion.div
                  key={v.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`About.${v.titleKey}`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`About.${v.descKey}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
              {t("About.team")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t("About.meetOurTeam")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["M", "A", "R", "K"].map((initial, i) => (
              <motion.div
                key={initial}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 text-2xl font-black text-primary">
                  {initial}
                </div>
                <h4 className="font-semibold text-foreground">
                  {t(`About.teamMember${i + 1}`) || initial}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {t(`About.teamRole${i + 1}`) || "Designer"}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection locale={locale} />
    </div>
  );
}