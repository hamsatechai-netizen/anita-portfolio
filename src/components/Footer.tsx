import { BriefcaseBusiness, Code2, Mail, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, navItems, profile } from "../data/profile";

const socials = [
  { label: "LinkedIn", href: contact.linkedin, icon: BriefcaseBusiness },
  { label: "GitHub", href: contact.github, icon: Code2 },
  { label: "Medium", href: contact.medium, icon: PenLine },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-navy">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Link className="font-heading text-xl font-bold text-navy dark:text-white" to="/">
            {profile.name}
          </Link>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.headline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-teal hover:text-teal dark:border-white/15 dark:text-slate-300"
                  href={social.href}
                  key={social.label}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4 lg:grid-cols-2">
          {navItems.slice(1).map((item) => (
            <Link className="text-sm font-semibold text-slate-600 hover:text-teal dark:text-slate-300" key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
