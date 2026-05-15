import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeatureCard from "@/components/FeatureCard";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import { useTranslations } from "next-intl";

const RECOMMENDED_PRODUCTS = [
  { _id: "1", name: "Black Pleated Wide-Leg Jorts", description: "Elegant wide-leg trousers with pleated front", price: 210000, images: ["/black-jorts.jpg"], category: "Bottoms" },
  { _id: "2", name: "Bershka Striped Short Sleeve", description: "Classic striped short sleeve shirt", price: 180000, images: ["/bershka-shirt.jpg"], category: "Tops" },
  { _id: "3", name: "Baby Tee", description: "Essential cotton crew neck t-shirt", price: 120000, images: ["/baby-tee.webp"], category: "Tops" },
];

const FEATURES = [
  { title: "Quality Assured", description: "Every item meets our high standards for materials and craftsmanship.", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { title: "Fast Delivery", description: "Quick shipping nationwide — your order arrives within days.", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
  { title: "Customer Support", description: "Friendly help whenever you need it, via chat or phone.", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
];

const FAQ_ITEMS = [
  { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, Amex, and PayPal through our secure payment gateway." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide with tracked delivery. Fees vary by destination." },
  { question: "What is your return policy?", answer: "Returns within 30 days for unworn items in original packaging." },
  { question: "How do I track my order?", answer: "You'll receive a tracking link by email once your order ships." },
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />

        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{t("recommended")}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{t("youMightAlsoLike")}</h2>
            </div>
            <ProductGrid products={RECOMMENDED_PRODUCTS} />
          </div>
        </section>

        <section className="bg-background border-t border-border/20" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary">{t("about")}</span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{t("modernStyle")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("aboutDesc")}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img src="/clothes.png" alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{t("whyChooseUs")}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{t("everythingYouNeed")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />)}
            </div>
          </div>
        </section>

        <section className="bg-background border-t border-border/20" id="faq">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{t("faq")}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{t("frequentlyAskedQuestions")}</h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="bg-surface border-t border-border/20" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{t("contact")}</span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-6">{t("getInTouch")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-center gap-2"><svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>info@fiwb.mn</p>
                  <p className="flex items-center gap-2"><svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>+976 7777 7777</p>
                  <p className="flex items-center gap-2"><svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>Ulaanbaatar, Mongolia</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <FooterSection locale={params.locale} />
    </div>
  );
}