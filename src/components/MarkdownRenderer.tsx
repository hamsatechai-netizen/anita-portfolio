import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export function MarkdownRenderer({ body }: { body: string }) {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-teal prose-pre:rounded-2xl prose-pre:bg-navy prose-img:rounded-2xl">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
