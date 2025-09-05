import Image from "next/image";
import { ScrollAnimator } from "./scroll-animator";
import { Socials } from "./socials";

export function Studio() {
  return (
    <section id="studio" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl">Khandakar Ohida Studio</h2>
          <p className="mt-4 text-muted-foreground">
            Welcome to my creative sanctuary. The Khandakar Ohida Studio is where concepts come to life, pixels find their purpose, and stories are woven into visual tapestries. It is a space for experimentation, collaboration, and the relentless pursuit of artistic expression.
          </p>
          <p className="mt-4 text-muted-foreground">
            From initial sketches to final renders, every project is nurtured with passion and precision. The studio is equipped for a range of digital and traditional mediums, allowing for a fluid workflow that bridges the physical and virtual worlds. This is where the magic happens.
          </p>
          <div className="mt-6 flex gap-2">
            <Socials />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <div className="relative aspect-video">
            <Image
              src="https://picsum.photos/800/450?random=13"
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
