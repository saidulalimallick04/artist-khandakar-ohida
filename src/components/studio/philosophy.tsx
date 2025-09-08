
"use client";

import Image from "next/image";
import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";

export function Philosophy() {
  return (
    <section id="philosophy" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative min-h-[350px] md:aspect-square rounded-lg overflow-hidden group">
            <Image
              src={studioData.creativeProcess.imageUrl}
              alt="Creative Process"
              fill
              data-ai-hint="art materials canvas"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl text-primary">{studioData.creativeProcess.title}</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {studioData.creativeProcess.description}
            </p>
          </div>
        </div>
      </ScrollAnimator>
    </section>
  );
}
