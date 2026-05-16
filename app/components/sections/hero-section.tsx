import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { FadeUp } from "@/app/ui/fade-up";

const WHATSAPP_NUMBER = "+2348000000000";

export function HeroSection(): React.JSX.Element {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Shipping port"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-20 pb-20">
        <FadeUp delay={0}>
          <span className="inline-block bg-primary-blue text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Direct Factory Access
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
            Buy Medical Consumables and high demand products without Middlemen.
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/80 mt-6 text-lg max-w-xl leading-relaxed">
            Hippo helps pharmacies, clinics, and serious business owners cut costs, avoid middlemen, and restock faster using direct factory sourcing.
          </p>
        </FadeUp>
      </div>

      <Link
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-whatsapp text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-whatsapp/90 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="size-6" />
      </Link>
    </section>
  );
}
