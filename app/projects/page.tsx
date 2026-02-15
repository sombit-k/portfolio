import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata = {
  title: "Projects — Sombit Karmakar",
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-4">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Things I&apos;ve built
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-14 max-w-lg">
            A collection of projects that showcase my skills and interests.
          </p>
        </FadeIn>

        {projects.length > 0 ? (
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.12}
          >
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  title={project.title}
                  slug={project.slug}
                  description={project.description}
                  tags={[]}
                  liveUrl={project.liveUrl ?? undefined}
                  githubUrl={project.githubUrl ?? undefined}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn delay={0.15}>
            <p className="text-zinc-500 dark:text-zinc-400">
              No projects yet. Check back soon!
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
