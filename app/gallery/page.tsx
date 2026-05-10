import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Performance gallery for Noah Magic, featuring placeholder media paths for close-up magic and modern mentalism.",
};

const galleryItems = [
  {
    title: "Close-up set",
    path: "/media/gallery/closeup-cards-01.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Corporate reception",
    path: "/media/gallery/corporate-reception-01.jpg",
    className: "",
  },
  {
    title: "Table-side mentalism",
    path: "/media/gallery/table-mentalism-01.jpg",
    className: "",
  },
  {
    title: "Wedding cocktail hour",
    path: "/media/gallery/wedding-cocktail-01.jpg",
    className: "",
  },
  {
    title: "Private dinner",
    path: "/media/gallery/private-dinner-01.jpg",
    className: "md:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
            Gallery
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-zinc-50 sm:text-7xl">
            Moments designed to be felt in the room.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            These are placeholder media slots for now. Replace each referenced
            file in `/public/media/gallery/` when your final images and clips are
            ready.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.path}
              className={`group relative overflow-hidden border border-white/10 bg-zinc-950 ${item.className}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                style={{ backgroundImage: `url('${item.path}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="text-xl font-semibold text-zinc-50">
                  {item.title}
                </h2>
                <p className="mt-2 break-all font-mono text-xs text-zinc-500">
                  {item.path}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-zinc-400">
            Add performance photos, short vertical clips, audience reaction
            shots, and one polished portrait for the strongest first version.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100"
          >
            Start a booking
          </Link>
        </div>
      </div>
    </section>
  );
}
