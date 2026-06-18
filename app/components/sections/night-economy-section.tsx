import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@components/ui/fade-up";
import { Vstack } from "@components/ui/stacks";
import { ArrowRight } from "lucide-react";

export function NightEconomySection(): React.JSX.Element {
  return (
    <section id="night-economy" className="bg-primary-blue py-20 px-5.25 md:px-11.5 ">
       <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center min-h-75 gap-10 md:gap-[197px]">
        <FadeUp>
          <Vstack className="bg-white rounded-2xl p-9 relative gap-8.5 w-full max-w-161.25 xl:w-161.25">
            <div className="flex items-start gap-4 justify-between">
              <span>
                <h2 className="font-semibold text-2xl md:text-[35px] text-black mb-2">Night Economy</h2>
                <div className="font-medium text-black text-sm max-w-[288px] md:text-3xl">
                  Your shop earns while you <span className="text-primary-blue">sleep</span>
                </div>
              </span>
              <div className="size-12 md:size-21.75 rounded-[10px] shrink-0 bg-[#4C6971] flex justify-center items-center">
                <CresentIcon className="size-10 md:size-15" />
              </div>
            </div>
            <p className="text-xl italic font-medium md:text-[25px]">
              Hippo Night Economy team takes over from 9 PM to 5 AM with vetted staff, sales management, and security protocols.
            </p>
            <Link
              href="#"
              className="text-[#0799E7] text-lg md:text-[25px] font-normal flex items-center gap-2.5 md:gap-4.5"
            >
              seemore <ArrowRight className="size-3.5" />
            </Link>
          </Vstack>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative w-full aspect-square max-w-115.5 mx-auto">
            <Image
              src="/images/night-economy-img.png"
              alt="HippoStock app mockup"
              fill
              sizes="(max-width: 768px) 100vw, 373px"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}


const CresentIcon = ({className}:{className: string}) => {
  return(
    <svg className={className} viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.41992 31.2185C8.77144 35.7603 14.1605 38.7062 20.2378 38.7062C30.4021 38.7062 38.6406 30.4669 38.6406 20.3034C38.6406 14.0295 35.5018 8.48881 30.7083 5.16748C40.3064 7.25656 47.4791 15.7991 47.4791 26.023C47.4791 37.8125 37.9214 47.3702 26.1319 47.3702C16.1296 47.3702 7.73646 40.5023 5.42066 31.2177" fill="#FCEA2B"/>
    <path d="M33.7412 6.77979C39.8142 9.90826 45.6626 15.5196 45.6626 24.9433C45.6626 36.3162 36.4435 45.5353 25.0706 45.5353C18.2667 45.5353 10.5309 41.9755 7.1875 34.0932C7.1875 34.0932 10.4117 47.8268 26.1203 47.8327C40.3464 47.8379 46.7616 32.6526 46.7616 32.6526C51.5522 9.11473 33.7412 6.78052 33.7412 6.78052" fill="#F1B31C"/>
    <path d="M5.41992 31.2185C8.77144 35.7603 14.1605 38.7062 20.2378 38.7062C30.4021 38.7062 38.6406 30.4669 38.6406 20.3034C38.6406 14.0295 35.5018 8.48881 30.7083 5.16748C40.3064 7.25656 47.4791 15.7991 47.4791 26.023C47.4791 37.8125 37.9214 47.3702 26.1319 47.3702C16.1296 47.3702 7.73646 40.5023 5.42066 31.2177" stroke="black" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  )
}