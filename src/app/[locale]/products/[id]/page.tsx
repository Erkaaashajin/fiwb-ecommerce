"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import FooterSection from "@/components/FooterSection";

export default function CheckoutPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("Checkout");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("checkout")}</h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-bold tracking-tight">{t("deliveryInfo")}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">{t("firstName")}</label><input type="text" placeholder="John" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" /></div>
                <div><label className="block text-sm font-medium mb-1.5">{t("lastName")}</label><input type="text" placeholder="Doe" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" /></div>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">{t("phone")}</label><input type="tel" placeholder="+976 7777 7777" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" /></div>
              <div><label className="block text-sm font-medium mb-1.5">{t("address")}</label><input type="text" placeholder="Address, district, street" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">{t("district")}</label><select className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"><option>{t("selectDistrict")}</option><option>1st District</option><option>2nd District</option></select></div>
                <div><label className="block text-sm font-medium mb-1.5">{t("paymentMethod")}</label><select className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"><option>{t("selectPayment")}</option><option>Bank Transfer</option><option>Cash on Delivery</option></select></div>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">{t("notes")}</label><textarea rows={3} placeholder="Any special instructions..." className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"></textarea></div>
              <button className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/20">{t("placeOrder")}</button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 h-fit sticky top-24">
              <h2 className="text-lg font-bold mb-6">{t("orderSummary")}</h2>
              <div className="flex items-center gap-3 py-4 border-b border-border">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs overflow-hidden"></div>
                <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">Product item</p><p className="text-xs text-muted-foreground">x 1</p></div>
                <p className="text-sm font-medium">210,000 ₮</p>
              </div>
              <div className="space-y-3 py-4">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("subtotal")}</span><span className="text-foreground font-medium">569,000 ₮</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("delivery")}</span><span className="text-primary">{t("free")}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("serviceFee")}</span><span className="text-foreground">0 ₮</span></div>
                <div className="border-t border-border pt-3"><div className="flex justify-between text-lg font-bold"><span>{t("total")}</span><span className="text-primary">569,000 ₮</span></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection locale={params.locale} />
    </div>
  );
}