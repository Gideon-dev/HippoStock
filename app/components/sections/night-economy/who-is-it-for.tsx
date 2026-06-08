import Link from "next/link";
import { FadeUp } from "@components/ui/fade-up";
import { cn } from "@/lib/utils";

const BUSINESSES = [
  { id: 1, label: "Pharmacies", highlight: false },
  { id: 2, label: "Mini Marts", highlight: false },
  { id: 3, label: "Convenience Stores", highlight: false },
  { id: 4, label: "Neighbourhood Shops", highlight: false },
  { id: 5, label: "Fuel Stations", highlight: false },
  { id: 6, label: "High-Traffic Retail", highlight: true },
];

export function WhoIsItFor(): React.JSX.Element {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-black uppercase mb-11.75">
            WHO IS IT FOR?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-x-4.25 sm:gap-y-11.75 mb-10 md:mb-16.5">
            {BUSINESSES.map((business) => (
              <div
                key={business.id}
                className={cn(
                  "border border-black bg-[#FCFCFC] transition-shadow shadow-sm px-5 sm:px-8 py-4 sm:py-5 font-bold text-sm sm:text-[25px] hover:shadow-xl",
                  business.highlight ? "text-[#FF621F]" : "text-black"
                )}
              >
                {business.label}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-black text-sm sm:text-xl mb-10 md:mb-20 font-medium text-center">
            If your business can perform better than it does today, Hippo Management may be a good fit.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-black text-white font-normal text-sm sm:text-[24px] px-10 sm:px-16 py-4 sm:py-5 rounded-full hover:bg-black/85 transition-colors w-full sm:w-auto max-w-sm sm:max-w-none capitalize"
          >
            Speak With A Hippo Operations Lead
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
