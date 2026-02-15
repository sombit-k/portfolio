import Link from "next/link";
import { ScaleOnHover } from "@/components/ui/motion";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  slug,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <ScaleOnHover className="h-full">
      <div className="h-full flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="aspect-[16/10] bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 relative">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 p-5 flex flex-col">
          <Link href={`/projects/${slug}`}>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5 hover:underline underline-offset-4">
              {title}
            </h3>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm font-medium">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4"
              >
                Live Demo ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </ScaleOnHover>
  );
}
