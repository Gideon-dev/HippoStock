import CoreOperations from "../components/sections/investors/core-operations"
import GrowthPatner from "../components/sections/investors/growth-patner"
import InvestorHero from "../components/sections/investors/investor-hero"
import MarketChallenges from "../components/sections/investors/market-challenges"
import OperationalAdvantages from "../components/sections/investors/operational-advantage"
import OperationalMilestone from "../components/sections/investors/operational-milestone"
import RevenueModel from "../components/sections/investors/revenue-model"
import WhoWeAreSection from "../components/sections/investors/who-we-are"


const InvestorsPage = () => {
  return (
    <div>
        <InvestorHero />
        <WhoWeAreSection />
        <MarketChallenges />
        <CoreOperations />
        <OperationalAdvantages />
        <OperationalMilestone/>
        <RevenueModel/>
        <GrowthPatner/>
    </div>
  )
}

export default InvestorsPage