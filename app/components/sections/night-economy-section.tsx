import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@/app/ui/fade-up";

export function NightEconomySection(): React.JSX.Element {
  return (
    <section id="night-economy" className="bg-primary-blue py-16 px-8 md:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[300px]">
        <FadeUp>
          <div className="bg-white rounded-2xl p-8 relative">
            <span className="absolute top-4 right-4 text-2xl" aria-hidden="true">🌙</span>
            <h2 className="font-bold text-2xl text-black mb-2">Night Economy</h2>
            <p className="font-medium text-black mb-4">
              Your shop earns while you{" "}
              <span className="text-primary-blue italic">sleep</span>
            </p>
            <p className="italic text-light-black text-sm leading-relaxed">
              Hippo Night Economy team takes over from 9 PM to 5 AM with vetted staff, sales management, and security protocols.
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
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/images/night-economy-mockup.jpg"
              alt="Night Economy app and store"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
