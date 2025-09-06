"use client";

import { useState } from "react";
import { pressData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Card, CardContent } from "@/components/ui/card";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Lightbox } from "@/components/lightbox";

export function Press() {
  const isMobile = useIsMobile();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const pressItems = pressData.items.map((item, index) => (
    <div key={index} className="w-full h-full md:w-auto flex-shrink-0">
      <ScrollAnimator delay={100 * index} className="h-full w-full">
        <Card className="group overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
            <div className="overflow-hidden cursor-pointer" onClick={() => setLightboxImage(item.imageUrl)}>
              <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  data-ai-hint="publication award"
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
              <h3 className="font-headline text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">
                  {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">{item.year}</Badge>
              </div>
            </CardContent>
        </Card>
      </ScrollAnimator>
    </div>
  ));

  return (
    <section id="press">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl text-center">{pressData.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            {pressData.subtitle}
          </p>
        </ScrollAnimator>
      </div>

      {isMobile ? (
         <HorizontalScroll className="mt-4" items={pressData.items}>
            {pressData.items.map((item, index) => (
              <div key={index} className="w-[80vw] sm:w-[45vw] flex-shrink-0">
                {pressItems[index]}
              </div>
            ))}
        </HorizontalScroll>
      ) : (
        <div className="container mx-auto max-w-5xl px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pressItems}
            </div>
        </div>
      )}

      {lightboxImage && (
        <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
