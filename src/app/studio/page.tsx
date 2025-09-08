
'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Marquee } from '@/components/marquee';
import { studioData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StudioBottomNav } from '@/components/studio/studio-bottom-nav';
import { ScrollAnimator } from '@/components/scroll-animator';

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="top" className="relative flex h-svh w-full items-center justify-center pt-16">
          <div className="absolute inset-0 -z-10 bg-black">
            <Image
              src={studioData.hero.imageUrl}
              alt="Studio Background"
              fill
              data-ai-hint="artist studio dark"
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto max-w-5xl px-4 text-center text-white">
            <ScrollAnimator>
              <h1 className="font-headline text-5xl md:text-7xl">
                {studioData.hero.title}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
                {studioData.hero.description1}
              </p>
            </ScrollAnimator>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <ScrollAnimator delay={200}>
            <Marquee>
              {studioData.marqueeItems.map((item, index) => (
                  <Card key={index} className="w-[300px] flex-shrink-0 bg-secondary">
                      <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                  </Card>
              ))}
            </Marquee>
          </ScrollAnimator>
        </section>
        
        <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24 text-center">
          <ScrollAnimator delay={200}>
            <h2 className="font-headline text-3xl md:text-4xl">{studioData.creativeProcess.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                {studioData.creativeProcess.description}
            </p>
          </ScrollAnimator>
        </section>

        <div id="bottom" />
      </main>
      <StudioBottomNav />
      <Footer />
    </div>
  );
}
