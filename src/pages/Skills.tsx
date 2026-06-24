import { motion } from "framer-motion";
import { Brain, Cloud, Database, Workflow } from "lucide-react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { skillGroups } from "../data/profile";

const icons = [Brain, Database, Workflow, Cloud];

export default function Skills() {
  return (
    <>
      <Seo title="Skills | Anita Ayyagari" description="AI, GenAI, data architecture, integration, cloud, and engineering skills." path="/skills" />
      <Section
        eyebrow="Skills"
        title="Specialized capability across modern data platforms and governed AI"
        description="Categorized skills for solution architecture, principal architecture, AI architecture, and data leadership opportunities."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/12 text-teal">
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">{group.title}</h2>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      key={skill}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
