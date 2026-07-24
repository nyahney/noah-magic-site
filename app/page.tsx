import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/media/noah-yahney-magician-hero-portrait.jpg";

const featuredVideos = [
  {
    label: "Signature reel",
    title: "Magic of Noah",
    embedUrl: "https://www.youtube.com/embed/qsaYrkshqNM",
    aspect: "wide",
  },
  {
    label: "At the event",
    title: "Halloween Magic",
    embedUrl: "https://www.youtube.com/embed/dG-3d_IDq1o",
    aspect: "vertical",
  },
];

const eventFormats = [
  {
    number: "01",
    title: "Corporate",
    body: "Polished walkaround entertainment for client receptions, team celebrations, and brand experiences where the energy in the room matters.",
    occasions: "Cocktail hours / dinners / holiday events",
  },
  {
    number: "02",
    title: "Private",
    body: "Close-up magic that gives every group a shared story, from an intimate dinner to a full-room celebration.",
    occasions: "Birthdays / private parties / milestone events",
  },
  {
    number: "03",
    title: "Celebrations",
    body: "Flexible, guest-first entertainment that fits naturally between the formal moments without competing with them.",
    occasions: "Weddings / Bar and Bat Mitzvahs / receptions",
  },
];

const testimonials = [
  {
    name: "Merle H.",
    quote:
      "Noah amazed everyone with his incredible tricks and showmanship. We could not give him a stronger recommendation. You will not be disappointed!",
  },
  {
    name: "Brian V.",
    quote:
      "Noah's abilities and magic will leave you breathless. He is one of a kind. You will be happy you hired him to perform.",
  },
  {
    name: "Danielle S.",
    quote:
      "Noah was a big hit at our recent celebration. He had both kids and adults watching in amazement. The magic was top notch!",
  },
];

const galleryPreview = [
  {
    src: "/media/noah-yahney-adult-event-close-up-magic.jpg",
    alt: "Guests reacting to Noah Yahney performing close-up magic",
    className: "gallery-preview-lead",
  },
  {
    src: "/media/main-picture.jpg",
    alt: "Noah Yahney performing card magic",
    className: "gallery-preview-portrait",
  },
  {
    src: "/media/noah-yahney-live-event-guest-reactions.jpg",
    alt: "Adult guests reacting together during an evening event",
    className: "gallery-preview-reaction",
  },
  {
    src: "/media/noah-yahney-mind-reading-performance.jpg",
    alt: "Noah Yahney performing mind reading for guests at a reception",
    className: "gallery-preview-crowd",
  },
  {
    src: "/media/noah-yahney-event-guest-reaction.jpg",
    alt: "Guests sharing a surprised reaction around a table",
    className: "gallery-preview-detail",
  },
];

const faqItems = [
  {
    question: "What type of events does Noah perform at?",
    answer:
      "Noah performs close-up magic and mentalism for private parties, corporate events, cocktail hours, weddings, Bar and Bat Mitzvahs, and luxury celebrations.",
  },
  {
    question: "What type of magic does Noah perform?",
    answer:
      "Noah specializes in modern close-up magic, visual magic, and mind reading performed inches away from guests. The experience is interactive, polished, and designed to create strong reactions throughout the room.",
  },
  {
    question: "Is the performance appropriate for adults and kids?",
    answer:
      "Yes. Noah's performances are designed for a wide range of audiences and can be tailored to the event, whether it is an adults-only cocktail hour, a family celebration, or a corporate gathering.",
  },
  {
    question: "Does Noah perform outside New York?",
    answer:
      "Yes. Noah is based in New York and is available for events across the East Coast, including New York, Long Island, New Jersey, Connecticut, Pennsylvania, and beyond.",
  },
  {
    question: "How long is a typical performance?",
    answer:
      "Each booking is shaped around the event format, guest count, and schedule. Close-up magic is commonly performed during cocktail hours, receptions, private parties, and other moments when guests are mingling.",
  },
  {
    question: "How do I book Noah for an event?",
    answer:
      "Use the inquiry form to share your event date, location, and details. Noah will follow up directly with availability and the best performance format for your event.",
  },
];

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=06a5c6fbedc9f216&rlz=1C1GCEA_enUS1179US1179&sxsrf=ANbL-n6_oT4k094shBvJusvee8sCbm0cdA:1778425063660&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfEN4rBi4sm9w9UehENhJJH5bq9uadivMY0m4vFjw3G0xQchQT3L7W725lTkAj_2j1pXoj0dmBIIqj4tN7rLGa_Qyl5z7CbgQnG45e8zxttV-CMo2A%3D%3D&q=Noah+Yahney+Magic+%26+Mentalism+Reviews&sa=X&ved=2ahUKEwjNiLfR_a6UAxUCjIkEHduGAEYQ0bkNegQIMBAF&biw=1920&bih=945&dpr=1";

