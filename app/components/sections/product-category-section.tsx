"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  spec: string;
  image: string;
}

const PRODUCT_DATA: Product[] = [
  { name: "Glove", spec: "Nitrlie gloves standard large 100pk", image: "/images/products/glove.jpg" },
  { name: "Syringe", spec: "2ml/5ml/10ml", image: "/images/products/syringe.jpg" },
  { name: "IV sets", spec: "Gravit/luer Lock", image: "/images/products/iv-sets.jpg" },
  { name: "Masks", spec: "standard 100pk", image: "/images/products/masks.jpg" },
  { name: "Wall Sockets", spec: "Various Designs", image: "/images/products/wall-sockets.jpg" },
];

const VISIBLE_COUNT = 4;

export function ProductCategorySection(): React.JSX.Element {
  const [startIndex, setStartIndex] = useState(0);

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + VISIBLE_COUNT < PRODUCT_DATA.length;

  function handlePrev(): void {
    setStartIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext(): void {
    setStartIndex((prev) => Math.min(PRODUCT_DATA.length - VISIBLE_COUNT, prev + 1));
  }

  const visibleProducts = PRODUCT_DATA.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <section id="products" className="bg-cream py-16 px-8 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Product category</h2>
          <p className="text-light-black text-sm leading-relaxed max-w-xs">
            We specialize in high-turnover medical disposables where margins matter most. Factory direct batches only.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {visibleProducts.map((product) => (
              <div
                key={product.name}
                className="bg-light-blue-card rounded-2xl p-6 flex flex-col items-start min-w-0 flex-1"
              >
                <h4 className="font-bold text-base text-black mb-1">{product.name}</h4>
                <p className="text-light-black text-xs mb-4">{product.spec}</p>
                <div className="relative w-full aspect-square mt-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={!canGoBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 rounded-full bg-white shadow-md border-gray-200 size-10"
            aria-label="Previous products"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={!canGoForward}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 rounded-full bg-white shadow-md border-gray-200 size-10"
            aria-label="Next products"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
