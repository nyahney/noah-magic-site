"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = {
  path: string;
  className?: string;
};

type GalleryLightboxProps = {
  items: GalleryItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem =
    selectedIndex === null ? null : items[selectedIndex] ?? null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + items.length) % items.length,
    );
  }

  function showNext() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % items.length,
    );
  }

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null
            ? currentIndex
            : (currentIndex - 1 + items.length) % items.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null
            ? currentIndex
            : (currentIndex + 1) % items.length,
        );
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [items.length, selectedIndex]);

  return (
    <>
      <div className="mt-10 grid auto-rows-[185px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.path}
            type="button"
            className={`group relative overflow-hidden border border-white/10 bg-[#10100c] text-left shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#d9c58f]/35 focus:outline-none focus-visible:border-[#d9c58f] ${item.className ?? ""}`}
            onClick={() => setSelectedIndex(index)}
            aria-label="Open gallery image"
          >
            <Image
              className="absolute inset-0 object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              src={item.path}
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030405]/92 p-4 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center border border-white/15 bg-white/10 text-2xl leading-none text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f] sm:right-6 sm:top-6"
            onClick={closeLightbox}
            aria-label="Close gallery image"
          >
            &times;
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-3xl text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f] sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Show previous image"
          >
            &#8249;
          </button>

          <div
            className="relative h-[82vh] w-[min(92vw,1200px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              className="object-contain"
              src={selectedItem.path}
              alt=""
              fill
              priority
              sizes="92vw"
            />
          </div>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-3xl text-zinc-100 transition hover:border-[#d9c58f] hover:text-[#d9c58f] sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Show next image"
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </>
  );
}
