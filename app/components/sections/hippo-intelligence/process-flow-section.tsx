import { ArrowDown, ArrowRight, Database, Network, Radio } from "lucide-react";

import { FadeUp } from "@components/ui/fade-up";
import Image from "next/image";


export function ProcessFlowSection(): React.JSX.Element {
  const STEPS = [
    { id: 1, icon: <Database className="size-7 text-[#0C3A5C]" />, label: "INVENTORY DATA" },
    { id: 2, icon: <Radio className="size-7 text-[#0C3A5C]" />, label: "MARKET SIGNAL" },
    { id: 3, icon: <Network className="size-7 text-[#0C3A5C]" />, label: "SUPPLIER NETWORK", accent: true },
    { id: 4, icon: <BrainCircuit className="size-7 text-[#0C3A5C]" />, label: "BUSINESS INTELLIGENCE" },
    { id: 5, icon: <CheckIcon className="size-7 text-[#0C3A5C]" />, label: "BETTER DECISIONS" },
  ];

  return (
    <section className="relative bg-[#F2F2F2] py-16 md:py-20 px-5.25 md:px-11.5 border-y border-black/5 overflow-x-scroll xl:overflow-hidden min-h-[439px]">
     <Image
        src="/images/blue-image-line-bg.png"
        alt="cartesian grid bg"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {STEPS.map((step, index) => (
          <FadeUp key={step.id} delay={0.08 * index} className="flex flex-col lg:contents items-center">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-3 lg:gap-10">
              <div className="flex flex-col items-center gap-10 sm:gap-20">
                <div className="relative size-20 md:size-33.75">
                  <div className="absolute inset-0 translate-y-3 rotate-48 bg-[#0C4564]" />
                  <div className="absolute inset-0 rotate-48 bg-white border-3 border-[#0C4564] flex items-center justify-center">
                    <div className="-rotate-48">{step.icon}</div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xl text-center font-bold text-black/80 tracking-wide max-w-28">
                  {step.label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <>
                  <ArrowDown
                    className={`size-10 lg:hidden ${step.accent ? "text-[#FF621F]" : "text-black"}`}
                  />
                  <ArrowRight
                    className={`size-10 hidden lg:block shrink-0 mb-25 ${
                      step.accent ? "text-[#FF621F]" : "text-black"
                    }`}
                  />
                </>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

interface IconProps {
  className: string
}

const BrainCircuit = ({className}: IconProps) => (
  <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.5 43.25V42.1875C30.5 39.8394 32.4805 37.9375 34.5843 36.8963C36.6306 35.8869 38.3498 34.2187 38.5686 32.2637L39 28.375L43.25 26.25L37.9375 18.2812C37.9386 13.9068 36.3043 9.68993 33.3555 6.45879C30.4066 3.22764 26.3564 1.21568 22 0.818M10.3125 32.6165V43.25M15.625 35.1516C13.6997 34.6076 11.9062 33.7428 10.3125 32.6165C8.10906 31.0612 6.29165 29.0214 5 26.6537M8.1875 17.75V22M14.5625 17.75V22M8.1875 0.75V5M14.5625 0.75V5M5 8.1875H0.75M5 14.5625H0.75M22 8.1875H17.75M22 14.5625H17.75M13.5 5H9.25C7.24612 5 6.24525 5 5.62263 5.62263C5 6.24525 5 7.24612 5 9.25V13.5C5 15.5039 5 16.5047 5.62263 17.1274C6.24525 17.75 7.24612 17.75 9.25 17.75H13.5C15.5039 17.75 16.5047 17.75 17.1274 17.1274C17.75 16.5047 17.75 15.5039 17.75 13.5V9.25C17.75 7.24612 17.75 6.24525 17.1274 5.62263C16.5047 5 15.5039 5 13.5 5Z" stroke="#0C4564" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckIcon = ({className}: IconProps) => (
  <svg className={className} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 21L7.875 16.625L16.625 25.375L34.125 7.875L38.5 12.25L16.625 34.125L3.5 21Z" stroke="#0C4564" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)