import type { Metadata } from "next";
import { ContactIntake } from "@/components/contact/contact-intake";
import { SiteFooter } from "@/components/landing/footer";
import { SiteHeader } from "@/components/landing/header";
import { contactPageContent } from "@/content/contact";

export const metadata: Metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.metadata.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${contactPageContent.metadata.title} | Vextra Limited`,
    description: contactPageContent.metadata.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-off-white min-h-screen">
      <SiteHeader />
      <main>
        <ContactIntake />
      </main>
      <SiteFooter showProjectCta={false} />
    </div>
  );
}
