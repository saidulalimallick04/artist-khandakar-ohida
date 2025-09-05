import Image from "next/image";
import { ScrollAnimator } from "./scroll-animator";
import { Socials } from "./socials";
import { studioData } from "@/lib/data";

export function Studio() {
  return (
    <section id="studio" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl">{studioData.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {studioData.description1}
          </p>
          <p className="mt-4 text-muted-foreground">
            {studioData.description2}
          </p>
          <div className="mt-6 flex gap-2">
            <Socials />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <div className="relative aspect-video">
            <Image
              src={studioData.imageUrl}
              alt="Khandakar Ohida's Studio Space"
              fill
              data-ai-hint="artist studio"
              className="rounded-lg object-cover"
            />
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
