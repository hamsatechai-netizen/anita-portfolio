import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { MarkdownItem } from "../lib/markdown";

export function BlogCard({ post }: { post: MarkdownItem }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-executive dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-teal">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-teal" />
        <span>{post.tags[0]}</span>
      </div>
      <h3 className="mt-4 font-heading text-2xl font-bold text-navy dark:text-white">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar aria-hidden="true" size={15} />
          {new Date(post.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock aria-hidden="true" size={15} />
          {post.readingTime}
        </span>
      </div>
    </article>
  );
}
