import { Building2, CalendarDays, ExternalLink, FileText, MapPin, Mic2, SearchCheck } from "lucide-react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { publications, researchAreas, speakingEngagements, type Publication } from "../data/profile";
import { publicationArticles } from "../lib/markdown";

const sections: Array<{ title: string; icon: typeof FileText; types: Publication["type"][] }> = [
  { title: "Publications", icon: FileText, types: ["Published Paper"] },
  { title: "Whitepapers", icon: SearchCheck, types: ["Whitepaper"] },
  { title: "Conference Presentations", icon: Mic2, types: ["Conference Topic"] },
  { title: "Webinars", icon: Mic2, types: ["Webinar"] },
  { title: "Practical Frameworks", icon: SearchCheck, types: ["Framework"] },
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
  const sortedEngagements = [...speakingEngagements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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

      <Section
        eyebrow="Speaking & Academic Engagements"
        title="Guest lectures, faculty development programs, and community sessions"
        description="Sharing practical perspectives on enterprise data, GenAI, Responsible AI, and technology-led impact with faculty, students, and professional communities."
        className="bg-white/70 dark:bg-white/[0.03]"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {sortedEngagements.map((engagement) => (
            <article
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
              key={`${engagement.date}-${engagement.institution}`}
            >
              <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-white/5">
                {engagement.images.slice(0, 2).map((photo, index) => (
                  <a
                    className={`group relative h-56 overflow-hidden ${engagement.images.length === 1 ? "col-span-2" : ""}`}
                    href={photo.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open full image: ${photo.alt}`}
                    key={`${photo.src}-${index}`}
                  >
                    {"display" in photo && photo.display === "focus" ? (
                      <span
                        className="block h-full w-full bg-slate-950 bg-no-repeat transition duration-300 group-hover:scale-[1.03]"
                        style={{
                          backgroundImage: `url(${photo.src})`,
                          backgroundPosition: photo.position,
                          backgroundSize: "260% auto"
                        }}
                        role="img"
                        aria-label={photo.alt}
                      />
                    ) : (
                      <img
                        className={`h-full w-full transition duration-300 group-hover:scale-[1.03] ${"display" in photo && photo.display === "contain" ? "bg-slate-950 object-contain" : "object-cover"}`}
                        src={photo.src}
                        alt={photo.alt}
                        style={{ objectPosition: "position" in photo ? photo.position : "center" }}
                        loading="lazy"
                      />
                    )}
                    {"display" in photo && photo.display === "focus" && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-bold text-white backdrop-blur">Speaker</span>
                    )}
                    {"display" in photo && photo.display === "contain" && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-bold text-white backdrop-blur">Full event poster</span>
                    )}
                  </a>
                ))}
              </div>
              <div className="p-7">
                <Building2 className="text-teal" aria-hidden="true" size={26} />
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-teal">{engagement.format}</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-navy dark:text-white">{engagement.institution}</h2>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{engagement.department}</p>
                <h3 className="mt-5 font-heading text-xl font-bold text-slate-800 dark:text-slate-100">{engagement.title}</h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2"><CalendarDays aria-hidden="true" size={16} />{engagement.dateLabel}</span>
                  <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" size={16} />{engagement.location}</span>
                </div>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{engagement.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {engagement.themes.map((theme) => (
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal" key={theme}>
                      {theme}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Evidence & response</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {engagement.responses.map((response) => <li key={response}>• {response}</li>)}
                  </ul>
                  {engagement.evidenceLinks.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {engagement.evidenceLinks.map((link) => (
                        <a className="inline-flex items-center gap-2 text-sm font-bold text-teal" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                          {link.label} <ExternalLink aria-hidden="true" size={15} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">Entries are ordered most recent first. Topics, dates, photographs, and response data are drawn from the supplied event materials; unspecified details are stated explicitly.</p>
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
