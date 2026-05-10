import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    path: "/media/another-adult-interaction-shot-00021-todd-yahney-events-pencu-bat-mitzvah.jpg",
  },
  {
    path: "/media/midwood-prom-2024-img-206.jpg",
  },
  {
    path: "/media/0n9a4268.jpg",
  },
  {
    path: "/media/3.jpg",
  },
  {
    path: "/media/ehhh.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/farber528a1486.jpg",
  },
  {
    path: "/media/good.jpg",
    className: "md:row-span-2",
  },
  {
    path: "/media/great-reactions-2.jpg",
  },
  {
    path: "/media/img-146.jpg",
  },
  {
    path: "/media/img-231.jpg",
  },
  {
    path: "/media/img-353.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/img-366.jpg",
  },
  {
    path: "/media/img-814.jpg",
  },
  {
    path: "/media/img-916.jpg",
  },
  {
    path: "/media/img-1037.jpg",
  },
  {
    path: "/media/standstill-adult-shot-crop-guy-on-right.jpg",
    className: "md:col-span-2",
  },
  {
    path: "/media/okay.jpg",
  },
  {
    path: "/media/use.jpg",
  },
  {
    path: "/media/use-12.jpg",
  },
  {
    path: "/media/use-2.jpg",
  },
];

export default function GalleryPage() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d9c58f]">
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

        <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:gap-4 md:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.path}
              className={`group relative overflow-hidden border border-white/10 bg-[#10100c] ${item.className ?? ""}`}
            >
              <Image
                className="absolute inset-0 object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                src={item.path}
                alt=""
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </article>
          ))}
        </div>

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
