"use client";

import { useState } from "react";
import Link from "next/link";
import Booking from "@/components/Booking";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Dimensional color",
    detail: "Lived-in blondes, brunettes, and glossing for soft grow-out.",
    benefits: [
      "Custom placement for natural depth and movement.",
      "Toner balance to keep shine and tone true.",
      "Low-maintenance grow-out plan.",
    ],
    idealFor: ["First-time color", "Soft grow-out", "Brightening"],
  },
  {
    title: "Silk press + styling",
    detail: "Smooth finish, heat protection, and trim-focused care.",
    benefits: [
      "Heat-protective prep and moisture balance.",
      "Silky finish with movement, not stiffness.",
      "Trim and shape for a clean finish.",
    ],
    idealFor: ["Natural hair", "Special events", "Seasonal refresh"],
  },
  {
    title: "Protective styling",
    detail: "Knotless twists and custom prep for healthy retention.",
    benefits: [
      "Scalp care and moisture prep.",
      "Lightweight install for comfort.",
      "Style longevity guidance.",
    ],
    idealFor: ["Protective wear", "Low styling time", "Growth focus"],
  },
  {
    title: "Custom cuts",
    detail: "Shape, balance, and framing tailored to your features.",
    benefits: [
      "Face-framing shape and balance.",
      "Texture-aware cutting.",
      "Finish that grows out cleanly.",
    ],
    idealFor: ["Shape refresh", "Texture support", "Face framing"],
  },
  {
    title: "Treatment plans",
    detail: "Moisture, repair, and scalp care built into your service.",
    benefits: [
      "Targeted repair for breakage or dryness.",
      "Scalp reset and hydration.",
      "At-home care guidance.",
    ],
    idealFor: ["Repair", "Scalp care", "Hydration"],
  },
  {
    title: "Maintenance coaching",
    detail: "A plan you can follow between appointments.",
    benefits: [
      "Product guidance based on texture.",
      "Wash-day routine tailored to you.",
      "Seasonal maintenance checklist.",
    ],
    idealFor: ["Consistency", "Growth goals", "Busy schedules"],
  },
];

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Services
          </p>
          <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl lg:text-5xl">
            Hair services built around healthy, lasting results.
          </h1>
          <p className="text-base text-neutral-700 lg:text-lg">
            Every service begins with a consultation so we can tailor your look to
            your hair type, lifestyle, and desired maintenance.
          </p>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
                What to expect
              </p>
              <h2 className="font-display text-3xl font-semibold text-emerald-950">
                A plan-first approach with clear outcomes.
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed">
                We start with your inspiration, hair history, and maintenance comfort.
                From there, we map a service plan that prioritizes hair health and
                predictable results. You leave with a look that feels like you and a
                care plan that keeps it that way.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-neutral-700">
              {[
                "Consultation + hair history review",
                "Customized service plan and timing",
                "Color, cut, or style with care built in",
                "Maintenance guidance for home",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-900/10 bg-white p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-emerald-900/10 bg-white/85 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                {service.title}
              </p>
              <p className="mt-2 text-base text-neutral-800 leading-relaxed">
                {service.detail}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-emerald-950">
                {service.idealFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col items-start gap-4 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              Ready to plan your visit?
            </p>
            <p className="text-base text-neutral-700">
              Use the preview tool or book a consultation directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/preview"
              className="rounded-lg border border-emerald-700/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
            >
              Try the preview
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Book now
            </button>
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
