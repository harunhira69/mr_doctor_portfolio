import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Doctor Portfolio
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <Link href="/about">About</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/chambers">Chambers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
