import Image from "next/image";

import { FadeUp } from "@/app/ui/fade-up";

export function CheaperStocksSection(): React.JSX.Element {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      <Image
        src="/images/cheaper-stocks-bg.jpg"
        alt="Port crane"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="flex items-center px-8 md:px-16 py-16">
          <FadeUp>
            <h2 className="text-white text-5xl md:text-7xl font-black leading-tight">
              Cheaper Stocks
              <br />
              Faster Delivery
              <br />
              Less Stress.
            </h2>
          </FadeUp>
        </div>

        <div className="flex items-center justify-center px-8 py-16">
          <FadeUp delay={0.15}>
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full">
              <h3 className="font-bold text-xl text-black mb-3">Eliminate middlemen</h3>
              <p className="text-light-black text-sm leading-relaxed">
                Stop paying 30% markups to local distributors who sit on inventory. Go direct to the source with Hippo.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
