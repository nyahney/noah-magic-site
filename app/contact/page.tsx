import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Noah Yahney Magic & Mentalism for black-tie corporate galas, intimate private events, close-up magic, and walkaround mentalism.",
};

const bookingDetails = [
  "Event date and location",
  "Guest count and event type",
  "Preferred performance format",
  "Any timing or venue constraints",
];

export default function ContactPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
            Contact
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-zinc-50 sm:text-7xl">
            Drop us a line.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether a black-tie corporate gala or an intimate private event,
            Noah brings a unique approach to each performance.
          </p>

          <div className="mt-10 space-y-4 text-lg">
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
              className="block border-b border-white/10 pb-4 text-zinc-100 transition hover:text-[#d9c58f]"
              href="https://www.instagram.com/magicofnoah"
            >
              @magicofnoah
            </a>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Booking inquiry
          </h2>
          <form
            className="mt-8 grid gap-5"
            action="mailto:noahyahney@gmail.com"
            method="post"
            encType="text/plain"
          >
            {/* TODO: Connect this static form to Formspree, Vercel Forms, or another booking workflow for browser-native submissions. */}
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Name
              <input
                className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
                name="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Email
              <input
                className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
                name="email"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Event details
              <textarea
                className="min-h-36 resize-y border border-white/10 bg-black/50 p-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
                name="event_details"
              />
            </label>
            <button
              className="h-12 bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100"
              type="submit"
            >
              Prepare inquiry
            </button>
          </form>
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
