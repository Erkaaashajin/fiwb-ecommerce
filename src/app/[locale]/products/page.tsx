import ProductGrid from "@/components/ProductGrid";
import FooterSection from "@/components/FooterSection";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS, CP_MENUS } from "@/graphql/cms/queries";
import type { CmsPost, CmsMenuItem } from "@/graphql/cms/types";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  const t = (key: string) => messages[key] || key;
  return {
    title: t("Products.title") || "Products",
    description: t("Products.description") || "Browse our collection",
  };
}

async function getProductsAndMenu(locale: string, type?: string) {
  const client = await getServerApolloClient();
  const variables: Record<string, unknown> = { language: locale, status: "published" };
  if (type) variables.type = type;

  const postsRes = await client.query<{ cpPosts: CmsPost[] }>({ query: CP_POSTS, variables });
  const menuRes = await client.query<{ cpMenus: CmsMenuItem[] }>({ query: CP_MENUS, variables: { language: locale, kind: "footer" } });

  return {
    products: postsRes.data?.cpPosts || [],
    footerMenuItems: menuRes.data?.cpMenus || [],
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { category?: string };
}) {
  const { locale } = params;
  const t = useTranslations("Products");
  const category = searchParams?.category;

  const { products: fetchedProducts, footerMenuItems } = await getProductsAndMenu(locale, "product");

  let products = fetchedProducts;

  // Fallback if no CMS products found
  if (!products || products.length === 0) {
    products = [
      {
        _id: "1",
        title: "Classic Men's Jorts",
        slug: "classic-mens-jorts",
        excerpt: "Premium denim jorts with vintage wash.",
        content: "",
        customFieldsData: { price: 210000, currency: "MNT", sku: "JORTS-001", inStock: true },
        thumbnail: { url: "/black-jorts.jpg", name: "jorts" },
        categories: [{ name: "Men", slug: "men" }],
      },
      {
        _id: "2",
        title: "Bershka Style Shirt",
        slug: "bershka-style-shirt",
        excerpt: "Trendy oversized shirt inspired by urban fashion.",
        content: "",
        customFieldsData: { price: 180000, currency: "MNT", sku: "BRSHT-002", inStock: true },
        thumbnail: { url: "/bershka-shirt.jpg", name: "shirt" },
        categories: [{ name: "Women", slug: "women" }],
      },
      {
        _id: "3",
        title: "Baby Tee",
        slug: "baby-tee",
        excerpt: "Ultra-soft baby tee with a relaxed fit.",
        content: "",
        customFieldsData: { price: 120000, currency: "MNT", sku: "BABYT-003", inStock: true },
        thumbnail: { url: "/baby-tee.webp", name: "tee" },
        categories: [{ name: "Men", slug: "men" }],
      },
      {
        _id: "4",
        title: "Denim Jacket",
        slug: "denim-jacket",
        excerpt: "Classic oversized denim jacket with vintage wash.",
        content: "",
        customFieldsData: { price: 250000, currency: "MNT", sku: "DJKT-004", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "denim-jacket" },
        categories: [{ name: "Men", slug: "men" }],
      },
      {
        _id: "5",
        title: "Cargo Pants",
        slug: "cargo-pants",
        excerpt: "Relaxed fit cargo pants with multiple pockets.",
        content: "",
        customFieldsData: { price: 190000, currency: "MNT", sku: "CRGO-005", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "cargo-pants" },
        categories: [{ name: "Men", slug: "men" }],
      },
      {
        _id: "6",
        title: "Linen Shirt",
        slug: "linen-shirt",
        excerpt: "Breathable linen shirt, perfect for warm days.",
        content: "",
        customFieldsData: { price: 160000, currency: "MNT", sku: "LINN-006", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "linen-shirt" },
        categories: [{ name: "Men", slug: "women" }],
      },
      {
        _id: "7",
        title: "Knit Sweater",
        slug: "knit-sweater",
        excerpt: "Cozy knit sweater with a modern fit.",
        content: "",
        customFieldsData: { price: 230000, currency: "MNT", sku: "KNIT-007", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "knit-sweater" },
        categories: [{ name: "Women", slug: "women" }],
      },
      {
        _id: "8",
        title: "Tailored Trousers",
        slug: "tailored-trousers",
        excerpt: "Slim-fit tailored trousers for a polished look.",
        content: "",
        customFieldsData: { price: 200000, currency: "MNT", sku: "TROU-008", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "tailored-trousers" },
        categories: [{ name: "Women", slug: "women" }],
      },
      {
        _id: "9",
        title: "Graphic Tee",
        slug: "graphic-tee",
        excerpt: "Bold graphic tee with premium cotton.",
        content: "",
        customFieldsData: { price: 95000, currency: "MNT", sku: "GRPH-009", inStock: true },
        thumbnail: { url: "/placeholder.png", name: "graphic-tee" },
        categories: [{ name: "Accessories", slug: "accessories" }],
      },
    ];
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

  const filteredProducts = category
    ? productCards.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    : productCards;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              {t("allProducts")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              {t("browseOurCollection")}
            </motion.p>
          </div>
        </section>
        <ProductGrid
          products={filteredProducts}
          title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)}s` : t("allProducts")}
        />
      </main>
      <FooterSection locale={locale} menuItems={footerMenuItems} />
    </div>
  );
}