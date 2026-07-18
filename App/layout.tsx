import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mitt Ydv — Developer & Creator",
  description:
    "Mitt Ydv's personal terminal — a live status page with real-time uptime, socials, and visitor stats.",
  openGraph: {
    title: "Mitt Ydv — Developer & Creator",
    description:
      "Mitt Ydv's personal terminal — a live status page with real-time uptime, socials, and visitor stats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
