import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-executive dark:border-white/10 dark:bg-white/5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      <img className="h-48 w-full object-cover" src={project.image} alt="" loading="lazy" />
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{project.kicker}</p>
        <h3 className="mt-3 font-heading text-2xl font-bold text-navy dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal" to={`/projects/${project.slug}`}>
          View project
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
