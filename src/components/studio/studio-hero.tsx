
"use client";

import Image from "next/image";
import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Marquee } from "@/components/marquee";
import { AnimatedText } from "../animated-text";

const MarqueeItem = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 px-4">
    <span className="text-xl font-semibold opacity-80">{title}</span>
    <span className="text-primary">•</span>
  </div>
);

export function StudioHero() {
  return (
    <section id="top" className="relative flex h-svh w-full flex-col justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-background brightness-95">
        <Image
          src={studioData.hero.imageUrl}
          alt="Studio Background"
          fill
          data-ai-hint="abstract watercolor paper"
          className="object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="container mx-auto max-w-5xl px-4 text-center text-foreground flex-grow flex flex-col justify-center">
        <AnimatedText
          text={studioData.hero.title}
          el="h1"
          className="font-headline text-5xl md:text-7xl"
        />
        <ScrollAnimator delay={500}>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
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
