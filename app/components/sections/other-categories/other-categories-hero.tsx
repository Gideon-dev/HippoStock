import { FadeUp } from "@components/ui/fade-up";
import Image from "next/image";

export function OtherCategoriesHero(): React.JSX.Element {
  return (
    <section className="relative bg-[#F2F2F2] py-16 md:py-24 px-5.25 md:px-11.5 overflow-hidden max-h-dvh min-h-[592px] flex items-ceter justify-center">
      <Image
        src="/images/blue-image-line-bg.png"
        alt="cartesian grid bg"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto text-center flex items-center">
        <FadeUp>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-[50px] tracking-tight text-black mb-2">
            OTHER CATEGORIES SECTION
          </h1>
          <p className="text-black text-sm sm:text-base md:text-[25px] max-w-[744px] mx-auto">
            Have a procurement requirement outside our core categories? Hippo
            evaluates opportunities across multiple sectors where supply,
            demand, and commercial viability align.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
