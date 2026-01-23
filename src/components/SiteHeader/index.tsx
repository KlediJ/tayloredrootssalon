"use client";

import { useState } from "react";
import Link from "next/link";

type SiteHeaderProps = {
  onBook?: () => void;
  showAdmin?: boolean;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Preview", href: "/preview" },
  { label: "Social", href: "/social" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ onBook, showAdmin }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col gap-4 rounded-2xl border border-emerald-900/10 bg-white/75 p-4 shadow-lg lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-2">
        <img
          src="/brand/logo.svg"
          alt="TayloredRoots logo"
          className="h-12 w-auto"
        />
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
          Natural light, tailored results.
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-700/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
        >
          <span>{menuOpen ? "Close menu" : "Menu"}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-emerald-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
        {onBook ? (
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Book now
          </button>
        ) : null}
      </div>
      {menuOpen ? (
        <nav className="flex flex-col gap-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-emerald-700/20 px-4 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/40 hover:bg-emerald-700/10"
            >
              {item.label}
            </Link>
          ))}
          {showAdmin ? (
            <Link
              href="/admin"
              className="rounded-xl border border-emerald-700/20 px-4 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/40 hover:bg-emerald-700/10"
            >
              Admin
            </Link>
          ) : null}
        </nav>
      ) : null}
      <nav className="hidden flex-wrap items-center gap-3 text-lg md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-emerald-700/20 px-5 py-2 text-lg font-semibold text-emerald-950 transition hover:border-emerald-700/40 hover:bg-emerald-700/10"
          >
            {item.label}
          </Link>
        ))}
        {showAdmin ? (
          <Link
            href="/admin"
            className="rounded-full border border-emerald-700/20 px-4 py-2 text-lg font-semibold text-emerald-950 transition hover:border-emerald-700/40 hover:bg-emerald-700/10"
          >
            Admin
          </Link>
        ) : null}
        {onBook ? (
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-emerald-700 px-5 py-2 text-lg font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Book now
          </button>
        ) : null}
      </nav>
    </header>
  );
}
