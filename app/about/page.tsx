import { FadeIn } from "@/components/ui/motion";

export const metadata = {
  title: "About — Sombit Karmakar",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500 mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            A bit about me
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p>
              Hi, I&apos;m Sombit — a full-stack developer passionate about building
              clean, performant, and accessible web applications. I specialize in
              React, Next.js, TypeScript, and modern backend technologies.
            </p>
            <p>
              I believe great software is invisible — it just works. My goal is
              to build products that feel effortless to use while being robust
              under the hood.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or designing interfaces
              in Figma.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
