import { motion } from "framer-motion";
import { Brain, Database, Network, ShieldCheck, Sparkles, Target } from "lucide-react";
import { BlogCard } from "../components/BlogCard";
import { ButtonLink } from "../components/ButtonLink";
import { ParticleField } from "../components/ParticleField";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { featuredSkills, profile, projects, testimonials } from "../data/profile";
import { blogPosts } from "../lib/markdown";

const metrics = [
  { label: "Years in architecture and delivery", value: "16+" },
  { label: "Core domains", value: "Data + AI" },
  { label: "Focus", value: "Responsible AI" }
];

const featureIcons = [Database, ShieldCheck, Brain, Network, Sparkles, Target];

export default function Home() {
  return (
    <>
      <Seo
        title="Anita Ayyagari | Solution Architect and Data & AI Leader"
        description="Executive portfolio for Anita Ayyagari, Solution Architect and Data & AI leader specializing in enterprise data modernization and Responsible AI."
      />
      <section className="relative overflow-hidden">
        <ParticleField />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal">Enterprise Data Modernization</p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-bold leading-tight text-navy dark:text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-slate-700 dark:text-slate-200">{profile.shortHeadline}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.focus}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/resume/Anita-Ayyagari-Resume.pdf" download>
                Download Resume
              </ButtonLink>
              <ButtonLink to="/projects" variant="secondary">
                View Projects
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost">
                Contact Me
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="glass relative mx-auto w-full max-w-md rounded-[2rem] p-5"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <img className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" src="/images/anita-placeholder.svg" alt="Professional portrait placeholder for Anita Ayyagari" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div className="rounded-2xl bg-white/80 p-4 text-center dark:bg-navy/55" key={metric.label}>
                  <p className="font-heading text-2xl font-bold text-navy dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Section eyebrow="Featured Skills" title="Architecture leadership across governed data and AI ecosystems">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((skill, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <motion.div
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={skill}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <Icon className="text-teal" aria-hidden="true" size={24} />
                <h3 className="mt-4 font-heading text-lg font-bold text-navy dark:text-white">{skill}</h3>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Featured Projects" title="Selected work and portfolio accelerators" className="bg-white/70 dark:bg-white/[0.03]">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Recent Blogs" title="Thought leadership on data, governance, and AI">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted for strategic clarity and practical architecture" className="bg-white/70 dark:bg-white/[0.03]">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5" key={testimonial.author}>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <footer className="mt-6">
                <p className="font-bold text-navy dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal">Next Opportunity</p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Open to principal architecture and AI leadership conversations.</h2>
          </div>
          <ButtonLink to="/contact">Start a conversation</ButtonLink>
        </div>
      </section>
    </>
  );
}
