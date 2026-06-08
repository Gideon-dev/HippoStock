import Image from "next/image"
import { Hstack, Vstack } from "@components/ui/stacks"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeUp } from "@components/ui/fade-up"


const CoreOperations = () => {
    const OPERATIONS =[
        {
            id:1, 
            label: "TRADE FACILITATION",
            labelColor: "black",
            topContent: <TradeFacilitationContent />,
            operations: [
                "Demand Aggregation",
                "Direct Manufacturer Sourcing",
                "Accelerated Clearance",
                "Distribution Coordination"
            ],
            about: 'Coordinated procurement infrastructure for SMEs and retail operators',
            statusLabel: 'STATUS',
            status: 'Operational'
        },
        {
            id:2,
            label: 'HIPPO STOCK',
            labelColor: '#F08017',
            topContent: <></>,
            operations: [
                "Inventory Visibility",
                "Replenishment Tracking",
                "Retail Data Coordination",
                "Movement Intelligence"
            ],
            about: 'Inventory and operational intelligence tools supporting SME coordination.',
            statusLabel: 'INTEGRATION',
            status: 'In Development'
        },
        {
            id:3,
            label: 'HIPPO MANAGMENT',
            labelColor: 'black',
            topContent: <Image src="/images/hippo-mgt-img.jpg" alt="Hippo Management" fill sizes="424px" className="w-full h-full object-cover" />,
            operations: [
                "Extended-Hours Coordination",
                "Retail Activity Support",
                "Operational Visibility",
                "Security & Monitoring Layer"
            ],
            about: 'Supporting commercial continuity beyond traditional operating hours',
            statusLabel: 'INTEGRATION',
            status: 'In Development'
        }
    ]



  return (
    <section className="bg-white py-27.5 pb-72.75 w-full">
        <div className="max-w-360 mx-auto px-4 text-center">
            <FadeUp>
                <h1 className="font-bold text-[40px] text-black w-fit mx-auto">Core Operations</h1>
            </FadeUp>
            <div className="mt-14.5 flex flex-col md:items-center lg:flex-row lg:flex-wrap lg:items-center xl:flex-nowrap gap-6.25 px-4">
                {OPERATIONS.map((operation, index) => (
                    <FadeUp key={operation.id} delay={0.1 * index}>
                        <OperationCard
                            label={operation.label}
                            labelColor={operation.labelColor}
                            topContent={operation.topContent}
                            operations={operation.operations}
                            about={operation.about}
                            status={operation.status}
                            statusLabel={operation.statusLabel}
                        />
                    </FadeUp>
                ))}
            </div>
        </div>  
    </section>
  )
}

export default CoreOperations

const OperationCard = ({label,labelColor, topContent, operations, about, status, statusLabel}: {label: string, labelColor: string, topContent: React.ReactNode, operations: string[], about: string, status: string, statusLabel: string}) => {
    return(
        <Vstack className="relative min-h-136.75 xl:h-136.75 bg-white border border-[#AEAEAE] w-full md:w-106.75">
           <span 
             className={`absolute top-0 left-0 text-[15px] text-white font-semibold h-fit w-fit px-2.5 flex items-center justify-center z-5`}
             style={{ backgroundColor: labelColor }}
            >
                {label}
            </span>
            <div className="flex-1 bg-[#DDDDDD] relative p-1.5">
                {topContent}
            </div>
            <Vstack className="p-5.5">
                <ul className="pl-5 mt-9.25 list-disc ">
                    {operations.map((operation, index) => (
                        <li key={index} className="text-left text-black text-[15px] font-normal mb-3.75">{operation}</li>
                    ))}
                </ul>
                <span className="text-[15px] italic font-normal text-black py-8 border-t border-b border-[#AEAEAE] text-left">
                    {about}
                </span>
                <Hstack className="pt-3.75 items-center justify-between">
                    <span className="text-black font-semibold text-[15px]">{statusLabel}</span>
                    <span className="font-semibold text-[#D22D2D] text-[15px]">{status}</span>
                </Hstack>
            </Vstack>
        </Vstack>
    )
}

