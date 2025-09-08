
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { studioData, workData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { StudioBottomNav } from '@/components/studio/studio-bottom-nav';
import { ScrollAnimator } from '@/components/scroll-animator';
import { ArrowRight, Palette, Film, PencilRuler } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StudioPage() {
  const featuredWork = workData.items.slice(0, 3);
  
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

        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-5xl px-4">
            <ScrollAnimator>
                <h2 className="font-headline text-3xl md:text-4xl text-center">What I Do</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                    I offer a range of creative services, blending artistic vision with technical skill.
                </p>
            </ScrollAnimator>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studioData.marqueeItems.slice(0, 6).map((item, index) => (
                    <ScrollAnimator key={index} delay={100 * (index + 1)}>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  {index % 3 === 0 ? <Palette className="h-6 w-6 text-primary" /> : index % 3 === 1 ? <Film className="h-6 w-6 text-primary" /> : <PencilRuler className="h-6 w-6 text-primary" />}
                                  {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    </ScrollAnimator>
                ))}
            </div>
          </div>
        </section>
        
        <section id="philosophy" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
          <ScrollAnimator>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative min-h-[300px] md:min-h-0 md:aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518826762588-4447304d4f6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

        <section id="featured-work" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto max-w-5xl px-4">
                <ScrollAnimator>
                    <h2 className="font-headline text-3xl md:text-4xl text-center">Featured Work</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                        A glimpse into some of my favorite projects.
                    </p>
                </ScrollAnimator>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredWork.map((item, index) => (
                        <ScrollAnimator key={item.id} delay={100 * (index + 1)}>
                            <Card className="group overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
                                <div className="overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    data-ai-hint={`${item.category} ${item.tags[0]}`}
                                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                </div>
                                <CardContent className="p-4 flex-grow flex flex-col">
                                  <h3 className="font-headline text-xl">{item.title}</h3>
                                  <p className="mt-2 text-sm text-muted-foreground flex-grow">
                                      {item.description}
                                  </p>
                                </CardContent>
                            </Card>
                        </ScrollAnimator>
                    ))}
                </div>
                 <ScrollAnimator delay={400} className="mt-12 text-center">
                    <Button asChild>
                        <Link href="/#work">
                            Explore All Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </ScrollAnimator>
            </div>
        </section>

        <div id="bottom" />
      </main>
      <StudioBottomNav />
      <Footer />
    </div>
  );
}
