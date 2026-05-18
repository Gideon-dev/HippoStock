import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { Hstack } from "../ui/stacks";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Investor", href: "#investor" },
  { label: "Hippo Stock", href: "#hippostock" },
  { label: "Night Economy", href: "#night-economy" },
] as const;

export function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm ">
      <div className="mx-auto w-full pr-12.75 pl-4.5 py-9.25 border">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0 relative w-42.25 h-25">
            <Image
              src="/svgs/hippo-logo.svg"
              alt="Hippo Procurement"
              fill
              className="object-cover object-center w-auto"
              loading="eager"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <Hstack className="px-15.25 flex-1 w-fit xl:max-w-278.25 rounded-full bg-[#0EA7FA1F] min-h-20.5 hidden md:flex">
            <ul className="w-full flex items-center justify-between flex-wrap gap-4 py-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="lg:text-lg font-semibold text-black hover:text-primary-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "border border-white rounded-[26px] font-semibold text-lg min-h-10.5 max-w-43"
                )}
              >
                Contact us
              </Link>
            </ul>
          </Hstack>

          {/* Mobile hamburger + sidebar */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
