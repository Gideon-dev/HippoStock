import { Vstack } from "../../ui/stacks"
import { FadeUp } from "../../ui/fade-up"

const MarketChallenges = () => {
    const CHALLENGES = [
        {   id: 1, title: "FRAGMENTED PROCUREMENT", icon: <BlockIcon />},
        {   id: 2, title: "HIGH SOURCING COST (30-60% middleman markups)", icon: <MoneyIcon />},
        {   id: 3, title: "SLOW TRADE CLEARNCE (30-90 day import cycles)", icon: <ClockIcon />},
        {   id: 4, title: "POOR INVENTORY VISIBILITY", icon: <ReceiptIcon />},
        {   id: 5, title: "LOST AFTER-HOURS REVENUE DUE TO SECURITY LIMITATIONS", icon: <WarningIcon />}
    ]


  return (
    <div className="pt-16 pb-37.5 bg-[#11A8FA]">
        <Vstack className="max-w-7xl mx-auto gap-19.5">
            <FadeUp>
                <Vstack className="text-center justify-center items-center">
                    <h1 className="font-bold text-[30px] md:text-[40px] text-white uppercase">Current Market Challenges</h1>
                    <span className="font-normal px-2 whitespace-pre-wrap md:text-[30px] text-white">West Africa trade suffers from systemic inefficiencies</span>
                </Vstack>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-start gap-y-10">
                {CHALLENGES.map((challenge, index) => (
                    <FadeUp key={challenge.id} delay={0.05 * index}>
                        <MarketBox title={challenge.title} icon={challenge.icon} />
                    </FadeUp>
                ))}
            </div>
        </Vstack>
    </div>
  )
}

export default MarketChallenges

const MarketBox = ({title, icon}: {title: string, icon: React.ReactNode}) => {
    return(
        <Vstack className="gap-7.25 justify-center items-center">
            <div className="flex items-center justify-center mb-4 w-28.25 h-23.75 bg-[#0C4564] border-2 border-white">
                {icon}
            </div>
            <h3 className="font-bold text-lg text-center text-white">{title}</h3>
        </Vstack>
    )
}



// icons

const BlockIcon = () => (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.0896 6.08185L26.3396 0.206849C25.8304 -0.0477344 25.2233 -0.0673177 24.7142 0.148099L1.21417 9.93977C0.489583 10.2531 0 10.9581 0 11.7414V27.4081C0 28.1523 0.41125 28.8377 1.07708 29.151L12.8271 35.026C13.1013 35.1631 13.395 35.2414 13.7083 35.2414C13.9629 35.2414 14.2175 35.1827 14.4525 35.0848L37.9525 25.2931C38.6771 24.9798 39.1667 24.2748 39.1667 23.4914V7.82477C39.1667 7.0806 38.7554 6.39518 38.0896 6.08185ZM25.38 4.10393L32.5083 7.6681L13.7867 15.4623L6.65833 11.8981L25.38 4.10393ZM15.6667 18.9285L19.5833 17.3031V28.7202L15.6667 30.3456V18.9285ZM23.5 15.6581L27.4167 14.0327V25.4498L23.5 27.0752V15.6581ZM31.3333 23.8244V12.4073L35.25 10.7818V22.1989L31.3333 23.8244Z" fill="white"/>
    </svg>
)

const MoneyIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 10.5H40.25V31.5H8.75V10.5ZM24.5 15.75C25.8924 15.75 27.2277 16.3031 28.2123 17.2877C29.1969 18.2723 29.75 19.6076 29.75 21C29.75 22.3924 29.1969 23.7277 28.2123 24.7123C27.2277 25.6969 25.8924 26.25 24.5 26.25C23.1076 26.25 21.7723 25.6969 20.7877 24.7123C19.8031 23.7277 19.25 22.3924 19.25 21C19.25 19.6076 19.8031 18.2723 20.7877 17.2877C21.7723 16.3031 23.1076 15.75 24.5 15.75ZM15.75 14C15.75 14.9283 15.3813 15.8185 14.7249 16.4749C14.0685 17.1313 13.1783 17.5 12.25 17.5V24.5C13.1783 24.5 14.0685 24.8687 14.7249 25.5251C15.3813 26.1815 15.75 27.0717 15.75 28H33.25C33.25 27.0717 33.6187 26.1815 34.2751 25.5251C34.9315 24.8687 35.8217 24.5 36.75 24.5V17.5C35.8217 17.5 34.9315 17.1313 34.2751 16.4749C33.6187 15.8185 33.25 14.9283 33.25 14H15.75ZM1.75 17.5H5.25V35H33.25V38.5H1.75V17.5Z" fill="white"/>
    </svg>

)

const ClockIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.22744 23.2958C1.41709 21.3394 1 19.2426 1 17.125C1 12.8484 2.69888 8.74693 5.7229 5.7229C8.74693 2.69888 12.8484 1 17.125 1C21.4016 1 25.5031 2.69888 28.5271 5.7229C31.5511 8.74693 33.25 12.8484 33.25 17.125C33.25 19.2426 32.8329 21.3394 32.0226 23.2958C31.2122 25.2521 30.0244 27.0298 28.5271 28.5271C27.0298 30.0244 25.2521 31.2122 23.2958 32.0226C21.3394 32.8329 19.2426 33.25 17.125 33.25C15.0074 33.25 12.9106 32.8329 10.9542 32.0226C8.99785 31.2122 7.22025 30.0244 5.7229 28.5271C4.22556 27.0298 3.0378 25.2521 2.22744 23.2958Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.125 8.16669V17.125L22.5 22.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const ReceiptIcon = () => (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.8333 3.58331H7.16659C5.37492 3.58331 3.58325 5.19581 3.58325 7.16665V12.5596C3.58325 13.8496 4.35367 14.9604 5.37492 15.5875V35.8333C5.37492 37.8041 7.34575 39.4166 8.95825 39.4166H34.0416C35.6541 39.4166 37.6249 37.8041 37.6249 35.8333V15.5875C38.6462 14.9604 39.4166 13.8496 39.4166 12.5596V7.16665C39.4166 5.19581 37.6249 3.58331 35.8333 3.58331ZM26.8749 25.0833H16.1249V21.5H26.8749V25.0833ZM35.8333 12.5416H7.16659V7.16665L35.8333 7.13081V12.5416Z" fill="white"/>
    </svg>
)

const WarningIcon = () => (
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.95825 41.125L23.4999 3.91669L45.0416 41.125H1.95825ZM8.7145 37.2084H38.2853L23.4999 11.75L8.7145 37.2084ZM24.8962 34.688C25.2709 34.312 25.4583 33.8465 25.4583 33.2917C25.4583 32.7368 25.2703 32.272 24.8943 31.8974C24.5183 31.5227 24.0535 31.3347 23.4999 31.3334C22.9464 31.332 22.4816 31.52 22.1056 31.8974C21.7296 32.2747 21.5416 32.7394 21.5416 33.2917C21.5416 33.8439 21.7296 34.3094 22.1056 34.688C22.4816 35.0666 22.9464 35.2539 23.4999 35.25C24.0535 35.2461 24.5189 35.0601 24.8962 34.688ZM21.5416 29.375H25.4583V19.5834H21.5416V29.375Z" fill="white"/>
    </svg>
)
