import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";
import { HeroSection } from "@components/sections/hero-section";
import { ServicesSection } from "@components/sections/services-section";
import { TrustedSection } from "@components/sections/trusted-section";
import { CheaperStocksSection } from "@components/sections/cheaper-stocks-section";
import { CutCostSection } from "@components/sections/cut-cost-section";
import { ProductCategorySection } from "@components/sections/product-category-section";
import { HowItWorksSection } from "@components/sections/how-it-works-section";
import { HippostockSection } from "@components/sections/hippostock-section";
import { NightEconomySection } from "@components/sections/night-economy-section";

export const metadata: Metadata = buildMetadata({
  title: "Direct Factory Sourcing for Pharmacies & Clinics",
  description:
    "Get medical consumables and high-demand products 25–40% cheaper, sourced directly from factories. 10–14 day delivery to pharmacies, clinics, and SMEs across Nigeria & Ghana.",
  path: "/",
});

export default function Home(): React.JSX.Element {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <TrustedSection />
      <CheaperStocksSection />
      <CutCostSection />
      <ProductCategorySection /> 
      <HowItWorksSection />
      <HippostockSection />
      <NightEconomySection />
      {/* <Footer /> */}
    </main>
  );
}
