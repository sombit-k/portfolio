"use client";

import { useState } from "react";
import { FadeIn, MagneticButton } from "@/components/ui/motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500 mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in touch
          </h1>
          <p className="text-slate-600 mb-10">
            Have a project in mind or just want to say hello? Drop me a message.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-7 py-3.5 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-50 hover:bg-blue-700 transition-all"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </MagneticButton>

            {status === "sent" && (
              <p className="text-sm text-green-600 text-center">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
