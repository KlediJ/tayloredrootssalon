"use client";

import { useState } from "react";
import Link from "next/link";
import Booking from "@/components/Booking";
import HairTryOn from "@/components/HairTryOn";

export default function PreviewPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState<string | null>(null);

  const handleBook = (payload: { selfie: string; output: string }) => {
    setSelectedLook(payload.output);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-emerald-50 text-neutral-900 lg:bg-stone-50 lg:from-stone-50 lg:via-stone-50 lg:to-stone-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <header className="flex flex-col gap-4 rounded-2xl border border-emerald-900/10 bg-white/80 p-5 shadow-lg lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.25em] text-emerald-900/70"
            >
              TayloredRoots Salon
            </Link>
            <h1 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">
              Preview your look before the chair.
            </h1>
            <p className="text-sm text-neutral-600">
              Upload a reference and selfie, then compare your preview side-by-side.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Book now
            </button>
            <Link
              href="/"
              className="rounded-lg border border-emerald-900/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900/60 hover:bg-emerald-900/5"
            >
              Back to home
            </Link>
          </div>
        </header>

        <HairTryOn onBook={handleBook} />
      </div>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-800 sm:hidden"
      >
        Book now
      </button>

      <Booking
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedLook={selectedLook}
      />
    </main>
  );
}
