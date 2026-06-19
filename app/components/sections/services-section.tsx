import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@components/ui/button";
import { FadeUp } from "@components/ui/fade-up";
import { Vstack } from "@components/ui/stacks";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/routes";

interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  href?: string;
  image: string;
  imageAlt: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Trade Facilitation",
    description: "Join other retail pharmacies to buy medical consumable directly from factory.",
    cta: "Join as agent",
    image: "/images/service-cargo-img-1.png",
    imageAlt: "Cargo ship at sea",
  },
  {
    title: "Hippo Stock",
    description: "Get real time notification and low stock reminders on your phone",
    cta: "Download Hippostock",
    image: "/images/service-cargo-img-2.png",
    imageAlt: "Stacked packages in warehouse",
  },
  {
    title: "Night Economy",
    description: "Built for businesses that run 9 PM – 5 AM. We keep your operations running, your revenue flowing, all night long.",
    cta: "Contact for partnership",
    href: WHATSAPP_LINK,
    image: "/images/service-cargo-img-3.png",
    imageAlt: "City at night with skyscrapers",
  },
];

export function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="relative overflow-hidden pb-20 ">

      <div className="w-full">
        <Vstack className="relative h-72 w-full items-center bg-primary-blue">
          <div
            style={{
              backgroundImage: "url('/images/blue-image-line-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
          />
          <FadeUp>
            <h2 className="text-white text-4xl md:text-[55px] font-bold text-center mb-12 mt-12">
              Our Services
            </h2>
          </FadeUp>
        </Vstack>

        <div className="grid grid-cols-1 md:grid-cols-3 relative bottom-30 md:items-start w-[90%] min-h-130.5 mx-auto border border-[#D3D3D3] rounded-[20px] overflow-hidden">
          {SERVICE_CARDS.map((card, index) => {
            return (
              <FadeUp key={card.title} delay={index * 0.1} className="h-full">
                <div className={cn("bg-white overflow-hidden flex flex-col h-full",
                  index === 1 && "border-l border-r border-black",
                 )}>
                  <div
                    className="relative w-full h-47"
                    style={{
                      aspectRatio: '12/8',
                      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 70%)',
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 lg:px-10.5 py-10 flex flex-col gap-3 flex-1 h-full">
                    <h3 className="font-bold text-[26px] text-black">{card.title}</h3>
                    <p className="text-black text-base xl:text-xl leading-relaxed flex-1 max-w-81.25">
                      {card.description}
                    </p>
                    {card.href ? (
                      <Button
                        variant="service"
                        nativeButton={false}
                        className="w-full mt-2 gap-1.5 py-3! [box-shadow:none] animate-border-pulse"
                        render={
                          <Link href={card.href} target="_blank" rel="noopener noreferrer">
                            {card.cta}
                            <ArrowUpRight className="size-6 shrink-0" />
                          </Link>
                        }
                      />
                    ) : (
                      <Button variant="service" className="w-full mt-2 gap-1.5 py-3! [box-shadow:none] animate-border-pulse">
                        {card.cta}
                        <ArrowUpRight className="size-6 shrink-0" />
                      </Button>
                    )}
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  );
}
