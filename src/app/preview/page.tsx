"use client";

import { useState } from "react";
import Booking from "@/components/Booking";
import HairTryOn from "@/components/HairTryOn";
import SiteHeader from "@/components/SiteHeader";

export default function PreviewPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState<string | null>(null);

  const handleBook = (payload: { selfie: string; output: string }) => {
    setSelectedLook(payload.output);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-6 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Preview tool
          </p>
          <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Preview your look before the chair.
          </h1>
          <p className="text-sm text-neutral-600">
            Upload a reference and selfie, then compare your preview side-by-side.
          </p>
        </section>

        <HairTryOn onBook={handleBook} />
      </div>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/30 transition hover:bg-emerald-600 sm:hidden"
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
