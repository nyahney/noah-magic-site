import Link from "next/link";

const highlights = [
  "Black-tie corporate galas",
  "Intimate private events",
  "Walkaround magic",
  "Adults and teens",
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

const heroVideo = "/media/final-rev-real.mp4";
const featureImage = "/media/main-picture.jpg";

const featuredVideos = [
  {
    caption: "Magic of Noah Sizzle Reel",
    path: "/media/final-rev-real.mp4",
  },
  {
    caption: "Halloween Magic",
    path: "/media/magic-of-noah-halloween-2023-v1.mp4",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <video
          className="absolute inset-x-0 top-0 -z-20 h-[760px] w-full object-cover opacity-75"
          src={heroVideo}
          poster={featureImage}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.7)_38%,rgba(5,5,5,0.2)_100%),linear-gradient(180deg,rgba(5,5,5,0.1)_0%,#050505_92%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              Welcome to Noah Yahney Magic & Mentalism
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-normal text-zinc-50 sm:text-7xl lg:text-8xl">
              Forget everything you think you know about magicians.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Noah brings a modern perspective to an age-old craft, with 15
              years of professional magic and mentalism experience and
              collaborations with some of the best illusionists in the world.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100"
              >
                Drop us a line
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
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(5,5,5,0),rgba(5,5,5,0.82)),url('${featureImage}')`,
              }}
            />
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
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
              Watch
            </p>
            <h2 className="mt-5 text-4xl font-semibold text-zinc-50 sm:text-5xl">
              See the energy in motion.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredVideos.map((video) => (
              <figure
                key={video.path}
                className="border border-white/10 bg-white/[0.03] p-4"
              >
                <video
                  className="aspect-video w-full bg-black object-cover"
                  src={video.path}
                  controls
                  preload="metadata"
                  playsInline
                />
                <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d9c58f]">
                  {video.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-12">
          <p className="max-w-4xl text-3xl font-medium leading-tight text-zinc-100 sm:text-5xl">
            Whether performing table to table or strolling through the crowd,
            Noah performs illusions your guests have never seen before.
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
              Shared moments that turn into the thing everyone talks about.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="border-l border-[#d9c58f] bg-black/35 p-6 text-lg leading-7 text-zinc-300"
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
