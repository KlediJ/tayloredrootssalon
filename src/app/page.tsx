"use client";

import { useState } from "react";
import Link from "next/link";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import HairTryOn from "@/components/HairTryOn";

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState<string | null>(null);

  const handleBook = (payload: { selfie: string; output: string }) => {
    setSelectedLook(payload.output);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-emerald-50 text-neutral-900 [background-image:radial-gradient(circle_at_top_left,rgba(20,83,45,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)] lg:bg-stone-50 lg:from-stone-50 lg:via-stone-50 lg:to-stone-50 lg:[background-image:none]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:max-w-[90rem] lg:px-12 space-y-10">
        <header className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-white/70 p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
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
          </div>
        </header>

        <section className="grid gap-8 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-2xl sm:grid-cols-2">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              TayloredRoots — Hair Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
              See the look before the chair.
            </h1>
            <p className="text-base text-neutral-700">
              Upload your inspiration or pick one of ours, add your selfie, and get a
              realistic preview in seconds. Fewer surprises, faster bookings, happier
              appointments.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#tryon"
                className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Start your preview
              </a>
              <a
                href="#inspiration"
                className="rounded-lg border border-emerald-900/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
              >
                Browse inspiration
              </a>
            </div>
            <div className="grid gap-4 rounded-2xl border border-emerald-900/10 bg-white/70 p-6 text-sm text-neutral-900 sm:grid-cols-3">
              {[
                {
                  label: "Precision",
                  text: "Face stays you; only the hair follows the reference.",
                },
                {
                  label: "Fast",
                  text: "Upload, preview, and book in a single flow.",
                },
                {
                  label: "Stylist-ready",
                  text: "Send your preview with the booking so expectations align.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="space-y-1 rounded-xl border border-emerald-900/10 bg-white/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                    {item.label}
                  </p>
                  <p className="text-emerald-950 leading-relaxed">{item.text}</p>
                  <p className="text-neutral-600 text-xs">
                    {item.label === "Precision"
                      ? "Hair shape, length, texture, and color mirror the reference; face/skin/background are preserved."
                      : item.label === "Fast"
                        ? "Takes seconds to upload and preview, so you can decide quickly."
                        : "Your stylist sees the target look before you arrive, reducing revisions."}
                  </p>
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
              <p className="font-semibold">Realistic preview, no surprises.</p>
              <p className="text-emerald-100">
                Upload your selfie, pick a style, and see it before you book.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-900/10 bg-white/70 p-5 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                What to expect
              </p>
              <p className="text-sm text-neutral-700">
                Your selfie stays yours. Only the hair follows the reference you choose.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-neutral-700 sm:grid-cols-3 sm:gap-4">
              {[
                {
                  label: "Upload",
                  text: "Clear selfie + style reference or a curated look.",
                },
                {
                  label: "Preview",
                  text: "Hair-only change; face/skin/background remain.",
                },
                {
                  label: "Share",
                  text: "Attach your preview when you book.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-emerald-900/10 bg-white/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                    {item.label}
                  </p>
                  <p className="text-emerald-950">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HairTryOn onBook={handleBook} />
        <div className="rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                Ready when you are
              </p>
              <h3 className="text-2xl font-semibold text-emerald-950">
                Lock your spot with your chosen look
              </h3>
              <p className="text-sm text-neutral-600">
                We’ll attach your preview and notes so the stylist knows exactly what you want.
              </p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Open booking
            </button>
          </div>
        </div>

        <section className="rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                Visit TayloredRoots
              </p>
              <h3 className="text-2xl font-semibold text-emerald-950">
                Your stylist, fully briefed before you arrive
              </h3>
              <p className="text-sm text-neutral-600">
                Preview your look, attach it to your booking, and show up confident. Email or stop by to finalize details.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-neutral-700">
              <div className="rounded-lg border border-emerald-900/20 px-3 py-2">
                Bring inspiration photos and a quick hair history.
              </div>
              <div className="rounded-lg border border-emerald-900/20 px-3 py-2">
                Appointments are confirmed by email after review.
              </div>
              <div className="rounded-lg border border-emerald-900/20 px-3 py-2">
                Natural light studio with a calm, private feel.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Booking
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedLook={selectedLook}
      />
    </main>
  );
}