const TradeFacilitationContent = () => {
    const FACILITIES = [
        {
            id:1,
            label: "DEMAND AGGREGATION",
            desc: 'Consolidate needs, Identify Volume.',
            icon: <FunnelIcon />,
            iconBg: '#0C4564'
        },
        {
            id:2,
            label: "Direct Sourcing",
            desc: 'Engage supplies, Negotiate contracts',
            icon: <HandShakeIcon />,
            iconBg: '#0C4564'
        },
        {
            id:3,
            label: "Fast Clearance",
            desc: 'Expidiate Customs Rapid delivery.',
            icon: <ShipIcon />,
            iconBg: '#D22D2D'
        }
    ]

    return(
        <Hstack className="items-start gap-3 justify-between" >
            {FACILITIES.map((facility) => (
                <div key={facility.id} className="flex items-center max-w-27.25 relative">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <div style={{ backgroundColor: facility.iconBg }} className="size-16.5 rounded-full justify-center items-center flex">
                            {facility.icon}
                        </div>
                        <h3 className="text-black text-sm font-bold wrap-break-word">{facility.label}</h3>
                        <p className="text-black font-normal text-xs">{facility.desc}</p>
                    </div>
                    <ArrowRight className={cn("text-black w-10 absolute left-[80%] md:left-full top-1/4", facility.id === FACILITIES[FACILITIES.length - 1].id && "hidden" )} />
                </div>
            ))}
        </Hstack>
    )
}


const FunnelIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3438 27.1875C17.1935 27.1874 17.0441 27.163 16.9014 27.1154L12.2052 25.5527C11.9259 25.4589 11.6833 25.2794 11.5118 25.0398C11.3403 24.8002 11.2488 24.5126 11.2501 24.218V17.233C11.2488 17.2301 11.247 17.2276 11.2448 17.2254L1.36297 5.71523C1.14385 5.45997 1.00258 5.14718 0.955941 4.81401C0.909301 4.48085 0.959244 4.1413 1.09984 3.83567C1.24044 3.53004 1.46579 3.27118 1.74913 3.08982C2.03247 2.90845 2.3619 2.81221 2.69832 2.8125H27.3048C27.6412 2.81221 27.9706 2.90845 28.254 3.08982C28.5373 3.27118 28.7626 3.53004 28.9032 3.83567C29.0438 4.1413 29.0938 4.48085 29.0471 4.81401C29.0005 5.14718 28.8592 5.45997 28.6401 5.71523L18.7553 17.2266C18.7534 17.229 18.7516 17.2315 18.7501 17.2342V25.7812C18.7506 25.9661 18.7146 26.1492 18.6441 26.32C18.5737 26.4909 18.4701 26.6461 18.3394 26.7768C18.2087 26.9075 18.0535 27.0111 17.8826 27.0816C17.7118 27.152 17.5286 27.188 17.3438 27.1875Z" fill="white"/>
    </svg>

)

