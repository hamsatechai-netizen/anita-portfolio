import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <>
      <Seo title="Experience | Anita Ayyagari" description="Professional experience and architecture focus areas for Anita Ayyagari." path="/experience" />
      <Section
        eyebrow="Experience"
        title="Customer success architecture across enterprise data and AI adoption"
        description="A timeline of architecture leadership, governance expertise, and delivery experience."
      >
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />
          <div className="grid gap-7">
            {experience.map((item, index) => (
              <motion.article
                className="relative ml-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="absolute -left-[3.25rem] top-6 grid h-9 w-9 place-items-center rounded-full bg-teal text-navy">
                  <Building2 aria-hidden="true" size={18} />
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">{item.period}</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-navy dark:text-white">{item.role}</h2>
                <p className="mt-1 font-semibold text-slate-600 dark:text-slate-300">{item.company}</p>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200" key={focus}>
                      {focus}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
