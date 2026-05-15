"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    description?: string;
    price: number;
    salePrice?: number;
    images?: string[];
    category?: string;
    slug?: string;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const router = useRouter();
  const imageUrl = product.images?.[0] || "/placeholder.png";
  const currency = "MNT";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={() => router.push(`/products/${product._id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200" aria-label="Add to wishlist">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        {product.salePrice && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
          </div>
        )}
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">{product.name}</h3>
        {product.category && <p className="text-[11px] text-muted-foreground capitalize">{product.category}</p>}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-base font-bold text-primary">
            {product.salePrice?.toLocaleString() || product.price.toLocaleString()} {currency}
          </span>
          {product.salePrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.price.toLocaleString()} {currency}
            </span>
          )}
        </div>
        <button className="ios-glass-btn w-full py-2.5 mt-3 text-sm font-semibold text-primary hover:bg-primary/20 transition-all duration-200 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}