import Image from "next/image";
import { ScrollAnimator } from "@/components/scroll-animator";
import { aboutData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-3 md:gap-12">
        <ScrollAnimator className="md:col-span-1">
          <div className="relative aspect-square">
            <Image
              src={aboutData.imageUrl}
              alt="Artist Portrait"
              fill
              data-ai-hint="artist portrait"
              className="rounded-lg object-cover"
            />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200} className="md:col-span-2">
          <h2 className="font-headline text-3xl md:text-4xl">{aboutData.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {aboutData.bio}
          </p>
          <p className="mt-4 text-muted-foreground">
            {aboutData.mission}
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}
