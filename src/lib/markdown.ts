import { parse as parseYaml } from "yaml";

export type ContentKind = "blog" | "project" | "publication";

export type MarkdownItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  externalUrl?: string;
  body: string;
  readingTime: string;
  kind: ContentKind;
};

type RawModuleMap = Record<string, string>;

const blogModules = import.meta.glob("../../content/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as RawModuleMap;

const projectModules = import.meta.glob("../../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as RawModuleMap;

const publicationModules = import.meta.glob("../../content/publications/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as RawModuleMap;

function slugFromPath(path: string) {
  return path.split("/").pop()?.replace(/\.md$/, "") ?? path;
}

function readingTimeFor(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return {
    data: (parseYaml(match[1]) || {}) as Partial<MarkdownItem>,
    body: match[2]
  };
}

function parseMarkdown(modules: RawModuleMap, kind: ContentKind): MarkdownItem[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const parsed = parseFrontmatter(raw);
      const data = parsed.data;

      return {
        slug: data.slug || slugFromPath(path),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "",
        category: data.category || "General",
        tags: Array.isArray(data.tags) ? data.tags : [],
        image: data.image,
        externalUrl: data.externalUrl,
        body: parsed.body,
        readingTime: readingTimeFor(parsed.body),
        kind
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const blogPosts = parseMarkdown(blogModules, "blog");
export const projectArticles = parseMarkdown(projectModules, "project");
export const publicationArticles = parseMarkdown(publicationModules, "publication");

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedPosts(post: MarkdownItem) {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        Number(candidate.category === post.category) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((candidate) => candidate.post);
}
