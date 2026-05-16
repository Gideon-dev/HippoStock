import { AnimatedCounter } from "@/app/ui/animated-counter";
import { FadeUp } from "@/app/ui/fade-up";

const STATS = [
  {
    value: "25",
    suffix: " days",
    label: "Avg. container clearance",
    isNumeric: true,
  },
  {
    value: "Real-time",
    suffix: "",
    label: "HippoStock alerts",
    isNumeric: false,
  },
  {
    value: "9PM – 5AM",
    suffix: "",
    label: "Night economy coverage",
    isNumeric: false,
  },
  {
    value: "3-in-1",
    suffix: "",
    label: "Business ecosystem",
    isNumeric: false,
  },
] as const;

export function TrustedSection(): React.JSX.Element {
  return (
    <section className="bg-primary-blue py-16 px-8 md:px-20">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex items-center gap-4 mb-12">
            <span className="flex-1 border-t border-white/40" />
            <h2 className="text-white text-xl md:text-2xl font-bold text-center whitespace-nowrap">
              Trusted across trade, retail &amp; hospitality
            </h2>
            <span className="flex-1 border-t border-white/40" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center px-6 py-4">
              {stat.isNumeric ? (
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-white text-3xl md:text-4xl font-bold italic"
                  />
                  <span className="text-white text-xl font-bold italic">{stat.suffix}</span>
                </div>
              ) : (
                <span className="text-white text-2xl md:text-3xl font-bold italic">
                  {stat.value}
                </span>
              )}
              <span className="text-white/80 text-xs md:text-sm italic mt-2 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
