import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://noahmagic.com"),
  title: {
    default: "Noah Magic | Modern Magician",
    template: "%s | Noah Magic",
  },
  description:
    "Premium close-up magic and modern mentalism for private events, weddings, and corporate experiences.",
  openGraph: {
    title: "Noah Magic | Modern Magician",
    description:
      "A sleek, cinematic performance brand for intimate magic and mentalism.",
    images: ["/media/og/noah-magic-og.jpg"],
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
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_0%,rgba(199,169,105,0.18),transparent_28%),linear-gradient(140deg,#050505_0%,#11100e_42%,#050505_100%)]" />
        <div className="cinematic-grain fixed inset-0 -z-10 opacity-40" />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-[#c7a969]/50 bg-[#c7a969]/10 text-sm font-semibold tracking-[0.18em] text-[#d9c58f]">
                NM
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-100 transition-colors group-hover:text-[#d9c58f]">
                Noah Magic
              </span>
            </Link>
            <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 sm:gap-8">
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
        <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>Premium magic and mentalism for events built around connection.</p>
            <div className="flex flex-wrap gap-5 uppercase tracking-[0.22em]">
              <a className="hover:text-[#d9c58f]" href="mailto:booking@example.com">
                booking@example.com
              </a>
              <a className="hover:text-[#d9c58f]" href="tel:+15550123456">
                (555) 012-3456
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
