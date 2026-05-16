import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { FadeUp } from "@/app/ui/fade-up";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "+2348000000000";

export function CutCostSection(): React.JSX.Element {
  return (
    <section className="bg-cream py-24 px-8 text-center">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ready to cut cost?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-light-black text-base md:text-lg mb-10">
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
              "inline-flex items-center gap-2 px-8 py-4 text-base h-auto"
            )}
          >
            <MessageCircle className="size-5" />
            Start Direct Sourcing
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
