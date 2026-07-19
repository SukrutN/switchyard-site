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

export const metadata: Metadata = {
  title: "switchyard — a Go message broker that never lies",
  description:
    "One wire, one journal: fire-and-forget pub/sub, durable streams, key-value state, a console lens. Receipts, not hopes. v1.0.",
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
