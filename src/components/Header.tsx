import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/profile";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-navy">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy"
        href="#main"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy font-heading text-base font-bold text-teal dark:bg-white dark:text-navy">
            AA
          </span>
          <span className="hidden text-sm font-bold text-navy dark:text-white sm:block">Anita Ayyagari</span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-teal/12 text-teal"
                    : "text-slate-600 hover:bg-slate-100 hover:text-navy dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                }`
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden h-10 items-center gap-2 rounded-full border border-slate-300 px-4 text-sm font-bold text-navy transition hover:border-teal hover:text-teal dark:border-white/15 dark:text-white md:flex"
            href="/resume/Anita-Ayyagari-Resume.pdf"
            download
          >
            <Download aria-hidden="true" size={16} />
            Resume
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-navy transition hover:border-teal hover:text-teal dark:border-white/15 dark:text-white"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-navy dark:border-white/15 dark:text-white lg:hidden"
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-navy lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive ? "bg-teal/12 text-teal" : "text-slate-700 dark:text-slate-200"
                  }`
                }
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
