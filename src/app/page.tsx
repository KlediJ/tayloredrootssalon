"use client";

import { useState } from "react";
import Link from "next/link";
import Booking from "@/components/Booking";
import SiteHeader from "@/components/SiteHeader";

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:max-w-[90rem] lg:px-12 space-y-12">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Social
          </p>
          <h2 className="font-display text-3xl font-semibold text-emerald-950">
            See the latest transformations.
          </h2>
          <p className="text-sm text-neutral-600">
            Visit the social page for real client previews and studio moments.
          </p>
          <div className="mt-4">
            <Link
              href="/social"
              className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Visit social
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              The studio experience
            </p>
            <h2 className="font-display text-3xl font-semibold text-emerald-950">
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

<section className="grid gap-8 rounded-3xl border border-emerald-900/10 bg-white/85 p-8 shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              TayloredRoots Salon
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              Show up confident. See it before you commit.
            </h1>
            <p className="text-base text-neutral-700 lg:text-lg">
              A consultation-first studio focused on healthy hair, lived-in color, and
              realistic previews so you leave with exactly what you envisioned.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/preview"
                className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Try the preview
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="rounded-lg border border-emerald-700/30 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
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

        

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
                Visit TayloredRoots
              </p>
              <h2 className="font-display text-3xl font-semibold text-emerald-950">
                A private, calming studio in Bethel.
              </h2>
              <p className="text-sm text-neutral-600">
                Email us to plan your visit. We confirm every appointment personally.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:tayloredrootssalon@yahoo.com"
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Email to book
              </a>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg border border-emerald-700/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
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
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/30 transition hover:bg-emerald-600 sm:hidden"
      >
        Book now
      </button>

      <Booking open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
