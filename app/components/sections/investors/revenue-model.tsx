
import { FadeUp } from "@components/ui/fade-up"

const RevenueModel = () => {
    const REVENUE_MODEL = [
        {
            id: 1,
            label: "TRADE FACILITATION",
            info: "Commission-based revenue from procurement coordination and aggregated sourcing activity.",
            tag: "Volume Based Commission"
        },
        {
            id: 2,
            label: "HIPPO MANAGMENT",
            info: "Revenue-sharing from extended operations.",
            tag: "Equity-Aligned"
        },
        {
            id: 3,
            label: "HIPPOSTOCK",
            info: "Recurring subscription revenue from inventory visibility and operational intelligence advantage.",
            tag: "Recurring Technology Revenue"
        }
    ]


  return (
   <section className="w-full mt-22.5">
        <div className="max-w-7xl mx-auto p-4">
            <FadeUp>
                <span className="text-[40px] font-bold text-center flex items-center justify-center mb-7">REVENUE MODEL</span>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9.5 border-2 border-black p-4.25 sm:p-8.5">
                {REVENUE_MODEL.map((rev, index) => (
                    <FadeUp key={rev.id} delay={0.1 * index}>
                        <RevenueCard info={rev.info} label={rev.label} tag={rev.tag}/>
                    </FadeUp>
                ))}
            </div> 
        </div>
   </section>
  )
}

export default RevenueModel

const RevenueCard = ({label, info, tag}:{label:string, info:string, tag:string}) => {
    return(
        <div className="border border-black min-h-65.75 flex flex-col items-center justify-center">
            <span className="font-semibold text-xl text-black mb-3.75">{label}</span>
            <div className="border-b-5 border-[#FF8C11] w-[80%] mx-auto"/>
            <span className="text-xl font-normal mt-6 text-black text-center">{info}</span>
            <span className="text-base font-bold text-black mt-5.75">{tag}</span>
        </div>
    )
}