import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import removeMd from "remove-markdown";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function createExcerpt(content: string, length = 180) {
  if (!content) return "";

const plain = removeMd(content);

if (plain.length <= length) return plain;
console.log(plain)
return `${plain.slice(0, length).trimEnd()}...`;
}

export function estimateReadingTime(content: string, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
