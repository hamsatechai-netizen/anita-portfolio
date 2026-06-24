import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { getBlogPost, relatedPosts } from "../lib/markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <Section title="Article not found" description="The requested article is not available.">
        <Link className="font-bold text-teal" to="/blog">
          Back to blog
        </Link>
      </Section>
    );
  }

  const related = relatedPosts(post);

  return (
    <>
      <Seo title={`${post.title} | Anita Ayyagari`} description={post.description} path={`/blog/${post.slug}`} image={post.image} />
      <article>
        <Section eyebrow={post.category} title={post.title} description={post.description}>
          <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-teal" to="/blog">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to blog
          </Link>
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Calendar aria-hidden="true" size={15} />
              {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden="true" size={15} />
              {post.readingTime}
            </span>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-10">
            <MarkdownRenderer body={post.body} />
          </div>
        </Section>
      </article>

      {related.length > 0 && (
        <Section eyebrow="Related Posts" title="Continue reading" className="bg-white/70 dark:bg-white/[0.03]">
          <div className="grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
