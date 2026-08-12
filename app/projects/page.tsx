export const metadata = {
  title: "Projects — Sombit Karmakar",
  description:
    "A collection of projects built by Sombit Karmakar, including AI finance, support automation, and venue booking apps.",
};

const projects = [
  {
    name: "AI Powered Finance Management App",
    description:
      "Built a web app to track expenses and earnings, organize finance, and generate AI-powered insights and monthly reports. Added protection from bots and DDoS attacks using Arcjet.",
    github: "https://github.com/sombit-k/ai-finance-management-app",
    demo: "https://ai-finance-management-app-sombit-karmakars-projects.vercel.app/",
  },
  {
    name: "Support User Agents",
    description:
      "Built an AI-powered customer support platform with ticket management, real-time analytics, and intelligent chatbot assistance.",
    github: "https://github.com/sombit-k/support-user-agents/",
    demo: "https://support-user-agents.vercel.app/",
  },
  {
    name: "Quick Court",
    description:
      "Developed a platform that helps users book venues and courts directly from facility owners.",
    github: "https://github.com/sombit-k/quickcourt",
    demo: "https://www.youtube.com/watch?v=DiCF_CC2JIM",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute top-80 -right-24 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl space-y-16">
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Projects
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Things I&apos;ve built
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A collection of projects that showcase my skills and interests.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-slate-950">
                    {project.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 transition-colors hover:bg-slate-100"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-950 px-4 py-2 text-white transition-colors hover:bg-slate-800"
                  >
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/sombit-k?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-slate-100"
            >
              More works on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
