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
        <div className="h-full p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <time>{date}</time>
            {readingTime ? (
              <>
                <span className="text-slate-300">•</span>
                <span>{readingTime} min read</span>
              </>
            ) : null}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2 hover:underline underline-offset-4 decoration-slate-300">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {excerpt}
          </p>
          {tags.length ? (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-[11px] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}
          <span className="inline-block mt-4 text-sm font-medium text-slate-600">
            Read more →
          </span>
        </div>
      </Link>
    </ScaleOnHover>
  );
}
