import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import FooterSection from "@/components/FooterSection";
import Image from "@/components/common/Image";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POST } from "@/graphql/cms/queries";
import type { CmsPost } from "@/graphql/cms/types";

export const revalidate = 60;
export const dynamic = "force-dynamic";

async function getProduct(slug: string, locale: string): Promise<CmsPost | null> {
  const client = await getServerApolloClient();
  const { data } = await client.query<{ cpPost: CmsPost }>({
    query: CP_POST,
    variables: { slug, language: locale },
  });
  return data?.cpPost || null;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;
  const t = useTranslations("Products");

  const product = await getProduct(id, locale);

  const fallback: CmsPost = {
    _id: "fallback",
    title: "Classic Men's Jorts",
    slug: "classic-mens-jorts",
    excerpt: "Premium denim jorts with vintage wash.",
    content: "<p>Classic Men's Jorts — crafted from premium denim with a vintage wash finish.</p>",
    customFieldsData: { price: 210000, currency: "MNT", sku: "JORTS-001", inStock: true },
    thumbnail: { url: "/black-jorts.jpg", name: "jorts" },
    categories: [{ name: "Men", slug: "men" }],
  };

  const p = product || fallback;
  const currency = (p.customFieldsData?.currency as string) || "MNT";
  const price = (p.customFieldsData?.price as number) || 0;
  const inStock = (p.customFieldsData?.inStock as boolean) ?? true;
  const sku = (p.customFieldsData?.sku as string) || "";
  const imageUrl = p.thumbnail?.url || "/placeholder.png";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{p.title}</h1>
            <p className="text-muted-foreground mt-2">{p.excerpt || ""}</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={imageUrl}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {p.categories?.map((c) => c.name).join(" / ") || "General"}
                </p>
                <h2 className="text-3xl font-black tracking-tight">{p.title}</h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  {price.toLocaleString()} {currency}
                </span>
                {inStock && (
                  <span className="text-sm bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                    {t("inStock")}
                  </span>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.content || "" }}
                />
              </div>

              {sku && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">SKU:</span> {sku}
                </p>
              )}

              <div className="mt-auto pt-6">
                <button className="ios-glass-btn w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-50" disabled={!inStock}>
                  {inStock ? t("addToCart") : t("outOfStock")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection locale={locale} />
    </div>
  );
}