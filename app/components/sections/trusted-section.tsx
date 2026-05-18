import { AnimatedCounter } from "@/app/components/ui/animated-counter";
import { FadeUp } from "@/app/components/ui/fade-up";

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
    <section className="bg-primary-blue py-16 md:px-11.5 px-5.25 w-full">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div
              className="hidden md:block flex-1 h-px"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, #FFFFFF 100%)',
              }}
            />
            <h2 className="text-white text-3xl md:text-[28px] w-full max-w-[508px] font-bold text-center">
              Trusted across trade, retail &amp; hospitality
            </h2>
            <div
              className="hidden md:block flex-1 h-px"
              style={{
                background:
                  'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
              }}
            />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 ">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center px-6 py-4">
              {stat.isNumeric ? (
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-white text-[25px] font-semibold "
                  />
                  <span className="text-white text-[25px] font-semibold">{stat.suffix}</span>
                </div>
              ) : (
                <span className="text-white text-[25px] font-semibold">
                  {stat.value}
                </span>
              )}
              <span className="text-white/80 text-[21px] italic leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
