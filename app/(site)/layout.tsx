import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-off-white min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
