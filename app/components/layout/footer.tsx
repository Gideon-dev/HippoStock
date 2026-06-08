import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";

import { Button } from "@components/ui/button";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Agent", href: "#agent" },
  { label: "Hippo stock", href: "#hippostock" },
  { label: "Night economy", href: "#night-economy" },
] as const;

const SOLUTIONS = [
  "Cheaper stocks",
  "Faster delivery",
  "Less stress",
] as const;

export function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="bg-cream py-16 px-8 md:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/svgs/hippo-logo.svg"
              alt="Hippo Procurement"
              width={169}
              height={252}
            />
          </Link>
        </div>

        <div>
          <h4 className="font-bold text-black text-[26px] mb-4.25">Quick links</h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[26px] text-light-black font-normal hover:text-primary-blue transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-black text-[26px] mb-4.25">Solutions</h4>
          <ul className="flex flex-col gap-3">
            {SOLUTIONS.map((item) => (
              <li key={item} className="text-[26px] text-light-black">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="service" className="rounded-full gap-2 px-5 w-fit">
           <Image src="/svgs/play-store-icon.svg" alt="Play Store" className="w-7 h-7" width={28} height={28} priority={false}/>
            Download Hippostock
          </Button>
          <h4 className="font-bold text-black">Contact</h4>
        </div>
      </div>
    </footer>
  );
}
