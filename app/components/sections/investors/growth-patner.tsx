import { Button } from "../../ui/button"
import { Vstack } from "../../ui/stacks"
import { FadeUp } from "../../ui/fade-up"


const GrowthPatner = () => {
  return (
  <section className="w-full bg-[#0C4564] py-12.75 px-4">
        <Vstack className="gap-7.25 max-w-7xl mx-auto justify-center items-center">
            <FadeUp>
                <span className="font-bold text-[40px] text-center text-white">PATNER IN OUR GROWTH</span>
            </FadeUp>
            <FadeUp delay={0.1}>
                <span className="text-xl font-normal text-white text-center max-w-188.5">Capitalize on the growth of SME infrastructure and trade coordination across <span className="font-bold"> West Africa</span>.</span>
            </FadeUp>
            <FadeUp delay={0.2}>
                <Button className="bg-[#FF621F] h-fit py-6 text-base rounded-[20px] text-white  md:min-h-19 w-fit md:text-xl font-bold">
                    SCHEDULE MEETING
                </Button>
            </FadeUp>
        </Vstack>
  </section>
  )
}

export default GrowthPatner