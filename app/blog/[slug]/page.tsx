import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/ui/motion";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} — Sombit Karmakar` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || !post.published) notFound();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <a
            href="/blog"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </a>
          <time className="block text-sm text-zinc-400 dark:text-zinc-500 mb-2">
            {formatDate(post.createdAt)}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            {post.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
