import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/ui/motion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} — Sombit Karmakar` };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <a
            href="/projects"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8 inline-block"
          >
            ← Back to projects
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                View Source
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
