import Link from "next/link";
import { prisma } from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { estimateReadingTime, formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog — Sombit Karmakar",
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      tags: true,
      createdAt: true,
      content: true,
    },
  });

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500 mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Writing & thoughts
          </h1>
          <p className="text-slate-600 mb-14 max-w-lg">
            Sharing what I learn along the way.
          </p>
        </FadeIn>

        {posts.length > 0 ? (
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <BlogCard
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt ?? ""}
                  date={formatDate(post.createdAt)}
                  tags={post.tags}
                  readingTime={estimateReadingTime(post.content)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn delay={0.15}>
            <p className="text-slate-600">
              No posts yet. Stay tuned!
            </p>
          </FadeIn>
        )}
      </div>

      <Link
        href="/admin/new-post"
        aria-label="Open admin editor"
        className="fixed bottom-4 right-4 text-[10px] tracking-widest uppercase text-slate-400/25 hover:text-slate-500/60 focus:text-slate-500/60 transition"
      >
        new
      </Link>
    </div>
  );
}
