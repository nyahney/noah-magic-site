import Image from "next/image";
import Link from "next/link";

const highlights = [
  "15 years professional experience",
  "Private events",
  "Corporate gatherings",
  "Luxury celebrations",
];

const services = [
  {
    title: "Close-Up & Walkaround",
    body: "Magic is the perfect ice-breaker. Noah creates shared moments that get guests talking, laughing, and bonding together.",
  },
  {
    title: "Magic & Mentalism",
    body: "Modern, visual, high-energy, interactive magic for adults and teens, blending mind-reading techniques and sleight-of-hand.",
  },
  {
    title: "Private & Corporate Events",
    body: "Whether a black-tie corporate gala or an intimate private event, Noah brings a unique approach to each performance.",
  },
];

const reviews = [
  {
    name: "Merle H.",
    quote:
      "Noah amazed everyone with his incredible tricks and showmanship. We could not give him a stronger recommendation. You will not be disappointed!",
  },
  {
    name: "Brian V.",
    quote:
      "Noah's abilities and magic will leave you breathless....you will never forget the card tricks. He is one a of a kind! You will be happy you hired him to perform.",
  },
  {
    name: "Danielle S.",
    quote:
      "Noah was a big hit at our recent celebration. He had both kids and adults watching in amazement. The magic was top notch! We highly recommend and would definitely hire him again!",
  },
];

const featureImage = "/media/main-picture.jpg";

const featuredVideos = [
  {
    caption: "Magic of Noah Sizzle Reel",
    embedUrl: "https://www.youtube.com/embed/qsaYrkshqNM",
    aspect: "wide",
  },
  {
    caption: "Halloween Magic",
    embedUrl: "https://www.youtube.com/embed/dG-3d_IDq1o",
    aspect: "vertical",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-24 lg:py-32">
        <Image
          className="absolute inset-x-0 top-0 -z-20 h-[700px] w-full object-cover object-center opacity-65"
          src={featureImage}
          alt=""
          fill={false}
          width={1600}
          height={2000}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[linear-gradient(90deg,#080806_0%,rgba(8,8,6,0.78)_38%,rgba(8,8,6,0.35)_100%),linear-gradient(180deg,rgba(8,8,6,0.08)_0%,#080806_92%)]" />
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c58f] sm:mb-6 sm:tracking-[0.36em]">
              Modern magician and mentalist
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-normal text-zinc-50 sm:text-6xl lg:text-7xl">
              Unforgettable magic for premium events.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-7 sm:text-xl sm:leading-8">
              Noah Yahney delivers modern magic and mentalism for private
              events, corporate gatherings, luxury celebrations, and
              unforgettable experiences.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Available for events across Westchester, New York, Connecticut,
              and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[#d9c58f] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-100 sm:px-7 sm:tracking-[0.18em]"
              >
                Check Availability
              </Link>
              <Link
                href="#watch"
                className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f] sm:px-7 sm:tracking-[0.18em]"
              >
                Watch the Reel
              </Link>
            </div>
          </div>
          <div className="border border-white/10 bg-[#0b0a08]/55 p-4 backdrop-blur sm:p-5">
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(8,8,6,0),rgba(8,8,6,0.82)),url('${featureImage}')`,
              }}
            />
            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.14em] text-zinc-400 sm:text-xs sm:tracking-[0.18em]">
              {highlights.map((item) => (
                <span key={item} className="border-t border-white/10 pt-3">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-zinc-50">15 years</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
              Professional experience
            </p>
          </div>
          {reviews.slice(0, 2).map((review) => (
            <blockquote key={review.name} className="text-sm leading-6 text-zinc-300">
              <p>{review.quote}</p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c58f]">
                5-star review - {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/10 bg-[#10100c]/70 p-6 sm:p-7"
            >
              <h2 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="watch" className="px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              Watch
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-50 sm:mt-5 sm:text-5xl">
              See the energy in motion.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            {featuredVideos.map((video) => (
              <figure
                key={video.embedUrl}
                className={`border border-white/10 bg-[#10100c]/70 p-3 shadow-2xl shadow-black/30 sm:p-4 ${
                  video.aspect === "vertical"
                    ? "mx-auto w-full max-w-[330px] rounded-[2rem] border-white/15 bg-[#070706] p-3 sm:max-w-[360px]"
                    : ""
                }`}
              >
                <div
                  className={`overflow-hidden bg-black ${
                    video.aspect === "vertical"
                      ? "aspect-[9/16] rounded-[1.45rem]"
                      : "aspect-video"
                  }`}
                >
                  <iframe
                    className="h-full w-full"
                    src={video.embedUrl}
                    title={video.caption}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption
                  className={`mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c58f] sm:tracking-[0.22em] ${
                    video.aspect === "vertical" ? "text-center" : ""
                  }`}
                >
                  {video.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-4xl text-2xl font-medium leading-tight text-zinc-100 sm:text-5xl">
            Whether performing table to table or strolling through the crowd,
            Noah performs illusions your guests have never seen before.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center bg-[#d9c58f] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-100 sm:px-7"
          >
            Check Availability
          </Link>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              The experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-50 sm:mt-5 sm:text-5xl">
              Shared moments that turn into the thing everyone talks about.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="border-l border-[#d9c58f] bg-[#10100c]/60 p-5 text-base leading-7 text-zinc-300 sm:p-6"
              >
                <p>{review.quote}</p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9c58f]">
                  5-star review - {review.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
