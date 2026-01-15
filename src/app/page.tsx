"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Booking from "@/components/Booking";

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-emerald-50 text-neutral-900 lg:bg-stone-50 lg:from-stone-50 lg:via-stone-50 lg:to-stone-50 lg:[background-image:none]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:max-w-[90rem] lg:px-12 space-y-12">
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
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="mailto:tayloredrootssalon@yahoo.com"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950 transition hover:border-emerald-900/40 hover:bg-emerald-900/5"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-900/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Email
            </a>
            <a
              href="https://maps.google.com/?q=47%20Stony%20Hill%20Rd%20Bethel%20CT%20Suite%201"
              className="rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950 transition hover:border-emerald-900/40 hover:bg-emerald-900/5"
            >
              47 Stony Hill Rd, Bethel, CT Suite 1
            </a>
            <span className="rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950/80">
              Phone: TBD
            </span>
            <a
              href="https://instagram.com/addictedtohair_016"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950 transition hover:border-emerald-900/40 hover:bg-emerald-900/5"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-900/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="5" y="5" width="14" height="14" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="16.5" cy="7.5" r="1" />
              </svg>
              Instagram
            </a>
            <a
              href="https://tiktok.com/@addictedtohair.016"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950 transition hover:border-emerald-900/40 hover:bg-emerald-900/5"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-900/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M14 5v9.5a3.5 3.5 0 1 1-3-3.46" />
                <path d="M14 7.5c1.2 1.4 2.8 2.3 4.5 2.5" />
              </svg>
              TikTok
            </a>
            <span className="rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950/80">
              Hours: By appointment
            </span>
            <Link
              href="/admin"
              className="rounded-full border border-emerald-900/20 px-3 py-1 text-emerald-950/80 transition hover:border-emerald-900/40 hover:bg-emerald-900/5"
            >
              Admin login
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden lg:inline-flex items-center rounded-full bg-emerald-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Book now
            </button>
          </div>
        </header>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
          <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          <div className="mx-auto max-w-4xl text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              Social proof
            </p>
            <h2 className="text-3xl font-semibold text-emerald-950">
              Real clients, real transformations.
            </h2>
            <p className="text-sm text-neutral-600">
              Fresh work pulled directly from Instagram and TikTok.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://instagram.com/addictedtohair_016"
                className="rounded-full border border-emerald-900/30 px-4 py-2 text-xs font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@addictedtohair.016"
                className="rounded-full border border-emerald-900/30 px-4 py-2 text-xs font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {[
              "https://www.instagram.com/p/DFeSPosgg5c/",
              "https://www.instagram.com/p/DEfS2BOgT9F/",
              "https://www.instagram.com/p/DDlXc7dAZh-/",
              "https://www.instagram.com/p/C6rpEyUA2qh/",
            ].map((url) => (
              <blockquote
                key={url}
                className="instagram-media w-full rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-sm"
                data-instgrm-permalink={url}
                data-instgrm-captioned="false"
              >
                <a href={url}>View this post on Instagram</a>
              </blockquote>
            ))}
            {[
              "https://www.tiktok.com/@addictedtohair.016/video/7527852346248891679",
              "https://www.tiktok.com/@addictedtohair.016/video/7464726427225623838",
              "https://www.tiktok.com/@addictedtohair.016/video/7138599512192437546",
              "https://www.tiktok.com/@addictedtohair.016/video/7366366860893326634",
              "https://www.tiktok.com/@addictedtohair.016/video/7380164189521808683",
            ].map((url) => (
              <blockquote
                key={url}
                className="tiktok-embed w-full rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-sm"
                cite={url}
                data-video-id={url.split("/").pop()}
              >
                <a href={url}>Watch on TikTok</a>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-emerald-900/10 bg-white/85 p-8 shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              TayloredRoots Salon
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              Show up confident. See it before you commit.
            </h1>
            <p className="text-base text-neutral-700 lg:text-lg">
              A consultation-first studio focused on healthy hair, lived-in color, and
              realistic previews so you leave with exactly what you envisioned.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/preview"
                className="rounded-lg bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Try the preview
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="rounded-lg border border-emerald-900/30 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
              >
                Book now
              </button>
            </div>
            <div className="grid gap-4 rounded-2xl border border-emerald-900/10 bg-white/80 p-6 text-sm text-neutral-900 sm:grid-cols-3">
              {[
                {
                  label: "Consultation-first",
                  text: "We start with your goals, hair history, and maintenance comfort.",
                },
                {
                  label: "Natural light studio",
                  text: "Every color decision is checked in bright, honest light.",
                },
                {
                  label: "Bring inspiration",
                  text: "Photos welcome. We translate them to your texture and tone.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="space-y-2 rounded-xl border border-emerald-900/10 bg-white/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                    {item.label}
                  </p>
                  <p className="text-emerald-950 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-emerald-900 via-emerald-950 to-neutral-950 shadow-lg">
            <img
              src="/hero/transformation.jpg"
              alt="TayloredRoots transformation preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent p-4 text-sm text-emerald-50">
              <p className="font-semibold">No surprises, just aligned expectations.</p>
              <p className="text-emerald-100">
                A calm, private studio where your look is designed with you.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              The studio experience
            </p>
            <h2 className="text-3xl font-semibold text-emerald-950">
              Modern techniques with a personal touch.
            </h2>
            <p className="text-sm text-neutral-600">
              Each appointment is paced, intentional, and focused on the health of your
              hair. We build a plan that fits your schedule and keeps your color looking
              fresh between visits.
            </p>
            <div className="grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Dimensional color + glossing
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Silk press + protective styling
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Custom cuts + shaping
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Treatment-led maintenance plans
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["/lookbook/lived-in-brunette.jpg", "/lookbook/dimensional-blonde.jpg", "/lookbook/copper-glow.jpg", "/lookbook/silk-press.jpg"].map(
              (src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt="TayloredRoots work"
                    className="h-48 w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
                Visit TayloredRoots
              </p>
              <h2 className="text-3xl font-semibold text-emerald-950">
                A private, calming studio in Bethel.
              </h2>
              <p className="text-sm text-neutral-600">
                Email us to plan your visit. We confirm every appointment personally.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:tayloredrootssalon@yahoo.com"
                  className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  Email to book
                </a>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg border border-emerald-900/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
                >
                  Book now
                </button>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-neutral-700">
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                47 Stony Hill Rd, Bethel, CT Suite 1
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Hours: By appointment
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                Natural light studio, calm private setting.
              </div>
            </div>
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-800 sm:hidden"
      >
        Book now
      </button>

      <Booking open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
