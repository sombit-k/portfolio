import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminPostActions from "./PostActions";

export const metadata = {
  title: "Admin Dashboard — Blog Posts",
};

export default async function AdminDashboardPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Blog Posts
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">
              {posts.length} post{posts.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/new-post"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition"
            >
              + New Post
            </Link>
            <AdminPostActions type="logout" />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 text-zinc-400 dark:text-zinc-600">
            <p className="text-lg mb-2">No posts yet</p>
            <p className="text-sm">
              Create your first post using the button above.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm"
              >
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                        post.published
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                    {post.tags.length > 0 && (
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {post.tags.join(", ")}
                      </span>
                    )}
                  </div>
                  <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                    {post.title}
                  </h2>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    /blog/{post.slug}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  >
                    View
                  </Link>
                  <Link
                    href={`/admin/edit/${post.id}`}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  >
                    Edit
                  </Link>
                  <AdminPostActions type="delete" postId={post.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
