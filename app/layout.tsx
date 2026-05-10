import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  openGraph: {
    title: "Noah Yahney | Modern Magician & Mentalist",
    description:
      "Modern magic and mentalism for private events, corporate gatherings, luxury celebrations, and unforgettable experiences.",
    images: ["/media/main-picture.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-28 antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_0%,rgba(199,169,105,0.16),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(22,48,66,0.32),transparent_34%),linear-gradient(140deg,#080806_0%,#12110d_45%,#071018_100%)]" />
        <div className="cinematic-grain fixed inset-0 -z-10 opacity-35" />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080806]/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-zinc-100 transition-colors group-hover:text-[#d9c58f] sm:text-lg sm:tracking-[0.32em]">
                Noah Yahney
              </span>
            </Link>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 sm:gap-8 sm:text-xs sm:tracking-[0.22em]">
              <Link className="transition-colors hover:text-[#d9c58f]" href="/">
                Home
              </Link>
              <Link
                className="transition-colors hover:text-[#d9c58f]"
                href="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="transition-colors hover:text-[#d9c58f]"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/media/logo-take-1-no-background.png"
                alt="Noah Yahney Magic & Mentalism logo"
                width={52}
                height={52}
                className="h-12 w-auto object-contain"
              />
              <p>
                Available for events across Westchester, New York, Connecticut,
                and beyond.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] sm:gap-5 sm:tracking-[0.22em]">
              <a
                className="inline-flex items-center gap-2 hover:text-[#d9c58f]"
                href="https://www.instagram.com/magicofnoah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Noah Yahney on Instagram"
              >
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="17"
                    height="17"
                    x="3.5"
                    y="3.5"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="17" cy="7" r="1.1" fill="currentColor" />
                </svg>
                @magicofnoah
              </a>
              <a className="hover:text-[#d9c58f]" href="mailto:noahyahney@gmail.com">
                noahyahney@gmail.com
              </a>
              <a className="hover:text-[#d9c58f]" href="tel:+15167814700">
                (516) 781-4700
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
