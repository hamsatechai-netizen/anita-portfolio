import { ExternalLink, FileText, Mic2, SearchCheck } from "lucide-react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { publications, researchAreas, type Publication } from "../data/profile";
import { publicationArticles } from "../lib/markdown";

const sections: Array<{ title: string; icon: typeof FileText; types: Publication["type"][] }> = [
  { title: "Publications", icon: FileText, types: ["Published Paper"] },
  { title: "Whitepapers", icon: SearchCheck, types: ["Whitepaper"] },
  { title: "Conference Presentations", icon: Mic2, types: ["Conference Topic"] },
  { title: "Research Interests", icon: SearchCheck, types: ["Research Interest"] }
];

function PaperLink({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-teal" href={href} target="_blank" rel="noreferrer">
      Read paper
      <ExternalLink aria-hidden="true" size={15} />
    </a>
  );
}

const outputItems = sections.map((section) => ({
  ...section,
  items: publications.filter((item) => section.types.includes(item.type))
}));

const sortedPublicationArticles = [...publicationArticles].sort((a, b) => {
  if (a.category === "Published Paper" && b.category !== "Published Paper") return -1;
  if (b.category === "Published Paper" && a.category !== "Published Paper") return 1;
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function Research() {
  return (
    <>
      <Seo title="Research | Anita Ayyagari" description="Research profile covering Responsible AI, Digital Phenotyping, AI Governance, and Enterprise AI Architecture." path="/research" />
      <Section
        eyebrow="Research"
        title="Research profile in Responsible AI and enterprise AI architecture"
        description="Focused on AI with empathy, governance-first architecture, digital phenotyping, and enterprise adoption patterns."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {researchAreas.map((area) => (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5" key={area}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Area</p>
              <h2 className="mt-3 font-heading text-xl font-bold text-navy dark:text-white">{area}</h2>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research Outputs" title="Published papers, whitepapers, talks, and interests" className="bg-white/70 dark:bg-white/[0.03]">
        <div className="grid gap-6 md:grid-cols-2">
          {outputItems.map((section) => {
            const Icon = section.icon;
            return (
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5" key={section.title}>
                <Icon className="text-teal" aria-hidden="true" size={26} />
                <h2 className="mt-4 font-heading text-2xl font-bold text-navy dark:text-white">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.items.map((item) => (
                    <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5" key={`${section.title}-${item.title}`}>
                      <p className="font-bold text-slate-800 dark:text-slate-100">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.type} - {item.status}
                      </p>
                      <PaperLink href={item.href} />
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Markdown CMS" title="Published and working papers">
        <div className="grid gap-6 md:grid-cols-2">
          {sortedPublicationArticles.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5" key={item.slug}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{item.category}</p>
              <h2 className="mt-3 font-heading text-xl font-bold text-navy dark:text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              <PaperLink href={item.externalUrl} />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
