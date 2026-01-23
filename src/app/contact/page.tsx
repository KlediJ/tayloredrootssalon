"use client";

import { useState } from "react";
import Booking from "@/components/Booking";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8 lg:max-w-[72rem] lg:px-12 space-y-10">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Contact
          </p>
          <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Visit the studio or reach out to plan your appointment.
          </h1>
          <p className="text-sm text-neutral-600">
            We confirm every appointment personally, so email is the fastest way to
            secure your visit.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
              Email
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              tayloredrootssalon@yahoo.com
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
              Phone
            </p>
            <p className="mt-2 text-sm text-neutral-700">TBD</p>
          </div>
          <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
              Address
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              47 Stony Hill Rd, Bethel, CT Suite 1
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
              Hours
            </p>
            <p className="mt-2 text-sm text-neutral-700">By appointment</p>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Ready to book?
          </p>
          <p className="text-sm text-neutral-600">
            Share your inspiration and preferred timing, and we will follow up.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="mt-4 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Book now
          </button>
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