const HandShakeIcon = () => (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.8551 10.4377C31.8378 10.6107 31.8275 10.808 31.823 11.022L29.3669 12.1949C29.0229 12.1386 27.3169 12.2379 24.7723 10.9822C24.1272 10.6638 23.4968 10.4947 22.8915 10.4947C22.3436 10.4952 21.8037 10.6259 21.3162 10.8759C20.6736 10.7369 19.7479 10.3807 19.2066 10.382C17.9817 10.3884 15.1969 11.3858 14.4256 11.471C13.6709 11.5537 12.8939 11.7612 12.1117 12.0918C10.6901 11.678 8.90789 11.0021 7.95336 10.6286L1.28125 5.76562V21.4033L6.18459 23.7364C6.2557 23.6532 6.33706 23.525 6.42547 23.3662L6.5773 23.4366C6.65161 23.6288 6.73361 23.8201 6.8233 24.0106C6.28517 24.9165 6.22111 25.937 6.65097 26.8243C7.01933 27.5834 7.70544 28.1164 8.4697 28.2657C8.51134 28.7384 8.67022 29.1958 8.938 29.5924C9.41847 30.3016 10.1821 30.725 10.9822 30.725C11.0548 30.725 11.127 30.7212 11.1988 30.7135C11.3128 31.0216 11.48 31.3086 11.6972 31.5572C12.1802 32.1126 12.8567 32.431 13.5524 32.431C13.6037 32.431 13.6543 32.4293 13.7043 32.4259C13.7927 32.7616 13.9432 33.0793 14.1533 33.3625C14.637 34.0159 15.3833 34.4048 16.1508 34.4048C16.6274 34.4048 17.0829 34.2587 17.4846 33.9852C18.261 34.4836 18.9362 34.834 19.5352 35.0492C19.8357 35.1716 20.1483 35.2344 20.4673 35.2344C21.222 35.2344 21.9542 34.882 22.477 34.2657C22.6711 34.0364 22.8287 33.7802 22.944 33.506C23.1698 33.5741 23.4044 33.6091 23.6403 33.6098C24.4424 33.6098 25.2028 33.217 25.7288 32.5303C25.9789 32.205 26.1598 31.832 26.2605 31.4342C26.3156 31.438 26.3703 31.44 26.4245 31.44C27.3515 31.44 28.2388 30.8961 28.7378 30.0203C28.9993 29.5647 29.1381 29.0491 29.1407 28.5238C30.0568 28.3874 30.8634 27.7359 31.2561 26.7858C31.643 25.8499 31.538 24.8172 30.9979 23.9562L33.4932 22.55C33.5572 22.7691 33.62 22.9709 33.6809 23.1349L39.7188 19.9222V6.81753L31.8551 10.4377ZM31.8544 12.3833C31.8942 13.0764 31.9665 13.8599 32.0601 14.678C31.5476 13.817 30.9005 13.4243 30.0972 13.2289L31.8544 12.3833ZM28.5052 27.602C27.1292 27.1285 24.265 23.7614 24.265 23.7614H24.3213C24.6128 23.7409 25.2425 23.4341 25.9492 23.5808C24.8396 22.6275 23.6192 23.4341 22.7883 22.9401C22.9811 23.5583 23.9081 23.7531 24.1458 23.7608L26.8902 26.9524C28.133 28.397 27.2676 30.1843 26.0215 30.4688C25.1855 30.062 22.8248 27.2541 22.8248 27.2541C22.9055 27.2394 23.3841 27.0895 23.8716 27.1535C22.746 26.3118 21.4699 27.0421 20.7127 26.5135C21.1419 27.5738 22.5558 27.3022 22.7037 27.2765L24.1721 29.151C25.347 30.6501 24.4238 32.3817 23.1759 32.6161C22.0695 32.2273 21.3514 30.8435 21.3514 30.8435C21.4629 30.8256 21.8357 30.6597 22.3661 30.7365C21.4225 29.9095 20.3238 30.6597 19.6633 30.1888C20.0714 31.078 21.0887 30.8756 21.1458 30.8692C22.1631 32.4714 21.108 34.1421 19.8472 34.1921H19.8459L19.8446 34.1927C19.0874 34.0614 18.2943 33.456 17.3987 32.8346C17.7062 32.4938 17.9779 31.8948 17.9779 31.8948C18.8773 30.2663 17.7101 28.8262 16.5051 28.9498C17.4827 29.217 18.2155 30.4649 17.4525 31.8506L17.1175 32.4143C16.7536 33.0774 16.1854 33.4778 15.7677 33.4285C15.1245 33.3503 14.218 32.4111 14.5992 31.0863C14.7465 30.9518 16.1675 28.7782 16.1675 28.7782C17.1444 27.2048 16.0477 25.6987 14.8394 25.7499C15.8017 26.0747 16.4762 27.3649 15.6466 28.7038L14.4916 30.5046C14.0976 31.1414 13.5877 31.5021 13.1014 31.4355C12.3468 31.333 11.8176 30.4124 11.9387 29.4623C11.9323 29.4681 12.7702 28.5309 12.7702 28.5309C13.8836 27.076 12.9304 25.4514 11.7241 25.3662C12.6511 25.798 13.2033 27.1587 12.2571 28.397L11.8484 28.898C11.3999 29.486 10.8599 29.7852 10.3871 29.6673C9.56197 29.4604 9.13275 27.9165 9.52289 27.4956C9.82975 27.1644 10.6914 26.1157 10.6914 26.1157C11.8042 24.6602 10.8522 23.0362 9.64461 22.9498C10.5722 23.3828 11.1245 24.7435 10.1782 25.9825L9.76953 26.4822C9.31853 27.0754 8.77656 27.3733 8.30058 27.2522C7.30889 27.0011 6.81369 25.47 7.76245 24.2272C7.76245 24.2272 7.44022 23.2034 7.2948 22.7659L6.81689 22.5442C7.93734 19.9337 9.62988 14.1719 9.70803 12.2577C10.5332 12.5518 12.7113 13.1783 12.9425 13.1796L12.9413 13.1809C15.286 12.4441 17.7434 12.5255 18.8645 12.0924C19.2277 11.9541 19.9503 11.9451 20.7165 12.3833C20.238 12.8029 19.7857 13.3026 19.3161 13.7683C18.1938 14.8824 14.0207 16.6197 14.8253 18.4468C15.5198 20.0234 17.4756 21.6365 20.7563 19.1041L22.6012 18.8504L25.4706 20.2662L29.1478 24.0427C30.4592 25.3867 29.7167 27.2112 28.5052 27.602ZM29.4277 23.4411C29.0062 22.6531 27.6923 21.361 26.452 20.3046L26.4444 20.2969C27.0164 20.32 27.6167 19.3988 28.3925 19.3277C27.8505 18.9138 26.9524 19.3917 26.6724 19.4673C25.1292 19.8824 22.7307 17.9407 22.7307 17.9407L20.4359 18.2713C20.4359 18.2713 17.7069 21.6019 15.4077 18.8581C14.1591 17.368 18.6838 15.4218 19.7985 14.3141C21.2265 12.8951 22.4987 11.159 24.8479 12.3416C26.7993 13.3256 27.568 13.2648 30.1856 13.7203C30.9659 13.8567 31.5066 14.2142 32.0863 14.9118C32.3592 17.2078 32.8006 19.7543 33.2241 21.5263C33.0056 21.7101 31.1331 22.9696 29.4277 23.4411Z" fill="white"/>
    </svg>
)

