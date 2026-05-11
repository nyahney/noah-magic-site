import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const featureImage = "/media/new-website-main-pic.jpg";

const trustItems = [
  "15 Years Experience",
  "Private Events",
  "Corporate Gatherings",
  "Luxury Celebrations",
];

const eventTypes = [
  {
    title: "Private Parties",
    body: "Close-up moments that turn living rooms, rooftops, and private dinners into something guests keep talking about.",
  },
  {
    title: "Corporate Events",
    body: "Polished, guest-friendly entertainment for client receptions, team celebrations, and high-touch brand experiences.",
  },
  {
    title: "Cocktail Hours",
    body: "Walkaround magic that breaks the ice, fills transition time, and gives every group a shared reaction.",
  },
  {
    title: "Bar/Bat Mitzvahs",
    body: "Interactive magic for teens and adults, designed to keep energy high without feeling like a kids' show.",
  },
  {
    title: "Holiday Parties",
    body: "A premium way to add surprise, conversation, and momentum to seasonal celebrations.",
  },
  {
    title: "Weddings & Receptions",
    body: "Elegant close-up entertainment for cocktail hours, receptions, and the moments between formalities.",
  },
];

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

const testimonials = [
  {
    name: "Merle H.",
    quote: (
      <>
        Noah amazed everyone with his <span className="font-semibold text-zinc-50">incredible tricks</span> and
        showmanship. We could not give him a stronger recommendation. You will not be disappointed!
      </>
    ),
  },
  {
    name: "Brian V.",
    quote: (
      <>
        Noah&apos;s abilities and magic will leave you breathless. He is{" "}
        <span className="font-semibold text-zinc-50">one of a kind</span>. You will be happy you hired him to perform.
      </>
    ),
  },
  {
    name: "Danielle S.",
    quote: (
      <>
        Noah was a <span className="font-semibold text-zinc-50">big hit</span> at our recent celebration. He had both
        kids and adults watching in amazement. The magic was top notch!
      </>
    ),
  },
];

const galleryPreview = [
  "/media/main-picture.jpg",
  "/media/great-reactions-2.jpg",
  "/media/another-adult-interaction-shot-00021-todd-yahney-events-pencu-bat-mitzvah.jpg",
  "/media/standstill-adult-shot-crop-guy-on-right.jpg",
  "/media/crowd-interaction-magic.jpg",
  "/media/table-side-magic-reaction.jpg",
];

const heroCollage = [
  "/media/great-reactions-2.jpg",
  "/media/standstill-adult-shot-crop-guy-on-right.jpg",
  "/media/table-side-magic-reaction.jpg",
];

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=06a5c6fbedc9f216&rlz=1C1GCEA_enUS1179US1179&sxsrf=ANbL-n6_oT4k094shBvJusvee8sCbm0cdA:1778425063660&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfEN4rBi4sm9w9UehENhJJH5bq9uadivMY0m4vFjw3G0xQchQT3L7W725lTkAj_2j1pXoj0dmBIIqj4tN7rLGa_Qyl5z7CbgQnG45e8zxttV-CMo2A%3D%3D&q=Noah+Yahney+Magic+%26+Mentalism+Reviews&sa=X&ved=2ahUKEwjNiLfR_a6UAxUCjIkEHduGAEYQ0bkNegQIMBAF&biw=1920&bih=945&dpr=1";

