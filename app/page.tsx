import { Navbar } from "@/app/components/layout/navbar";
import { Footer } from "@/app/components/layout/footer";
import { HeroSection } from "@/app/components/sections/hero-section";
import { ServicesSection } from "@/app/components/sections/services-section";
import { TrustedSection } from "@/app/components/sections/trusted-section";
import { CheaperStocksSection } from "@/app/components/sections/cheaper-stocks-section";
import { CutCostSection } from "@/app/components/sections/cut-cost-section";
import { ProductCategorySection } from "@/app/components/sections/product-category-section";
import { HowItWorksSection } from "@/app/components/sections/how-it-works-section";
import { HippostockSection } from "@/app/components/sections/hippostock-section";
import { NightEconomySection } from "@/app/components/sections/night-economy-section";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustedSection />
      <CheaperStocksSection />
      <CutCostSection />
      <ProductCategorySection />
      <HowItWorksSection />
      <HippostockSection />
      <NightEconomySection />
      <Footer />
    </main>
  );
}
