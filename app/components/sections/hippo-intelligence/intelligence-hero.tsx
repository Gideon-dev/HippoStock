import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@components/ui/fade-up";
import { Hstack } from "@components/ui/stacks";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";
import { JSX } from "react";

export function IntelligenceHero(): React.JSX.Element {
  return (
    <section className="relative bg-[#F2F2F2] py-16 md:py-24 px-5.25 md:px-11.5 overflow-hidden">
      <Image
        src="/images/blue-image-line-bg.png"
        alt="cartesian grid bg"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
        <FadeUp>
          <div>
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[67px] leading-tight mb-5">
              <span className="text-black">Do Business With</span>
              <br />
              <span className="text-primary-blue">Certainty.</span>
            </h1>
            <p className="text-black/80 text-sm sm:text-base md:text-[25px] max-w-126.25 mb-8 md:mb-10">
              Hippo Intelligence turns inventory data, supplier relationships,
              and market signals into actionable business intelligence. Built
              for the realities of African trade.
            </p>
            <Link
              href="#waitlist"
              className="inline-flex  animate-border-pulse items-center justify-center bg-black text-white font-semibold text-sm sm:text-3xl px-8 py-4 rounded-full hover:bg-black/85 transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </FadeUp>

        <div className="bg-cover rounded-[10px] bg-center bg-no-repeat max-w-133.5 w-full min-h-118"
        style={{
          backgroundImage: `url('/images/hippo-intelligence-hero.jpg')`,
        }}
        >
          <FadeUp delay={0.15} className="">
            <div className="relative w-full aspect-square max-w-115.5 mx-auto translate-y-1/2 md:translate-0">
              <Image
                src="/images/iphone-image.png"
                alt="HippoStock app mockup"
                fill
                sizes="(max-width: 768px) 100vw, 373px"
                className="object-cover"
              />
              <NotificationBubbles
                Icon= { <BellIcon className="size-4.25 animate-bounce"/>}
                iconBg= '#D0D0D0'
                msg= '2 Cartons of Mobil oil left!!'
                action='OK'
                className="absolute bottom-15 -left-5 xl:left-10 xl:bottom-23e"
              />
              <NotificationBubbles
                Icon= {<RefreshCw  className="size-3.5 animate-spin"/>}
                iconBg= '#D0D0D0'
                msg= 'Iphone 12 screen 17 left!!'
                action= 'Reorder'
                  className="absolute top-20 -right-5 xl:-right-1 xl:top-25"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}


interface NotificationBubblesProps{
  Icon: JSX.Element,
  iconBg: string,
  msg: string,
  action: string,
  className: string
}


const NotificationBubbles =({Icon, iconBg, msg,action, className}:NotificationBubblesProps) => {
  return(
    <Hstack className={cn("gap-2.5 items-start py-3.25 px-3 bg-white w-fit rounded-md shadow-sm", className)}>
      <div style={{backgroundColor: iconBg}} className="size-7.75 rounded-full shrink-0 flex items-center justify-center">
        {Icon}
      </div>
      <span className="text-black font-medium text-xs max-w-21.5">
        {msg}
      </span>
      <span className="font-medium text-[9px] rounded-[10px] bg-[#3E96C6] px-1.75 text-white">
        {action}
      </span>
    </Hstack>
  )
}

const BellIcon = ({className}:{className:string}) => (
  <svg className={className} viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.2407 12.7781C36.2407 7.95915 40.1625 4.03735 44.9815 4.03735C49.8005 4.03735 53.7223 7.95915 53.7223 12.7781C53.7223 17.5971 49.8005 21.5189 44.9815 21.5189C40.1625 21.5189 36.2407 17.6039 36.2407 12.7781ZM41.3248 12.7781C41.3248 14.7968 42.9628 16.4349 44.9815 16.4349C47.0002 16.4349 48.6382 14.7968 48.6382 12.7781C48.6382 10.7595 47.0002 9.12142 44.9815 9.12142C42.9628 9.12142 41.3248 10.7663 41.3248 12.7781Z" fill="#E2A610"/>
    <path d="M52.4988 8.34668C52.4988 8.34668 52.8863 9.88957 51.0987 10.7324C49.3111 11.5684 48.1285 10.9499 48.1285 10.9499C48.4479 11.4936 48.6382 12.1121 48.6382 12.785C48.6382 14.8037 47.0002 16.4418 44.9815 16.4418C42.9628 16.4418 41.3248 14.8037 41.3248 12.785C41.3248 12.5811 41.3724 11.8131 41.6986 11.1742C38.6672 12.6151 36.3631 11.3849 36.3631 11.3849C36.2883 11.8403 36.2407 12.3093 36.2407 12.785C36.2407 17.604 40.1625 21.5258 44.9815 21.5258C49.8005 21.5258 53.7223 17.604 53.7223 12.7782C53.7223 11.1606 53.2737 9.64488 52.4988 8.34668Z" fill="#9E740B"/>
    <path d="M7.10956 66.4734C11.711 61.9535 14.5793 60.431 15.7484 53.8788C16.9175 47.3266 15.9795 33.5221 21.1315 24.4823C25.835 16.2037 34.467 12.7781 42.8883 12.7781C43.0922 12.7781 43.2961 12.7917 43.5 12.7917C43.7039 12.7849 43.9078 12.7781 44.1118 12.7781C52.5331 12.7781 61.1651 16.2037 65.8686 24.4755C71.0138 33.5221 70.0826 47.3266 71.2517 53.872C72.4207 60.4242 75.289 61.9467 79.8905 66.4666C81.8752 68.4173 84.2745 71.5235 84.2813 73.5217C84.2881 75.52 83.2686 76.2473 80.8421 77.2668C73.9772 80.1555 64.8014 82.9558 43.5 82.9558C22.1986 82.9558 13.0228 80.1555 6.158 77.2668C3.73152 76.2473 2.71199 75.5268 2.71878 73.5217C2.72558 71.5303 5.12488 68.4241 7.10956 66.4734Z" fill="#FFCA28"/>
    <path d="M77.2807 73.6645C77.2807 70.6535 62.1576 68.2134 43.5002 68.2134C24.8428 68.2134 9.71973 70.6535 9.71973 73.6645C9.71973 76.6755 24.8428 80.271 43.5002 80.271C62.1576 80.271 77.2807 76.6755 77.2807 73.6645Z" fill="#4E342E"/>
    <path d="M63.7818 30.4432C64.0333 31.4016 64.244 32.3599 64.4139 33.2979C65.2771 38.0965 65.1208 43.0174 65.5082 47.8772C66.0315 54.3818 67.187 57.8074 69.8174 60.866C70.164 61.267 69.8106 61.8855 69.2873 61.804C65.7733 61.267 62.9526 60.7301 59.7376 58.6095C54.939 55.4489 53.7564 49.5016 53.7224 44.1593C53.668 36.207 53.8176 28.5061 53.1855 25.5834C52.3087 21.5121 51.493 19.3439 50.1608 17.366C48.1286 14.3482 56.0197 18.5351 57.2568 19.4663C60.7028 22.0695 62.6807 26.2563 63.7818 30.4432Z" fill="#E2A610"/>
    <path d="M20.9955 40.9987C20.9139 35.8467 20.9547 30.5179 23.0074 25.7873C24.2376 22.9598 26.3242 20.411 28.9886 18.8273C31.0821 17.5835 35.3369 16.2105 36.8662 19.0312C37.1721 19.5954 37.2944 20.2547 37.3148 20.9004C37.3692 23.1501 36.2001 25.23 35.065 27.1739C31.7074 32.9376 30.3684 39.2383 28.5944 45.6274C27.8671 48.2646 26.9428 50.895 25.3591 53.1244C24.2716 54.6537 18.2156 60.0912 19.6021 55.177C20.9343 50.426 21.0703 45.9469 20.9955 40.9987Z" fill="#FFF59D"/>
    <path d="M49.6784 72.6042C49.6716 71.4351 49.0395 70.7622 47.585 70.2593C44.5671 69.2193 40.7881 69.4096 38.5859 70.5923C36.275 71.8293 37.879 78.6874 43.5 78.6874C49.1211 78.6874 49.6852 73.4946 49.6784 72.6042Z" fill="#E2A610"/>
  </svg>
)