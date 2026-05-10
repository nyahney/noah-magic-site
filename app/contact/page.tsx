import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Check availability for Noah Yahney, modern magician and mentalist for private events, corporate gatherings, luxury celebrations, and unforgettable experiences.",
};

const bookingDetails = [
  "Event date and location",
  "Guest count and event type",
  "Preferred performance format",
  "Any timing or venue constraints",
];

export default function ContactPage() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-50 sm:mt-5 sm:text-7xl">
            Check availability.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell me a little about your event and I&apos;ll get back to you
            with availability and next steps.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
            Available for events across Westchester, New York, Connecticut, and
            beyond.
          </p>

          <div className="mt-8 space-y-4 text-base sm:mt-10 sm:text-lg">
            <a
              className="block border-b border-white/10 pb-4 text-zinc-100 transition hover:text-[#d9c58f]"
              href="mailto:noahyahney@gmail.com?subject=Event%20Booking%20Inquiry"
            >
              noahyahney@gmail.com
            </a>
            <a
              className="block border-b border-white/10 pb-4 text-zinc-100 transition hover:text-[#d9c58f]"
              href="tel:+15167814700"
            >
              (516) 781-4700
            </a>
            <a
              className="flex items-center gap-3 border-b border-white/10 pb-4 text-zinc-100 transition hover:text-[#d9c58f]"
              href="https://www.instagram.com/magicofnoah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Noah Yahney on Instagram"
            >
              <svg
                aria-hidden="true"
                className="size-5 text-[#d9c58f]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  width="17"
                  height="17"
                  x="3.5"
                  y="3.5"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="17" cy="7" r="1.1" fill="currentColor" />
              </svg>
              @magicofnoah
            </a>
          </div>
        </div>

        <div className="border border-white/10 bg-[#10100c]/70 p-5 sm:p-8">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Booking inquiry
          </h2>
          <ContactForm />
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Helpful to include
            </p>
            <ul className="mt-4 grid gap-3 text-zinc-400 sm:grid-cols-2">
              {bookingDetails.map((detail) => (
                <li key={detail} className="border-l border-[#d9c58f] pl-3">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
