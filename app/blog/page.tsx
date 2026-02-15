import { prisma } from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog — Sombit Karmakar",
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Writing & thoughts
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-14 max-w-lg">
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
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn delay={0.15}>
            <p className="text-zinc-500 dark:text-zinc-400">
              No posts yet. Stay tuned!
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
