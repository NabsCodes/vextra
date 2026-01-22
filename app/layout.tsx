import type { Metadata } from "next";
import { Geist, Funnel_Display } from "next/font/google";
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
  title: "Vextra Limited | Coming Soon",
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
    title: "Vextra Limited | Dependable Digital Products That Work",
    description:
      "We build simple, reliable digital products that solve real problems for communities, governments, and businesses across Nigeria and Africa.",
    images: [
      {
        url: "/Full Color Logo.png",
        width: 1200,
        height: 630,
        alt: "Vextra Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vextra Limited | Dependable Digital Products That Work",
    description:
      "We build simple, reliable digital products that solve real problems for communities, governments, and businesses across Nigeria and Africa.",
    images: ["/Full Color Logo.png"],
    creator: "@vextra",
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
      </body>
    </html>
  );
}
