import { Hstack, Vstack } from "@components/ui/stacks"
import { FadeUp } from "@components/ui/fade-up"
import { AnimatedCounter } from "@components/ui/animated-counter"

const WhoWeAreSection = () => {
  return (
    <div className="w-full bg-white pt-17.5 pb-22">
      <Vstack className="max-w-7xl mx-auto lg:flex-row lg:items-center gap-21.75 px-4">
        <Vstack className="gap-7.5 max-w-161.5 w-full">
          <FadeUp delay={0}>
            <h1 className="text-[50px] text-black font-bold">Who we are</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <span className="text-xl text-black font-normal">
              Hippo Procurement is a trade facilitation and operational coordination company focused on improving how SMEs sources, move, and manage goods across <span className="font-bold">Nigeria</span> and <span className="font-bold">Ghana</span>.
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <span className="text-xl text-black font-normal">
              We aggregate procurement demand, coordinate direct sourcing, improve supply chain movement, and build operational tools that help businesses reduce costs, avoid stock-outs, and improve inventory visibility.
            </span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <span className="text-xl text-black font-normal">
              Hippo Stock and Night Economy Operations are supporting infrastructure layers designed to improve inventory coordination, operational visibility, and extended-hours commercial activity over time.
            </span>
          </FadeUp>
        </Vstack>
        <FadeUp delay={0.15}>
          <div className="flex-1 grid grid-cols-2 gap-5 md:gap-10.75">
            <Vstack className="border border-[#9C9C9C] bg-[#DDDDDD] gap-2.5 py-4.5 px-7.75">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter
                  value="60"
                  className="font-bold text-[40px] text-[#FF621F]"
                />
                <span className="font-bold text-[40px] text-[#FF621F]">+</span>
              </div>
              <span className="font-medium text-xl text-black">ACTIVE AGENTS</span>
            </Vstack>
            <Vstack className="border border-[#9C9C9C] bg-[#DDDDDD] gap-2.5 py-4.5 px-7.75">
              <Hstack className="gap-5 items-center">
                <NigeriaIcon />
                <GhanaIcon />
              </Hstack>
              <span className="font-medium text-xl text-black">Operations in NIGERIA & GHANA</span>
            </Vstack>
            <Vstack className="border border-[#9C9C9C] bg-[#DDDDDD] gap-2.5 py-4.5 px-7.75">
              <span className="font-bold text-[40px] text-[#FF621F]">MCE</span>
              <span className="font-medium text-xl text-black">MEDICAL FOCUS</span>
            </Vstack>
            <Vstack className="border border-[#9C9C9C] bg-[#DDDDDD] gap-2.5 py-4.5 px-7.75 justify-center">
              <span className="font-medium text-xl text-black">Abuja Hub-90% complete</span>
            </Vstack>
          </div>
        </FadeUp>
      </Vstack>
    </div>
  )
}

export default WhoWeAreSection



const NigeriaIcon = () => {
  return(
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_807_29)">
      <path d="M4.77778 5.97223C3.51063 5.97223 2.29539 6.4756 1.39938 7.37161C0.503372 8.26761 0 9.48286 0 10.75L0 32.25C0 33.5172 0.503372 34.7324 1.39938 35.6284C2.29539 36.5244 3.51063 37.0278 4.77778 37.0278H14.3333V5.97223H4.77778Z" fill="#009A49"/>
      <path d="M14.3333 5.97223H28.6666V37.0278H14.3333V5.97223Z" fill="#EEEEEE"/>
      <path d="M38.2223 5.97223H28.6667V37.0278H38.2223C39.4894 37.0278 40.7047 36.5244 41.6007 35.6284C42.4967 34.7324 43.0001 33.5172 43.0001 32.25V10.75C43.0001 9.48286 42.4967 8.26761 41.6007 7.37161C40.7047 6.4756 39.4894 5.97223 38.2223 5.97223Z" fill="#009A49"/>
      </g>
      <defs>
      <clipPath id="clip0_807_29">
      <rect width="43" height="43" fill="white"/>
      </clipPath>
      </defs>
    </svg>

  )
}

const GhanaIcon = () => {
  return(
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.2222 5.97223H4.77778C3.51063 5.97223 2.29539 6.4756 1.39938 7.37161C0.503372 8.26761 0 9.48286 0 10.75L0 16.7222H43V10.75C43 9.48286 42.4966 8.26761 41.6006 7.37161C40.7046 6.4756 39.4894 5.97223 38.2222 5.97223Z" fill="#CC212D"/>
      <path d="M18.4219 26.2778H24.6151L21.5191 24.0275L18.4219 26.2778ZM22.7064 20.376H26.5465L23.4398 22.6323L24.6235 26.2778H43V16.7222H21.5191L22.7064 20.376ZM19.5984 22.6323L16.4917 20.376H20.3318L21.5191 16.7222H0V26.2778H18.4136L19.5984 22.6323Z" fill="#FBD116"/>
      <path d="M24.6259 26.2849L24.6151 26.2778H18.4207L18.41 26.2849L18.4136 26.2778H0V32.25C0 33.5171 0.503372 34.7324 1.39938 35.6284C2.29539 36.5244 3.51063 37.0278 4.77778 37.0278H38.2222C39.4894 37.0278 40.7046 36.5244 41.6006 35.6284C42.4966 34.7324 43 33.5171 43 32.25V26.2778H24.6235L24.6259 26.2849Z" fill="#288541"/>
      <path d="M16.4917 20.376L19.5985 22.6323L18.4136 26.2778L18.4112 26.285L18.4219 26.2778L21.5191 24.0275L24.6151 26.2778L24.6259 26.285L24.6235 26.2778L23.4398 22.6323L26.5465 20.376H22.7064L21.5191 16.7222L20.3318 20.376H16.4917Z" fill="black"/>
    </svg>

  )
}