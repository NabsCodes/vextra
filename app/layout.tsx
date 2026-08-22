import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Geist, Funnel_Display } from "next/font/google";
import { SiteStructuredData } from "@/components/layout/site-structured-data";
import { rootMetadata } from "@/lib/metadata";
import { AppProviders } from "@/providers/app-providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = rootMetadata;

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
        <AppProviders>{children}</AppProviders>
        <SiteStructuredData />
        <Analytics />
      </body>
    </html>
  );
}
