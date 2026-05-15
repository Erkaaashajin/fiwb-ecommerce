"use client";

import { motion } from "framer-motion";

interface FaqAccordionProps {
   items: Array<{ question: string; answer: string }>;
   locale?: string;
 }

export default function FaqAccordion({ items = [] }: FaqAccordionProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }} className="bg-card border border-border rounded-xl overflow-hidden">
          <details className="group">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-200">
              <span className="text-sm font-semibold text-foreground">{item.question}</span>
              <span className="ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <div className="p-5 text-sm text-muted-foreground border-t border-border leading-relaxed">{item.answer}</div>
          </details>
        </motion.div>
      ))}
    </div>
  );
}