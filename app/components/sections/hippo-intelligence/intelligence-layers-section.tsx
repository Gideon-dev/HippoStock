import { FadeUp } from "@components/ui/fade-up";
import { Vstack } from "@components/ui/stacks";



export function IntelligenceLayersSection(): React.JSX.Element {
  
const LAYERS = [
  {
    id: 1,
    icon: <ClipboardIcon className="size-8 md:size-14.5 text-[#FF621F]" />,
    title: "Hippo Stock",
    tag: "KNOW WHAT YOU HAVE",
    description:
      "Track inventory in real time. Monitor stock movement. Receive low-stock alerts. Reorder before shortages happen.",
  },
  {
    id: 2,
    icon: <LeafIcon className="size-8 md:size-14.5 text-[#FF621F]" />,
    title: "Supplier Intelligence",
    tag: "KNOW WHO CAN SUPPLY",
    description:
      "Access verified supplier relationships. Discover alternative sourcing options and reduce dependency on a single vendor.",
  },
  {
    id: 3,
    icon: <SearchIcon className="size-8 md:size-14.5 text-[#FF621F] " />,
    title: "Market Intelligence",
    tag: "KNOW WHAT'S CHANGING",
    description:
      "Monitor demand trends. Identify great profit opportunities. Track movement before it becomes obvious.",
  },
];

  return (
    <section className="bg-[#0C4564] py-16 md:py-24 px-5.25 md:px-11.5">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <Vstack className="items-center text-center gap-3 mb-12 md:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[45px] text-white">
              The Three Intelligence Layers
            </h2>
            <span className="w-16 h-1 bg-[#FF621F] rounded-full" />
          </Vstack>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {LAYERS.map((layer, index) => (
            <FadeUp key={layer.id} delay={0.1 * index}>
              <Vstack className="border border-[#8C8C8C] rounded-[10px] p-5.25 md:p-5.75 h-full">
                {layer.icon}
                <Vstack className="mt-5.5 md:mt-11 gap-1.5">
                  <h3 className="font-bold text-white text-lg sm:text-xl md:text-3xl">
                    {layer.title}
                  </h3>
                  <span className="text-[#FF621F] font-bold text-xs sm:text-[17px] tracking-wide">
                    {layer.tag}
                  </span>
                </Vstack>
                <p className="text-white text-sm sm:text-[17px] font-medium mt-3.75">{layer.description}</p>
              </Vstack>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

interface IconProps{
  className: string
}

const ClipboardIcon = ({className}:IconProps) => (
  <svg className={className} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0833 12.0833H16.9167V19.3333H41.0833V12.0833H45.9167V24.1666H50.75V7.24996H35.815C34.8 4.44663 32.1417 2.41663 29 2.41663C25.8583 2.41663 23.2 4.44663 22.185 7.24996H7.25V50.75H26.5833V45.9166H12.0833V12.0833ZM29 7.24996C30.3292 7.24996 31.4167 8.33746 31.4167 9.66663C31.4167 10.9958 30.3292 12.0833 29 12.0833C27.6708 12.0833 26.5833 10.9958 26.5833 9.66663C26.5833 8.33746 27.6708 7.24996 29 7.24996Z" fill="#FF621F"/>
    <path d="M50.75 27.7916L37.4825 41.0833L30.2083 33.8333L26.5833 37.4583L37.4825 48.3333L54.375 31.4166L50.75 27.7916Z" fill="#FF621F"/>
  </svg>
)

const LeafIcon = ({className}:IconProps) => (
  <svg className={className} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.0567 5.17225C43.4476 5.13186 43.842 5.20064 44.1962 5.37095C44.5503 5.54127 44.8503 5.80644 45.0627 6.137C47.1686 9.30325 46.6501 14.0208 44.0704 16.7769C44.0984 17.0406 44.0768 17.3073 44.0066 17.5631C43.5831 19.1111 43.0505 20.6272 42.4129 22.1C41.242 24.7839 39.5909 27.4975 37.264 29.8265C32.9077 34.1828 27.1872 36.1824 22.7205 37.1152C21.6718 37.3343 20.6149 37.5115 19.5521 37.6465L18.4471 37.774L17.4569 37.8611C17.1466 37.8838 16.859 37.9029 16.5941 37.9185L16.3795 39.6823L16.2435 40.9424L16.1861 41.5586L15.9375 44.625C15.8376 45.7725 14.9855 46.75 13.8125 46.75C13.2489 46.75 12.7084 46.5261 12.3099 46.1276C11.9114 45.7291 11.6875 45.1886 11.6875 44.625C11.6875 44.2935 11.7066 43.8813 11.7364 43.4137L11.815 42.4214L11.917 41.3483L12.0976 39.712L12.1571 39.185C12.5927 35.5045 13.1049 31.9026 14.2545 28.3688C15.5826 24.2888 17.9732 19.0634 22.236 14.7985C25.5807 11.4559 29.5311 9.25225 33.0884 7.80725L34.0489 7.43325L34.9839 7.09325C35.1369 7.03942 35.2892 6.98771 35.4407 6.93813L36.3332 6.64913L37.1875 6.39412L38.3945 6.06475L39.4974 5.797L40.1667 5.65037L41.327 5.42725L42.5531 5.23388L43.0567 5.17225ZM10.625 2.125C11.0225 2.125 11.4121 2.23652 11.7494 2.44688C12.0868 2.65724 12.3583 2.95801 12.5332 3.315L12.6352 3.56363L12.9115 4.36688C13.2031 5.22152 13.6728 6.00447 14.2898 6.66388C14.9067 7.32329 15.6566 7.84412 16.49 8.19187L16.8831 8.34062L17.6864 8.61475C18.084 8.75069 18.4325 9.0015 18.6876 9.33546C18.9427 9.66942 19.0931 10.0715 19.1197 10.4909C19.1463 10.9104 19.048 11.3283 18.8371 11.6918C18.6262 12.0553 18.3123 12.3481 17.935 12.5332L17.6864 12.6353L16.8831 12.9115C16.0285 13.2031 15.2455 13.6728 14.5861 14.2898C13.9267 14.9067 13.4059 15.6566 13.0581 16.49L12.9094 16.8831L12.6352 17.6864C12.4993 18.084 12.2485 18.4325 11.9145 18.6876C11.5806 18.9427 11.1785 19.0931 10.7591 19.1197C10.3396 19.1463 9.92175 19.048 9.55822 18.8371C9.1947 18.6262 8.90186 18.3123 8.71675 17.935L8.61475 17.6864L8.3385 16.8831C8.04695 16.0285 7.57716 15.2455 6.96024 14.5861C6.34332 13.9267 5.59335 13.4059 4.76 13.0581L4.36687 12.9094L3.56362 12.6353C3.16596 12.4993 2.81753 12.2485 2.5624 11.9145C2.30727 11.5806 2.15689 11.1785 2.13028 10.7591C2.10366 10.3396 2.20202 9.92175 2.41289 9.55822C2.62377 9.1947 2.9377 8.90187 3.315 8.71675L3.56362 8.61475L4.36687 8.3385C5.22151 8.04695 6.00446 7.57716 6.66388 6.96024C7.32329 6.34332 7.84412 5.59335 8.19187 4.76L8.34062 4.36688L8.61475 3.56363C8.75792 3.14412 9.0287 2.77989 9.38916 2.52193C9.74963 2.26396 10.1817 2.12518 10.625 2.125Z" fill="#FF621F"/>
  </svg>
)

const SearchIcon = ({className}:IconProps) =>(
  <svg className={className} viewBox="0 0 56 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.95321 36.7527L3.97327 33.7727L18.873 18.873L26.8195 26.8195L40.9245 10.9265L43.7058 13.7078L26.8195 32.7794L18.873 24.8329L6.95321 36.7527Z" fill="#FF621F"/>
    <path d="M42.2061 51.0291H40.9444L40.4972 50.5979C42.1166 48.7198 43.0065 46.322 43.0046 43.8422C43.0046 41.789 42.3958 39.7819 41.2551 38.0747C40.1144 36.3676 38.4931 35.037 36.5962 34.2513C34.6993 33.4656 32.612 33.26 30.5983 33.6605C28.5845 34.0611 26.7348 35.0498 25.283 36.5016C23.8312 37.9534 22.8425 39.8032 22.4419 41.8169C22.0413 43.8307 22.2469 45.9179 23.0327 47.8148C23.8184 49.7117 25.1489 51.333 26.8561 52.4737C28.5633 53.6144 30.5704 54.2233 32.6235 54.2233C35.1949 54.2233 37.5586 53.281 39.3792 51.7158L39.8105 52.163V53.4247L47.7959 61.3942L50.1756 59.0146L42.2061 51.0291ZM32.6235 51.0291C28.6468 51.0291 25.4366 47.8189 25.4366 43.8422C25.4366 39.8654 28.6468 36.6553 32.6235 36.6553C36.6003 36.6553 39.8105 39.8654 39.8105 43.8422C39.8105 47.8189 36.6003 51.0291 32.6235 51.0291Z" fill="#FF621F"/>
  </svg>
)