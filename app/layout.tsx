import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// The voice: tight grotesk for the claims, mono for the operator.
const ui = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// The Pages URL the site is served from — the anchor for every
// absolute social URL. In CI builds Next applies the basePath itself,
// so give it the bare origin there; local builds get the full URL.
const SITE_ORIGIN = "https://sukrutn.github.io";
const PAGE_PATH = "/switchyard-site/";
const SITE_URL = SITE_ORIGIN + PAGE_PATH;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS === "true" ? SITE_ORIGIN : SITE_URL,
  ),
  title: "switchyard — a Go message broker that never lies",
  description:
    "One wire, one journal: fire-and-forget pub/sub, durable streams, key-value state, a console lens. Receipts, not hopes. Protocol v1 frozen.",
  keywords: [
    "go",
    "message broker",
    "pub/sub",
    "durable streams",
    "key-value",
    "journal",
    "receipts",
  ],
  openGraph: {
    title: "switchyard — a Go message broker that never lies",
    description:
      "One wire, one journal. Receipts, not hopes — protocol v1 frozen, families append, numbers never move.",
    url: SITE_URL,
    siteName: "switchyard",
    locale: "en_US",
    type: "website",
    images: [
      {
        // absolute on purpose:basePath must never sneak into social URLs
        url: SITE_URL + "opengraph-image",
        width: 1200,
        height: 628,
        alt: "switchyard — a Go message broker that never lies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "switchyard — a Go message broker that never lies",
    description:
      "One wire, one journal: pub/sub, durable streams, key-value state, a console lens. Receipts, not hopes.",
    images: [SITE_URL + "opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ui.variable} ${mono.variable}`}>
      <body>
        {/* No JS → no IntersectionObserver, so reveals must not stay lost. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
