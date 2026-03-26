"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteProps {
  type: "delete";
  postId: number;
}

interface LogoutProps {
  type: "logout";
}

type Props = DeleteProps | LogoutProps;

export default function AdminPostActions(props: Props) {
  const router = useRouter();

  if (props.type === "logout") {
    async function handleLogout() {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
    }

    return (
      <button
        onClick={handleLogout}
        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        Logout
      </button>
    );
  }

  return <DeleteButton postId={props.postId} />;
}

function DeleteButton({ postId }: { postId: number }) {
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleDelete() {
    setError("");
    const res = await fetch(`/api/blog/${postId}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    } else {
      setError("Failed to delete");
      setConfirming(false);
    }
  }

  if (confirming) {
    return (
      <span className="flex items-center gap-1.5">
        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
        <span className="text-xs text-zinc-500 dark:text-zinc-400">Sure?</span>
        <button
          onClick={handleDelete}
          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Yes
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-2.5 py-1 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          No
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-red-200 dark:border-red-800/50 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition"
    >
      Delete
    </button>
  );
}
