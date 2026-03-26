import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Props) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: Number(id) },
  });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, { params }: Props) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { title, slug, excerpt, content, published, tags } = body;

  try {
    const post = await prisma.blogPost.update({
      where: { id: Number(id) },
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        published: published ?? false,
        tags: tags || [],
      },
    });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json(
      { error: "Post not found or database error" },
      { status: 400 }
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.blogPost.delete({ where: { id: Number(id) } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
}
