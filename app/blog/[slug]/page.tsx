import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/ui/motion";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Sombit Karmakar`,
    description: post.excerpt || post.content.slice(0, 155),
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 155),
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || !post.published) notFound();

  const mins = readingTime(post.content);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <time className="text-sm text-zinc-400 dark:text-zinc-500">
              {formatDate(post.createdAt)}
            </time>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="text-sm text-zinc-400 dark:text-zinc-500">
              {mins} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
