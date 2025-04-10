import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface Cat {
  id: string;
  url: string | null;
}
interface CarouselProps {
  cats: Cat[]; 
}

export function Carousel({cats}: CarouselProps) {
  return (
    <ShadcnCarousel className="w-full max-w-xs">
      <CarouselContent>
        {cats.map((cat, index) => (
          <CarouselItem key={cat.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {cat.url ? (
                    <img
                      src={cat.url}
                      alt={`Gato ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <span>Imagem não disponível</span>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadcnCarousel>
);
}
