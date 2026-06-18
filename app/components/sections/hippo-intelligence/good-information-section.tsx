import { AlertTriangle, Lightbulb, TrendingUp, UserX } from "lucide-react";

import { FadeUp } from "@components/ui/fade-up";
import { Hstack, Vstack } from "@components/ui/stacks";

const PROBLEMS = [
  {
    id: 1,
    icon: <AlertTriangle className="size-6.25 md:size-8.5 shrink-0 text-[#FF621F]" />,
    title: "Stock runs out unexpectedly",
    description: "Prevent operational paralysis caused by sudden inventory gaps.",
  },
  {
    id: 2,
    icon: <UserX className="size-6.25 md:size-8.5 shrink-0 text-[#FF621F]" />,
    title: "Suppliers become unavailable",
    description: "Identify vulnerabilities before they break your supply chain.",
  },
  {
    id: 3,
    icon: <TrendingUp className="size-6.25 md:size-8.5 shrink-0 text-[#FF621F]" />,
    title: "Prices change without warning",
    description: "Stay ahead of market fluctuations and protect your margins.",
  },
  {
    id: 4,
    icon: <Lightbulb className="size-6.25 md:size-12.25 shrink-0 text-[#FF621F]" />,
    title: "Opportunities discovered too late",
    description: "Capture market signals while they are still actionable.",
  },
];

export function GoodInformationSection(): React.JSX.Element {
  return (
    <section className="bg-white py-16 md:py-24 px-5.25 md:px-11.5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <FadeUp>
          <Vstack className="gap-6">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-black leading-tight">
              Great Businesses Run on Good Information. So Should Yours.
            </h2>
            <p className="text-black font-normal text-sm sm:text-base md:text-[25px]">
              Most businesses make decisions based on guesswork. Understandably
              so as it is not primarily their business to know.
            </p>
            <div className="border-l-6 border-[#FF621F] bg-[#EFEFEF] min-h-37.25 flex items-center justify-center">
              <p className="text-black font-medium text-sm sm:text-base md:text-lg ml-2 ">
                Hippo Intelligence is designed to help your business know.
              </p>
            </div>
          </Vstack>
        </FadeUp>

        <div className="flex flex-col gap-4 sm:gap-5.25">
          {PROBLEMS.map((problem, index) => (
            <FadeUp key={problem.id} delay={0.05 * index}>
              <div className="flex bg-[#EFEFEF] border border-[#B5B5B5] min-h-37.25 items-center px-6.25">
                <Hstack className="items-center gap-3.25  sm:gap-7.75">
                  <div className="shrink-0 mt-0.5">{problem.icon}</div>
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base md:text-[25px] mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-black/65 text-xs sm:text-sm md:text-[20px] font-normal">
                      {problem.description}
                    </p>
                  </div>
                </Hstack>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
