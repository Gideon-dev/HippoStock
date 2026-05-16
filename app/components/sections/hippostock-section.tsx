import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@/app/ui/fade-up";

export function HippostockSection(): React.JSX.Element {
  return (
    <section id="hippostock" className="bg-primary-blue py-16 px-8 md:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[300px]">
        <FadeUp>
          <div className="bg-white rounded-2xl p-8 relative">
            <span className="absolute top-4 right-4 text-2xl" aria-hidden="true">🔔</span>
            <h2 className="font-bold text-2xl text-black mb-2">Hippo Stock</h2>
            <p className="font-medium text-light-black mb-4">
              Know what you have from anywhere!
            </p>
            <p className="italic text-light-black text-sm leading-relaxed">
              HippoStock watches your inventory in real time, triggers scarcity alerts before you run dry, and tells you exactly what to reorder.
            </p>
            <Link
              href="#"
              className="text-primary-blue text-sm font-medium mt-5 inline-block hover:underline"
            >
              seemore →
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <Image
              src="/images/hippostock-mockup.png"
              alt="HippoStock app mockup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
