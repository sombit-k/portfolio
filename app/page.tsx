"use client";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  MagneticButton,
} from "@/components/ui/motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Chat Interface",
    description:
      "A beautiful conversational AI interface with streaming responses and conversation history.",
    tags: ["React", "OpenAI", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and custom reporting.",
    tags: ["TypeScript", "D3.js", "Node.js"],
    live: "#",
    github: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: ["Node.js", "PostgreSQL", "Prisma ORM", "REST & GraphQL"],
  },
  {
    category: "Tools & DevOps",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.13M11.42 15.17l5.1-3.13m-5.1 3.13V20.7m5.1-8.66V5.3m-5.1 3.13L6.32 5.3m10.2 0L11.42 8.43M20.7 11.42l-3.13-5.1M20.7 11.42l-3.13 5.1m3.13-5.1H14.14m-8.66 5.1l3.13 5.1m-3.13-5.1l3.13-5.1m-3.13 5.1H9.86" />
      </svg>
    ),
    items: ["Git & GitHub", "Docker", "Vercel / AWS", "Figma"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        {/* Subtle gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-200/30 dark:bg-violet-900/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-200/30 dark:bg-sky-900/20 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <FadeIn delay={0.2}>
            <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-500">
              Full-Stack Developer & Designer
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[0.95]">
              Sombit
              <br />
              Karmakar
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              I build polished, performant web applications with modern tools.
              Currently looking for my next opportunity to create something meaningful.
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <MagneticButton>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-semibold shadow-lg shadow-zinc-900/10 dark:shadow-zinc-100/10"
                >
                  View My Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  Get In Touch
                </a>
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex gap-5 justify-center pt-8">
              {[
                {
                  href: "https://github.com",
                  label: "GitHub",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://twitter.com",
                  label: "X / Twitter",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-14 max-w-lg">
              A selection of things I&apos;ve built recently. Each one taught me something new.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard
                  title={project.title}
                  slug={project.title.toLowerCase().replace(/\s+/g, "-")}
                  description={project.description}
                  tags={project.tags}
                  liveUrl={project.live}
                  githubUrl={project.github}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="py-28 px-6 bg-white dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-14 max-w-lg">
              The tools I reach for when building products from idea to production.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {skills.map((group) => (
              <StaggerItem key={group.category}>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-500 mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
              I&apos;m currently open to full-time roles and freelance projects.
              If you have an idea you&apos;d like to bring to life — let&apos;s talk.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-semibold shadow-lg shadow-zinc-900/10 dark:shadow-zinc-100/10"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send me an email
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
