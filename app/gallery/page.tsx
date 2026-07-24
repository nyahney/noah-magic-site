import type { Metadata } from "next";
import Link from "next/link";
import {
  GalleryLightbox,
  type GalleryItem,
} from "./gallery-lightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery for Noah Yahney, modern magician and mentalist for private events, corporate gatherings, and luxury celebrations.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Noah Yahney",
    description:
      "Real event reactions, close-up moments, and performance photography from Noah Yahney.",
    url: "/gallery",
  },
};

const galleryItems: GalleryItem[] = [
  {
    path: "/media/noah-yahney-adult-event-close-up-magic.jpg",
    alt: "Guests laughing during an interactive close-up magic performance",
    className: "gallery-feature",
  },
  {
    path: "/media/main-picture.jpg",
    alt: "Noah Yahney performing card magic in a blue blazer",
    className: "gallery-tall",
  },
  {
    path: "/media/noah-yahney-live-event-guest-reactions.jpg",
    alt: "Adult guests reacting together during an evening event",
  },
  {
    path: "/media/noah-yahney-bat-mitzvah-guest-interaction.jpg",
    alt: "Noah Yahney entertaining guests at a celebration",
  },
  {
    path: "/media/noah-yahney-mind-reading-performance.jpg",
    alt: "Noah Yahney performing mind reading for guests at a reception",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-event-guest-reaction.jpg",
    alt: "Guests sharing a surprised reaction around a table",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-guests-watching-magic.jpg",
    alt: "Guests watching an outdoor close-up magic performance",
    className: "gallery-tall",
  },
  {
    path: "/media/noah-yahney-interactive-magic-moment.jpg",
    alt: "Guests taking part in an interactive magic moment",
  },
  {
    path: "/media/noah-yahney-audience-reaction-wide.jpg",
    alt: "A wide view of guests reacting during a celebration",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-corporate-event-performance.jpg",
    alt: "Noah Yahney performing a mind-reading moment at an event",
  },
  {
    path: "/media/noah-yahney-close-up-audience-reaction.jpg",
    alt: "Teen guests reacting to an impossible close-up moment",
  },
  {
    path: "/media/noah-yahney-close-up-performance-reaction.jpg",
    alt: "A group watching a close-up magic performance",
  },
  {
    path: "/media/noah-yahney-sleight-of-hand-performance.jpg",
    alt: "Noah Yahney demonstrating sleight of hand for guests",
  },
  {
    path: "/media/noah-yahney-guest-interaction-magic.jpg",
    alt: "Noah Yahney interacting with a guest during a performance",
  },
  {
    path: "/media/noah-yahney-performance-room-reaction.jpg",
    alt: "Guests reacting together across a performance room",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-close-up-magic-event-moment.jpg",
    alt: "A group gathered for a close-up magic moment",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-private-event-magic.jpg",
    alt: "Guests watching magic at a private event",
  },
  {
    path: "/media/noah-yahney-prom-close-up-magic.jpg",
    alt: "Students reacting to close-up magic at a prom",
  },
  {
    path: "/media/noah-yahney-crowd-interaction-magic.jpg",
    alt: "A crowd gathered around Noah Yahney during a magic moment",
    className: "gallery-wide",
  },
  {
    path: "/media/noah-yahney-table-side-magic-reaction.jpg",
    alt: "A table-side magic performance creating surprised reactions",
  },
  {
    path: "/media/noah-yahney-close-up-sleight-of-hand.jpg",
    alt: "A close-up view of a sleight-of-hand performance",
  },
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <section className="gallery-intro">
        <div className="page-shell gallery-intro-layout">
          <div>
            <p className="eyebrow">Selected moments</p>
            <h1>The room, caught in the moment.</h1>
          </div>
          <div className="gallery-intro-copy">
            <p>
              Real events, close-up encounters, and the split second when an
              entire group realizes something impossible just happened.
            </p>
            <span>Private events / corporate gatherings / celebrations</span>
          </div>
        </div>
      </section>

      <section className="gallery-collection" aria-label="Event photo gallery">
        <div className="page-shell">
          <GalleryLightbox items={galleryItems} />
        </div>
      </section>

      <section className="gallery-cta">
        <div className="page-shell gallery-cta-inner">
          <div>
            <p className="eyebrow">Bring this energy to your event</p>
            <h2>Make the next reaction yours.</h2>
          </div>
          <Link className="button button-primary" href="/contact">
            Check availability
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
