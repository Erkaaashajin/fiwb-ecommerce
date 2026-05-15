import FaqAccordion from "@/components/FaqAccordion";
import FooterSection from "@/components/FooterSection";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

const FAQ_ITEMS = [
  { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, Amex, and PayPal through our secure payment gateway. All transactions are encrypted and protected." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with tracked delivery. International shipping fees vary by destination and are calculated at checkout." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy for unworn items in original packaging. We cover return shipping costs for exchanges and defective items." },
  { question: "How do I track my order?", answer: "Once your order ships, you'll receive an email with a tracking number. You can also check your order status in your account dashboard." },
  { question: "Can I modify or cancel my order?", answer: "You can modify or cancel your order within 1 hour of placing it. Please contact our support team for assistance." },
  { question: "Do you offer gift wrapping?", answer: "Yes, we offer complimentary gift wrapping on all orders. Simply select the gift wrap option during checkout." },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const t = (key: string) => messages[key] || key;
  return {
    title: t("Faq.frequentlyAskedQuestions") || "FAQ",
    description: t("Faq.findAnswers") || "Find answers to common questions.",
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = (key: string) => {
    const parts = key.split(".");
    let result: any = messages;
    for (const p of parts) { result = result?.[p]; if (result === undefined) return key; }
    return typeof result === "string" ? result : key;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
              {t("Faq.faq")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              {t("Faq.frequentlyAskedQuestions")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t("Faq.findAnswers")}
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <FaqAccordion items={FAQ_ITEMS} locale={locale} />
        </section>

        <section className="bg-surface py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
              {t("Faq.stillHaveQuestions")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("Faq.contactUsDesc")}
            </p>
            <a
              href={`/${locale}/contact`}
              className="ios-glass-btn inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              {t("Faq.contactUs")}
            </a>
          </div>
        </section>
      </main>
      <FooterSection locale={locale} />
    </div>
  );
}