'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 border-b border-border bg-black/70 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-white tracking-tight glow transition"
        >
          NeonForge
        </Link>
      </div>
    </nav>
  );
}
