"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-grey text-white">
      {/* Main footer content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div>
          {/* Top section - CTA */}
          <div className="pb-12 md:pb-16 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-white/50 max-w-md">
                  We&apos;re always looking to work on interesting problems.
                  Let&apos;s talk about how we can help.
                </p>
              </div>
              <motion.a
                href="mailto:info@vextralimited.com?subject=Project%20Inquiry"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-vextra-green text-charcoal-grey text-sm font-medium tracking-wide transition-colors hover:bg-deep-teal hover:text-white w-fit"
              >
                <span>Get in touch</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Middle section - Links & Info */}
          <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/Full Color Logo.png"
                alt="Vextra Limited"
                width={120}
                height={35}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Dependable digital products for Nigeria and Africa.
              </p>
            </div>

            {/* Contact */}
            <div>
              <span className="block text-xs tracking-widest uppercase text-white/30 mb-4">
                Contact
              </span>
              <motion.a
                href="mailto:info@vextralimited.com"
                className="flex items-center gap-2 text-white/70 hover:text-vextra-green transition-colors duration-300 text-sm"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Email us</span>
              </motion.a>
            </div>

            {/* Social */}
            <div>
              <span className="block text-xs tracking-widest uppercase text-white/30 mb-4">
                Social
              </span>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://linkedin.com/company/vextrahq"
                  className="flex items-center gap-2 text-white/70 hover:text-vextra-green transition-colors duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://x.com/vextrahq"
                  className="flex items-center gap-2 text-white/70 hover:text-vextra-green transition-colors duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaXTwitter className="w-4 h-4" />
                  <span>X</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="px-6 py-6 md:px-12 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Vextra Limited. All rights
              reserved.
            </span>
            <div className="flex items-center gap-2 text-sm text-white/30">
              <Image
                src="/Primary Mark.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Est. 2025 &bull; Built to Work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
