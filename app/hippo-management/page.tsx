import { NightEconomyHero } from "@components/sections/night-economy/night-economy-hero";
import { HowManagementWorks } from "@components/sections/night-economy/how-management-works";
import { SimplePartnership } from "@components/sections/night-economy/simple-partnership";
import { WhoIsItFor } from "@components/sections/night-economy/who-is-it-for";

export default function NightEconomyPage() {
  return (
    <main>
      <NightEconomyHero />
      <HowManagementWorks />
      <SimplePartnership />
      <WhoIsItFor />
    </main>
  );
}
