import Image from "next/image"
import Link from "next/link"
import { Hstack, Vstack } from "@components/ui/stacks"
import { Button } from "@components/ui/button"
import { DownloadIcon } from "lucide-react"
import { FadeUp } from "@components/ui/fade-up"

const InvestorHero = () => {
  return (
    <div className="h-screen md:min-h-217 xl:h-fit w-full relative bg-black/60">
        {/* <Image
            src="/images/investor-hero-img.png"
            alt="Investor hero image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
        /> */}
        <div className="max-w-7xl mx-auto px-4 pt-14 lg:pt-28 pb-21.25">
            <div className="max-w-208.5 w-full text-left">
                <FadeUp delay={0}>
                    <h1 className="text-white text-[35px] md:text-[60px] font-bold uppercase">Building Trade infrastructure for smes across west africa.</h1>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <span className="font-medium text-base md:text-[25px] text-white">Hippo Procurement helps SMEs reduce sourcing costs, improve stock availability, and move goods move efficiently across West Africa.</span>
                </FadeUp>
                <FadeUp delay={0.2}>
                    <Vstack className="w-full md:flex-row md:items-center gap-4 lg:gap-7.25 mt-5.25 items-center flex-wrap lg:flex-nowrap">
                        <Button
                            nativeButton={false}
                            className="bg-primary-blue rounded-[20px] min-h-16 md:h-21.5 font-medium text-base md:text-[25px] w-fit"
                            render={
                                <Link href="/docs/Hippo_Procurement_Investor_Deck_pdf.pdf" download="Hippo_Procurement_Investors_Deck.pdf">
                                    Download Investor Deck
                                    <DownloadIcon className="ml-2 size-8 shrink-0" />
                                </Link>
                            }
                        />
                        <Button className="bg-[#FF621F] rounded-[20px] min-h-16 md:min-h-21.5 font-medium text-base md:text-[25px] w-fit">
                        Schedule Investor meeting
                        </Button>
                    </Vstack>
                </FadeUp>
            </div>
        </div>
        
    </div>
  )
}

export default InvestorHero