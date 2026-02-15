import Link from "next/link";
import { ScaleOnHover } from "@/components/ui/motion";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  date,
}: BlogCardProps) {
  return (
    <ScaleOnHover className="h-full">
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="h-full p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <time className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
            {date}
          </time>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {excerpt}
          </p>
          <span className="inline-block mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Read more →
          </span>
        </div>
      </Link>
    </ScaleOnHover>
  );
}
