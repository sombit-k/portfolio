import Image from "next/image";

export const metadata = {
  title: "Sombit Karmakar - Portfolio",
  description:
    "Portfolio of Sombit Karmakar, a full-stack developer with experience in Java, React, Next.js, and backend systems.",
};

const technicalSkills = [
  "Languages: Java, C, JavaScript, Python",
  "Web Development: HTML, CSS, React, Node.js, Express.js, Next.js",
  "Databases: Oracle SQL, PostgreSQL, MongoDB",
  "Tools & Platforms: Git, VS Code",
];

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

const hobbies = ["Playing video games", "Playing chess", "Exploring new places"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute top-80 -right-24 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm backdrop-blur">
              Portfolio
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Sombit Karmakar
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Passionate Computer Science undergrad with hands-on experience in
                full-stack development and system design. Proficient in Java,
                React, and JavaScript. Strong foundation in algorithms and clean
                coding practices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                Full-stack development
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                System design
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                Hackathons
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sombitkarmakar018@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-4 justify-self-center lg:justify-self-end lg:max-w-85">
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src="/images/profile-picture/profile.jpg"
                  alt="Sombit Karmakar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-sm text-slate-700">+91 98755 38533</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 break-all text-sm leading-snug text-slate-700">
                  sombitkarmakar018@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Profile
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              Passionate Computer Science undergrad with hands-on experience in
              full-stack development and system design. Enjoy solving Leetcode
              problems and participating in hackathons.
            </p>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technical Skills
            </p>
            <ul className="mt-5 space-y-3 text-slate-700">
              {technicalSkills.map((skill) => (
                <li key={skill} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/70">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              
            </p> */}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Key Projects
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {project.name}
                  </h3>
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

          <div className="flex justify-start pt-2">
            <a
              href="https://github.com/sombit-k?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Other Projects
            </a>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Hobbies
            </p>
            <ul className="mt-5 space-y-3 text-slate-700">
              {hobbies.map((hobby) => (
                <li key={hobby} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/70">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reach Out
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Available for opportunities, collaborations, and project work.
              Feel free to connect through email, LinkedIn, or my website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
