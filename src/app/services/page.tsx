"use client";

import SiteHeader from "@/components/SiteHeader";
import SquareButton from "@/components/SquareButton";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <SiteHeader />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Services
          </p>
          <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl lg:text-5xl">
            Book directly through Square.
          </h1>
          <p className="text-base text-neutral-700 lg:text-lg">
            Select your service and complete your booking below.
          </p>
          <div className="mt-4">
            <SquareButton />
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Book your appointment
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-emerald-900/10 bg-white">
            <iframe
              title="Taylored Roots Salon booking"
              src="https://app.squareup.com/appointments/book/al3bc6i7mdt1vr/LVSHR2FKD1WZF/start"
              className="h-[900px] w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