export default function Home() {
  return (
    <div className="home-canvas">
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="light-sweep pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal max-w-3xl">
            <p className="mb-4 text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
              ELEVATED ENTERTAINMENT
            </p>
            <h1 className="text-4xl font-semibold leading-[0.96] tracking-normal text-zinc-50 sm:text-6xl lg:text-7xl">
              Modern Magic & Mentalism for Premium Events
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
              Noah Yahney creates interactive, high-energy moments that get
              guests laughing, reacting, and talking long after the event ends.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="cta-glow inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.17em] text-black transition hover:bg-zinc-100"
              >
                Check Availability
              </Link>
              <Link
                href="#watch"
                className="cta-glow inline-flex h-12 items-center justify-center border border-white/20 bg-white/[0.03] px-7 text-sm font-semibold uppercase tracking-[0.17em] text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f]"
              >
                Watch the Reel
              </Link>
            </div>
          </div>

          <div className="reveal-delay relative min-h-[430px] sm:min-h-[620px]">
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_45%_35%,rgba(217,197,143,0.24),transparent_54%),radial-gradient(circle_at_80%_18%,rgba(82,109,199,0.16),transparent_44%)] blur-2xl" />
            <div className="absolute left-0 top-0 w-[74%] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#10100c]/70 p-2 shadow-2xl shadow-black/50 sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                <Image
                  className="object-cover"
                  src={featureImage}
                  alt="Noah Yahney performing modern magic and mentalism"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent" />
              </div>
            </div>
            <div
              className="float-slow absolute right-0 top-8 w-[38%] overflow-hidden rounded-2xl border border-white/15 bg-[#10100c]/80 p-2 shadow-2xl shadow-black/45"
              style={{ "--rotate": "3deg" } as CSSProperties}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  className="object-cover opacity-90"
                  src={heroCollage[0]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18vw, 38vw"
                />
              </div>
            </div>
            <div
              className="float-slower absolute bottom-8 right-6 w-[46%] overflow-hidden rounded-2xl border border-[#d9c58f]/25 bg-[#10100c]/85 p-2 shadow-2xl shadow-black/45 sm:right-10"
              style={{ "--rotate": "-2deg" } as CSSProperties}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                <Image
                  className="object-cover opacity-90"
                  src={heroCollage[1]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22vw, 46vw"
                />
              </div>
            </div>
            <div
              className="float-slow absolute bottom-2 left-[12%] w-[38%] overflow-hidden rounded-2xl border border-white/10 bg-[#10100c]/80 p-2 shadow-2xl shadow-black/40 sm:bottom-12"
              style={{ "--rotate": "1deg" } as CSSProperties}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                <Image
                  className="object-cover opacity-90"
                  src={heroCollage[2]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18vw, 38vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
              About the experience
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
                Entertainment that feels{" "}
                <span className="rotating-word text-[#d9c58f]">
                  <span className="block">personal</span>
                  <span className="block">impossible</span>
                  <span className="block">unforgettable</span>
                  <span className="block">effortless</span>
                </span>
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Not a stage show. Not a scripted routine. Noah creates
                interactive, close-up moments that happen inches away from your
                guests, making the entertainment feel personal, spontaneous, and
                impossible.
              </p>
          </div>
        </div>
      </section>

      <section className="scroll-reveal px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-3 border-y border-white/10 px-5 py-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 sm:gap-x-6">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section
        id="watch"
        className="scroll-reveal px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="localized-glow mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="stagger-in text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
                Watch
              </p>
              <h2 className="stagger-in stagger-1 mt-4 text-3xl font-semibold text-zinc-50 sm:text-5xl">
                See the reactions.
              </h2>
              <p className="stagger-in stagger-2 mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                A glimpse at the energy, surprise, and shared moments Noah
                brings to live events.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            {featuredVideos.map((video, index) => (
              <figure
                key={video.embedUrl}
                className={`premium-frame stagger-in ${
                  index === 0 ? "stagger-2" : "stagger-3"
                } media-card group border border-white/15 bg-[#10100c]/86 p-3 shadow-2xl shadow-black/40 transition hover:border-[#d9c58f]/50 sm:p-4 ${
                  video.aspect === "vertical"
                    ? "mx-auto w-full max-w-[330px] rounded-[2rem] border-white/20 bg-[#07080a] p-3 sm:max-w-[365px]"
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
                  className={`mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d9c58f] ${
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

      <section className="scroll-reveal px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
              Events
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-50 sm:text-5xl">
              Built for rooms where experience matters.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((eventType) => (
              <article
                className="lift-glow group border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-6 hover:border-[#d9c58f]/45 hover:bg-white/[0.06]"
                key={eventType.title}
              >
                <div className="mb-7 h-px w-12 bg-[#d9c58f]" />
                <h3 className="text-2xl font-semibold text-zinc-50">
                  {eventType.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {eventType.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal px-5 py-16 sm:px-8 sm:py-20">
        <div className="warm-trust-glow mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-50 sm:text-5xl">
              Trusted by hosts who need the room to come alive.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((review) => (
              <blockquote
                key={review.name}
                className="lift-glow border border-white/10 bg-[#10100c]/72 p-6 text-base leading-7 text-zinc-300 hover:border-[#d9c58f]/40 hover:shadow-[0_0_38px_rgba(217,197,143,0.08)]"
              >
                <div
                  className="mb-5 flex gap-1 text-[#d9c58f] drop-shadow-[0_0_10px_rgba(217,197,143,0.2)]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className="size-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1.7l2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8L10 1.7z" />
                    </svg>
                  ))}
                </div>
                <p>{review.quote}</p>
                <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9c58f]">
                  {review.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8">
            <a
              className="inline-flex h-11 items-center justify-center border border-[#d9c58f]/35 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c58f] transition hover:bg-[#d9c58f] hover:text-black"
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              See More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      <section className="scroll-reveal px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div>
              <p className="text-[17px] font-semibold uppercase tracking-[0.34em] text-[#d9c58f]">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 sm:text-5xl">
                Moments with real energy.
              </h2>
            </div>
          </div>
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-6">
            {galleryPreview.map((image, index) => (
              <div
                key={image}
                className={`lift-glow relative overflow-hidden border border-white/10 bg-[#10100c] hover:border-[#d9c58f]/30 ${
                  index === 0 || index === 4 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  className="object-cover opacity-85 transition duration-500 hover:scale-105 hover:opacity-100"
                  src={image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/gallery"
              className="cta-glow inline-flex h-11 items-center justify-center border border-white/15 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-[#d9c58f] hover:text-[#d9c58f]"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-10 sm:px-8 sm:pb-28">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#14130f] px-6 py-10 shadow-2xl shadow-black/30 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(217,197,143,0.16),transparent_42%),radial-gradient(circle_at_88%_100%,rgba(82,109,199,0.12),transparent_44%)]" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-zinc-50 sm:text-6xl">
              Make your event unforgettable.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-300 sm:text-lg">
              Tell Noah about the date, location, and type of event. You&apos;ll
              get availability and next steps.
            </p>
            <Link
              href="/contact"
              className="cta-glow mt-8 inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.17em] text-black transition hover:bg-zinc-100"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
