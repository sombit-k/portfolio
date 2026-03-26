"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { estimateReadingTime } from "@/lib/utils";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: string;
};

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [published, setPublished] = useState(true);
  const [adminKey, setAdminKey] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const tags = useMemo(
    () =>
      tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    [tagsInput]
  );

  useEffect(() => {
    const stored = localStorage.getItem("blog-admin-key");
    if (stored) setAdminKey(stored);
  }, []);

  useEffect(() => {
    if (adminKey) {
      localStorage.setItem("blog-admin-key", adminKey);
      void fetchPosts();
    }
  }, [adminKey]);

  const fetchPosts = async () => {
    if (!adminKey) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/blog", {
      headers: { "x-admin-key": adminKey },
      cache: "no-store",
    });

    if (!res.ok) {
      setError("Unable to load posts. Check your admin key.");
      setPosts([]);
      setLoading(false);
      return;
    }

    const data = (await res.json()) as BlogPost[];
    setPosts(data);
    setLoading(false);
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTagsInput("");
    setPublished(true);
    setEditingSlug(null);
    setMessage("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!adminKey) {
      setError("Enter your admin key to publish.");
      return;
    }

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    setSaving(true);
    setError("");
    setMessage("");

    const endpoint = editingSlug ? `/api/blog/${editingSlug}` : "/api/blog";
    const method = editingSlug ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify({
        title,
        content,
        tags,
        published,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setSaving(false);
      setError(data.error ?? "Unable to save post.");
      return;
    }

    setSaving(false);
    setMessage(editingSlug ? "Post updated." : "Post published.");
    await fetchPosts();

    if (!editingSlug && data.slug) {
      router.push(`/blog/${data.slug}`);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!adminKey) {
      setError("Enter your admin key to delete posts.");
      return;
    }

    const confirmed = window.confirm("Delete this post?");
    if (!confirmed) return;

    const res = await fetch(`/api/blog/${slug}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    if (!res.ok) {
      setError("Unable to delete the post.");
      return;
    }

    if (editingSlug === slug) {
      resetForm();
    }

    setMessage("Post deleted.");
    await fetchPosts();
  };

  const startEditing = (post: BlogPost) => {
    setEditingSlug(post.slug);
    setTitle(post.title);
    setContent(post.content);
    setTagsInput(post.tags.join(", "));
    setPublished(post.published);
    setMessage("");
    setError("");
  };

  const readingTime = useMemo(
    () => (content ? estimateReadingTime(content) : 0),
    [content]
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Admin
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {editingSlug ? "Edit blog post" : "Write a new blog post"}
            </h1>
            {editingSlug ? (
              <button
                onClick={resetForm}
                className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition"
              >
                New post
              </button>
            ) : null}
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <input
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter admin key"
              className="w-full md:w-72 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
              type="password"
            />
            <p className="text-sm text-slate-500">
              This key is required to create, edit, or delete posts.
            </p>
          </div>
          {message ? (
            <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2 w-fit">
              {message}
            </p>
          ) : null}
          {error ? (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2 w-fit">
              {error}
            </p>
          ) : null}
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 space-y-4">
              <div className="flex flex-col gap-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Post title"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-lg font-semibold focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none"
                />
                <input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Tags (comma separated)"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none"
                />
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  Published
                </label>
              </div>

              <div data-color-mode="light" className="rounded-lg overflow-hidden border border-slate-200">
                <MDEditor
                  value={content}
                  onChange={(val) => setContent(val ?? "")}
                  height={400}
                  highlightEnable={false}
                />
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{readingTime ? `${readingTime} min read` : ""}</span>
                <span>{content.trim().length} characters</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition disabled:opacity-60"
                >
                  {saving ? "Saving..." : editingSlug ? "Update post" : "Publish post"}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Live preview
              </p>
              <div
                className="prose max-w-none"
                data-color-mode="light"
              >
                <MarkdownPreview source={content || "Start writing to see the preview."} />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  Manage posts
                </h3>
                <button
                  onClick={fetchPosts}
                  className="text-xs text-blue-700 font-semibold hover:underline"
                >
                  Refresh
                </button>
              </div>
              {loading ? (
                <p className="text-sm text-slate-500">Loading posts...</p>
              ) : posts.length === 0 ? (
                <p className="text-sm text-slate-500">
                  {adminKey
                    ? "No posts yet."
                    : "Enter the admin key to load posts."}
                </p>
              ) : (
                <ul className="space-y-3">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="border border-slate-200 rounded-lg p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <p className="font-semibold text-slate-900">
                            {post.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {estimateReadingTime(post.content)} min read
                            {post.published ? " • Published" : " • Draft"}
                          </p>
                          {post.tags?.length ? (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {post.tags.slice(0, 4).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-700"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => startEditing(post)}
                          className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 hover:bg-red-100 transition"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => router.push(`/blog/${post.slug}`)}
                          className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-200 transition"
                        >
                          View
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
