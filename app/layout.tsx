import type { Metadata } from "next";
import { Geist, Funnel_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vextra Limited - Built to Work | Coming Soon",
    template: "%s | Vextra Limited",
  },
  description:
    "We build simple, reliable digital products that solve real problems for communities, governments, and businesses across Nigeria and Africa. Built to Work.",
  keywords: [
    "Vextra",
    "Vextra Limited",
    "digital products",
    "software development",
    "Nigeria",
    "Africa",
    "technology",
    "product engineering",
  ],
  authors: [{ name: "Vextra Limited" }],
  creator: "Vextra Limited",
  publisher: "Vextra Limited",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vextralimited.com",
    siteName: "Vextra Limited",
    title: "Vextra Limited - Built to Work",
    description:
      "We build simple, reliable digital products that solve real problems for communities, governments, and businesses across Nigeria and Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vextra Limited - Built to Work",
    description:
      "We build simple, reliable digital products that solve real problems for communities, governments, and businesses across Nigeria and Africa.",
    creator: "@vextrahq",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://vextralimited.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${funnelDisplay.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
