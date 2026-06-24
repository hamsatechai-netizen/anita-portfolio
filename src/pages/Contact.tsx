import { BriefcaseBusiness, Code2, Mail, PenLine, Send } from "lucide-react";
import { type FormEvent } from "react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { contact } from "../data/profile";

const links = [
  { label: "LinkedIn", href: contact.linkedin, icon: BriefcaseBusiness },
  { label: "GitHub", href: contact.github, icon: Code2 },
  { label: "Medium", href: contact.medium, icon: PenLine },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail }
];

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=Portfolio inquiry from ${encodeURIComponent(name || "visitor")}&body=${body}`;
  }

  return (
    <>
      <Seo title="Contact | Anita Ayyagari" description="Contact Anita Ayyagari for solution architecture, AI architecture, and data leadership opportunities." path="/contact" />
      <Section
        eyebrow="Contact"
        title="Connect for architecture, AI, and data leadership conversations"
        description="Use the form or social channels to discuss Solution Architect, Principal Architect, AI Architect, and Data Leadership opportunities."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <form className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
                <input className="mt-2 h-12 w-full rounded-xl border-slate-300 focus:border-teal focus:ring-teal dark:border-white/10 dark:bg-white/5 dark:text-white" name="name" required />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
                <input className="mt-2 h-12 w-full rounded-xl border-slate-300 focus:border-teal focus:ring-teal dark:border-white/10 dark:bg-white/5 dark:text-white" name="email" required type="email" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Company</span>
                <input className="mt-2 h-12 w-full rounded-xl border-slate-300 focus:border-teal focus:ring-teal dark:border-white/10 dark:bg-white/5 dark:text-white" name="company" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
                <textarea className="mt-2 min-h-36 w-full rounded-xl border-slate-300 focus:border-teal focus:ring-teal dark:border-white/10 dark:bg-white/5 dark:text-white" name="message" required />
              </label>
            </div>
            <button className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-navy shadow-lg shadow-teal/20 transition hover:bg-teal/90" type="submit">
              <Send aria-hidden="true" size={17} />
              Send Message
            </button>
          </form>

          <aside className="rounded-2xl bg-navy p-7 text-white shadow-executive">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Social Links</p>
            <div className="mt-6 grid gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    className="flex items-center gap-3 rounded-xl border border-white/10 p-4 font-bold transition hover:border-teal hover:text-teal"
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    <Icon aria-hidden="true" size={19} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
