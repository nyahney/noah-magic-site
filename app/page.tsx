import Link from "next/link";

const highlights = [
  "Corporate receptions",
  "Private dinners",
  "Wedding cocktail hours",
  "VIP hospitality",
];

const services = [
  {
    title: "Close-Up Magic",
    body: "Sleight-of-hand performed inches away from guests, designed for cocktail hours, dinner parties, and high-end receptions.",
  },
  {
    title: "Modern Mentalism",
    body: "Clean, psychological routines built around choices, intuition, memory, and impossible reveals.",
  },
  {
    title: "Featured Sets",
    body: "A focused performance moment for the room when you want the experience to become the headline.",
  },
];

const quotes = [
  "Sharp, polished, and genuinely impossible.",
  "The strongest reaction of the entire evening.",
  "Elegant enough for clients, personal enough for friends.",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[linear-gradient(rgba(5,5,5,0.3),#050505),url('/media/hero/noah-stage-portrait.jpg')] bg-cover bg-center opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              Modern magician and mentalist
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-normal text-zinc-50 sm:text-7xl lg:text-8xl">
              Sleek magic for rooms that notice everything.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Premium close-up magic and mind reading for private events,
              weddings, client experiences, and corporate gatherings.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100"
              >
                Book an event
              </Link>
              <Link
                href="/gallery"
                className="inline-flex h-12 items-center justify-center border border-white/20 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f]"
              >
                View gallery
              </Link>
            </div>
          </div>
          <div className="border border-white/10 bg-black/50 p-5 backdrop-blur">
            <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(5,5,5,0),rgba(5,5,5,0.82)),url('/media/hero/noah-closeup-cards.jpg')] bg-cover bg-center" />
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-zinc-400">
              {highlights.map((item) => (
                <span key={item} className="border-t border-white/10 pt-3">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/10 bg-white/[0.03] p-7"
            >
              <h2 className="text-2xl font-semibold text-zinc-50">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-12">
          <p className="max-w-4xl text-3xl font-medium leading-tight text-zinc-100 sm:text-5xl">
            Built for intimate impact: no stage clutter, no cheesy props, no
            dead time. Just impossible moments that travel through the room.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              The experience
            </p>
            <h2 className="mt-5 text-4xl font-semibold text-zinc-50 sm:text-5xl">
              Premium entertainment without making the night feel produced.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {quotes.map((quote) => (
              <blockquote
                key={quote}
                className="border-l border-[#d9c58f] bg-black/35 p-6 text-lg leading-7 text-zinc-300"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
