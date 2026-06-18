import { FadeUp } from "@components/ui/fade-up";
import { Vstack } from "@components/ui/stacks";

export function BetterDecisionsSection(): React.JSX.Element {
  return (
    <section className="bg-white py-16 md:py-24 px-5.25 md:px-11.5">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <Vstack className="items-center text-center gap-5">
            <h2 className="text-xl sm:text-2xl md:text-[40px] text-black uppercase leading-tight font-medium ">
              Better Information.
              <br />
              Better Decisions.
            </h2>
            <p className="text-black text-sm sm:text-xl md:text-lg max-w-312.5">
              The right information at the right time can change the outcome
              of a business. Hippo Intelligence helps businesses act earlier,
              source smarter, and operate with greater confidence. Because
              better decisions start with the better information Hippo
              Intelligence provides.
            </p>
          </Vstack>
        </FadeUp>
      </div>
    </section>
  );
}
