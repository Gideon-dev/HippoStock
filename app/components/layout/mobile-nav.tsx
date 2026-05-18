"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Investor", href: "#investor" },
  { label: "Hippo Stock", href: "#hippostock" },
  { label: "Night Economy", href: "#night-economy" },
] as const;

const SIDEBAR_VARIANTS = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
} as const;

const BACKDROP_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
} as const;

export function MobileNav(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  const close = (): void => setOpen(false);

  return (
    <>
      {/* Hamburger toggle — visible only on mobile */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0 z-50"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-6 bg-black rounded-full origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          className="block h-0.5 w-6 bg-black rounded-full"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-6 bg-black rounded-full origin-center"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={BACKDROP_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={close}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            {/* Sidebar drawer */}
            <motion.aside
              key="sidebar"
              variants={SIDEBAR_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="relative w-32 h-16">
                  <Image
                    src="/svgs/hippo-logo.svg"
                    alt="Hippo Procurement"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  aria-label="Close menu"
                  onClick={close}
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span className="block relative w-4 h-4">
                    <span className="absolute inset-0 flex items-center justify-center rotate-45">
                      <span className="block h-0.5 w-4 bg-black rounded-full" />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center -rotate-45">
                      <span className="block h-0.5 w-4 bg-black rounded-full" />
                    </span>
                  </span>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block py-3 text-lg font-semibold text-black hover:text-primary-blue transition-colors border-b border-gray-50"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="px-6 py-6 border-t border-gray-100"
              >
                <Link
                  href="#contact"
                  onClick={close}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full border border-white rounded-[26px] font-semibold text-lg min-h-10.5 justify-center"
                  )}
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
