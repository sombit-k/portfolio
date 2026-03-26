import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertAdmin } from "@/lib/auth";
import { createExcerpt, slugify } from "@/lib/utils";

async function generateUniqueSlug(title: string) {
  const base = slugify(title) || "post";
  let slug = base;
  let counter = 1;

  // Ensure slug uniqueness
  while (await prisma.blogPost.findUnique({ where: { slug } })) {
    slug = `${base}-${counter++}`;
  }

  return slug;
}

export async function GET(req: Request) {
  const authError = assertAdmin(req);
  if (authError) return authError;

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const authError = assertAdmin(req);
  if (authError) return authError;

  const { title, content, tags = [], published = true } = await req.json();

  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 400 }
    );
  }

  if (!Array.isArray(tags)) {
    return NextResponse.json(
      { error: "Tags must be an array of strings." },
      { status: 400 }
    );
  }

  const normalizedTags = tags
    .map((tag) => (typeof tag === "string" ? tag.trim() : ""))
    .filter(Boolean);

  const slug = await generateUniqueSlug(title);

  const post = await prisma.blogPost.create({
    data: {
      title: title.trim(),
      content: content.trim(),
      slug,
      excerpt: createExcerpt(content),
      tags: normalizedTags,
      published: Boolean(published),
    },
  });

  return NextResponse.json(post, { status: 201 });
}
