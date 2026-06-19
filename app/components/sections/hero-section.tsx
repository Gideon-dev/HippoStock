import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "@components/ui/eyebrow";
import { FadeUp } from "@components/ui/fade-up";

const WHATSAPP_NUMBER = "+2348000000000";

export function HeroSection(): React.JSX.Element {
  return (
    <section id="home" className="relative min-h-dvh xl:h-fit overflow-hidden ">
      <Image
        src="/images/hippo-cargo/cargo-image-3.jpg"
        alt="Shipping port"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left px-4 pb-20 pt-10 max-w-278.25" >
          <Eyebrow 
           title="Direct Factory Access"
          />

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Buy Medical Consumables and high demand products without Middlemen.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white mt-6 text-base sm:text-lg xl:text-[25px] font-medium md:max-w-138.75 leading-relaxed">
              Hippo helps pharmacies, clinics, and serious business owners cut costs, avoid middlemen, and restock faster using direct factory sourcing.
            </p>
          </FadeUp>
        </div>

        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-whatsapp text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-whatsapp/90 transition-colors [box-shadow:none] animate-border-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <Image src="/svgs/WA-icon.svg" alt="whatspap icon" width={102} height={102} priority={false}/>
        </Link>
      </div>

    </section>
  );
}
