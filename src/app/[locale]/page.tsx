import Header from "@/components/GlassHeader";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeatureCard from "@/components/FeatureCard";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, CP_POSTS, CP_CATEGORIES, CP_CMS_TAGS, CP_MENUS } from "@/graphql/cms/queries";
import type { CmsPage, CmsPost, CmsCategory, CmsTag, CmsMenuItem } from "@/graphql/cms/types";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIWB - Modern Essentials",
  description: "Curated premium fashion essentials.",
};

const PRODUCTS = [
  {
    _id: "fallback-1",
    title: "Classic Men's Jorts",
    slug: "classic-mens-jorts",
    excerpt: "Premium denim jorts with vintage wash.",
    customFieldsData: { price: 210000, currency: "MNT", sku: "JORTS-001", inStock: true },
    thumbnail: { url: "/black-jorts.jpg", name: "jorts" },
    categories: [{ name: "Men", slug: "men" }],
  },
  {
    _id: "fallback-2",
    title: "Bershka Style Shirt",
    slug: "bershka-style-shirt",
    excerpt: "Trendy oversized shirt inspired by urban fashion.",
    customFieldsData: { price: 180000, currency: "MNT", sku: "BRSHT-002", inStock: true },
    thumbnail: { url: "/bershka-shirt.jpg", name: "shirt" },
    categories: [{ name: "Women", slug: "women" }],
  },
  {
    _id: "fallback-3",
    title: "Baby Tee",
    slug: "baby-tee",
    excerpt: "Ultra-soft baby tee with a relaxed fit.",
    customFieldsData: { price: 120000, currency: "MNT", sku: "BABYT-003", inStock: true },
    thumbnail: { url: "/baby-tee.webp", name: "tee" },
    categories: [{ name: "Men", slug: "men" }],
  },
];

const features = [
  { titleKey: "quality", descKey: "qualityDesc" },
  { titleKey: "fastDelivery", descKey: "fastDeliveryDesc" },
  { titleKey: "customerSupport", descKey: "customerSupportDesc" },
];

export default async function HomePage({
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
  const isMn = locale === "mn";

  let { products, headerMenuItems, footerMenuItems } = await getHomePageData(locale);

  if (!products || products.length === 0) {
    products = PRODUCTS.map((p) => ({
      ...p,
      content: "",
    }));
  }

  const productCards = products.map((p) => ({
    _id: p._id,
    name: p.title || "Untitled",
    description: p.excerpt || "",
    price: (p.customFieldsData?.price as number) || 0,
    salePrice: undefined,
    images: p.thumbnail?.url ? [p.thumbnail.url] : ["/placeholder.png"],
    category: p.categories?.[0]?.name || "",
    slug: p.slug || "",
  }));

  const featureCards = features.map((f, i) => ({
    ...f,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={i === 0 ? "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" : i === 1 ? "M22 12h-4l-3 9L9 3l-3 9H2" : "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"} />
      </svg>
    ),
  }));

  const FAQ_ITEMS =
    locale === "mn"
      ? [
          { question: "Та ямар төлбөрийн хүргэдэг вэ?", answer: "Бид Visa, Mastercard, Amex, болон PayPal-г хүргэдэг." },
          { question: "Олон улсын хүргэлт хийдэг юу юү?", answer: "Тийм, бүх улсыг хүрэх хүргэлт явуулдаг." },
          { question: "Буцаалтын нарийн хэлбэр юу вэ?", answer: "Захиалсан барааг 30 хоногийн дотор буцаах боломжтой." },
          { question: "Захиалгыг хэн тэйлж болох вэ?", answer: "Захиалга илгээгдсэний дараа email-р хүргэлтийн дугаар илгээнэ." },
        ]
      : [
          { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, Amex, and PayPal through our secure payment gateway." },
          { question: "Do you ship internationally?", answer: "Yes, we ship worldwide with tracked delivery." },
          { question: "What is your return policy?", answer: "Returns within 30 days for unworn items in original packaging." },
          { question: "How do I track my order?", answer: "You'll receive a tracking link by email once your order ships." },
        ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header menuItems={headerMenuItems} />
      <main>
        <HeroSection />

        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
                {t("Home.recommended")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                {t("Home.youMightAlsoLike")}
              </h2>
            </div>
            <ProductGrid products={productCards} />
          </div>
        </section>

        <section className="bg-surface border-t border-border/20" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
                {t("Home.whyChooseUs")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                {t("Home.everythingYouNeed")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCards.map((f, i) => (
                <FeatureCard
                  key={f.titleKey}
                  icon={f.icon}
                  title={isMn ? t(f.titleKey) : f.titleKey}
                  description={isMn ? t(f.descKey) : f.titleKey}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background border-t border-border/20" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary">
                  {t("Home.about")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  {t("Home.modernStyle")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{t("Home.aboutDesc")}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img src="/clothes.png" alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface border-t border-border/20" id="faq">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
                {t("Home.faq")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                {t("Home.frequentlyAskedQuestions")}
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} locale={locale} />
          </div>
        </section>

        <section className="bg-background border-t border-border/20" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">
                  {t("Home.contact")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-6">
                  {t("Home.getInTouch")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    info@fiwb.mn
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    +976 7777 7777
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Ulaanbaatar, Mongolia
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <FooterSection locale={locale} menuItems={footerMenuItems} />
    </div>
  );
}

async function getHomePageData(locale: string) {
  try {
    const client = await getServerApolloClient();

    const [postsRes, menuRes] = await Promise.all([
      client
        .query<{ cpPosts: CmsPost[] }>({
          query: CP_POSTS,
          variables: { language: locale, type: "product", status: "published" },
        })
        .catch(() => ({ data: null })),
      client
        .query<{ cpMenus: CmsMenuItem[] }>({
          query: CP_MENUS,
          variables: { language: locale, kind: "header" },
        })
        .catch(() => ({ data: null })),
    ]);

    const footerRes = await client
      .query<{ cpMenus: CmsMenuItem[] }>({
        query: CP_MENUS,
        variables: { language: locale, kind: "footer" },
      })
      .catch(() => ({ data: null }));

    return {
      products: postsRes?.data?.cpPosts || [],
      headerMenuItems: menuRes?.data?.cpMenus || [],
      footerMenuItems: footerRes?.data?.cpMenus || [],
    };
  } catch {
    return { products: [], headerMenuItems: [], footerMenuItems: [] };
  }
}