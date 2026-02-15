import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Sombit Karmakar</p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
