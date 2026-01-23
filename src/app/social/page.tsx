"use client";

import { useState } from "react";
import Script from "next/script";
import Booking from "@/components/Booking";
import SiteHeader from "@/components/SiteHeader";

const tiktokLinks = [
  "https://www.tiktok.com/@addictedtohair.016/video/7527852346248891679",
  "https://www.tiktok.com/@addictedtohair.016/video/7464726427225623838",
  "https://www.tiktok.com/@addictedtohair.016/video/7138599512192437546",
  "https://www.tiktok.com/@addictedtohair.016/video/7366366860893326634",
  "https://www.tiktok.com/@addictedtohair.016/video/7380164189521808683",
];

export default function SocialPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:max-w-[80rem] lg:px-12 space-y-10">
        <SiteHeader onBook={() => setBookingOpen(true)} showAdmin />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 text-center shadow-lg">
          <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Social
          </p>
          <h1 className="font-display text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Latest work from the studio.
          </h1>
          <p className="text-sm text-neutral-600">
            Follow along for transformations, behind-the-scenes moments, and care tips.
          </p>
          <div className="mt-4">
            <a
              href="https://tiktok.com/@addictedtohair.016"
              className="rounded-full border border-emerald-700/30 px-4 py-2 text-xs font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
            >
              @addictedtohair.016
            </a>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {tiktokLinks.map((url) => (
            <blockquote
              key={url}
              className="tiktok-embed w-full rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-sm"
              cite={url}
              data-video-id={url.split("/").pop()}
            >
              <a href={url}>Watch on TikTok</a>
            </blockquote>
          ))}
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
