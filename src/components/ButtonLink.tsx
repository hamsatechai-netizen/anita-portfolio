import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
};

const variants = {
  primary: "bg-teal text-navy shadow-lg shadow-teal/20 hover:bg-teal/90",
  secondary:
    "border border-slate-300 bg-white/80 text-navy hover:border-teal hover:text-teal dark:border-white/15 dark:bg-white/10 dark:text-white",
  ghost: "text-navy hover:text-teal dark:text-white"
};

export function ButtonLink({ to, children, variant = "primary", external, download }: ButtonLinkProps) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 dark:focus:ring-offset-navy ${variants[variant]}`;

  if (external || download) {
    return (
      <a className={className} href={to} download={download || undefined} target={external ? "_blank" : undefined} rel="noreferrer">
        {children}
        <ArrowRight aria-hidden="true" size={16} />
      </a>
    );
  }

  return (
    <Link className={className} to={to}>
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}
