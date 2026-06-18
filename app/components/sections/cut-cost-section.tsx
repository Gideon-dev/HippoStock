import Link from "next/link";

import { buttonVariants } from "@components/ui/button";
import { FadeUp } from "@components/ui/fade-up";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WHATSAPP_NUMBER = "+2348000000000";

export function CutCostSection(): React.JSX.Element {
  return (
    <section className="bg-cream py-24 px-5.25 md:px-11.5 text-center">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="text-[40px] md:text-[70px] font-semibold text-light-black mb-4">
            Ready to cut cost?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-black text-base md:text-[25px] md:text-lg mb-7.5">
            Join the clinics and wholesalers already leveraging Hippo&apos;s direct factory pipelines
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "whatsapp" }),
              "inline-flex items-center gap-2 px-8 py-4 text-base h-auto [box-shadow:none] animate-border-pulse"
            )}
          >
            <Image src="/svgs/WA-icon.svg" alt="whatspap icon" width={38} height={38} priority={false}/>
            Start Direct Sourcing
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}


