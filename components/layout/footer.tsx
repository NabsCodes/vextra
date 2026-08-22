"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { siteContent, socialLinks } from "@/content/site";

export function SiteFooter({ showProjectCta }: { showProjectCta?: boolean }) {
  const pathname = usePathname();
  const shouldShowProjectCta = showProjectCta ?? pathname !== "/contact";
  return (
    <footer className="bg-off-white text-charcoal-grey">
      {/* Main footer content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div>
          {shouldShowProjectCta ? (
            <div className="border-charcoal-grey/10 border-b pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <h3 className="font-display mb-3 text-2xl font-medium tracking-tight md:text-3xl">
                    {siteContent.footer.projectTitle}
                  </h3>
                  <p className="text-charcoal-grey/50 max-w-md">
                    {siteContent.footer.projectDescription}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-charcoal-grey bg-vextra-green hover:bg-deep-teal inline-flex w-fit items-center gap-3 rounded-lg px-6 py-3.5 text-sm font-medium tracking-wide transition-colors hover:text-white"
                >
                  <span>{siteContent.navigation.projectCta}</span>
                  <FaArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          ) : null}

          {/* Middle section - Links & Info */}
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 md:gap-12 md:py-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/secondary-logo-03.png"
                alt="Vextra Limited"
                width={180}
                height={54}
                className="mb-4 h-8 w-auto"
                quality={100}
              />
              <p className="text-charcoal-grey/50 max-w-xs text-sm leading-relaxed">
                {siteContent.company.description}
              </p>
            </div>

            {/* Contact */}
            <div>
              <span className="text-charcoal-grey/50 mb-4 block text-xs tracking-widest uppercase">
                Contact
              </span>
              <motion.a
                href={siteContent.contact.emailHref}
                className="hover:text-vextra-green text-charcoal-grey/70 flex items-center gap-2 text-sm transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="h-4 w-4" />
                <span>Email us</span>
              </motion.a>
              <motion.a
                href={siteContent.contact.phoneHref}
                className="hover:text-vextra-green text-charcoal-grey/70 mt-3 flex items-center gap-2 text-sm transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className="h-4 w-4" />
                <span>{siteContent.contact.phone}</span>
              </motion.a>
            </div>

            {/* Social */}
            <div>
              <span className="text-charcoal-grey/50 mb-4 block text-xs tracking-widest uppercase">
                Social
              </span>
              <div className="flex flex-col gap-3">
                {socialLinks.map((item) => {
                  const baseClassName =
                    "flex items-center gap-2 text-charcoal-grey/70 hover:text-vextra-green transition-colors duration-300 text-sm";

                  const icon =
                    item.key === "linkedin" ? (
                      <FaLinkedin className="h-4 w-4" />
                    ) : item.key === "x" ? (
                      <FaXTwitter className="h-4 w-4" />
                    ) : (
                      <FaInstagram className="h-4 w-4" />
                    );

                  return (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      className={baseClassName}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {icon}
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-charcoal-grey/10 bg-charcoal-grey/5 border-t">
        <div className="px-6 py-6 md:px-12 lg:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-charcoal-grey/50 text-sm">
                &copy; {new Date().getFullYear()} {siteContent.company.name}.
                All rights reserved.
              </span>
              <span className="text-charcoal-grey/50 hidden sm:inline">
                &bull;
              </span>
              <Link
                href="/privacy"
                className="hover:text-vextra-green text-charcoal-grey/50 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-charcoal-grey/50 flex items-center gap-2 text-sm">
              <Image
                src="/secondary-mark-02.png"
                alt="secondary mark"
                width={24}
                height={24}
                className="h-4 w-4"
                quality={100}
              />
              <span>
                Est. {siteContent.company.established} &bull;{" "}
                {siteContent.company.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
