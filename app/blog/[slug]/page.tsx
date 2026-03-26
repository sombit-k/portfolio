import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/ui/motion";
import {
  createExcerpt,
  estimateReadingTime,
  formatDate,
} from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || !post.published) return { title: "Post Not Found" };

  const description = post.excerpt ?? createExcerpt(post.content);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const url = baseUrl ? `${baseUrl}/blog/${slug}` : `/blog/${slug}`;

  return {
    title: `${post.title} — Sombit Karmakar`,
    description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || !post.published) notFound();

  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto pt-28 pb-24 px-6">
        <FadeIn>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{formatDate(post.createdAt)}</span>
              <span className="text-slate-400">•</span>
              <span>{readingTime} min read</span>
            </div>
            {post.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </FadeIn>

        <article className="mt-10 prose prose-slate max-w-none leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
