"use client";

import { useState } from "react";
import Link from "next/link";
import Booking from "@/components/Booking";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="grid gap-6 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              About TayloredRoots
            </p>
            <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl">
              A calm, consultation-first studio built around your hair goals.
            </h1>
            <p className="text-sm text-neutral-600">
              TayloredRoots is a private studio focused on healthy hair, lived-in
              color, and honest results. We start every service with a conversation
              about your lifestyle, maintenance comfort, and inspiration so you
              leave feeling understood.
            </p>
            <p className="text-sm text-neutral-600">
              The experience is intentionally paced, with natural light and a
              one-on-one environment so you can relax while we build a plan for
              long-term hair health.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-lg border border-emerald-700/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
              >
                View services
              </Link>
              <Link
                href="/preview"
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Try the preview
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "/lookbook/lived-in-brunette.jpg",
              "/lookbook/dimensional-blonde.jpg",
              "/lookbook/copper-glow.jpg",
              "/lookbook/silk-press.jpg",
            ].map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm"
              >
                <img
                  src={src}
                  alt="TayloredRoots work"
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <div className="grid gap-4 text-sm text-neutral-700 sm:grid-cols-3">
            {[
              {
                title: "Consultation-first",
                text: "Every appointment begins with a plan tailored to your hair history.",
              },
              {
                title: "Natural light studio",
                text: "We check color and tone in bright, honest light.",
              },
              {
                title: "Care-forward",
                text: "We protect the integrity of your hair with treatment-led services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-emerald-900/10 bg-white p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                  {item.title}
                </p>
                <p className="mt-2 text-emerald-950">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/30 transition hover:bg-emerald-600 sm:hidden"
      >
        Book now
      </button>

      <Booking open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
