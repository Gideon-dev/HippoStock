import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Investor", href: "#investor" },
  { label: "Hippo Stock", href: "#hippostock" },
  { label: "Night Economy", href: "#night-economy" },
] as const;

export function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <nav className="flex items-center justify-between rounded-full border border-gray-100 bg-white px-6 py-3 shadow-sm">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Hippo Procurement"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-gray-900 leading-none">Hippo</p>
              <p className="text-[10px] text-gray-500 leading-none">procurement</p>
              <p className="text-[10px] text-gray-500 leading-none">solid deals</p>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-blue transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-5 py-2 text-sm"
            )}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
