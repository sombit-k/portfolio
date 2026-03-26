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
      <div className="h-full flex flex-col rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
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
            <h3 className="text-lg font-semibold text-slate-900 mb-1.5 hover:underline underline-offset-4 decoration-slate-300">
              {title}
            </h3>
          </Link>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md border border-slate-200"
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
                className="text-blue-600 hover:underline underline-offset-4"
              >
                Live Demo ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
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
