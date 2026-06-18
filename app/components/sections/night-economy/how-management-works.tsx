import Image from "next/image";
import { FadeUp } from "@components/ui/fade-up";
import { Vstack } from "@components/ui/stacks";

const SERVICES = [
  {
    id: 1,
    image: "/images/hippo-night.png",
    imageAlt: "Power supply unit for night operations",
    label: "HIPPO NIGHT OPERATIONS",
    subtitle: "Keep Making Sales After Dark",
    description:
      "Customers still need medicine, groceries, household items, and everyday essentials after most businesses have closed. Hippo helps businesses stay open longer by coordinating the support needed to operate safely at night.",
    features: ["Power Support", "Security Coordination", "Sales & Inventory Tracking"],
    quote: "“You rest. The business keeps moving.”",
  },
  {
    id: 2,
    image: "/images/hippo-plus.png",
    imageAlt: "Pharmacy staff at counter",
    label: "HIPPO PLUS",
    subtitle: "Get More From The Business You Already Have",
    description:
      "Hippo Plus helps business owners improve the everyday parts of the business that affect sales and profitability.",
    features: [
      "Staff Accountability",
      "Inventory Control",
      "Pricing & Process Reviews",
      "Customer Experience Improvements",
      "Operational Support",
    ],
    quote: "“Improvements which compound into better business performance.”",
  },
];

export function HowManagementWorks(): React.JSX.Element {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-12 md:mb-20.25">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-black uppercase">
              HOW HIPPO MANAGEMENT WORKS
            </h2>
            <p className="text-black text-sm sm:text-[25px] font-medium">
              Hippo provides support through two management services:
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <FadeUp key={service.id} delay={0.1 * index}>
              <ServiceCard {...service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  label: string;
  subtitle: string;
  description: string;
  features: string[];
  quote: string;
}

function ServiceCard({
  image,
  imageAlt,
  label,
  subtitle,
  description,
  features,
  quote,
}: ServiceCardProps): React.JSX.Element {
  return (
    <Vstack className="border border-black overflow-hidden h-full">
      <div className="relative w-full aspect-4/3 bg-[#DDDDDD]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <Vstack className="p-5 sm:p-6 gap-3 flex-1">
        <Vstack className="gap-1">
          <h3 className="font-bold text-base sm:text-[25px] text-black uppercase">{label}</h3>
          <p className="font-medium text-sm sm:text-xl text-[#FF621F]">{subtitle}</p>
        </Vstack>
        <p className="font-medium text-black text-sm sm:text-xl mt-6.25 mb-11.25">{description}</p>
        <Vstack className="flex-1 justify-between gap-10.25">
          <div className="border border-[#979797] p-3 sm:p-4 mt-1 bg-[#E3E3E3]">
            <p className="font-bold text-xs sm:text-xl text-black mb-1.75">Core Features</p>
            <p className="text-[#FF621F] text-xs sm:text-base font-bold">
              {features.join(" • ")}
            </p>
          </div>

          <p className="text-black text-sm sm:text-[25px] italic font-semibold">{quote}</p>
        </Vstack>
      </Vstack>
    </Vstack>
  );
}
