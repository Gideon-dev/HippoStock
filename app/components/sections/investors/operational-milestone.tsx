import { Hstack, Vstack } from "../../ui/stacks"
import { FadeUp } from "../../ui/fade-up"


const OperationalMilestone = () => {
  return (
   <section className="w-full">
        <FadeUp>
            <Vstack className="max-w-7xl mx-auto bg-[#0C4564] p-7.75 mt-18.25 min-h-82.75 md:flex-row md:items-center gap-6">
                <Vstack>
                    <span className="font-bold text-[40px] text-white text-center mb-8.5">Operational Milestone</span>
                    <Vstack className="gap-5">
                        <FadeUp delay={0.1}>
                            <Hstack className="items-start gap-6">
                                <span className="font-semibold text-[40px] text-[#FF621F]">01</span>
                                <Vstack className="gap-2">
                                    <span className="font-semibold text-xl text-white">Active agent network</span>
                                    <span className="text-white font-normal text-xl">Over 60 agent and distribution relationships established across the initial operational phase.</span>
                                </Vstack>
                            </Hstack>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <Hstack className="items-start gap-6">
                                <span className="font-semibold text-[40px] text-[#FF621F]">02</span>
                                <Vstack className="gap-2">
                                    <span className="font-semibold text-xl text-white">Operational Infrastructure</span>
                                    <span className="text-white font-normal text-xl">Abuja operational hub at 90% completion, nearing pilot launch.</span>
                                </Vstack>
                            </Hstack>
                        </FadeUp>
                    </Vstack>
                </Vstack>
                <FadeUp delay={0.3}>
                    <Vstack className="bg-white pt-5.5 border-l-10 border-[#FF621F] min-h-60 w-full max-w-93.25 pl-5.5 pr-2.5"> 
                        <span className="font-semibold text-xl text-black">CURRENT OPERATIONS</span>
                        <span className="text-black  italic font-light text-xl mt-2.5 pb-8 border-b border-[#AEAEAE] mb-14">"Hippo&apos;s operational model is designed around real SME sourcing behavior and fragmented market realities across West Africa."</span>
                    </Vstack>
                </FadeUp>
            </Vstack>
        </FadeUp>
   </section>
  )
}

export default OperationalMilestone