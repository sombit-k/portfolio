import Link from "next/link";
import { ScaleOnHover } from "@/components/ui/motion";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags?: string[];
  readingTime?: number;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  date,
  tags = [],
  readingTime,
}: BlogCardProps) {
  return (
    <ScaleOnHover className="h-full">
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="h-full p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <time className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
              {date}
            </time>
            {readingTime && (
              <>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {readingTime} min read
                </span>
              </>
            )}
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              {excerpt}
            </p>
          )}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Read more →
          </span>
        </div>
      </Link>
    </ScaleOnHover>
  );
}
