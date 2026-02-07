"use client";

import { useState } from "react";
import Booking from "@/components/Booking";
import SquareButton from "@/components/SquareButton";
import SiteHeader from "@/components/SiteHeader";

const serviceGroups = [
  {
    title: "Color + highlights",
    items: [
      {
        title: "Color, Cut & Blow Dry",
        description:
          "A customized single process color or a color refresh. Included with a haircut and blow dry. This service is great for guests that want to cover their gray or an all over glaze to tone.",
        price: "$140.00",
        duration: "1 hr 30 min",
      },
      {
        title: "Color & Blow Dry",
        description:
          "A customized single process color or color refresh. This service is great for guests that want to cover gray hair or an all over glaze to tone. A blow dry is included.",
        price: "$115.00",
        duration: "1 hr 30 min",
      },
      {
        title: "All Over Color",
        description:
          "A service that delivers rich color from root to end. A blow dry is NOT included.",
        price: "$85.00",
        duration: "1 hr",
      },
      {
        title: "Quick Color (3 weeks ONLY)",
        description:
          "This service is exclusively for clients within three weeks of their last visit who need precise gray coverage only. This does NOT include glossing/toning, haircut or a blow dry. Please add on a blow dry if needed.",
        price: "$55.00",
        duration: "1 hr",
      },
      {
        title: "Add Retouch To Foil",
        description:
          "This is an add-on service for those wanting to cover their grey hair with also booking a highlighting service.",
        price: "$65.00",
        duration: "30 min",
      },
      {
        title: "Face Frame Highlight & Blow Dry",
        description:
          "A face frame highlight is a low maintenance lightning service designed to softly illuminate the hair around the face. This customized technique is good for clients who want to create brightness just at the front hairline without committing to a full highlight. Perfect for a subtle refresh, or between highlight appointments. This service includes a blow dry.",
        price: "$140.00",
        duration: "1 hr 30 min",
      },
      {
        title: "Partial Highlight & Blow Dry",
        description:
          "A personalized partial highlight focuses on the most visible areas of the hair. This service is ideal for guests who want to enhance brightness and extend time between full services. This includes a blow dry.",
        price: "$180.00",
        duration: "2 hr 30 min",
      },
      {
        title: "Full Head Highlights & Blow Dry",
        description:
          "A fully customized lightning experience designed to create seamless dimension throughout the entire head. Perfect for clients seeking all over brightness, refined dimension, and a polished result. A blow dry is included.",
        price: "$220.00",
        duration: "2 hr 45 min",
      },
      {
        title: "Bleach Retouch & Blow Dry",
        description:
          "A precision lightning service designed to maintain an all over blonde by targeting new growth only. This service requires to have at least 6-8 weeks of regrowth max. This is NOT a highlighting service. A blow dry is included.",
        price: "$200.00",
        duration: "2 hr 30 min",
      },
    ],
  },
  {
    title: "Men's services",
    items: [
      {
        title: "Mens Color & Cut",
        description:
          "All over color for men who want to deepen their natural color or blend their grays. A haircut is included in this service.",
        price: "$85.00",
        duration: "1 hr 15 min",
      },
      {
        title: "Mens Color",
        description:
          "All over color for men who want to deepen their natural color or blend their grays. A haircut is NOT included in this service.",
        price: "$65.00",
        duration: "45 min",
      },
      {
        title: "Mens Haircut",
        description:
          "A precision focus service designed to refresh your style with clean lines in expert detailing. Every appointment begins with a consultation to understand your desired look, lifestyle, and hair texture.",
        price: "$35.00",
        duration: "30 min",
      },
    ],
  },
  {
    title: "Cuts + styling",
    items: [
      {
        title: "Women's Wash, Cut, & Blowdry",
        description:
          "A personalized experience starting with a soothing wash to cleanse and prepare your hair, followed by a precision haircut tailored to your features, lifestyle, and hair goals. Every detail is thoughtfully executed to enhance the natural beauty and movement of your hair, while maintaining its health and shine.",
        price: "$65.00",
        duration: "45 min",
      },
      {
        title: "Women's Haircut",
        description:
          "This service is a precision focused experience designed to refresh and refine your look without styling. Every haircut begins with a personalized consultation to understand your hair goals, lifestyle, and shape. This service does NOT include a blow dry.",
        price: "$45.00",
        duration: "30 min",
      },
      {
        title: "Blow Dry",
        description:
          "Our luxury blow dry service is designed to leave your hair, smooth, polished, and effortlessly styled. This standalone service is great for a special occasion, add on to a color service, or simply wanting a refreshed every day look.",
        price: "$40.00",
        duration: "45 min",
      },
      {
        title: "Add On Curling/ Flat Iron",
        description: "Add on service to curl or straighten hair.",
        price: "$15.00",
        duration: "20 min",
      },
    ],
  },
  {
    title: "Treatments",
    items: [
      {
        title: "K18",
        description:
          "The K18 repair treatment is a leave in service that repairs hair damage at the molecular level. Unlike traditional conditioning treatments that temporarily smooth the hair, K18 works deep within the hair's core to reconnect broken bonds. This service is ideal for chemically treated, highlighted, over processed or heat damaged hair. K18 can be performed as a standalone treatment or added to a color or chemical service for maximum repair and protect protection.",
        price: "$40.00",
        duration: "10 min",
      },
    ],
  },
  {
    title: "Kids",
    items: [
      {
        title: "Kids Haircut No Blow Dry",
        description: "Kids under 10 years old.",
        price: "$30.00",
        duration: "30 min",
      },
      {
        title: "Kids Wash, Cut, & Blow Dry",
        description: "Kids under 10 years old.",
        price: "$45.00",
        duration: "30 min",
      },
    ],
  },
  {
    title: "Waxing",
    items: [
      {
        title: "Facial Wax",
        description:
          "Facial wax includes eyebrows, lip, and chin. Hard wax for sensitive skin is used on this service.",
        price: "$15.00",
        duration: "15 min",
      },
      {
        title: "Lip Wax",
        description: "Hard wax for sensitive skin is used on this service.",
        price: "$8.00",
        duration: "5 min",
      },
      {
        title: "Eyebrow Wax",
        description: "Hard wax for a sensitive skin is used on this service.",
        price: "$12.00",
        duration: "15 min",
      },
    ],
  },
];

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-100 text-neutral-900 lg:bg-emerald-50 lg:from-emerald-50 lg:via-emerald-50 lg:to-emerald-50 lg:[background-image:none]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:max-w-[90rem] lg:px-12 space-y-12">
        <SiteHeader onBook={() => setBookingOpen(true)} />

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
                Taylored Roots Salon
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                A private, consultation-first salon for healthy hair.
              </h1>
              <p className="text-base text-neutral-700 lg:text-lg">
                One-on-one appointments, intentional pacing, and a calm salon designed
                around your hair goals.
              </p>
            </div>
            <SquareButton />
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Hours of operation
          </p>
          <div className="mt-4 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Sunday: CLOSED",
              "Monday: CLOSED",
              "Tuesday: CLOSED",
              "Wednesday: 9:00am – 7:00pm",
              "Thursday: 9:00am – 5:00pm",
              "Friday: 10:00am – 6:00pm",
              "Saturday: 9:00am – 3:00pm",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-emerald-900/10 bg-white p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
              About Taylored Roots Salon
            </p>
            <h2 className="font-display text-3xl font-semibold text-emerald-950">
              Experience designed entirely around you.
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              With nearly 10 years of experience behind the chair, I created Taylored
              Roots Salon from a genuine passion for beautiful, confidence-boosting
              hair and meaningful client connections. Over the years, that passion has
              evolved into a private salon experience centered on quality,
              personalization, and consistency — designed entirely around you.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              Taylored Roots Salon is a one-on-one salon suite, meaning your appointment
              time is reserved just for you. No double booking, no overlapping
              clients, and no distractions — just focused attention and a customized
              experience from start to finish.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              The space was thoughtfully created to feel calm, welcoming, and
              elevated. From the moment you walk in, you can expect a relaxed
              atmosphere where you can unwind, feel heard, and trust that every
              detail is tailored specifically to your hair goals.
            </p>
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
                  alt="Taylored Roots Salon work"
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
                Taylored Roots Salon
              </p>
              <h2 className="font-display text-3xl font-semibold text-emerald-950">
                A private, calming salon in Bethel.
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <SquareButton />
                <a
                  href="tel:4752371142"
                  className="rounded-full border border-emerald-700/30 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:border-emerald-700/60 hover:bg-emerald-700/10"
                >
                  Call us now
                </a>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-neutral-700">
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                  Address
                </p>
                <p className="mt-2">47 Stony Hill Rd, Bethel, CT Suite 1</p>
              </div>
              <div className="rounded-xl border border-emerald-900/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                  Phone
                </p>
                <p className="mt-2">Call: 475-237-1142</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Social
          </p>
          <h2 className="font-display text-3xl font-semibold text-emerald-950">
            See the latest transformations.
          </h2>
          <p className="text-sm text-neutral-600">
            Real client moments and salon updates.
          </p>
          <div className="mt-4">
            <div className="flex flex-col items-center gap-1 text-sm font-semibold text-emerald-900">
              <a
                href="https://tiktok.com/@addictedtohair.016"
                className="transition hover:text-emerald-700"
              >
                TikTok @addictedtohair.016
              </a>
              <a
                href="https://instagram.com/addictedtohair_016"
                className="transition hover:text-emerald-700"
              >
                Instagram @addictedtohair_016
              </a>
            </div>
          </div>
        </section>



        


        

        

        



        

        

        


        

        

        

        

        <section className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-900/70">
            Service menu
          </p>
          <h2 className="font-display text-3xl font-semibold text-emerald-950">
            Explore services.
          </h2>
          <div className="mt-6 space-y-4">
            {serviceGroups.map((group) => (
              <details
                key={group.title}
                className="rounded-2xl border border-emerald-900/10 bg-white/85 p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                  <span>{group.title}</span>
                  <span className="text-[11px] font-semibold text-emerald-900/60">
                    Expand
                  </span>
                </summary>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((service) => (
                    <article
                      key={service.title}
                      className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/70">
                        {service.title}
                      </p>
                      <p className="mt-2 text-base text-neutral-800 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-emerald-900">
                        {service.price} ・ {service.duration}
                      </p>
                    </article>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      <SquareButton className="fixed inset-x-4 bottom-4 z-40 text-center shadow-lg shadow-emerald-700/30 sm:hidden" />

      <Booking open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
