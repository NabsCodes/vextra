import type { Metadata } from "next";
import { SITE_URL, seoContent, type SeoRoute } from "@/content/seo";

const socialImages = {
  openGraph: "/opengraph-image.jpg",
  twitter: "/twitter-image.jpg",
} as const;

export function createPageMetadata(route: SeoRoute): Metadata {
  const isHome = route.path === "/";

  return {
    title: isHome ? { absolute: route.title } : route.title,
    description: route.description,
    alternates: { canonical: route.path },
    robots: { index: route.indexable, follow: route.indexable },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: route.path,
      siteName: seoContent.site.name,
      title: route.title,
      description: route.description,
      images: [socialImages.openGraph],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      creator: seoContent.site.twitterCreator,
      images: [socialImages.twitter],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seoContent.site.defaultTitle,
    template: seoContent.site.titleTemplate,
  },
  description: seoContent.site.description,
  keywords: [...seoContent.site.keywords],
  authors: [{ name: seoContent.site.name }],
  creator: seoContent.site.name,
  publisher: seoContent.site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: seoContent.site.name,
    title: seoContent.site.defaultTitle,
    description: seoContent.site.socialDescription,
    images: [socialImages.openGraph],
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.site.defaultTitle,
    description: seoContent.site.socialDescription,
    creator: seoContent.site.twitterCreator,
    images: [socialImages.twitter],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};
