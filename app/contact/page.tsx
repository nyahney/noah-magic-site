import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Noah Yahney, modern magician and mentalist for private events, corporate gatherings, luxury celebrations, and unforgettable experiences.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Noah Yahney",
    description:
      "Check availability for modern magic and mentalism at your private or corporate event.",
    url: "/contact",
  },
};

const bookingDetails = [
  "Event date and location",
  "Guest count and event type",
  "Preferred performance format",
  "Timing or venue considerations",
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Image
          src="/media/noah-yahney-bat-mitzvah-guest-interaction.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="contact-hero-shade" aria-hidden="true" />
        <div className="page-shell contact-hero-inner">
          <p className="eyebrow">Booking inquiry</p>
          <h1>Let&apos;s make the room unforgettable.</h1>
          <p>
            Tell Noah what you are planning. You will hear back directly with
            availability, the right performance format, and clear next steps.
          </p>
        </div>
      </section>

      <section className="section contact-booking">
        <div className="page-shell contact-layout">
          <aside className="contact-details scroll-reveal">
            <p className="eyebrow">The essentials</p>
            <h2>A few details are all it takes to start.</h2>
            <p>
              Every event is different. Share what you know now, and Noah can
              help shape the rest around your guest count, venue, and schedule.
            </p>

            <div className="contact-detail-list">
              {bookingDetails.map((detail, index) => (
                <p key={detail}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {detail}
                </p>
              ))}
            </div>

            <div className="direct-contact">
              <p>Prefer to reach out directly?</p>
              <a href="mailto:noahyahney@gmail.com?subject=Event%20Booking%20Inquiry">
                noahyahney@gmail.com
              </a>
              <a href="tel:+15167814700">(516) 781-4700</a>
            </div>

            <p className="contact-region">
              Based in New York. Available across New York, New Jersey,
              Connecticut, Pennsylvania, and beyond.
            </p>
          </aside>

          <div className="booking-form-panel scroll-reveal">
            <div className="booking-form-heading">
              <p className="eyebrow">Your event</p>
              <h2>Check availability</h2>
              <p>Share the essentials and Noah will follow up directly.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
