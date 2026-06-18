"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

import { Button } from "@components/ui/button";
import Link from "next/link";

import { ROUTES } from "@/lib/routes";

interface Product {
  name: string;
  spec: string;
  image: string | string[];
}

const PRODUCT_DATA: Product[] = [
  { name: "Glove", spec: "Nitrlie gloves standard large 100pk", image: "/images/product-cat-image-1.png" },
  { name: "Syringe", spec: "2ml/5ml/10ml", image: "/images/product-cat-image-2.png" },
  { name: "IV sets", spec: "Gravit/luer Lock", image: "/images/product-cat-image-3.png" },
  { name: "Masks", spec: "standard 100pk", image: "/images/product-cat-image-4.png" },
  { name: "Wall Sockets", spec: "Various Designs", image: ["/images/product-cat-image-5.png", '/images/product-cat-image-7.png', '/images/product-cat-image-6.png',] },
];

export function ProductCategorySection(): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="products" className="bg-cream py-16 px-5.25 md:px-11.5 w-full">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-24.5">
          <h2 className="text-[35px] md:text-[70px] font-semibold text-black mb-3">Product category</h2>
          <p className="text-black text-sm xl:text-[25px] leading-relaxed max-w-136.25">
            We specialize in high-turnover medical disposables where margins matter most. Factory direct batches only.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 justify-between">
              {PRODUCT_DATA.slice(0,4).map((product) => (
                <div
                  key={product.name}
                  className="bg-[#C0E9FF] rounded-2xl p-5.25 flex flex-col items-start shrink-0 w-54 xl:flex-1 h-64.25"
                >
                  <h4 className="font-bold text-base lg:text-[20px] text-black mb-1">{product.name}</h4>
                  <p className="text-black text-base mb-4">{product.spec}</p>
                  <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                      src={product.image as string}
                      alt={product.name}
                      width={100}
                      height={126}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {PRODUCT_DATA.slice(4,5).map((item) => 
                <div key={item.name} className="bg-[#C0E9FF] rounded-2xl p-5.25 flex flex-col items-start shrink-0 w-54 xl:flex-1 h-64.25">
                  <div className="flex-1 flex flex-wrap justify-center w-full">
                    {(item.image as string[]).map((img) => 
                      <Image
                      key={img}
                      src={img}
                      alt="other categories"
                      width={84}
                      height={126}
                      className="object-cover"
                      />
                    )}
                  </div>  
                  <Link href={ROUTES.OTHER_CATEGORIES} className="py-1.5 px-5 bg-black text-[#FFFDFD] font-medium text-[15px] flex-1 flex items-center gap-1.5 rounded-[5px] w-full">Other Categories <ArrowRight className="size-4.5 text-white"/></Link>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute xl:hidden left-0 top-1/2 -translate-y-1/2 -translate-x-5 rounded-full bg-white shadow-md border-gray-200 size-10"
            aria-label="Previous products"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute xl:hidden right-0 top-1/2 -translate-y-1/2 translate-x-5 rounded-full bg-white shadow-md border-gray-200 size-10"
            aria-label="Next products"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}