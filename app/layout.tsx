import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noahyahney.com"),
  title: {
    default: "Noah Yahney | Modern Magician & Mentalist",
    template: "%s | Noah Yahney",
  },
  description:
    "Noah Yahney delivers modern magic and mentalism for private events, corporate gatherings, luxury celebrations, and unforgettable experiences.",
  applicationName: "Noah Yahney Magic & Mentalism",
  keywords: [
    "Noah Yahney",
    "New York magician",
    "corporate magician",
    "private event magician",
    "mentalist",
    "close-up magic",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Noah Yahney Magic & Mentalism",
    title: "Noah Yahney | Modern Magician & Mentalist",
    description:
      "Modern magic and mentalism for private events, corporate gatherings, luxury celebrations, and unforgettable experiences.",
    images: [
      {
        url: "/media/main-picture.jpg",
        alt: "Noah Yahney performing modern close-up magic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Yahney | Modern Magician & Mentalist",
    description:
      "Modern magic and mentalism for premium private and corporate events.",
    images: ["/media/main-picture.jpg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-atmosphere" aria-hidden="true" />

        <header className="site-header">
          <nav className="site-nav" aria-label="Primary navigation">
            <Link className="brand-lockup" href="/" aria-label="Noah Yahney home">
              <span className="brand-name">Noah Yahney</span>
              <span className="brand-discipline">Magic &amp; Mentalism</span>
            </Link>

            <div className="site-nav-links">
              <Link className="nav-home" href="/">
                Home
              </Link>
              <Link href="/gallery">Gallery</Link>
              <Link className="nav-inquiry" href="/contact">
                Inquire
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content">{children}</main>

        <footer className="site-footer">
          <div className="footer-primary">
            <div>
              <Link className="footer-brand" href="/">
                Noah Yahney
              </Link>
              <p>Modern magic and mentalism for rooms that matter.</p>
            </div>
            <p className="footer-location">
              New York, New Jersey, Connecticut, and beyond
            </p>
          </div>

          <div className="footer-secondary">
            <div className="footer-links">
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Booking inquiry</Link>
              <a
                href="https://www.instagram.com/magicofnoah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="footer-contact">
              <a href="mailto:noahyahney@gmail.com">
                noahyahney@gmail.com
              </a>
              <a href="tel:+15167814700">(516) 781-4700</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
