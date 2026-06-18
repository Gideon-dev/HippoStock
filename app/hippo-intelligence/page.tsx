import { IntelligenceHero } from "@components/sections/hippo-intelligence/intelligence-hero";
import { GoodInformationSection } from "@components/sections/hippo-intelligence/good-information-section";
import { IntelligenceLayersSection } from "@components/sections/hippo-intelligence/intelligence-layers-section";
import { ProcessFlowSection } from "@components/sections/hippo-intelligence/process-flow-section";
import { BetterDecisionsSection } from "@components/sections/hippo-intelligence/better-decisions-section";
import { WaitlistFormSection } from "@components/sections/hippo-intelligence/waitlist-form-section";

export default function HippoIntelligencePage(): React.JSX.Element {
  return (
    <main>
      <IntelligenceHero />
      <GoodInformationSection />
      <IntelligenceLayersSection />
      <ProcessFlowSection />
      <BetterDecisionsSection />
      <WaitlistFormSection />
    </main>
  );
}
