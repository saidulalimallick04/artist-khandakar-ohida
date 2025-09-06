
'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Marquee } from '@/components/marquee';
import { studioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative flex h-svh w-full items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-black">
            <Image
              src={studioData.imageUrl}
              alt="Studio Background"
              fill
              data-ai-hint="artist studio dark"
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto max-w-5xl px-4 text-center text-white">
            <h1 className="font-headline text-5xl md:text-7xl">
              {studioData.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
              {studioData.description1}
            </p>
            <Button asChild variant="outline" className="mt-8 bg-transparent text-white hover:bg-white hover:text-black">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return Home
                </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
        </section>
        
        <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24 text-center">
            <h2 className="font-headline text-3xl md:text-4xl">The Creative Process</h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                {studioData.description2}
            </p>
        </section>


      </main>
      <Footer />
    </div>
  );
}
