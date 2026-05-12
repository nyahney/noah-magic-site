import type { Metadata } from "next";
import Link from "next/link";
import { GalleryLightbox } from "./gallery-lightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery for Noah Yahney, modern magician and mentalist for private events, corporate gatherings, and luxury celebrations.",
};

type GalleryItem = {
  path: string;
  className?: string;
};

const galleryItems: GalleryItem[] = [
  {
    path: "/media/main-picture.jpg",
    className: "md:row-span-2",
  },
  {
    path: "/media/noah-yahney-bat-mitzvah-guest-interaction.jpg",
  },
  {
    path: "/media/noah-yahney-prom-close-up-magic.jpg",
  },
  {
    path: "/media/noah-yahney-close-up-performance-reaction.jpg",
  },
  {
    path: "/media/noah-yahney-performance-room-reaction.jpg",
  },
  {
    path: "/media/noah-yahney-audience-reaction-wide.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/noah-yahney-corporate-event-performance.jpg",
  },
  {
    path: "/media/noah-yahney-guests-watching-magic.jpg",
    className: "md:row-span-2",
  },
  {
    path: "/media/noah-yahney-live-event-guest-reactions.jpg",
  },
  {
    path: "/media/noah-yahney-guest-interaction-magic.jpg",
  },
  {
    path: "/media/noah-yahney-event-guest-reaction.jpg",
  },
  {
    path: "/media/noah-yahney-crowd-interaction-magic.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/noah-yahney-close-up-audience-reaction.jpg",
  },
  {
    path: "/media/noah-yahney-sleight-of-hand-performance.jpg",
  },
  {
    path: "/media/noah-yahney-mind-reading-performance.jpg",
  },
  {
    path: "/media/noah-yahney-private-event-magic.jpg",
  },
  {
    path: "/media/noah-yahney-adult-event-close-up-magic.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/noah-yahney-close-up-magic-event-moment.jpg",
  },
  {
    path: "/media/noah-yahney-interactive-magic-moment.jpg",
  },
  {
    path: "/media/noah-yahney-table-side-magic-reaction.jpg",
  },
  {
    path: "/media/noah-yahney-close-up-sleight-of-hand.jpg",
  },
];

export default function GalleryPage() {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_20%_0%,rgba(217,197,143,0.13),transparent_42%),radial-gradient(circle_at_90%_0%,rgba(82,109,199,0.14),transparent_42%)] [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[17px] font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-50 sm:mt-5 sm:text-7xl">
            Photo Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A unified photo gallery of real event reactions, close-up moments,
            and performance images.
          </p>
        </div>

        <GalleryLightbox items={galleryItems} />

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-zinc-400">
            Modern, visual, high-energy, interactive magic for adults and teens,
            blending mind-reading techniques and sleight-of-hand.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