function Stars() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src={heroImage}
            alt=""
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-light" aria-hidden="true" />

        <div className="page-shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span>Noah Yahney</span>
              <span>New York</span>
            </p>
            <h1>
              Modern magic for
              <span> unforgettable events.</span>
            </h1>
            <p className="hero-intro">
              Close-up magic and mentalism for premium private celebrations,
              corporate gatherings, and rooms where every detail matters.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Check availability
                <span aria-hidden="true">&#8594;</span>
              </Link>
              <Link className="button button-ghost" href="#watch">
                Watch the reel
              </Link>
            </div>
          </div>

          <div className="hero-proof">
            <p>
              <strong>15 years</strong>
              <span>creating impossible moments</span>
            </p>
            <ul aria-label="Event specialties">
              <li>Private celebrations</li>
              <li>Corporate events</li>
              <li>Weddings and milestones</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="page-shell experience-grid">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">The experience</p>
            <h2>
              Not a show guests watch.
              <em> An experience they enter.</em>
            </h2>
            <p className="section-intro">
              Noah moves through the room, creating personal moments inches
              away from your guests. The result feels spontaneous, social, and
              entirely at home in the event you designed.
            </p>
          </div>

          <figure className="experience-image scroll-reveal">
            <Image
              src="/media/noah-yahney-adult-event-close-up-magic.jpg"
              alt="Guests laughing and reacting during Noah Yahney's close-up performance"
              fill
              sizes="(min-width: 900px) 56vw, 100vw"
            />
            <figcaption>
              Close-up. Interactive. Tailored to the room.
            </figcaption>
          </figure>

          <div className="experience-notes scroll-reveal">
            <article>
              <span>01</span>
              <h3>Personal</h3>
              <p>Every group gets a moment that feels made for them.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Natural</h3>
              <p>The performance fits the event flow instead of stopping it.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Memorable</h3>
              <p>Guests leave with a shared story, not just something they saw.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section video-section" id="watch">
        <div className="page-shell">
          <div className="video-heading scroll-reveal">
            <div className="section-heading">
              <p className="eyebrow">Watch the reactions</p>
              <h2>See what happens when the room leans in.</h2>
            </div>
            <p>
              Real events. Unscripted reactions. A glimpse of the energy Noah
              brings into the room.
            </p>
          </div>

          <div className="video-composition">
            {featuredVideos.map((video, index) => (
              <figure
                className={`video-figure video-${video.aspect} scroll-reveal`}
                key={video.embedUrl}
              >
                <div className="video-frame">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption>
                  <span>0{index + 1}</span>
                  <span>
                    <small>{video.label}</small>
                    {video.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section events-section">
        <div className="page-shell events-layout">
          <div className="events-visual scroll-reveal">
            <Image
              src="/media/noah-yahney-corporate-event-performance.jpg"
              alt="Noah Yahney engaging guests at a corporate event"
              fill
              sizes="(min-width: 900px) 42vw, 100vw"
            />
            <p>
              From the first arrival
              <span>to the last conversation.</span>
            </p>
          </div>

          <div className="events-content">
            <div className="section-heading scroll-reveal">
              <p className="eyebrow">Designed around your event</p>
              <h2>One room. Every kind of guest.</h2>
              <p className="section-intro">
                Flexible formats let Noah meet the energy of the occasion,
                whether guests are mingling, seated, celebrating, or arriving.
              </p>
            </div>

            <div className="event-list">
              {eventFormats.map((event) => (
                <article className="event-item scroll-reveal" key={event.title}>
                  <span className="event-number">{event.number}</span>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.body}</p>
                    <small>{event.occasions}</small>
                  </div>
                </article>
              ))}
            </div>

            <Link className="text-link scroll-reveal" href="/contact">
              Find the right format for your event
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="page-shell">
          <div className="reviews-heading scroll-reveal">
            <div className="section-heading">
              <p className="eyebrow">Client reviews</p>
              <h2>The part guests keep talking about.</h2>
            </div>
            <a
              className="text-link"
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on Google
              <span aria-hidden="true">&#8599;</span>
            </a>
          </div>

          <blockquote className="review-featured scroll-reveal">
            <Stars />
            <p>&ldquo;{testimonials[0].quote}&rdquo;</p>
            <footer>{testimonials[0].name}</footer>
          </blockquote>

          <div className="review-secondary">
            {testimonials.slice(1).map((review) => (
              <blockquote className="scroll-reveal" key={review.name}>
                <Stars />
                <p>&ldquo;{review.quote}&rdquo;</p>
                <footer>{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-preview-section">
        <div className="page-shell">
          <div className="gallery-preview-heading scroll-reveal">
            <div className="section-heading">
              <p className="eyebrow">Inside the room</p>
              <h2>Real people. Real reactions.</h2>
            </div>
            <Link className="text-link" href="/gallery">
              Explore the gallery
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>

          <div className="gallery-preview-grid">
            {galleryPreview.map((image) => (
              <div
                className={`${image.className} gallery-preview-image scroll-reveal`}
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1000px) 42vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="page-shell faq-layout">
          <div className="section-heading faq-heading scroll-reveal">
            <p className="eyebrow">Before you inquire</p>
            <h2>A few useful details.</h2>
            <p className="section-intro">
              Every booking is shaped around the room, the timing, and the
              people you are bringing together.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="scroll-reveal" key={item.question}>
                <summary>
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <Image
          src="/media/noah-yahney-event-guest-reaction.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="final-cta-shade" aria-hidden="true" />
        <div className="page-shell final-cta-inner scroll-reveal">
          <p className="eyebrow">Your date. Your guests. One unforgettable room.</p>
          <h2>Give them something they never saw coming.</h2>
          <p>
            Share the date, location, and a few event details. Noah will follow
            up directly with availability and next steps.
          </p>
          <Link className="button button-primary" href="/contact">
            Start your inquiry
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
