import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Vextra Limited collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPage() {
  const lastUpdated = "February 5, 2026";

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <header className="border-border border-b">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link href="/" className="group flex items-center">
            <Image
              src="/secondary-logo-03.png"
              alt="Vextra Limited"
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

      {/* Content */}
      <main className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          {/* Title */}
          <div className="border-border mb-12 border-b pb-12">
            <p className="text-charcoal-grey/80 mb-3 text-xs tracking-[0.2em] uppercase">
              Legal
            </p>
            <h1 className="font-display text-charcoal-grey mb-4 text-4xl font-medium tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-charcoal-grey/50 text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <div className="prose-charcoal space-y-8">
            {/* Introduction */}
            <Section title="Introduction">
              <p>
                Vextra Limited (&quot;Vextra,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website at vextralimited.com and use our services.
              </p>
              <p>
                By accessing or using our services, you agree to the terms of
                this Privacy Policy. If you do not agree with the terms of this
                Privacy Policy, please do not access or use our services.
              </p>
            </Section>

            {/* Information We Collect */}
            <Section title="Information We Collect">
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect includes:
              </p>
              <h4>Personal Data</h4>
              <p>
                Personally identifiable information that you voluntarily provide
                to us when you sign up for our waitlist, contact us, or
                otherwise engage with our services. This may include:
              </p>
              <ul>
                <li>Email address</li>
                <li>Name (if provided)</li>
                <li>Company or organization name (if provided)</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <h4>Automatically Collected Data</h4>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns, including:
              </p>
              <ul>
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs and pages visited</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
              </ul>
            </Section>

            {/* How We Use Your Information */}
            <Section title="How We Use Your Information">
              <p>
                We use the information we collect for various purposes,
                including to:
              </p>
              <ul>
                <li>
                  Notify you about our product launches, updates, and services
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Analyze usage patterns to improve our website and services
                </li>
                <li>Send you marketing communications (with your consent)</li>
                <li>
                  Comply with legal obligations and protect our rights and
                  interests
                </li>
                <li>Detect and prevent fraud or unauthorized access</li>
              </ul>
            </Section>

            {/* Information Sharing */}
            <Section title="Information Sharing and Disclosure">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <h4>Service Providers</h4>
              <p>
                We may share your information with third-party service providers
                who perform services on our behalf, such as email delivery
                (Resend), analytics (Vercel Analytics), and hosting services.
                These providers are bound by contractual obligations to keep
                your information confidential and use it only for the purposes
                for which we disclose it to them.
              </p>
              <h4>Legal Requirements</h4>
              <p>
                We may disclose your information if required to do so by law or
                in response to valid requests by public authorities (e.g., a
                court or government agency).
              </p>
              <h4>Business Transfers</h4>
              <p>
                If Vextra is involved in a merger, acquisition, or sale of
                assets, your information may be transferred as part of that
                transaction. We will provide notice before your information
                becomes subject to a different privacy policy.
              </p>
            </Section>

            {/* Data Security */}
            <Section title="Data Security">
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or method
                of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </Section>

            {/* Data Retention */}
            <Section title="Data Retention">
              <p>
                We will retain your personal information only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your information to the extent necessary to
                comply with our legal obligations, resolve disputes, and enforce
                our policies.
              </p>
            </Section>

            {/* Your Rights */}
            <Section title="Your Rights">
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> Request access to your personal data
                  we hold
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to the processing of your
                  personal data
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent at any time
                  where we rely on consent
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@vextralimited.com">
                  info@vextralimited.com
                </a>
                .
              </p>
            </Section>

            {/* Cookies */}
            <Section title="Cookies and Tracking Technologies">
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier.
              </p>
              <p>
                We use analytics services (such as Vercel Analytics) to help us
                understand how visitors engage with our website. These services
                may use cookies and similar technologies to collect information
                about your use of the website.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                services.
              </p>
            </Section>

            {/* Third-Party Links */}
            <Section title="Third-Party Links">
              <p>
                Our website may contain links to third-party websites that are
                not operated by us. If you click on a third-party link, you will
                be directed to that third party&apos;s site. We strongly advise
                you to review the Privacy Policy of every site you visit. We
                have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
            </Section>

            {/* Children's Privacy */}
            <Section title="Children's Privacy">
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personally identifiable
                information from children under 18. If we become aware that we
                have collected personal data from a child under 18 without
                verification of parental consent, we take steps to remove that
                information from our servers.
              </p>
            </Section>

            {/* International Transfers */}
            <Section title="International Data Transfers">
              <p>
                Your information may be transferred to and maintained on
                computers located outside of your state, province, country, or
                other governmental jurisdiction where the data protection laws
                may differ from those of your jurisdiction. By providing us with
                your information, you consent to such transfer.
              </p>
            </Section>

            {/* Changes */}
            <Section title="Changes to This Privacy Policy">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date at the
                top of this Privacy Policy. You are advised to review this
                Privacy Policy periodically for any changes. Changes to this
                Privacy Policy are effective when they are posted on this page.
              </p>
            </Section>

            {/* Contact */}
            <Section title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@vextralimited.com">
                    info@vextralimited.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+2348122353161">+234 812 235 3161</a>
                </li>
              </ul>
              <p>
                Vextra Limited
                <br />
                Nigeria
              </p>
            </Section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border border-t">
        <div className="px-6 py-8 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <span className="text-charcoal-grey/80 text-sm">
              &copy; {new Date().getFullYear()} Vextra Limited. All rights
              reserved.
            </span>
            <Link
              href="/"
              className="text-charcoal-grey/80 hover:text-vextra-green text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-charcoal-grey font-display mb-4 text-xl font-medium tracking-tight">
        {title}
      </h2>
      <div className="text-charcoal-grey/70 [&_a]:text-vextra-green hover:[&_a]:text-deep-teal [&_h4]:text-charcoal-grey space-y-4 text-[15px] leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:tracking-wide [&_h4]:uppercase [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
