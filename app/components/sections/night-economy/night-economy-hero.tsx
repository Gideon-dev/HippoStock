import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@components/ui/eyebrow";
import { FadeUp } from "@components/ui/fade-up";
import { WHATSAPP_LINK } from "@/lib/routes";

export function NightEconomyHero(): React.JSX.Element {
  return (
    <section className="relative min-h-[460px] md:min-h-[520px] flex items-center overflow-hidden">
      <Image
        src="/images/night-economy-img.png"
        alt="Night economy store interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Eyebrow
          title=" 24/7 Revenue Infrastructure"
        />

        <FadeUp delay={0.1}>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] max-w-249 mb-5">
            Your Business Shouldn&apos;t Depend<br className="hidden sm:block" /> On You{" "}
            <span className="text-primary-blue">Every Minute</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2} className="max-w-242.25 w-full">
          <p className="text-white/90 text-sm sm:text-[25px] mb-2 ">
            Many business owners work around the clock, but still feel like they are carrying
            the business instead of the other way around.
          </p>
          <p className="text-white/90 text-sm sm:text-[25px] mb-5">
            Hippo help business owners increase revenue, improve daily operations, and
            maintain better control of their businesses.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-white font-bold text-sm sm:text-3xl mb-8">
            You focus on growth. We help keep the business moving
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FF621F] text-black font-medium text-sm sm:text-[25px] px-8 py-3.5 rounded-full hover:bg-[#FF621F]/90 transition-colors animate-border-pulse"
          >
            Book Consultation
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
