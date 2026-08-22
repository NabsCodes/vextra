import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { siteContent } from "@/content/site";

export function LegalPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-off-white min-h-screen">
      <header className="border-border border-b">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <Link href="/" className="group flex items-center">
            <Image
              src="/secondary-logo-03.png"
              alt={siteContent.company.name}
              width={160}
              height={41}
              className="h-8 w-auto"
              quality={100}
            />
          </Link>
          <Link
            href="/"
            className="text-charcoal-grey/80 hover:text-vextra-green flex items-center gap-2 text-sm transition-colors"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>

      <footer className="border-border border-t">
        <div className="px-6 py-8 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-6">
            <span className="text-charcoal-grey/80 text-sm">
              &copy; {new Date().getFullYear()} {siteContent.company.name}. All
              rights reserved.
            </span>
            <Link
              href="/"
              className="text-charcoal-grey/80 hover:text-vextra-green shrink-0 text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
