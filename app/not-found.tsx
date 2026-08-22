import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { NotFoundView } from "@/components/shared/not-found-view";
import { systemPagesContent } from "@/content/system-pages";

const content = systemPagesContent.notFound;

export const metadata: Metadata = {
  title: "Page not found",
  description: content.description,
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <div className="bg-off-white min-h-screen">
      <SiteHeader />
      <NotFoundView />
      <SiteFooter showProjectCta={false} />
    </div>
  );
}
