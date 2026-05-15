"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

const MOCK_CART_ITEMS = [
  { _id: "1", name: "Black Pleated Wide-Leg Jorts", price: 210000, quantity: 1, images: ["/black-jorts.jpg"] },
  { _id: "2", name: "Bershka Striped Short Sleeve", price: 180000, quantity: 2, images: ["/bershka-shirt.jpg"] },
  { _id: "3", name: "Baby Tee", price: 120000, quantity: 1, images: ["/baby-tee.webp"] },
];

export default function CartPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("Cart");
  const [items, setItems] = useState(MOCK_CART_ITEMS);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) => prev.map((item) => {
      const newQty = item.quantity + delta;
      if (newQty < 1) return item;
      return { ...item, quantity: newQty };
    }));
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item._id !== id));
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("cart")}</h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
              </svg>
              <h2 className="text-xl font-semibold text-foreground mb-2">{t("emptyTitle")}</h2>
              <p className="text-muted-foreground mb-6">{t("emptyDesc")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <motion.div key={item._id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-card border border-border rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-muted shrink-0">
                      <img src={item.images?.[0] || "/images/placeholder.png"} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{item.name}</h3>
                      <p className="text-primary font-bold text-base mt-1">{(item.price * item.quantity).toLocaleString()} ₮</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button onClick={() => updateQuantity(item._id, -1)} className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors" aria-label="Decrease quantity">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      </button>
                      <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, 1)} className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors" aria-label="Increase quantity">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      </button>
                      <button onClick={() => removeItem(item._id)} className="ml-2 text-muted-foreground hover:text-destructive transition-colors p-1" aria-label="Remove item">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                  <h2 className="text-lg font-bold text-foreground mb-6">{t("orderSummary")}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-muted-foreground"><span>{t("subtotal")}</span><span className="text-foreground font-medium">{subtotal.toLocaleString()} ₮</span></div>
                    <div className="flex justify-between text-sm text-muted-foreground"><span>{t("shipping")}</span><span className="text-primary font-medium">{t("free")}</span></div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-bold text-foreground"><span>{t("total")}</span><span className="text-primary">{total.toLocaleString()} ₮</span></div>
                    </div>
                  </div>
                  <Link href={`/${params.locale}/checkout`}><button className="ios-glass-btn w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">{t("checkout")}</button></Link>
                  <Link href={`/${params.locale}/products`}><button className="w-full mt-3 py-3 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>{t("continueShopping")}</button></Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <FooterSection locale={params.locale} />
    </div>
  );
}