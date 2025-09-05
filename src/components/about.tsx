import Image from "next/image";
import { ScrollAnimator } from "./scroll-animator";

export function About() {
  return (
    <section id="about" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-3 md:gap-12">
        <ScrollAnimator className="md:col-span-1">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1752649935477-70bf4243ee23?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist Portrait"
              fill
              data-ai-hint="artist portrait"
              className="rounded-lg object-cover"
            />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200} className="md:col-span-2">
          <h2 className="font-headline text-3xl md:text-4xl">About Khandakar Ohida</h2>
          <p className="mt-4 text-muted-foreground">
            I am a multi-disciplinary artist. My art practice is centered on the exploration of futuristic and cross-cultural ideas. I fuse mysticism and storytelling to bridge the gap between my traditional training and the digital landscape. I live and work in New York City.
          </p>
          <p className="mt-4 text-muted-foreground">
            With a background in fine arts and over a decade of experience in the digital realm, I specialize in creating immersive experiences, compelling brand identities, and evocative digital paintings. I believe that art has the power to connect, inspire, and transform. This portfolio is a curated selection of my journey.
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}
