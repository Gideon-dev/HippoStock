import Image from "next/image";

import { FadeUp } from "@/app/components/ui/fade-up";

export function CheaperStocksSection(): React.JSX.Element {
  return (
    <section className="relative min-h-[500px] py-8 overflow-hidden flex items-center w-full">
      <Image
        src="/images/cheaper-stocks-bg.jpg"
        alt="Port crane"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="w-full max-w-360 mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[378px] w-full gap-10">
          <div className="flex items-center px-8">
            <FadeUp>
              <h2 className="text-white text-[40px] md:text-[70px] font-bold leading-tight max-w-136.75">
                Cheaper Stocks
                <br />
                Faster Delivery
                <br />
                Less Stress.
              </h2>
            </FadeUp>
          </div>

          <div className="flex items-center justify-center px-8 w-full" >
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl p-8  w-full shadow-md xl:max-w-126.25">
                <h3 className="font-semibold text-[25px] text-black mb-3.5">Eliminate middlemen</h3>
                <p className="text-light-black font-normal text-base md:text-[25px] leading-relaxed">
                  Stop paying 30% markups to local distributors who sit on inventory. Go direct to the source with Hippo.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

    </section>
  );
}
