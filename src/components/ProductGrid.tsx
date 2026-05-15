"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products?: any[];
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
}

export default function ProductGrid({ products = [], title, subtitle, isLoading = false }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-muted border border-border rounded-2xl h-[420px] animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            {subtitle && <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary mb-4">{subtitle}</span>}
            {title && <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{title}</h2>}
          </motion.div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product._id || i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}