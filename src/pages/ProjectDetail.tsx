import { ArrowLeft, CheckCircle2, Compass, UserRound } from "lucide-react";
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
              <Compass className="text-teal" aria-hidden="true" size={26} />
              <h2 className="mt-4 font-heading text-2xl font-bold text-navy dark:text-white">The context</h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{project.context}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <UserRound className="text-teal" aria-hidden="true" size={26} />
              <h2 className="mt-4 font-heading text-2xl font-bold text-navy dark:text-white">My role</h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{project.role}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">Approach</h2>
              <ol className="mt-5 space-y-4">
                {project.approach.map((step, index) => (
                  <li className="flex gap-4 text-slate-600 dark:text-slate-300" key={step}>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal/15 text-sm font-bold text-teal">{index + 1}</span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
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
            {project.impactNote && (
              <div className="rounded-2xl border border-teal/25 bg-teal/10 p-6 text-sm leading-6 text-slate-700 dark:text-slate-200">
                <strong className="text-navy dark:text-white">Portfolio note:</strong> {project.impactNote}
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
