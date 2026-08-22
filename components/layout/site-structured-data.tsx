import { siteStructuredData } from "@/content/seo";

export function SiteStructuredData() {
  const json = JSON.stringify(siteStructuredData).replace(/</g, "\\u003c");

  return <script type="application/ld+json">{json}</script>;
}
