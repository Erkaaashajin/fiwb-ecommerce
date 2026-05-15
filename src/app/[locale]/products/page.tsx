import ProductGrid from "@/components/ProductGrid";
import FooterSection from "@/components/FooterSection";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ALL_PRODUCTS = [
  { _id: "1", name: "Black Pleated Wide-Leg Jorts", price: 210000, images: ["/black-jorts.jpg"], category: "Bottoms" },
  { _id: "2", name: "Bershka Striped Short Sleeve", price: 180000, images: ["/bershka-shirt.jpg"], category: "Tops" },
  { _id: "3", name: "Baby Tee", price: 120000, images: ["/baby-tee.webp"], category: "Tops" },
  { _id: "4", name: "Denim Jacket", price: 250000, images: ["/denim-jacket.jpg"], category: "Outerwear" },
  { _id: "5", name: "Cargo Pants", price: 190000, images: ["/cargo-pants.jpg"], category: "Bottoms" },
  { _id: "6", name: "Linen Shirt", price: 160000, images: ["/linen-shirt.jpg"], category: "Tops" },
  { _id: "7", name: "Knit Sweater", price: 230000, images: ["/knit-sweater.jpg"], category: "Tops" },
  { _id: "8", name: "Tailored Trousers", price: 200000, images: ["/tailored-trousers.jpg"], category: "Bottoms" },
  { _id: "9", name: "Graphic Tee", price: 95000, images: ["/graphic-tee.jpg"], category: "Tops" },
];

export default function ProductsPage({ params, searchParams }: { params: { locale: string }; searchParams: { category?: string } }) {
  const t = useTranslations("Products");
  const category = searchParams?.category;
  const filteredProducts = category ? ALL_PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()) : ALL_PRODUCTS;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">{t("allProducts")}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t("browseOurCollection")}</p>
          </div>
        </section>
        <ProductGrid products={filteredProducts} title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)}s` : t("allProducts")} />
      </main>
      <FooterSection locale={params.locale} />
    </div>
  );
}