import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <motion.div
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal">{eyebrow}</p>}
            {title && <h2 className="mt-3 font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