const ShipIcon = () => (
    <svg width="39" height="39" className="mb-3" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0303 12.9828C14.6737 15.3319 16.6521 16.1102 16.949 18.0756C13.5272 15.9004 11.2777 15.3789 7.76648 16.1759C10.4095 17.3191 12.4535 19.1778 12.4227 21.324C9.29602 19.2365 6.20725 18.5932 2.551 19.7568C6.15545 20.9582 7.13319 22.1411 6.03814 24.7791L7.48792 25.3232L7.25689 25.9389C10.2246 25.6868 14.0089 25.2037 17.9205 24.6305L15.2953 21.1301L14.4727 20.0333H20.9086L26.3518 23.2991C26.551 23.2658 26.7532 23.2323 26.9505 23.199C22.04 16.6952 19.1747 14.3468 12.0303 12.9828ZM17.2148 21.4044L19.7984 24.8491L24.8633 24.0049L20.5289 21.4044H17.2148ZM35.8002 23.0149C32.3293 23.6726 26.9263 24.6312 21.281 25.5095C15.9812 26.3339 10.6298 27.0643 6.72514 27.3562L6.04721 29.1631L8.89802 33.4395H26.8125C28.793 33.4395 31.5051 31.1973 33.5839 28.5245C34.6233 27.1881 35.5183 25.7701 36.1436 24.5563L36.1614 24.5206C30.2949 29.2951 19.8746 30.9404 9.08959 30.9404V29.5693C20.0745 29.5693 30.5274 27.6597 35.8002 23.0147V23.0149ZM1.37109 23.3154V26.475C1.45268 26.3151 1.54138 26.1589 1.63693 26.007C2.2016 25.1138 3.05122 24.4051 4.16713 24.2004C3.14765 23.83 2.21333 23.5257 1.37109 23.3153V23.3154ZM4.28825 25.5869C3.65191 25.7393 3.19076 26.1151 2.79589 26.7397C2.36895 27.415 2.06136 28.3638 1.86088 29.4069C1.513 31.216 1.47697 33.1751 1.40415 34.6582H2.02038L3.83708 31.1505L5.72256 26.1252L4.28825 25.5869V25.5869ZM5.45391 30.7448L5.09224 31.7087L4.19585 33.4395H7.25034L5.45391 30.7448ZM3.48578 34.8106L2.85454 36.0294H1.37109V37.629H37.6289V34.8106H3.48578Z" fill="white"/>
    </svg>

)