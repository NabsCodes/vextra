import { ContactIntake } from "@/components/contact/contact-intake";
import { seoContent } from "@/content/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(seoContent.routes.contact);

export default function ContactPage() {
  return (
    <main>
      <ContactIntake />
    </main>
  );
}
