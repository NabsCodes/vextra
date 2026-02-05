"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/socials";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-grey text-white">
      {/* Main footer content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div>
          {/* Top section */}
          <div className="border-b border-white/10 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <h3 className="font-display mb-3 text-2xl font-medium tracking-tight md:text-3xl">
                  Have a project in mind?
                </h3>
                <p className="max-w-md text-white/50">
                  We&apos;re always looking to work on interesting problems.
                  Let&apos;s talk about how we can help.
                </p>
              </div>
              <motion.a
                href="mailto:info@vextralimited.com?subject=Project%20Inquiry"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-vextra-green text-charcoal-grey hover:bg-deep-teal inline-flex w-fit items-center gap-3 rounded-lg px-6 py-3.5 text-sm font-medium tracking-wide transition-colors hover:text-white"
              >
                <span>Get in touch</span>
                <FaArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Middle section - Links & Info */}
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 md:gap-12 md:py-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/full-color-logo.png"
                alt="Vextra Limited"
                width={180}
                height={54}
                className="mb-4 h-8 w-auto brightness-0 invert"
                quality={100}
              />
              <p className="max-w-xs text-sm leading-relaxed text-white/40">
                Dependable digital products for Nigeria and Africa.
              </p>
            </div>

            {/* Contact */}
            <div>
              <span className="mb-4 block text-xs tracking-widest text-white/30 uppercase">
                Contact
              </span>
              <motion.a
                href="mailto:info@vextralimited.com"
                className="hover:text-vextra-green flex items-center gap-2 text-sm text-white/70 transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="h-4 w-4" />
                <span>Email us</span>
              </motion.a>
              <motion.a
                href="tel:+2348122353161"
                className="hover:text-vextra-green mt-3 flex items-center gap-2 text-sm text-white/70 transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className="h-4 w-4" />
                <span>+234 812 235 3161</span>
              </motion.a>
            </div>

            {/* Social */}
            <div>
              <span className="mb-4 block text-xs tracking-widest text-white/30 uppercase">
                Social
              </span>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const baseClassName =
                    "flex items-center gap-2 text-white/70 hover:text-vextra-green transition-colors duration-300 text-sm";

                  if (item.status === "soon") {
                    return (
                      <div
                        key={item.key}
                        className="flex items-center gap-2 text-sm text-white/40"
                        title="WhatsApp coming soon."
                      >
                        <FaWhatsapp className="h-4 w-4" />
                        <span className="inline-flex items-center gap-2">
                          {item.label}
                          <span className="text-[10px] tracking-widest text-white/30 uppercase">
                            Soon
                          </span>
                        </span>
                      </div>
                    );
                  }

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
      <div className="border-t border-white/10">
        <div className="px-6 py-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/30">
                &copy; {new Date().getFullYear()} Vextra Limited. All rights
                reserved.
              </span>
              <span className="hidden text-white/20 sm:inline">&bull;</span>
              <Link
                href="/privacy"
                className="hover:text-vextra-green text-sm text-white/30 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/30">
              <Image
                src="/primary-mark.png"
                alt="primary mark"
                width={24}
                height={24}
                className="h-4 w-4"
                quality={100}
              />
              <span>Est. 2025 &bull; Built to Work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
