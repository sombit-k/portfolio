import { NextResponse } from "next/server";
import type { Prisma } from "@/app/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { assertAdmin } from "@/lib/auth";
import { createExcerpt } from "@/lib/utils";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(req: Request, { params }: RouteContext) {
  const authError = assertAdmin(req);
  if (authError) return authError;

  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(req: Request, { params }: RouteContext) {
  const authError = assertAdmin(req);
  if (authError) return authError;

  const { slug } = await params;

  const body = await req.json();
  const { title, content, tags, published } = body;

  if (!title && !content && typeof published !== "boolean" && !tags) {
    return NextResponse.json(
      { error: "Nothing to update." },
      { status: 400 }
    );
  }

  const data: Prisma.BlogPostUpdateInput = {};

  if (typeof title === "string" && title.trim()) {
    data.title = title.trim();
  }

  if (typeof content === "string" && content.trim()) {
    data.content = content.trim();
    data.excerpt = createExcerpt(content);
  }

  if (Array.isArray(tags)) {
    data.tags = tags
      .map((tag) => (typeof tag === "string" ? tag.trim() : ""))
      .filter(Boolean);
  }

  if (typeof published === "boolean") {
    data.published = published;
  }

  try {
    const post = await prisma.blogPost.update({
      where: { slug },
      data,
    });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json(
      { error: "Unable to update the post." },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request, { params }: RouteContext) {
  const authError = assertAdmin(req);
  if (authError) return authError;

  const { slug } = await params;

  try {
    await prisma.blogPost.delete({ where: { slug } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to delete the post." },
      { status: 400 }
    );
  }
}
