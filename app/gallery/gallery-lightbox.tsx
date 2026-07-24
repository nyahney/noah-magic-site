"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = {
  path: string;
  alt: string;
  className?: string;
};

type GalleryLightboxProps = {
  items: GalleryItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const selectedItem =
    selectedIndex === null ? null : items[selectedIndex] ?? null;

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => activeTriggerRef.current?.focus());
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + items.length) % items.length,
    );
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, selectedIndex, showNext, showPrevious]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            key={item.path}
            type="button"
            className={`gallery-tile ${item.className ?? ""}`}
            onClick={(event) => {
              activeTriggerRef.current = event.currentTarget;
              setSelectedIndex(index);
            }}
            aria-label={`Open image ${index + 1} of ${items.length}: ${item.alt}`}
            aria-haspopup="dialog"
          >
            <Image
              src={item.path}
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1100px) 25vw, (min-width: 700px) 34vw, 50vw"
            />
            <span className="gallery-tile-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {selectedItem && selectedIndex !== null ? (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <div className="lightbox-topbar">
            <p aria-live="polite">
              {String(selectedIndex + 1).padStart(2, "0")}
              <span>/</span>
              {String(items.length).padStart(2, "0")}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-control lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery image"
              title="Close"
            >
              &times;
            </button>
          </div>

          <button
            type="button"
            className="lightbox-control lightbox-previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Show previous image"
            title="Previous image"
          >
            &#8592;
          </button>

          <div
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedItem.path}
              alt={selectedItem.alt}
              fill
              loading="eager"
              sizes="96vw"
            />
          </div>

          <button
            type="button"
            className="lightbox-control lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Show next image"
            title="Next image"
          >
            &#8594;
          </button>
        </div>
      ) : null}
    </>
  );
}
