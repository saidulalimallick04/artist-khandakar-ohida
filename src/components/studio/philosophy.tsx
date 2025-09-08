
"use client";

import Image from "next/image";
import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";

export function Philosophy() {
  return (
    <section id="philosophy" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative min-h-[300px] md:min-h-0 md:aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={studioData.creativeProcess.imageUrl}
              alt="Creative Process"
              fill
              data-ai-hint="art materials canvas"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl">{studioData.creativeProcess.title}</h2>
            <p className="mt-4 text-muted-foreground">
              {studioData.creativeProcess.description}
            </p>
          </div>
        </div>
      </ScrollAnimator>
    </section>
  );
}
