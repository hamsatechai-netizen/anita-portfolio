import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { blogPosts } from "../lib/markdown";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))], []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const haystack = `${post.title} ${post.description} ${post.tags.join(" ")} ${post.body}`.toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [category, query]);

  return (
    <>
      <Seo title="Blog | Anita Ayyagari" description="Articles on AI, data architecture, governance, leadership, and technology." path="/blog" />
      <Section
        eyebrow="Blog"
        title="Ideas on AI, data architecture, governance, leadership, and technology"
        description="Markdown-powered articles with categories, tags, search, reading time, and related posts."
      >
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" size={18} />
            <input
              className="h-12 w-full rounded-full border-slate-300 bg-white pl-11 pr-4 text-sm font-semibold text-navy shadow-sm focus:border-teal focus:ring-teal dark:border-white/10 dark:bg-white/5 dark:text-white"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by topic, tag, or keyword"
              type="search"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  category === item
                    ? "bg-teal text-navy"
                    : "border border-slate-300 bg-white text-slate-600 hover:border-teal dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                }`}
                key={item}
                onClick={() => setCategory(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
