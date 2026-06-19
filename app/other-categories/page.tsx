import { OtherCategoriesHero } from "@components/sections/other-categories/other-categories-hero";
import { SectionBreakdown } from "@components/sections/other-categories/section-breakdown";
import GrowthPatner from "@components/sections/investors/growth-patner";

export default function OtherCategoriesPage(): React.JSX.Element {
  return (
    <main>
      <OtherCategoriesHero />
      <SectionBreakdown />
      <GrowthPatner/>
    </main>
  );
}
