import { FadeUp } from "@components/ui/fade-up";

interface EyebrowProps {
  title: string;
}

export function Eyebrow({ title }: EyebrowProps): React.JSX.Element {
  return (
    <FadeUp delay={0}>
      <span className="inline-block bg-primary-blue text-white text-xs sm:text-sm font-medium px-3 py-1.5 mb-5">
        {title}
      </span>
    </FadeUp>
  );
}
