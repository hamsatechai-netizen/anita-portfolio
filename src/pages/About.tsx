import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { education, profile, values } from "../data/profile";

export default function About() {
  return (
    <>
      <Seo title="About Anita Ayyagari | Data & AI Architecture Leader" description="Professional journey, education, and values of Anita Ayyagari." path="/about" />
      <Section
        eyebrow="About"
        title="A data and AI architect focused on modernization with accountability"
        description={profile.summary}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">Professional Journey</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.focus}</p>
            <div className="mt-6 grid gap-3">
              {profile.credentials.map((credential) => (
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-white/5" key={credential}>
                  <HeartHandshake className="mt-1 shrink-0 text-teal" aria-hidden="true" size={20} />
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy p-8 text-white shadow-executive">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Core Values</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Education" title="Academic path and research direction" className="bg-white/70 dark:bg-white/[0.03]">
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 sm:block" />
          <div className="grid gap-5">
            {education.map((item, index) => (
              <motion.article
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:ml-14"
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="absolute -left-[4.4rem] top-6 hidden h-10 w-10 place-items-center rounded-full bg-teal text-navy sm:grid">
                  <GraduationCap aria-hidden="true" size={20} />
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">{item.year}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy dark:text-white">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.institution}</p>
                <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
