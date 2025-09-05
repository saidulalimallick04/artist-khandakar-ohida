import Image from "next/image";
import { ScrollAnimator } from "./scroll-animator";

export function About() {
  return (
    <section id="about" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-3 md:gap-12">
        <ScrollAnimator className="md:col-span-1">
          <div className="relative aspect-square">
            <Image
              src="https://picsum.photos/500/500?random=10"
              alt="Artist Portrait"
              fill
              data-ai-hint="artist portrait"
              className="rounded-lg object-cover"
            />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200} className="md:col-span-2">
          <h2 className="font-headline text-3xl md:text-4xl">About the Artist</h2>
          <p className="mt-4 text-muted-foreground">
            Welcome to my digital canvas. I am a multidisciplinary artist and designer with a passion for storytelling through visual media. My work bridges the gap between traditional art principles and modern technology, resulting in pieces that are both timeless and innovative.
          </p>
          <p className="mt-4 text-muted-foreground">
            With a background in fine arts and over a decade of experience in the digital realm, I specialize in creating immersive experiences, compelling brand identities, and evocative digital paintings. I believe that art has the power to connect, inspire, and transform. This portfolio is a curated selection of my journey.
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}
