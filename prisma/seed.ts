import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed projects
  await prisma.project.upsert({
    where: { slug: "e-commerce-platform" },
    update: {},
    create: {
      title: "E-Commerce Platform",
      slug: "e-commerce-platform",
      description:
        "A full-stack e-commerce application with real-time inventory, Stripe payments, and an admin dashboard.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  });

  await prisma.project.upsert({
    where: { slug: "ai-chat-interface" },
    update: {},
    create: {
      title: "AI Chat Interface",
      slug: "ai-chat-interface",
      description:
        "A beautiful conversational AI interface with streaming responses and conversation history.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  });

  await prisma.project.upsert({
    where: { slug: "analytics-dashboard" },
    update: {},
    create: {
      title: "Analytics Dashboard",
      slug: "analytics-dashboard",
      description:
        "Real-time data visualization dashboard with interactive charts and custom reporting.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  });

  // Seed blog posts
  await prisma.blogPost.upsert({
    where: { slug: "building-with-nextjs" },
    update: {},
    create: {
      title: "Building Modern Apps with Next.js",
      slug: "building-with-nextjs",
      excerpt:
        "A deep dive into building production-ready applications using Next.js and the App Router.",
      content:
        "Next.js has become the go-to framework for building modern web applications. In this post, I share my experience and best practices...",
      published: true,
    },
  });

  await prisma.blogPost.upsert({
    where: { slug: "typescript-tips" },
    update: {},
    create: {
      title: "TypeScript Tips for Everyday Development",
      slug: "typescript-tips",
      excerpt:
        "Practical TypeScript patterns and tricks that will improve your daily coding workflow.",
      content:
        "TypeScript has transformed the way we write JavaScript. Here are some of my favorite patterns that I use every day...",
      published: true,
    },
  });

  console.log("✅ Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
