import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { projects } from "../data/profile";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Section title="Project not found" description="The requested project is not available.">
        <Link className="font-bold text-teal" to="/projects">
          Back to projects
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Seo title={`${project.title} | Anita Ayyagari`} description={project.summary} path={`/projects/${project.slug}`} image={project.image} />
      <Section eyebrow={project.kicker} title={project.title} description={project.description}>
        <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-teal" to="/projects">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to projects
        </Link>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-8">
            <img className="w-full rounded-3xl border border-slate-200 bg-white object-cover shadow-executive dark:border-white/10" src={project.image} alt="" />
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">Architecture Diagram</h2>
              <div className="mt-5 grid gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-white/5 sm:grid-cols-3">
                {["Ingest", "Govern", "Activate"].map((step) => (
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center font-bold text-slate-700 dark:border-white/10 dark:bg-navy/50 dark:text-slate-200" key={step}>
                    {step}
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">Screenshots</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="aspect-video rounded-2xl bg-[linear-gradient(135deg,#0f172a,#14b8a6)] p-5 text-sm font-bold text-white">Dashboard placeholder</div>
                <div className="aspect-video rounded-2xl bg-[linear-gradient(135deg,#f8fafc,#ccfbf1)] p-5 text-sm font-bold text-navy">Workflow placeholder</div>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white">Technologies Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span className="rounded-full bg-teal/12 px-3 py-1 text-xs font-bold text-teal" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white">Features</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300" key={feature}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-teal" aria-hidden="true" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white">Outcomes</h2>
              <ul className="mt-5 space-y-3">
                {project.outcomes.map((outcome) => (
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300" key={outcome}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-teal" aria-hidden="true" size={18} />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
