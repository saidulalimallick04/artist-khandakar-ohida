
"use client";

import Image from "next/image";
import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Marquee } from "@/components/marquee";

const MarqueeItem = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 px-4">
    <span className="text-xl font-semibold">{title}</span>
    <span className="text-primary">•</span>
  </div>
);

export function StudioHero() {
  return (
    <section id="top" className="relative flex h-svh w-full flex-col justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src={studioData.hero.imageUrl}
          alt="Studio Background"
          fill
          data-ai-hint="artist studio dark"
          className="object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto max-w-5xl px-4 text-center text-white flex-grow flex flex-col justify-center">
        <ScrollAnimator>
          <h1 className="font-headline text-5xl md:text-7xl">
            {studioData.hero.title}
          </h1>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
            {studioData.hero.description1}
          </p>
        </ScrollAnimator>
      </div>
       <div className="py-8 bg-background/80 backdrop-blur-sm">
        <Marquee>
            {studioData.marqueeItems.map((item, index) => (
                <MarqueeItem key={index} title={item.title} />
            ))}
        </Marquee>
       </div>
    </section>
  );
}
