import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeUp } from "@/app/ui/fade-up";

interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Trade Facilitation",
    description: "Join other retail pharmacies to buy medical consumable directly from factory.",
    cta: "Join as agent",
    image: "/images/services/trade.jpg",
    imageAlt: "Cargo ship at sea",
  },
  {
    title: "Hippo Stock",
    description: "Get real time notification and low stock reminders on your phone",
    cta: "Download Hippostock",
    image: "/images/services/hippo-stock.jpg",
    imageAlt: "Stacked packages in warehouse",
  },
  {
    title: "Night Economy",
    description: "Built for businesses that run 9 PM – 5 AM. We keep your operations running, your revenue flowing, all night long.",
    cta: "Contact for partnership",
    image: "/images/services/night-economy.jpg",
    imageAlt: "City at night with skyscrapers",
  },
];

export function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="bg-primary-blue relative overflow-hidden py-20 px-8 md:px-20">
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeUp>
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card, index) => (
            <FadeUp key={card.title} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full">
                <div className="relative aspect-video w-full">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-xl text-black">{card.title}</h3>
                  <p className="text-light-black text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <Button variant="service" className="self-start mt-2 gap-1.5">
                    {card.cta}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
